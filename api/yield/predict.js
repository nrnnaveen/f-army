const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { requireAuth } = require('../_lib/auth');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/**
 * POST /api/yield/predict
 * body: { farmCropId?, cropId, areaAcres, soilHealthScore, farmingMethod }
 * Clearly returns a RANGE, never a single confident number — actual yield
 * depends on weather, pests, and management, as called out in the response.
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  const user = await requireAuth(req, res);
  if (!user) return;

  const { farmCropId, cropId, areaAcres, soilHealthScore = 70, farmingMethod = 'conventional' } = await readJsonBody(req);

  const db = supabaseAdmin();
  const { data: r, error } = await db.from('crop_requirements').select('*').eq('crop_id', cropId).single();
  if (error || !r) return res.status(404).json({ error: 'Crop not found' });

  let mult = 0.75 + (soilHealthScore / 100) * 0.4;
  if (farmingMethod === 'organic') mult *= 0.92;
  const low = Math.round(r.yield_low * areaAcres * mult * 0.9);
  const high = Math.round(r.yield_high * areaAcres * mult * 1.05);

  let saved = null;
  if (isSupabaseConfigured()) {
    const { data, error: saveErr } = await db.from('yield_predictions').insert({
      farm_crop_id: farmCropId || null, user_id: user.id, soil_health_score: soilHealthScore,
      farming_method: farmingMethod, predicted_low: low, predicted_high: high, unit: r.yield_unit || 'kg'
    }).select().single();
    if (saveErr) console.error('yield save warning:', saveErr.message);
    else saved = data;
  }

  res.json({
    low, high, unit: r.yield_unit || 'kg',
    disclaimer: 'This is an estimate only. Actual yield depends on weather, soil, pests, and day-to-day management.',
    record: saved
  });
});
