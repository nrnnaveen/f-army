const { withApi, methodNotAllowed } = require('./_lib/http');
const { readJsonBody } = require('./_lib/body');
const { supabaseAdmin, isSupabaseConfigured } = require('./_lib/supabase');
const { scoreCrop } = require('./_lib/scoring');

/**
 * POST /api/recommend
 * body: { soil: string, ph: number, temp: number, waterAvail: 'Low'|'Medium'|'High', season: string }
 * Mirrors the client-side scoring logic in the frontend, but runs
 * server-side against the live crops+requirements tables so the engine
 * updates automatically as the crop database grows.
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: 'Live recommendation engine is not connected yet on this deployment. The app will use its built-in engine instead.' });
  }

  const cond = await readJsonBody(req);
  const { data: crops, error } = await supabaseAdmin()
    .from('crops')
    .select('*, crop_requirements(*)');
  if (error) return res.status(500).json({ error: error.message });

  const results = crops.map((c) => scoreCrop(c, cond)).sort((a, b) => b.score - a.score);
  res.json(results);
});
