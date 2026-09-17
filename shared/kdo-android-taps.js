/** Android WebView: ders kartı / sekme dokunma yedekleri (layout düzgünken hafif) */
(function () {
  'use strict';

  var MOVE_PX = 18;
  var bound = false;
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

  function once(key, fn) {
    var now = Date.now();
    if (key === lastKey && now - lastAt < 450) return false;
    lastKey = key;
    lastAt = now;
    try { fn(); } catch (err) { console.warn('KDO tap', key, err); }
    return true;
  }

  function openFromEl(el) {
    if (!el || !el.closest) return false;
    var card = el.closest('.lesson-card[data-num]');
    if (card && !card.classList.contains('empty')) {
      var num = parseInt(card.getAttribute('data-num'), 10);
      var opener = window.openLesson || (typeof openLesson === 'function' ? openLesson : null);
      if (num && opener) {
        return once('lesson-' + num, function () { opener(num); });
      }
    }
    var ltab = el.closest('.ltab[data-tab]');
    if (ltab) {
      var tab = ltab.getAttribute('data-tab');
      var switcher = window.switchLessonTab || (typeof switchLessonTab === 'function' ? switchLessonTab : null);
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
    // Sadece gerçekten açtıysak native click'i engelle (çift açılışı önler)
    if (openFromEl(el)) {
      e.preventDefault();
    }
  }

  function onClick(e) {
    // Capture yok — bubble. Inline onclick / diğer delegasyonlarla çakışmasın diye
    // sadece henüz açılmadıysa (debounce) yedek olarak çalışır.
    openFromEl(e.target);
  }

  function bind() {
    markAndroid();
    if (bound) return;
    bound = true;
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: false });
    document.addEventListener('click', onClick, false);
  }

  window.KDO_bindAndroidTaps = bind;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
  window.addEventListener('load', bind);
})();
