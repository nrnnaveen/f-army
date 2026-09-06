const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { requireAuth } = require('../_lib/auth');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/**
 * POST /api/assistant/ask
 * body: { message: string, history?: {role,text}[] }
 * Grounds the model in the live crop database (if connected) and the
 * farmer's own active crops so answers reference their real conditions.
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  const user = await requireAuth(req, res);
  if (!user) return;

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(503).json({ error: 'The AI assistant is not configured on this deployment yet (missing ANTHROPIC_API_KEY).' });
  }

  const { message, history = [] } = await readJsonBody(req);
  if (!message) return res.status(400).json({ error: 'message is required' });

  try {
    let cropSummary = '';
    let farmSummary = 'No crops added yet';

    if (isSupabaseConfigured()) {
      const db = supabaseAdmin();
      const { data: crops } = await db.from('crops').select('*, crop_requirements(*)');
      cropSummary = (crops || []).map((c) => {
        const r = c.crop_requirements || {};
        return `${c.name} (${c.category}): season ${c.seasons?.join('/')}, pH ${r.ph_min}-${r.ph_max}, temp ${r.temp_min}-${r.temp_max}C, water ${r.water_level}, duration ${c.duration_days}d, N-P-K ${r.n_per_acre}-${r.p_per_acre}-${r.k_per_acre}`;
      }).join('\n');

      const { data: farmCrops } = await db
        .from('farm_crops').select('area_acres, planted_date, crops(name), farms!inner(user_id)')
        .eq('farms.user_id', user.id).eq('status', 'active');
      if (farmCrops && farmCrops.length) {
        farmSummary = farmCrops.map((f) => `${f.crops.name}, ${f.area_acres} acre, planted ${f.planted_date}`).join('; ');
      }
    }

    const system = `You are Farmy Assistant, a friendly, practical smart-farming assistant helping a smallholder farmer in India. ${cropSummary ? 'Use the crop data below when relevant.' : ''} Keep answers short (3-6 sentences), practical, and easy to understand for a beginner farmer. Never give definitive pesticide brand advice without reminding the farmer to check local agricultural authority guidance and product labels. If asked something outside farming, gently redirect to farming topics.${cropSummary ? `\n\nCROP DATABASE:\n${cropSummary}` : ''}\n\nFARMER'S CURRENT CROPS: ${farmSummary}`;

    const messages = [
      ...history.slice(-8).map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.text })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        system,
        messages
      })
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new Error(`Anthropic API error (${response.status}): ${body.slice(0, 300)}`);
    }

    const data = await response.json();
    const text = (data.content || []).map((b) => b.text || '').join('\n').trim();
    res.json({ reply: text || "Sorry, I couldn't find an answer for that — try rephrasing your question." });
  } catch (err) {
    console.error('assistant error:', err.message);
    res.status(502).json({ error: "I'm having trouble connecting right now. Please try again in a moment." });
  }
});
