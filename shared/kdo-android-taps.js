/** Android WebView: belge kaydırma + native/JS tap → element.click() */
(function () {
  'use strict';

  var MOVE_PX = 32;
  var boundDoc = false;
  var sx = 0;
  var sy = 0;
  var lastKey = '';
  var lastAt = 0;
  var STYLE_ID = 'kdo-android-tap-css';

  function isAndroid() {
    return /Android/i.test(navigator.userAgent || '') ||
      document.documentElement.classList.contains('kdo-android-wv');
  }

  function markAndroid() {
    if (/Android/i.test(navigator.userAgent || '')) {
      document.documentElement.classList.add('kdo-android-wv');
    }
  }

  function once(key, fn) {
    var now = Date.now();
    if (key === lastKey && now - lastAt < 400) return false;
    lastKey = key;
    lastAt = now;
    try { fn(); } catch (err) { console.warn('KDO tap', key, err); }
    return true;
  }

  /**
   * İç içe overflow Android WebView'da hit-test'i öldürür.
   * Belge kaydırsın; main/nav scrollport olmasın.
   */
  function fixViewportLayout() {
    try {
      if (!isAndroid()) return;
      document.documentElement.classList.add('kdo-android-wv');
      if (document.getElementById(STYLE_ID)) return;
      var st = document.createElement('style');
      st.id = STYLE_ID;
      st.textContent = [
        'html.kdo-android-wv,html.kdo-android-wv body{',
        'height:auto!important;max-height:none!important;min-height:100%!important;',
        'overflow-x:hidden!important;overflow-y:auto!important;',
        'display:block!important;position:static!important;',
        '}',
        'html.kdo-android-wv header,html.kdo-android-wv nav{',
        'position:relative!important;overflow:visible!important;',
        'max-height:none!important;flex:none!important;',
        'pointer-events:auto!important;z-index:60!important;',
        '}',
        'html.kdo-android-wv nav{',
        'display:flex!important;flex-wrap:wrap!important;',
        'flex-direction:row!important;touch-action:manipulation!important;',
        '}',
        'html.kdo-android-wv main{',
        'overflow:visible!important;height:auto!important;max-height:none!important;',
        'min-height:0!important;flex:none!important;',
        'position:relative!important;pointer-events:auto!important;',
        'touch-action:manipulation!important;',
        '}',
        'html.kdo-android-wv .lesson-card,html.kdo-android-wv .nbtn,',
        'html.kdo-android-wv .ltab,html.kdo-android-wv .hbtn,',
        'html.kdo-android-wv .lesson-back-btn,html.kdo-android-wv .filter-btn{',
        'pointer-events:auto!important;touch-action:manipulation!important;',
        '}',
        'html.kdo-android-wv .ltabs{overflow:visible!important;flex-wrap:wrap!important;}',
        'html.kdo-android-wv .overlay:not(.open),html.kdo-android-wv #changelog-overlay:not(.open),',
        'html.kdo-android-wv #exercise-overlay:not(.open),html.kdo-android-wv .gram-modal-overlay:not(.open),',
        'html.kdo-android-wv #lstar-overlay:not(.open){',
        'display:none!important;visibility:hidden!important;pointer-events:none!important;',
        'width:0!important;height:0!important;inset:auto!important;left:-100vw!important;top:-100vh!important;',
        'background:transparent!important;z-index:-1!important;}',
        'html.kdo-android-wv .overlay.open,html.kdo-android-wv #changelog-overlay.open,',
        'html.kdo-android-wv #exercise-overlay.open,html.kdo-android-wv .gram-modal-overlay.open,',
        'html.kdo-android-wv #lstar-overlay.open{',
        'display:flex!important;visibility:visible!important;pointer-events:auto!important;inset:0!important;}'
      ].join('');
      (document.head || document.documentElement).appendChild(st);
    } catch (_) {}
  }

  function clickableFrom(el) {
    if (!el || !el.closest) return null;
    return el.closest(
      'button, a[href], [onclick], [role="button"],' +
      '.lesson-card[data-num], .nbtn, .ltab, .hbtn, .bonus-header,' +
      '.filter-btn, .setting-btn, .lang-btn, .target-btn, .ver-btn,' +
      '.lesson-back-btn, .modal-close, .lang-hub-close, .ex-check-btn'
    );
  }

  function activateEl(el) {
    var clickable = clickableFrom(el);
    if (!clickable) return false;
    if (clickable.classList && clickable.classList.contains('empty')) return false;
    var key = (clickable.id || clickable.className || clickable.tagName || 'el').toString().slice(0, 48);
    return once(key, function () { clickable.click(); });
  }

  function isClosedOverlay(el) {
    if (!el || !el.closest) return false;
    var ov = el.closest('.overlay, #changelog-overlay, #exercise-overlay, #lstar-overlay, .gram-modal-overlay');
    if (!ov) return false;
    return !ov.classList.contains('open');
  }

  function handleTapAt(x, y) {
    fixViewportLayout();
    var stack = (document.elementsFromPoint && document.elementsFromPoint(x, y)) || [];
    if (!stack.length) {
      var one = document.elementFromPoint(x, y);
      if (one) stack = [one];
    }
    for (var i = 0; i < stack.length; i++) {
      var el = stack[i];
      if (!el || el === document.documentElement || el === document.body) continue;
      if (isClosedOverlay(el)) continue;
      if (activateEl(el)) return true;
    }
    return false;
  }

  function onTouchStart(e) {
    if (!e.touches || !e.touches.length) return;
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
  }

  function onTouchEnd(e) {
    if (!e.changedTouches || !e.changedTouches.length) return;
    var t = e.changedTouches[0];
    if (Math.abs(t.clientX - sx) > MOVE_PX || Math.abs(t.clientY - sy) > MOVE_PX) return;
    handleTapAt(t.clientX, t.clientY);
  }

  function bindDoc() {
    markAndroid();
    fixViewportLayout();
    if (boundDoc) return;
    boundDoc = true;
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });
  }

  window.KDO_bindAndroidTaps = bindDoc;
  window.KDO_bindLessonCards = bindDoc;
  window.KDO_fixViewportLayout = fixViewportLayout;
  window.KDO_handleTapAt = handleTapAt;

  function boot() {
    bindDoc();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  window.addEventListener('load', boot);
})();
