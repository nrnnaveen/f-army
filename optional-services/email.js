/**
 * OPTIONAL — not wired into the app by default.
 * See sms.js in this folder for context on when you'd use this.
 *
 * Requires: npm install resend
 */
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmailOtp(email, code) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM || 'FARMY <login@yourdomain.com>',
    to: email,
    subject: 'Your FARMY login code',
    html: `<p>Your FARMY login code is <b>${code}</b>. It expires in 5 minutes.</p>
           <p>If you didn't request this, you can safely ignore this email.</p>`
  });
}

module.exports = { sendEmailOtp };
