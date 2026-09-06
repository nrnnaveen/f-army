const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { supabasePublic, supabaseAdmin, isSupabaseAuthConfigured, isSupabaseConfigured } = require('../_lib/supabase');

function normalizePhone(input) {
  const digits = String(input).replace(/[^\d+]/g, '');
  if (digits.startsWith('+')) return digits;
  return `+91${digits}`;
}

/**
 * POST /api/auth/verify-otp
 * body: { contact: string, method: 'phone'|'email', code: string, fullName?: string }
 * On success, returns a Supabase session (access_token/refresh_token) the
 * app stores and sends as `Authorization: Bearer <access_token>` on every
 * subsequent request.
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  if (!isSupabaseAuthConfigured()) {
    return res.status(503).json({ error: 'OTP login is not configured yet on this deployment. Try Demo Mode, or see README to connect Supabase.' });
  }

  const { contact, method, code, fullName } = await readJsonBody(req);
  if (!contact || !method || !code) {
    return res.status(400).json({ error: 'contact, method, and code are required' });
  }

  try {
    const verifyPayload = method === 'phone'
      ? { phone: normalizePhone(contact), token: code, type: 'sms' }
      : { email: contact, token: code, type: 'email' };

    const { data, error } = await supabasePublic().auth.verifyOtp(verifyPayload);
    if (error) throw error;

    const authUser = data.user;
    const session = data.session;

    if (isSupabaseConfigured()) {
      // Upsert the app-specific profile row (idempotent — safe on repeat logins).
      // Non-fatal if it fails; the session is still valid.
      try {
        await supabaseAdmin().from('users').upsert({
          id: authUser.id,
          full_name: fullName || null,
          phone: method === 'phone' ? normalizePhone(contact) : null,
          email: method === 'email' ? contact : null,
          login_method: method,
          updated_at: new Date().toISOString()
        }, { onConflict: 'id' });
      } catch (profileErr) {
        console.error('profile upsert warning:', profileErr.message);
      }
    }

    res.json({
      ok: true,
      user: { id: authUser.id, contact, method },
      session: { access_token: session.access_token, refresh_token: session.refresh_token, expires_at: session.expires_at }
    });
  } catch (err) {
    console.error('verify-otp error:', err.message);
    res.status(401).json({ error: 'Incorrect or expired code. Please try again.' });
  }
});
