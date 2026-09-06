const { withApi, methodNotAllowed } = require('../_lib/http');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/** GET /api/crops/:id — full crop profile (requirements + planting + stages + pests) */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);

  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: 'Crop database is not connected yet on this deployment. The app will use its built-in crop data instead.' });
  }

  const id = req.query.id;
  const db = supabaseAdmin();
  const [{ data: crop, error: e1 }, { data: reqs, error: e2 }, { data: planting, error: e3 },
    { data: stages, error: e4 }, { data: pestLinks, error: e5 }] = await Promise.all([
    db.from('crops').select('*').eq('id', id).single(),
    db.from('crop_requirements').select('*').eq('crop_id', id).single(),
    db.from('planting_schedules').select('*').eq('crop_id', id).order('step_order'),
    db.from('crop_growth_stages').select('*').eq('crop_id', id).order('stage_order'),
    db.from('crop_pest_diseases').select('pest_disease_id, pest_diseases(*)').eq('crop_id', id)
  ]);
  if (e1 || !crop) return res.status(404).json({ error: 'Crop not found' });
  if (e2 || e3 || e4 || e5) return res.status(500).json({ error: 'Could not load full crop profile' });

  res.json({
    ...crop,
    requirements: reqs,
    planting: (planting || []).map((p) => p.instruction),
    stages,
    pests: (pestLinks || []).map((l) => l.pest_diseases)
  });
});
