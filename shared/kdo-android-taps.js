/** Android WebView: ders kartı / sekme dokunma — layout + doğrudan bağlama */
(function () {
  'use strict';

  var MOVE_PX = 36;
  var boundDoc = false;
  var boundCards = false;
  var sx = 0;
  var sy = 0;
  var startEl = null;
  var lastKey = '';
  var lastAt = 0;

  function markAndroid() {
    if (/Android/i.test(navigator.userAgent || '')) {
      document.documentElement.classList.add('kdo-android-wv');
    }
  }

  /** Eski önbellekli HTML'de bile viewport'u sabitle — WebView hit-test için kritik */
  function fixViewportLayout() {
    try {
      var html = document.documentElement;
      var body = document.body;
      if (!html || !body) return;
      html.style.setProperty('height', '100%', 'important');
      html.style.setProperty('height', '100vh', 'important');
      html.style.setProperty('max-height', '100vh', 'important');
      html.style.setProperty('overflow', 'hidden', 'important');
      body.style.setProperty('height', '100%', 'important');
      body.style.setProperty('height', '100vh', 'important');
      body.style.setProperty('max-height', '100vh', 'important');
      body.style.setProperty('min-height', '0', 'important');
      body.style.setProperty('overflow', 'hidden', 'important');
      body.style.setProperty('display', 'flex', 'important');
      body.style.setProperty('flex-direction', 'column', 'important');
      var main = document.querySelector('main');
      if (main) {
        main.style.setProperty('flex', '1 1 auto', 'important');
        main.style.setProperty('min-height', '0', 'important');
        main.style.setProperty('overflow-y', 'auto', 'important');
        main.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
        main.style.setProperty('position', 'relative', 'important');
        main.style.setProperty('z-index', '1', 'important');
        main.style.setProperty('touch-action', 'manipulation', 'important');
      }
    } catch (_) {}
  }

  function once(key, fn) {
    var now = Date.now();
    if (key === lastKey && now - lastAt < 500) return false;
    lastKey = key;
    lastAt = now;
    try { fn(); } catch (err) { console.warn('KDO tap', key, err); }
    return true;
  }

  function getOpener() {
    return window.openLesson || (typeof openLesson === 'function' ? openLesson : null);
  }

  function getSwitcher() {
    return window.switchLessonTab || (typeof switchLessonTab === 'function' ? switchLessonTab : null);
  }

  function openFromEl(el) {
    if (!el || !el.closest) return false;
    var card = el.closest('.lesson-card[data-num]');
    if (card && !card.classList.contains('empty')) {
      var num = parseInt(card.getAttribute('data-num'), 10);
      var opener = getOpener();
      if (num && opener) {
        return once('lesson-' + num, function () { opener(num); });
      }
    }
    var ltab = el.closest('.ltab[data-tab]');
    if (ltab) {
      var tab = ltab.getAttribute('data-tab');
      var switcher = getSwitcher();
      if (tab && switcher) {
        return once('ltab-' + tab, function () { switcher(tab, ltab); });
      }
    }
    return false;
  }

  function onTouchStart(e) {
    if (!e.touches || !e.touches.length) return;
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
    startEl = e.target;
  }

  function onTouchEnd(e) {
    if (!startEl || !e.changedTouches || !e.changedTouches.length) {
      startEl = null;
      return;
    }
    var t = e.changedTouches[0];
    var el = startEl;
    startEl = null;
    if (Math.abs(t.clientX - sx) > MOVE_PX || Math.abs(t.clientY - sy) > MOVE_PX) return;
    // preventDefault YOK — bazı WebView'lerde click'i öldürüp ders açmayı bozuyordu.
    // once() çift açılışı engeller.
    openFromEl(el);
  }

  function onClick(e) {
    openFromEl(e.target);
  }

  function onCardActivate(e) {
    var card = e.currentTarget;
    if (!card || card.classList.contains('empty')) return;
    var num = parseInt(card.getAttribute('data-num'), 10);
    var opener = getOpener();
    if (num && opener) {
      e.preventDefault();
      once('lesson-' + num, function () { opener(num); });
    }
  }

  /** Her render sonrası kartlara doğrudan listener — inline onclick'e yedek */
  function bindLessonCards() {
    var cards = document.querySelectorAll('.lesson-card[data-num]:not(.empty)');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (card.getAttribute('data-kdo-bound') === '1') continue;
      card.setAttribute('data-kdo-bound', '1');
      card.style.cursor = 'pointer';
      card.style.touchAction = 'manipulation';
      card.addEventListener('click', onCardActivate, false);
      card.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          onCardActivate(ev);
        }
      });
    }
    boundCards = true;
  }

  function bindDoc() {
    markAndroid();
    fixViewportLayout();
    if (!boundDoc) {
      boundDoc = true;
      document.addEventListener('touchstart', onTouchStart, { passive: true });
      document.addEventListener('touchend', onTouchEnd, { passive: true });
      document.addEventListener('click', onClick, false);
    }
    bindLessonCards();
  }

  window.KDO_bindAndroidTaps = bindDoc;
  window.KDO_bindLessonCards = bindLessonCards;
  window.KDO_fixViewportLayout = fixViewportLayout;

  // renderLessonList sonrası otomatik bağla
  var _origRender = null;
  function hookRender() {
    if (typeof window.renderLessonList !== 'function') return;
    if (window.renderLessonList._kdoHooked) return;
    _origRender = window.renderLessonList;
    window.renderLessonList = function () {
      var r = _origRender.apply(this, arguments);
      try { bindLessonCards(); } catch (_) {}
      return r;
    };
    window.renderLessonList._kdoHooked = true;
  }

  function boot() {
    bindDoc();
    hookRender();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  window.addEventListener('load', function () {
    boot();
    setTimeout(boot, 300);
    setTimeout(boot, 1200);
  });
})();
