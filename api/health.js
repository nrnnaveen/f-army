const { withApi } = require('./_lib/http');
const { isSupabaseConfigured } = require('./_lib/supabase');

module.exports = withApi(async (req, res) => {
  res.status(200).json({
    ok: true,
    service: 'farmy-backend',
    supabaseConfigured: isSupabaseConfigured(),
    weatherConfigured: Boolean(process.env.OPENWEATHER_API_KEY),
    assistantConfigured: Boolean(process.env.ANTHROPIC_API_KEY)
  });
});
