const { withApi, methodNotAllowed } = require('./_lib/http');
const { requireAuth } = require('./_lib/auth');
const { supabaseAdmin, isSupabaseConfigured } = require('./_lib/supabase');

const BASE = 'https://api.openweathermap.org/data/2.5';

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`OpenWeatherMap request failed (${res.status}): ${body.slice(0, 200)}`);
  }
  return res.json();
}

/**
 * Fetches current weather + 5-day forecast from OpenWeatherMap for a
 * given lat/lng, caches the result in weather_data if Supabase is
 * configured, and returns a shape that matches what the FARMY frontend
 * expects.
 */
async function getWeather(userId, lat, lng) {
  const key = process.env.OPENWEATHER_API_KEY;
  const qs = (extra) => `${new URLSearchParams({ lat, lon: lng, units: 'metric', appid: key, ...extra })}`;

  const [current, forecast] = await Promise.all([
    fetchJson(`${BASE}/weather?${qs()}`),
    fetchJson(`${BASE}/forecast?${qs()}`)
  ]);

  // OpenWeatherMap's free "forecast" endpoint returns 3-hourly steps for 5 days —
  // collapse to one representative entry per day (the reading closest to midday).
  const byDay = {};
  for (const entry of forecast.list || []) {
    const day = entry.dt_txt.slice(0, 10);
    const hour = entry.dt_txt.slice(11, 13);
    if (!byDay[day] || Math.abs(Number(hour) - 12) < Math.abs(Number(byDay[day].hour) - 12)) {
      byDay[day] = { hour, temp: entry.main.temp, rain: Math.round((entry.pop || 0) * 100) };
    }
  }
  const forecastDays = Object.entries(byDay).slice(0, 5).map(([day, v], i) => ({
    d: i === 0 ? 'Today' : new Date(day).toLocaleDateString('en-US', { weekday: 'short' }),
    t: Math.round(v.temp),
    r: v.rain
  }));

  const result = {
    temp: Math.round(current.main.temp),
    humidity: current.main.humidity,
    condition: current.weather?.[0]?.description || '—',
    rainChance: forecastDays[0]?.r ?? 0,
    forecast: forecastDays
  };

  if (userId && isSupabaseConfigured()) {
    try {
      await supabaseAdmin().from('weather_data').insert({
        user_id: userId, lat, lng,
        temperature: result.temp, humidity: result.humidity,
        condition: result.condition, rain_chance: result.rainChance,
        forecast: result.forecast, source: 'openweathermap'
      });
    } catch (e) {
      console.error('weather cache insert warning:', e.message);
    }
  }

  return result;
}

/** GET /api/weather?lat=..&lng=.. — live current + 5-day forecast */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);

  const user = await requireAuth(req, res);
  if (!user) return;

  if (!process.env.OPENWEATHER_API_KEY) {
    return res.status(503).json({ error: 'Live weather is not configured on this deployment yet (missing OPENWEATHER_API_KEY).' });
  }

  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.lng);
  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    return res.status(400).json({ error: 'lat and lng query params are required' });
  }

  try {
    const weather = await getWeather(user.id, lat, lng);
    res.json(weather);
  } catch (err) {
    console.error('weather error:', err.message);
    res.status(502).json({ error: 'Could not fetch live weather right now.' });
  }
});
