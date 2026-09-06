const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { supabasePublic, isSupabaseAuthConfigured } = require('../_lib/supabase');

function normalizePhone(input) {
  const digits = String(input).replace(/[^\d+]/g, '');
  if (digits.startsWith('+')) return digits;
  // Defaults to India country code — adjust for your primary market,
  // or better: have the app send the country code explicitly.
  return `+91${digits}`;
}

/**
 * POST /api/auth/send-otp
 * body: { contact: string, method: 'phone' | 'email' }
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  if (!isSupabaseAuthConfigured()) {
    return res.status(503).json({ error: 'OTP login is not configured yet on this deployment. Try Demo Mode, or see README to connect Supabase.' });
  }

  const { contact, method } = await readJsonBody(req);
  if (!contact || !['phone', 'email'].includes(method)) {
    return res.status(400).json({ error: 'contact and method (phone|email) are required' });
  }

  try {
    if (method === 'phone') {
      const phone = normalizePhone(contact);
      const { error } = await supabasePublic().auth.signInWithOtp({ phone });
      if (error) throw error;
    } else {
      const { error } = await supabasePublic().auth.signInWithOtp({
        email: contact,
        options: { shouldCreateUser: true }
      });
      if (error) throw error;
    }
    res.json({ ok: true, message: `OTP sent via ${method}` });
  } catch (err) {
    console.error('send-otp error:', err.message);
    res.status(500).json({ error: 'Could not send OTP. Please try again shortly.' });
  }
});
