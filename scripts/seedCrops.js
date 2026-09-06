/**
 * FARMY — Database seeder
 * Populates crops, crop_requirements, planting_schedules,
 * crop_growth_stages, pest_diseases, and crop_pest_diseases
 * from /seed/crops.json and /seed/pests.json.
 *
 * Usage:
 *   1. Copy .env.example to .env and fill in SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
 *   2. npm install
 *   3. node scripts/seedCrops.js
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  console.error('   Copy .env.example to .env and fill these in first (see README.md).');
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // service role — bypasses RLS, seed script only, never ship this key client-side
);

const crops = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed/crops.json'), 'utf8'));
const pests = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed/pests.json'), 'utf8'));

async function seedPests() {
  const rows = Object.entries(pests).map(([id, p]) => ({
    id,
    name: p.name,
    type: p.type,
    symptom_tags: p.tags,
    cause: p.cause,
    prevention: p.prevention,
    organic_control: p.organic,
    mechanical_control: p.mechanical,
    chemical_active_ingredient: p.chemical.active,
    chemical_warning: p.chemical.warning,
    chemical_ppe: p.chemical.ppe,
    chemical_phi: p.chemical.phi
  }));
  const { error } = await supabase.from('pest_diseases').upsert(rows);
  if (error) throw error;
  console.log(`✅ Seeded ${rows.length} pests/diseases`);
}

async function seedCrops() {
  for (const c of crops) {
    // 1. crops
    let { error: e1 } = await supabase.from('crops').upsert({
      id: c.id, name: c.name, scientific_name: c.sci, category: c.category,
      emoji: c.emoji, duration_days: c.duration, seasons: c.seasons, planting_months: c.months
    });
    if (e1) throw e1;

    // 2. crop_requirements
    let { error: e2 } = await supabase.from('crop_requirements').upsert({
      crop_id: c.id, temp_min: c.temp[0], temp_max: c.temp[1],
      ph_min: c.ph[0], ph_max: c.ph[1], soil_types: c.soils,
      humidity_min: c.humidity[0], humidity_max: c.humidity[1],
      rainfall_note: c.rainfall, sunlight_note: c.sunlight,
      water_level: c.water, irrigation_note: c.irrigation, water_critical_note: c.waterCritical,
      n_per_acre: c.npk.n, p_per_acre: c.npk.p, k_per_acre: c.npk.k, fertilizer_note: c.fertNote,
      yield_low: c.yieldPerAcre[0], yield_high: c.yieldPerAcre[1],
      cost_per_acre: c.costPerAcre, price_estimate: c.priceEstimate
    });
    if (e2) throw e2;

    // 3. planting_schedules (delete+reinsert to keep step_order clean on re-seed)
    await supabase.from('planting_schedules').delete().eq('crop_id', c.id);
    const stepRows = c.planting.map((instruction, i) => ({ crop_id: c.id, step_order: i + 1, instruction }));
    const { error: e3 } = await supabase.from('planting_schedules').insert(stepRows);
    if (e3) throw e3;

    // 4. crop_growth_stages
    await supabase.from('crop_growth_stages').delete().eq('crop_id', c.id);
    const stageRows = c.stages.map((s, i) => ({
      crop_id: c.id, stage_order: i + 1, stage_name: s.name, day_range: s.days,
      care_note: s.care, water_note: s.water, fertilizer_note: s.fert, warning_note: s.warn
    }));
    const { error: e4 } = await supabase.from('crop_growth_stages').insert(stageRows);
    if (e4) throw e4;

    // 5. crop_pest_diseases (link table)
    await supabase.from('crop_pest_diseases').delete().eq('crop_id', c.id);
    const linkRows = c.pests.map(pestId => ({ crop_id: c.id, pest_disease_id: pestId }));
    if (linkRows.length) {
      const { error: e5 } = await supabase.from('crop_pest_diseases').insert(linkRows);
      if (e5) throw e5;
    }

    console.log(`✅ Seeded ${c.name}`);
  }
}

(async () => {
  try {
    await seedPests();
    await seedCrops();
    console.log('🌾 Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
})();
