/** Android WebView + mobil dokunma: ders kartı / alt sekme güvenilir açılış */
(function () {
  'use strict';

  var MOVE_PX = 16;
  var bound = false;
  var sx = 0;
  var sy = 0;
  var startEl = null;
  var lastKey = '';
  var lastAt = 0;

  function markAndroid() {
    var ua = navigator.userAgent || '';
    if (/Android/i.test(ua)) {
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

  function openCard(card) {
    if (!card || card.classList.contains('empty')) return false;
    if (typeof openLesson !== 'function') return false;
    var num = parseInt(card.getAttribute('data-num'), 10);
    if (!num) return false;
    return once('lesson-' + num, function () { openLesson(num); });
  }

  function openLtab(btn) {
    if (!btn || typeof switchLessonTab !== 'function') return false;
    var tab = btn.getAttribute('data-tab');
    if (!tab) return false;
    return once('ltab-' + tab, function () { switchLessonTab(tab, btn); });
  }

  function onClickCapture(e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var card = t.closest('.lesson-card[data-num]');
    if (card) {
      if (openCard(card)) {
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }
  }

  function onTouchStart(e) {
    if (!e.touches || !e.touches.length) return;
    var touch = e.touches[0];
    sx = touch.clientX;
    sy = touch.clientY;
    startEl = e.target;
  }

  function onTouchEnd(e) {
    if (!startEl || !e.changedTouches || !e.changedTouches.length) {
      startEl = null;
      return;
    }
    var touch = e.changedTouches[0];
    var el = startEl;
    startEl = null;
    if (Math.abs(touch.clientX - sx) > MOVE_PX || Math.abs(touch.clientY - sy) > MOVE_PX) return;
    if (!el || !el.closest) return;

    var card = el.closest('.lesson-card[data-num]');
    if (card && openCard(card)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    var ltab = el.closest('.ltab[data-tab]');
    if (ltab && openLtab(ltab)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    var nbtn = el.closest('.nbtn');
    if (nbtn && !nbtn.disabled) {
      e.preventDefault();
      e.stopPropagation();
      once('nbtn-' + (nbtn.dataset.view || nbtn.textContent), function () {
        nbtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      });
    }
  }

  function bind() {
    markAndroid();
    if (bound) return;
    bound = true;
    document.addEventListener('click', onClickCapture, true);
    document.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    document.addEventListener('touchend', onTouchEnd, { passive: false, capture: true });
  }

  window.KDO_bindAndroidTaps = bind;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
  window.addEventListener('load', bind);
})();
