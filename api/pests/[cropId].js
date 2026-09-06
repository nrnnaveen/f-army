const { withApi, methodNotAllowed } = require('../_lib/http');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/** GET /api/pests/:cropId — pests commonly affecting a specific crop */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);

  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: 'Live pest database is not connected yet on this deployment.' });
  }

  const { data, error } = await supabaseAdmin()
    .from('crop_pest_diseases')
    .select('pest_diseases(*)')
    .eq('crop_id', req.query.cropId);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data.map((d) => d.pest_diseases));
});
