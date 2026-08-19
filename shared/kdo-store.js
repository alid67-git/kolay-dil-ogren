/** Güvenli localStorage JSON okuma ve ders durumu onarımı */
(function () {
  'use strict';

  function safeStore(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw == null || raw === '') return fallback;
      var val = JSON.parse(raw);
      if (Array.isArray(fallback)) return Array.isArray(val) ? val : fallback;
      if (fallback !== null && typeof fallback === 'object') {
        return (val && typeof val === 'object' && !Array.isArray(val)) ? val : fallback;
      }
      return val;
    } catch (e) {
      console.warn('safeStore', key, e);
      try { localStorage.removeItem(key); } catch (_) {}
      return fallback;
    }
  }

  function normalizeLessonState(prefix) {
    if (!prefix) return null;
    var starred = safeStore(prefix + 'star', {});
    var visitedTabs = safeStore(prefix + 'visited', {});
    var lessonStats = safeStore(prefix + 'stats', {});
    var completedLessons = safeStore(prefix + 'complete', []);
    if (!Array.isArray(completedLessons)) completedLessons = [];
    localStorage.setItem(prefix + 'star', JSON.stringify(starred));
    localStorage.setItem(prefix + 'visited', JSON.stringify(visitedTabs));
    localStorage.setItem(prefix + 'stats', JSON.stringify(lessonStats));
    localStorage.setItem(prefix + 'complete', JSON.stringify(completedLessons));
    return {
      starred: starred,
      visitedTabs: visitedTabs,
      lessonStats: lessonStats,
      completedLessons: completedLessons
    };
  }

  function syncLessonGlobals(st) {
    if (!st) return;
    if (typeof window.__kdoSyncLessonState === 'function') {
      window.__kdoSyncLessonState(st);
      return;
    }
    if (typeof window.reloadLessonState === 'function') {
      window.reloadLessonState();
    }
  }

  function ensureLessonsRendered() {
    var prefix = window.KDO_PREFIX;
    if (prefix) {
      var st = normalizeLessonState(prefix);
      syncLessonGlobals(st);
    }
    var wrap = document.getElementById('lesson-list-wrap');
    if (!wrap) return;
    if (wrap.innerHTML.trim()) return;
    if (typeof window.renderLessonList === 'function') {
      try { window.renderLessonList(); } catch (e) { console.error('KDO ensureLessonsRendered', e); }
    }
    if (!wrap.innerHTML.trim()) {
      wrap.innerHTML = '<p style="padding:20px;color:#666;text-align:center">Dersler yüklenemedi. Sayfayı yenileyin veya uygulama verisini temizleyin.</p>';
    }
  }

  window.KDO_safeStore = safeStore;
  window.KDO_normalizeLessonState = normalizeLessonState;
  window.KDO_onLangBoot = function (cfg) {
    if (!cfg || !cfg.prefix) return;
    normalizeLessonState(cfg.prefix);
  };
  window.KDO_ensureLessonsRendered = ensureLessonsRendered;

  function onReady() {
    ensureLessonsRendered();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
  window.addEventListener('load', ensureLessonsRendered);
})();
