const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { requireAuth } = require('../_lib/auth');
const { supabaseAdmin } = require('../_lib/supabase');

module.exports = withApi(async (req, res) => {
  const user = await requireAuth(req, res);
  if (!user) return;

  if (req.method === 'POST') {
    const { name, areaAcres, lat, lng, locationLabel } = await readJsonBody(req);
    const { data, error } = await supabaseAdmin().from('farms').insert({
      user_id: user.id, name: name || 'My Farm', area_acres: areaAcres,
      location_lat: lat, location_lng: lng, location_label: locationLabel
    }).select().single();
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin().from('farms').select('*').eq('user_id', user.id);
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  return methodNotAllowed(res, ['GET', 'POST']);
});
