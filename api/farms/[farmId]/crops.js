const { withApi, methodNotAllowed } = require('../../_lib/http');
const { readJsonBody } = require('../../_lib/body');
const { requireAuth } = require('../../_lib/auth');
const { supabaseAdmin } = require('../../_lib/supabase');

/**
 * POST /api/farms/:farmId/crops — add a crop instance to a farm.
 * Computes the expected harvest date and auto-generates the first
 * round of farming tasks (watering, fertilizer-by-stage, pest
 * inspection, harvest) so "Smart Farming Reminders" has real rows
 * to notify on.
 *
 * GET /api/farms/:farmId/crops — dashboard: active crops + computed fields
 */
module.exports = withApi(async (req, res) => {
  const user = await requireAuth(req, res);
  if (!user) return;

  const db = supabaseAdmin();
  const farmId = req.query.farmId;

  if (req.method === 'POST') {
    const { cropId, areaAcres, plantedDate } = await readJsonBody(req);

    const { data: crop, error: cropErr } = await db
      .from('crops').select('*, crop_growth_stages(*)').eq('id', cropId).single();
    if (cropErr || !crop) return res.status(404).json({ error: 'Crop not found' });

    const planted = new Date(plantedDate);
    const harvestDate = new Date(planted.getTime() + crop.duration_days * 86400000);

    const { data: farmCrop, error } = await db.from('farm_crops').insert({
      farm_id: farmId, crop_id: cropId, area_acres: areaAcres,
      planted_date: plantedDate, expected_harvest_date: harvestDate.toISOString().slice(0, 10),
      current_stage: crop.crop_growth_stages?.[0]?.stage_name || 'Germination'
    }).select().single();
    if (error) return res.status(500).json({ error: error.message });

    // Generate tasks: one per growth-stage transition (fertilizer/care checkpoint),
    // a recurring watering reminder for the first 2 weeks, and the harvest task.
    const tasks = [];
    for (const stage of crop.crop_growth_stages || []) {
      const startDay = parseInt(String(stage.day_range).split(/[–-]/)[0]) || 0;
      const dueDate = new Date(planted.getTime() + startDay * 86400000);
      tasks.push({
        farm_crop_id: farmCrop.id, user_id: user.id, task_type: 'growth_stage',
        title: `${crop.name} entering ${stage.stage_name} stage — ${stage.care_note}`,
        due_date: dueDate.toISOString().slice(0, 10)
      });
    }
    for (let w = 1; w <= 2; w++) {
      tasks.push({
        farm_crop_id: farmCrop.id, user_id: user.id, task_type: 'watering',
        title: `Check soil moisture / water ${crop.name}`,
        due_date: new Date(planted.getTime() + w * 7 * 86400000).toISOString().slice(0, 10)
      });
    }
    tasks.push({
      farm_crop_id: farmCrop.id, user_id: user.id, task_type: 'pest_inspection',
      title: `Inspect ${crop.name} for pests and disease`,
      due_date: new Date(planted.getTime() + 21 * 86400000).toISOString().slice(0, 10)
    });
    tasks.push({
      farm_crop_id: farmCrop.id, user_id: user.id, task_type: 'harvest',
      title: `${crop.name} expected ready for harvest`,
      due_date: harvestDate.toISOString().slice(0, 10)
    });

    if (tasks.length) {
      const { error: taskErr } = await db.from('farming_tasks').insert(tasks);
      if (taskErr) console.error('task generation error:', taskErr.message);
    }

    return res.json(farmCrop);
  }

  if (req.method === 'GET') {
    const { data, error } = await db
      .from('farm_crops')
      .select('*, crops(name, emoji, duration_days)')
      .eq('farm_id', farmId)
      .eq('status', 'active');
    if (error) return res.status(500).json({ error: error.message });

    const today = Date.now();
    const enriched = data.map((fc) => ({
      ...fc,
      days_since_planting: Math.floor((today - new Date(fc.planted_date).getTime()) / 86400000)
    }));
    return res.json(enriched);
  }

  return methodNotAllowed(res, ['GET', 'POST']);
});
