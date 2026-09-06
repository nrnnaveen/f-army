const { withApi, methodNotAllowed } = require('../_lib/http');
const { readJsonBody } = require('../_lib/body');
const { requireAuth } = require('../_lib/auth');
const { supabaseAdmin, isSupabaseConfigured } = require('../_lib/supabase');

/**
 * POST /api/profit/calculate
 * body: { farmCropId?, areaAcres, seedCost, fertilizerCost, labourCost,
 *         irrigationCost, otherCost, expectedYield, sellingPrice }
 */
module.exports = withApi(async (req, res) => {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  const user = await requireAuth(req, res);
  if (!user) return;

  const b = await readJsonBody(req);
  const totalCost = (b.seedCost || 0) + (b.fertilizerCost || 0) + (b.labourCost || 0) + (b.irrigationCost || 0) + (b.otherCost || 0);
  const expectedRevenue = (b.expectedYield || 0) * (b.sellingPrice || 0);
  const profit = expectedRevenue - totalCost;

  let record = null;
  if (isSupabaseConfigured()) {
    const { data, error } = await supabaseAdmin().from('profit_calculations').insert({
      farm_crop_id: b.farmCropId || null, user_id: user.id, area_acres: b.areaAcres,
      seed_cost: b.seedCost, fertilizer_cost: b.fertilizerCost, labour_cost: b.labourCost,
      irrigation_cost: b.irrigationCost, other_cost: b.otherCost,
      expected_yield: b.expectedYield, selling_price: b.sellingPrice
    }).select().single();
    if (error) console.error('profit save warning:', error.message);
    else record = data;
  }

  res.json({
    totalCost: record ? record.total_cost : totalCost,
    expectedRevenue: record ? record.expected_revenue : expectedRevenue,
    estimatedProfit: record ? record.expected_revenue - record.total_cost : profit,
    profitPerAcre: b.areaAcres ? Math.round(profit / b.areaAcres) : null,
    warning: 'Market prices change often — treat the selling price as an estimate and check local mandi/market rates before selling.',
    record
  });
});
