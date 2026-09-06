// Pure scoring functions shared by /api/recommend and /api/soil.
// Mirrors the client-side fallback logic in public/index.html so results
// stay consistent whether or not the live backend is reachable.

const WATER_ORDER = { Low: 0, Medium: 1, High: 2 };

/** Score a single crop (as stored in crops+crop_requirements) against conditions. */
function scoreCrop(c, cond) {
  const r = c.crop_requirements || {};
  let score = 0;
  const reasons = [];

  if (cond.ph != null && r.ph_min != null) {
    if (cond.ph >= r.ph_min && cond.ph <= r.ph_max) {
      score += 25;
      reasons.push({ ok: true, text: `Soil pH ${cond.ph} is within the ideal ${r.ph_min}–${r.ph_max} range` });
    } else {
      const dist = Math.min(Math.abs(cond.ph - r.ph_min), Math.abs(cond.ph - r.ph_max));
      score += Math.max(0, 25 - dist * 20);
      reasons.push({ ok: false, text: `Soil pH ${cond.ph} is outside the ideal ${r.ph_min}–${r.ph_max} range` });
    }
  }
  if (cond.temp != null && r.temp_min != null) {
    if (cond.temp >= r.temp_min && cond.temp <= r.temp_max) {
      score += 25;
      reasons.push({ ok: true, text: `Temperature ${cond.temp}°C fits the ideal ${r.temp_min}–${r.temp_max}°C range` });
    } else {
      const dist = Math.min(Math.abs(cond.temp - r.temp_min), Math.abs(cond.temp - r.temp_max));
      score += Math.max(0, 25 - dist * 2.5);
      reasons.push({ ok: false, text: `Temperature ${cond.temp}°C is outside the ideal ${r.temp_min}–${r.temp_max}°C range` });
    }
  }
  if (cond.soil && r.soil_types) {
    if (r.soil_types.includes(cond.soil)) {
      score += 20;
      reasons.push({ ok: true, text: `${cond.soil} soil suits this crop` });
    } else {
      score += 5;
      reasons.push({ ok: false, text: `${cond.soil} soil isn't ideal — best suited to ${r.soil_types.join(' or ')}` });
    }
  }
  if (cond.waterAvail && r.water_level) {
    const need = WATER_ORDER[String(r.water_level).split('-')[0]] ?? 1;
    const have = WATER_ORDER[cond.waterAvail];
    if (have >= need) {
      score += 15;
      reasons.push({ ok: true, text: `Your water availability (${cond.waterAvail}) meets this crop's ${r.water_level} requirement` });
    } else {
      score += Math.max(0, 15 - (need - have) * 8);
      reasons.push({ ok: false, text: `Your water availability (${cond.waterAvail}) is below this crop's ${r.water_level} requirement` });
    }
  }
  if (cond.season && c.seasons) {
    const match = c.seasons.some((s) => String(s).toLowerCase().includes(String(cond.season).toLowerCase()));
    if (match) {
      score += 15;
      reasons.push({ ok: true, text: `${cond.season} matches this crop's growing season` });
    } else {
      reasons.push({ ok: false, text: `${cond.season} is not this crop's typical season (best: ${c.seasons.join(', ')})` });
    }
  }

  score = Math.round(Math.max(0, Math.min(100, score)));
  const label = score >= 80 ? 'Highly Suitable' : score >= 60 ? 'Suitable' : score >= 40 ? 'Moderately Suitable' : 'Not Recommended';
  return {
    crop: { id: c.id, name: c.name, sci: c.scientific_name, emoji: c.emoji, category: c.category },
    score,
    label,
    reasons
  };
}

function soilHealthScore(s) {
  let score = 0;
  const notes = [];
  const npkScore = (v) => (v === 'Medium' ? 10 : v === 'High' ? 8 : 4);
  score += npkScore(s.nitrogen_level) + npkScore(s.phosphorus_level) + npkScore(s.potassium_level);
  if (s.nitrogen_level === 'Low') notes.push('Nitrogen is low — consider adding compost, FYM, or a nitrogen-rich fertilizer.');
  if (s.phosphorus_level === 'Low') notes.push('Phosphorus is low — consider rock phosphate or DAP application.');
  if (s.potassium_level === 'Low') notes.push('Potassium is low — consider potash (MOP) application.');
  const phDist = Math.abs(s.ph - 6.5);
  score += Math.max(0, 10 - phDist * 6);
  if (s.ph < 6.0) notes.push('Soil is acidic — agricultural lime can help raise pH gradually.');
  if (s.ph > 7.5) notes.push('Soil is alkaline — organic matter and gypsum can help over time.');
  const moistScore = s.moisture_level === 'Medium' ? 10 : s.moisture_level === 'High' ? 7 : 5;
  score += moistScore;
  if (s.moisture_level === 'Low') notes.push('Soil moisture is low — increase irrigation frequency or add mulch.');
  if (s.moisture_level === 'High') notes.push('Soil moisture is high — check drainage to avoid root rot.');
  score = Math.round(Math.min(100, (score / 50) * 100));
  const label = score >= 75 ? 'Good' : score >= 50 ? 'Fair' : 'Needs Improvement';
  return { score, label, notes };
}

module.exports = { scoreCrop, soilHealthScore };
