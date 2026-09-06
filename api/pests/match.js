const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/**
 * POST /api/pests/match
 * body: { symptoms: string[] }  e.g. ["Yellow leaves","Insects visible"]
 * Returns pests/diseases ranked by how many selected symptoms they match.
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: 'Live pest database is not connected yet on this deployment. The app will use its built-in pest data instead.' });
  }

  const { symptoms = [] } = await readJsonBody(req);
  if (!symptoms.length) return res.status(400).json({ error: 'symptoms array is required' });

  const { data, error } = await supabaseAdmin().from('pest_diseases').select('*');
  if (error) return res.status(500).json({ error: error.message });

  const lowerSymptoms = symptoms.map((s) => String(s).toLowerCase().trim());
  const matches = data
    .map((p) => {
      const tags = (p.symptom_tags || []).map((t) => String(t).toLowerCase().trim());
      const matchCount = lowerSymptoms.filter((s) => tags.includes(s)).length;
      return { ...p, matchCount };
    })
    .filter((p) => p.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

  res.json(matches);
});
