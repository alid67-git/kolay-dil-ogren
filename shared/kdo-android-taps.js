/** Android WebView: viewport düzeltme + dokunma desteği */
(function () {
  'use strict';

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
        main.style.setProperty('touch-action', 'manipulation', 'important');
        main.style.setProperty('pointer-events', 'auto', 'important');
      }
    } catch (_) {}
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
