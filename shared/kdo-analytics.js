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

  function detectDevice() {
    const ua = navigator.userAgent;
    let os = 'unknown', osVer = '', browser = 'unknown', browserVer = '', deviceType = 'desktop';
    if (/iPad/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) deviceType = 'tablet';
    else if (/Mobi|Android|iPhone|iPod/i.test(ua)) deviceType = 'mobile';
    if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
      os = 'iOS';
      const m = ua.match(/OS (\d+[_\d]*)/); if (m) osVer = m[1].replace(/_/g, '.');
    } else if (/Android/i.test(ua)) {
      os = 'Android';
      const m = ua.match(/Android (\d+[.\d]*)/); if (m) osVer = m[1];
    } else if (/Windows/i.test(ua)) {
      os = 'Windows';
      const m = ua.match(/Windows NT (\d+\.\d+)/);
      if (m) osVer = {'10.0':'10/11','6.3':'8.1','6.2':'8','6.1':'7'}[m[1]] || m[1];
    } else if (/Mac OS X/i.test(ua)) {
      os = 'macOS';
      const m = ua.match(/Mac OS X (\d+[_\d]*)/); if (m) osVer = m[1].replace(/_/g, '.');
    } else if (/Linux/i.test(ua)) { os = 'Linux'; }
    if (/SamsungBrowser/i.test(ua)) {
      browser = 'Samsung'; const m = ua.match(/SamsungBrowser\/([\d.]+)/); if (m) browserVer = m[1];
    } else if (/OPR|Opera/i.test(ua)) {
      browser = 'Opera'; const m = ua.match(/(?:OPR|Opera)\/([\d.]+)/); if (m) browserVer = m[1];
    } else if (/Edg/i.test(ua)) {
      browser = 'Edge'; const m = ua.match(/Edg\/([\d.]+)/); if (m) browserVer = m[1];
    } else if (/Chrome/i.test(ua)) {
      browser = 'Chrome'; const m = ua.match(/Chrome\/([\d.]+)/); if (m) browserVer = m[1];
    } else if (/Firefox/i.test(ua)) {
      browser = 'Firefox'; const m = ua.match(/Firefox\/([\d.]+)/); if (m) browserVer = m[1];
    } else if (/Safari/i.test(ua)) {
      browser = 'Safari'; const m = ua.match(/Version\/([\d.]+)/); if (m) browserVer = m[1];
    }
    return { deviceType, os, osVer, browser, browserVer };
  }

  const _device = detectDevice();

  (function(){
    var nt = new URLSearchParams(location.search).get('notrack');
    if (nt === '1') { localStorage.setItem('kdo:no-track', '1'); showTrackToast('🚫 Test modu açık — analytics devre dışı'); }
    if (nt === '0') { localStorage.removeItem('kdo:no-track'); }
  })();

  function showTrackToast(msg) {
    var d = document.createElement('div');
    d.textContent = msg;
    d.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1e293b;color:#e2e8f0;padding:12px 20px;border-radius:12px;font-size:14px;font-weight:600;z-index:99999;box-shadow:0 4px 20px rgba(0,0,0,.4);white-space:nowrap;';
    document.body.appendChild(d);
    setTimeout(function(){ d.style.transition='opacity .5s'; d.style.opacity='0'; setTimeout(function(){ d.remove(); }, 500); }, 3000);
  }

  if (localStorage.getItem('kdo:no-track') === '1') {
    document.addEventListener('DOMContentLoaded', function() {
      var b = document.createElement('div');
      b.id = 'kdo-test-badge';
      b.textContent = '🚫 TEST';
      b.style.cssText = 'position:fixed;top:8px;right:8px;background:#dc2626;color:#fff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:8px;z-index:99999;letter-spacing:.05em;pointer-events:none;box-shadow:0 2px 8px rgba(220,38,38,.5);';
      document.body.appendChild(b);
    });
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
      deviceType: _device.deviceType,
      os: _device.os,
      osVer: _device.osVer,
      browser: _device.browser,
      browserVer: _device.browserVer,
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
