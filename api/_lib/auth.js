const { supabaseAdmin, isSupabaseConfigured } = require('./supabase');

/**
 * Verifies the Supabase-issued access token in the Authorization header
 * (Authorization: Bearer <token>) and returns the user, or null + writes
 * an error response. Use as: const user = await requireAuth(req, res); if (!user) return;
 */
async function requireAuth(req, res) {
  if (!isSupabaseConfigured()) {
    res.status(503).json({ error: 'Backend is not fully configured yet (Supabase env vars missing). This feature needs a live backend — see README.' });
    return null;
  }

  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) {
    res.status(401).json({ error: 'Missing Authorization header' });
    return null;
  }

  const { data, error } = await supabaseAdmin().auth.getUser(token);
  if (error || !data || !data.user) {
    res.status(401).json({ error: 'Invalid or expired session' });
    return null;
  }
  return data.user;
}

module.exports = { requireAuth };
