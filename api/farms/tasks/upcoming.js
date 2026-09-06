const { withApi, methodNotAllowed } = require('../../_lib/http');
const { requireAuth } = require('../../_lib/auth');
const { supabaseAdmin } = require('../../_lib/supabase');

/** GET /api/farms/tasks/upcoming?upcoming=7 — upcoming farming reminders for the logged-in farmer */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);

  const user = await requireAuth(req, res);
  if (!user) return;

  const days = parseInt(req.query.upcoming) || 14;
  const until = new Date(Date.now() + days * 86400000).toISOString().slice(0, 10);
  const { data, error } = await supabaseAdmin()
    .from('farming_tasks')
    .select('*, farm_crops(crop_id, crops(name, emoji))')
    .eq('user_id', user.id).eq('is_done', false)
    .lte('due_date', until).order('due_date');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
