/**
 * OPTIONAL — not wired into the app by default.
 *
 * FARMY uses Supabase Auth's built-in OTP delivery (see api/auth/*.js),
 * which sends the SMS/email for you once you connect a provider in the
 * Supabase Dashboard → Authentication → Providers. Most people never need
 * this file.
 *
 * Use this only if you want to manage OTP delivery yourself with a custom
 * gateway (e.g. MSG91/Kaleyra for India DLT compliance) instead of going
 * through Supabase. You'd hash+store the code yourself in the `otp_codes`
 * table (see supabase/schema.sql), verify it in your own endpoint, then
 * use supabase.auth.admin to create/sign in the user.
 *
 * Requires: npm install twilio
 */
const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendSmsOtp(phoneE164, code) {
  return client.messages.create({
    to: phoneE164,
    from: process.env.TWILIO_FROM_NUMBER,
    body: `Your FARMY login code is ${code}. It expires in 5 minutes. Do not share this code with anyone.`
  });
}

module.exports = { sendSmsOtp };
