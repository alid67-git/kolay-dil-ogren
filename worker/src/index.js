/**
 * Kolay Dil Ogren — ücretsiz analytics worker (Cloudflare D1).
 * Deploy: cd worker && npx wrangler d1 create kdo-analytics
 *          (database_id'yi wrangler.toml'a yapıştır)
 *          npx wrangler d1 execute kdo-analytics --file=schema.sql
 *          npx wrangler secret put ADMIN_PASSWORD
 *          npx wrangler deploy
 */

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
}

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extra }
  });
}

function normalizeCreatedMs(ts) {
  let n = Number(ts);
  if (!Number.isFinite(n) || n <= 0) n = Date.now();
  // Unix saniye (1e9–1e12) → milisaniye
  if (n >= 1e9 && n < 1e12) n *= 1000;
  // Bozuk / epoch yakını değerler → şimdi
  if (n < 1e11) n = Date.now();
  return Math.floor(n);
}

function formatCreatedAt(ms) {
  let n = Number(ms);
  if (!Number.isFinite(n) || n <= 0) return '—';
  if (n >= 1e9 && n < 1e12) n *= 1000;
  if (n < 1e11) return '—';
  try {
    return new Date(n).toLocaleString('tr-TR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
  } catch {
    return new Date(n).toISOString().slice(0, 19).replace('T', ' ');
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request.headers.get('Origin'));

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
    const country = request.headers.get('CF-IPCountry') || '??';
    const ipHash = await sha256(ip + (env.IP_SALT || 'kdo'));

    if (url.pathname === '/track' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'bad json' }, 400, cors);
      }

      const {
        visitorId = '',
        sessionId = '',
        lang = '',
        uiLang = '',
        page = '',
        durationSec = 0,
        event = 'heartbeat',
        ts = Date.now()
      } = body;

      if (!visitorId) return json({ error: 'visitorId required' }, 400, cors);

      const createdMs = normalizeCreatedMs(ts);

      await env.DB.prepare(
        `INSERT INTO sessions (visitor_id, session_id, lang, ui_lang, country, ip_hash, page, duration_sec, event, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(visitorId, sessionId, lang, uiLang, country, ipHash, page, durationSec | 0, event, createdMs).run();

      return json({ ok: true }, 200, cors);
    }

    if (url.pathname === '/stats' && request.method === 'GET') {
      const pw = url.searchParams.get('pw') || '';
      if (!env.ADMIN_PASSWORD || pw !== env.ADMIN_PASSWORD) {
        return json({ error: 'unauthorized' }, 401, cors);
      }

      const since = Date.now() - 90 * 86400000;

      const [uniqueIps, uniqueVisitors, totalSessions, byCountry, byLang, recent] = await Promise.all([
        env.DB.prepare(`SELECT COUNT(DISTINCT ip_hash) AS n FROM sessions WHERE created_at > ?`).bind(since).first(),
        env.DB.prepare(`SELECT COUNT(DISTINCT visitor_id) AS n FROM sessions WHERE created_at > ?`).bind(since).first(),
        env.DB.prepare(`SELECT COUNT(DISTINCT session_id) AS n FROM sessions WHERE created_at > ?`).bind(since).first(),
        env.DB.prepare(
          `SELECT country, COUNT(DISTINCT ip_hash) AS ips, COUNT(DISTINCT visitor_id) AS visitors
           FROM sessions WHERE created_at > ? GROUP BY country ORDER BY visitors DESC LIMIT 30`
        ).bind(since).all(),
        env.DB.prepare(
          `SELECT lang, COUNT(DISTINCT visitor_id) AS visitors,
                  COALESCE(SUM(CASE WHEN event='session_end' THEN duration_sec ELSE 0 END), 0) AS total_sec
           FROM sessions WHERE created_at > ? AND lang != '' AND lang IS NOT NULL
           GROUP BY lang ORDER BY visitors DESC`
        ).bind(since).all(),
        env.DB.prepare(
          `SELECT created_at, country, lang, ui_lang, page, duration_sec, event
           FROM sessions ORDER BY created_at DESC LIMIT 50`
        ).all()
      ]);

      const langs = (byLang.results || []).map(r => ({
        lang: r.lang,
        visitors: r.visitors,
        totalSec: r.total_sec || 0
      }));

      const totalStudy = langs.reduce((a, r) => a + (r.totalSec || 0), 0);

      const recentRows = (recent.results || []).map(r => ({
        at: formatCreatedAt(r.created_at),
        country: r.country,
        lang: r.lang,
        ui_lang: r.ui_lang,
        page: r.page,
        duration_sec: r.duration_sec,
        event: r.event
      }));

      return json({
        uniqueIps: uniqueIps?.n || 0,
        uniqueVisitors: uniqueVisitors?.n || 0,
        totalSessions: totalSessions?.n || 0,
        totalStudySec: totalStudy,
        byCountry: byCountry.results || [],
        byLang: langs,
        recent: recentRows,
        sinceDays: 90
      }, 200, cors);
    }

    return json({ error: 'not found' }, 404, cors);
  }
};
