let createClient = null;
try {
  createClient = require('@supabase/supabase-js').createClient;
} catch (e) {
  // @supabase/supabase-js optional/uninstalled in demo mode
}

// Service-role client: used ONLY on the backend (never exposed to the app).
// Bypasses Row Level Security, so every query here must manually filter by user_id.
// Built lazily + defensively so a missing/blank env var never crashes a
// serverless function at import time — routes check isSupabaseConfigured()
// and return a clean 503 instead.

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

function isSupabaseConfigured() {
  return Boolean(createClient && SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

function isSupabaseAuthConfigured() {
  return Boolean(createClient && SUPABASE_URL && SUPABASE_ANON_KEY);
}

let _admin = null;
function supabaseAdmin() {
  if (!isSupabaseConfigured()) return null;
  if (!_admin) {
    _admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false }
    });
  }
  return _admin;
}

let _public = null;
function supabasePublic() {
  if (!isSupabaseAuthConfigured()) return null;
  if (!_public) {
    _public = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _public;
}

module.exports = { supabaseAdmin, supabasePublic, isSupabaseConfigured, isSupabaseAuthConfigured };
