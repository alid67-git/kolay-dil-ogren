/**
 * Kolay Dil Ogren — istemci tarafı kullanım takibi.
 * Veriler Cloudflare Worker'a gider (IP ülke bilgisi sunucuda eklenir).
 */
(function () {
  const CFG = window.KDO_ANALYTICS || { endpoint: '', enabled: true, pingSec: 60 };
  const VID_KEY = 'kdo:visitor_id';
  const SESS_KEY = 'kdo:session_id';

  function uid() {
    return 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  function getVisitorId() {
    let id = localStorage.getItem(VID_KEY);
    if (!id) {
      id = uid();
      localStorage.setItem(VID_KEY, id);
    }
    return id;
  }

  function getSessionId() {
    let id = sessionStorage.getItem(SESS_KEY);
    if (!id) {
      id = uid();
      sessionStorage.setItem(SESS_KEY, id);
    }
    return id;
  }

  function detectLang() {
    const p = location.pathname.toLowerCase();
    if (p.includes('tayca')) return 'th';
    if (p.includes('english')) return 'en';
    if (p.includes('german')) return 'de';
    if (p.includes('italian')) return 'it';
    if (p.includes('spanish')) return 'es';
    if (p.includes('french')) return 'fr';
    if (p.includes('russian')) return 'ru';
    if (p.includes('arabic')) return 'ar';
    if (p.includes('chinese')) return 'zh';
    if (p.includes('turkish')) return 'tk';
    return localStorage.getItem('kdo:target') || 'unknown';
  }

  function detectUiLang() {
    return localStorage.getItem('kdo:locale') || localStorage.getItem('kdo:ui') || 'tr';
  }

  const started = Date.now();
  let lastPing = started;
  let totalSec = 0;
  let ended = false;

  function endpoint() {
    const custom = localStorage.getItem('kdo:analytics_endpoint');
    return (custom || CFG.endpoint || '').replace(/\/$/, '');
  }

  async function send(event, extra) {
    const url = endpoint();
    if (!CFG.enabled || !url) return;
    if (localStorage.getItem('kdo:no-track') === '1') return;
    const payload = {
      event,
      visitorId: getVisitorId(),
      sessionId: getSessionId(),
      lang: detectLang(),
      uiLang: detectUiLang(),
      page: location.pathname.split('/').pop() || 'index.html',
      durationSec: totalSec,
      ts: Date.now(),
      appVersion: window.KDO_PLATFORM_VERSION || localStorage.getItem('app_version') || '',
      ...extra
    };
    try {
      await fetch(url + '/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      });
    } catch (_) { /* sessiz */ }
  }

  function tick() {
    const now = Date.now();
    totalSec += Math.round((now - lastPing) / 1000);
    lastPing = now;
    send('heartbeat');
  }

  function onHide() {
    if (ended) return;
    ended = true;
    tick();
    send('session_end');
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') onHide();
    else lastPing = Date.now();
  });
  window.addEventListener('pagehide', onHide);

  send('session_start');
  setInterval(tick, (CFG.pingSec || 60) * 1000);

  window.KDOAnalytics = {
    endpoint,
    setEndpoint(u) {
      localStorage.setItem('kdo:analytics_endpoint', u);
    },
    getStatsUrl(pw) {
      const base = endpoint();
      return base ? base + '/stats?pw=' + encodeURIComponent(pw) : '';
    }
  };
})();
