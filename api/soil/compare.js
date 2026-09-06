const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { requireAuth } = require('../_lib/auth');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/** POST /api/soil/compare — compare a soil report against a specific crop's requirements */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  const user = await requireAuth(req, res);
  if (!user) return;

  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: 'Live crop database is not connected yet on this deployment. The app will use its built-in comparison instead.' });
  }

  const { ph, soilType, cropId } = await readJsonBody(req);
  const { data: r, error } = await supabaseAdmin().from('crop_requirements').select('*, crops(name)').eq('crop_id', cropId).single();
  if (error || !r) return res.status(404).json({ error: 'Crop not found' });

  const msgs = [];
  if (ph < r.ph_min) msgs.push({ icon: '⚠️', text: `Your soil pH (${ph}) is lower than the ideal range for ${r.crops.name} (${r.ph_min}–${r.ph_max}).` });
  else if (ph > r.ph_max) msgs.push({ icon: '⚠️', text: `Your soil pH (${ph}) is higher than the ideal range for ${r.crops.name} (${r.ph_min}–${r.ph_max}).` });
  else msgs.push({ icon: '✅', text: `Your soil pH (${ph}) fits ${r.crops.name}'s ideal range (${r.ph_min}–${r.ph_max}).` });

  if (!r.soil_types.includes(soilType)) msgs.push({ icon: '⚠️', text: `${r.crops.name} grows best in ${r.soil_types.join(' or ')} — your soil is ${soilType}.` });
  else msgs.push({ icon: '✅', text: `${soilType} soil is well suited to ${r.crops.name}.` });

  res.json(msgs);
});
