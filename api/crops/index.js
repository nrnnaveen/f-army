const { withApi, methodNotAllowed } = require('../_lib/http');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/** GET /api/crops?search=tom — list/search crops (public, no auth needed) */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);

  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: 'Crop database is not connected yet on this deployment. The app will use its built-in crop data instead.' });
  }

  let query = supabaseAdmin().from('crops').select('*').order('name');
  if (req.query.search) query = query.ilike('name', `%${req.query.search}%`);
  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
