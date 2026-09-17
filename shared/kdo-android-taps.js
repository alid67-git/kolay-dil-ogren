/** Android WebView: tüm menü / ders / sekme dokunmaları */
(function () {
  'use strict';

  var MOVE_PX = 28;
  var boundDoc = false;
  var sx = 0;
  var sy = 0;
  var startEl = null;
  var lastKey = '';
  var lastAt = 0;

  var NAV_MAP = {
    nav_lessons: 'lessons',
    nav_test: 'test',
    nav_translate: 'translate',
    nav_list: 'list',
    nav_review: 'review',
    nav_add: 'add',
    nav_settings: null
  };

  function markAndroid() {
    if (/Android/i.test(navigator.userAgent || '')) {
      document.documentElement.classList.add('kdo-android-wv');
    }
  }

  function fixViewportLayout() {
    try {
      var html = document.documentElement;
      var body = document.body;
      if (!html || !body) return;
      html.style.setProperty('height', '100%', 'important');
      body.style.setProperty('height', '100%', 'important');
      body.style.setProperty('min-height', '0', 'important');
      // NOT: overflow:hidden body/html üzerinde bazı Android WebView sürümlerinde
      // touch eventlarını keserek tıklamayı engeller — kullanılmıyor.
      // Landscape grid'i bozma — sadece portrait flex
      var landscape = window.matchMedia && window.matchMedia('(orientation:landscape)').matches;
      if (!landscape) {
        body.style.setProperty('display', 'flex', 'important');
        body.style.setProperty('flex-direction', 'column', 'important');
      }
      var header = document.querySelector('header');
      var nav = document.querySelector('nav');
      var main = document.querySelector('main');
      if (header) {
        header.style.setProperty('position', 'relative', 'important');
        header.style.setProperty('z-index', '60', 'important');
        header.style.setProperty('flex-shrink', '0', 'important');
        header.style.setProperty('pointer-events', 'auto', 'important');
      }
      if (nav) {
        nav.style.setProperty('position', 'relative', 'important');
        nav.style.setProperty('z-index', '55', 'important');
        nav.style.setProperty('flex-shrink', '0', 'important');
        nav.style.setProperty('pointer-events', 'auto', 'important');
        nav.style.setProperty('touch-action', 'pan-x', 'important');
      }
      if (main) {
        main.style.setProperty('flex', '1 1 auto', 'important');
        main.style.setProperty('min-height', '0', 'important');
        main.style.setProperty('overflow-y', 'auto', 'important');
        main.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
        main.style.setProperty('position', 'relative', 'important');
        main.style.setProperty('z-index', '1', 'important');
        main.style.setProperty('touch-action', 'pan-y', 'important');
        main.style.setProperty('pointer-events', 'auto', 'important');
      }
    } catch (_) {}
  }

  function once(key, fn) {
    var now = Date.now();
    if (key === lastKey && now - lastAt < 450) return false;
    lastKey = key;
    lastAt = now;
    try { fn(); } catch (err) { console.warn('KDO tap', key, err); }
    return true;
  }

  function getFn(name, fallback) {
    if (typeof window[name] === 'function') return window[name];
    if (typeof fallback === 'function') return fallback;
    return null;
  }

  function activateNav(btn) {
    var switcher = getFn('switchView', typeof switchView === 'function' ? switchView : null);
    var lk = btn.getAttribute('data-lk') || '';
    var view = NAV_MAP[lk];
    if (lk === 'nav_settings' || (btn.getAttribute('onclick') || '').indexOf('settings') >= 0) {
      var openM = getFn('openModal', typeof openModal === 'function' ? openModal : null);
      if (openM) return once('nav-settings', function () { openM('settings-overlay'); });
      return once('nav-settings-click', function () { btn.click(); });
    }
    if (view && switcher) {
      return once('nav-' + view, function () { switcher(view, btn); });
    }
    return once('nav-click-' + lk, function () { btn.click(); });
  }

  function activateFromEl(el) {
    if (!el || !el.closest) return false;

    // Açık overlay üstünde sadece overlay içi
    var openOv = document.querySelector('.overlay.open, .gram-modal-overlay.open, #exercise-overlay.open, #changelog-overlay.open, #lstar-overlay[style*="flex"]');
    if (openOv && !openOv.contains(el)) {
      // Dışarı tık: kapatmayı dene
      var closer = openOv.id && getFn('closeModal');
      if (closer && openOv.classList.contains('overlay')) {
        return once('close-' + openOv.id, function () { closer(openOv.id); });
      }
      return false;
    }

    var card = el.closest('.lesson-card[data-num]');
    if (card && !card.classList.contains('empty')) {
      var num = parseInt(card.getAttribute('data-num'), 10);
      var opener = getFn('openLesson', typeof openLesson === 'function' ? openLesson : null);
      if (num && opener) return once('lesson-' + num, function () { opener(num); });
    }

    var ltab = el.closest('.ltab[data-tab]');
    if (ltab) {
      var tab = ltab.getAttribute('data-tab');
      var tabSwitch = getFn('switchLessonTab', typeof switchLessonTab === 'function' ? switchLessonTab : null);
      if (tab && tabSwitch) return once('ltab-' + tab, function () { tabSwitch(tab, ltab); });
    }

    var nbtn = el.closest('button.nbtn, .nbtn');
    if (nbtn) return activateNav(nbtn);

    var hbtn = el.closest('button.hbtn, .hbtn');
    if (hbtn) {
      var oc = hbtn.getAttribute('onclick') || '';
      if (oc.indexOf('help') >= 0) {
        var oh = getFn('openModal');
        if (oh) return once('help', function () { oh('help-overlay'); });
      }
      if (oc.indexOf('settings') >= 0) {
        var os = getFn('openModal');
        if (os) return once('settings', function () { os('settings-overlay'); });
      }
      return once('hbtn', function () { hbtn.click(); });
    }

    var back = el.closest('.lesson-back-btn, [onclick*="closeLessonDetail"]');
    if (back) {
      var closerL = getFn('closeLessonDetail', typeof closeLessonDetail === 'function' ? closeLessonDetail : null);
      if (closerL) return once('lesson-back', function () { closerL(); });
      return once('lesson-back-click', function () { back.click(); });
    }

    var bonus = el.closest('.bonus-header');
    if (bonus) {
      var tb = getFn('toggleBonus', typeof toggleBonus === 'function' ? toggleBonus : null);
      if (tb) return once('bonus', function () { tb(); });
      return once('bonus-click', function () { bonus.click(); });
    }

    var filter = el.closest('.filter-btn, .setting-btn, .lang-btn, .target-btn, .ex-check-btn, .ex-finish-btn, .lang-hub-apply, .lang-hub-cancel, .lang-hub-close, .modal-close, #update-btn, #update-dismiss, .ver-btn');
    if (filter) {
      return once('btn-' + (filter.id || filter.className).toString().slice(0, 40), function () {
        filter.click();
      });
    }

    var clickable = el.closest('button, [role="button"], a[href]');
    if (clickable && clickable.tagName === 'BUTTON') {
      return once('anybtn-' + (clickable.id || clickable.textContent || '').toString().slice(0, 24), function () {
        clickable.click();
      });
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
    if (!e.changedTouches || !e.changedTouches.length) {
      startEl = null;
      return;
    }
    var t = e.changedTouches[0];
    var moved = Math.abs(t.clientX - sx) > MOVE_PX || Math.abs(t.clientY - sy) > MOVE_PX;
    var el = startEl;
    startEl = null;
    if (moved) return;

    // elementFromPoint: overflow-x scroll (nav/ltabs) içinde daha güvenilir
    var top = document.elementFromPoint(t.clientX, t.clientY);
    if (top) el = top;

    if (activateFromEl(el)) {
      // Native click sentezi güvenilmez; biz hallettik — çift tetiklemeyi kes
      try { e.preventDefault(); } catch (_) {}
    }
  }

  function bindInteractive() {
    var sels = [
      '.lesson-card[data-num]:not(.empty)',
      'button.nbtn', 'button.hbtn', 'button.ltab',
      '.lesson-back-btn', '.bonus-header', '.filter-btn',
      '.setting-btn', '.lang-btn', '.ver-btn'
    ];
    for (var s = 0; s < sels.length; s++) {
      var nodes = document.querySelectorAll(sels[s]);
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.getAttribute('data-kdo-bound') === '1') continue;
        node.setAttribute('data-kdo-bound', '1');
        node.style.touchAction = 'manipulation';
        node.style.cursor = 'pointer';
        node.style.pointerEvents = 'auto';
      }
    }
  }

  function bindDoc() {
    markAndroid();
    fixViewportLayout();
    if (!boundDoc) {
      boundDoc = true;
      document.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
      document.addEventListener('touchend', onTouchEnd, { passive: false, capture: true });
    }
    bindInteractive();
  }

  window.KDO_bindAndroidTaps = bindDoc;
  window.KDO_bindLessonCards = bindInteractive;
  window.KDO_fixViewportLayout = fixViewportLayout;

  function hookRender() {
    if (typeof window.renderLessonList !== 'function') return;
    if (window.renderLessonList._kdoHooked) return;
    var orig = window.renderLessonList;
    window.renderLessonList = function () {
      var r = orig.apply(this, arguments);
      try { bindInteractive(); } catch (_) {}
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
    setTimeout(boot, 200);
    setTimeout(boot, 800);
  });
})();
