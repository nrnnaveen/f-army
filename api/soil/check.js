const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { requireAuth } = require('../_lib/auth');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');
const { soilHealthScore } = require('../_lib/scoring');

/**
 * POST /api/soil/check
 * body: { farmId?, soilType, ph, nitrogenLevel, phosphorusLevel, potassiumLevel, moistureLevel }
 * Scores soil health and stores the report against the farmer's account.
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  const user = await requireAuth(req, res);
  if (!user) return;

  const b = await readJsonBody(req);
  const input = {
    soil_type: b.soilType, ph: b.ph, nitrogen_level: b.nitrogenLevel,
    phosphorus_level: b.phosphorusLevel, potassium_level: b.potassiumLevel, moisture_level: b.moistureLevel
  };
  const result = soilHealthScore(input);

  if (!isSupabaseConfigured()) {
    // Still return the computed score even if we can't persist a report.
    return res.json({ report: null, ...result });
  }

  const { data, error } = await supabaseAdmin().from('soil_reports').insert({
    user_id: user.id, farm_id: b.farmId || null, ...input,
    health_score: result.score, health_label: result.label, notes: result.notes
  }).select().single();
  if (error) return res.status(500).json({ error: error.message });

  res.json({ report: data, ...result });
});
