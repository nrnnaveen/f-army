const { withApi, methodNotAllowed } = require('../../../_lib/http');
const { requireAuth } = require('../../../_lib/auth');
const { supabaseAdmin } = require('../../../_lib/supabase');

/** PATCH /api/farms/tasks/:id/done */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'PATCH') return methodNotAllowed(res, ['PATCH']);

  const user = await requireAuth(req, res);
  if (!user) return;

  const { error } = await supabaseAdmin().from('farming_tasks')
    .update({ is_done: true }).eq('id', req.query.id).eq('user_id', user.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ ok: true });
});
