/**
 * Vercel's Node.js runtime auto-parses JSON bodies into req.body for
 * standard content types, but we defend against edge cases (empty body,
 * already-parsed body, string body) so routes never crash on bad input.
 */
async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return req.body ? JSON.parse(req.body) : {}; } catch { return {}; }
  }
  // Fallback: manually collect the stream (rare, but keeps this bulletproof).
  return await new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); } catch { resolve({}); }
    });
    req.on('error', () => resolve({}));
  });
}

module.exports = { readJsonBody };
