/**
 * Ortak seslendirme: Android native TTS + Google Cloud TTS + Web Speech.
 * Android WebView'da speechSynthesis çoğu cihazda sessizdir (iOS çalışır).
 */
(function () {
  'use strict';

  var _audio = null;
  var _heldUtterance = null;
  var _webSpeakTimer = null;

  var PROFILES = {
    ha: {
      m: { pitch: 0.88, rate: 0.90, slowPitch: 0.82, slowRate: 0.55 },
      f: { pitch: 1.08, rate: 0.92, slowPitch: 1.00, slowRate: 0.58 },
      d: { pitch: 0.95, rate: 0.90, slowPitch: 0.88, slowRate: 0.55 },
      pick: function (voices, gender) {
        var ha = voices.filter(function (v) { return v.lang === 'ha-NG' || v.lang === 'ha'; });
        if (!ha.length) return null;
        if (gender === 'f') return ha[ha.length - 1];
        return ha[0];
      }
    },
    sw: {
      m: { pitch: 0.90, rate: 0.88, slowPitch: 0.84, slowRate: 0.52 },
      f: { pitch: 1.06, rate: 0.90, slowPitch: 0.98, slowRate: 0.55 },
      d: { pitch: 0.96, rate: 0.88, slowPitch: 0.90, slowRate: 0.52 },
      pick: function (voices, gender) {
        var sw = voices.filter(function (v) {
          return v.lang === 'sw-TZ' || v.lang === 'sw-KE' || v.lang === 'sw';
        });
        if (!sw.length) return null;
        if (gender === 'f') return sw[sw.length - 1];
        return sw[0];
      }
    },
    th: {
      m: { pitch: 0.85, rate: 0.82, slowPitch: 0.80, slowRate: 0.38 },
      f: { pitch: 1.05, rate: 0.88, slowPitch: 1.00, slowRate: 0.42 },
      d: { pitch: 0.95, rate: 0.85, slowPitch: 0.90, slowRate: 0.38 },
      pick: function (voices, gender) {
        var th = voices.filter(function (v) { return v.lang === 'th-TH' || v.lang === 'th'; });
        if (!th.length) return null;
        if (gender === 'f') {
          return th.find(function (v) { return /kanya|premwadee|female|woman/i.test(v.name); }) || th[th.length - 1];
        }
        return th.find(function (v) { return /pattara|male|man/i.test(v.name); }) || th[0];
      }
    },
    default: {
      m: { pitch: 0.90, rate: 0.95, slowPitch: 0.82, slowRate: 0.42 },
      f: { pitch: 1.10, rate: 0.97, slowPitch: 1.02, slowRate: 0.44 },
      d: { pitch: 1.00, rate: 0.95, slowPitch: 0.95, slowRate: 0.42 },
      pick: function (voices, gender, cfg) {
        var lang = cfg.tts || 'en-US';
        var pool = voices.filter(function (x) {
          return x.lang === lang || x.lang === cfg.ttsAlt || (cfg.ttsPrefix && x.lang.indexOf(cfg.ttsPrefix) === 0);
        });
        if (!pool.length) return null;
        if (gender === 'f') {
          return pool.find(function (v) {
            var n = v.name.toLowerCase();
            return n.indexOf('female') >= 0 || n.indexOf('woman') >= 0 || n.indexOf('samantha') >= 0 || n.indexOf('kate') >= 0;
          }) || pool[pool.length - 1];
        }
        return pool.find(function (v) {
          var n = v.name.toLowerCase();
          return n.indexOf('male') >= 0 || n.indexOf('man') >= 0 || n.indexOf('daniel') >= 0 || n.indexOf('alex') >= 0;
        }) || pool[0];
      }
    }
  };

  function profile(cfg) {
    var t = (cfg && (cfg.kdoTarget || cfg.code)) || 'en';
    return PROFILES[t] || PROFILES.default;
  }

  function googleKey() {
    var p = (window.KDO_PREFIX || window.KDO_CFG && window.KDO_CFG.prefix) || '';
    return localStorage.getItem('google_tts_key')
      || localStorage.getItem('kdo:google_tts_key')
      || (p ? localStorage.getItem(p + 'google_tts_key') : '')
      || '';
  }

  function hasAndroidTts() {
    try {
      return !!(window.KdoAndroidTts && typeof window.KdoAndroidTts.speak === 'function');
    } catch (_) {
      return false;
    }
  }

  function speakStop() {
    if (_webSpeakTimer) { clearTimeout(_webSpeakTimer); _webSpeakTimer = null; }
    if (_audio) { try { _audio.pause(); _audio = null; } catch (_) {} }
    if (hasAndroidTts()) {
      try { window.KdoAndroidTts.stop(); } catch (_) {}
    }
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
    _heldUtterance = null;
  }

  function speakAndroidNative(text, slow, gender, cfg) {
    return new Promise(function (resolve) {
      var prof = profile(cfg);
      var g = gender === 'm' ? 'm' : (gender === 'f' ? 'f' : 'd');
      var p = prof[g] || prof.d;
      var rate = slow ? (p.slowRate || 0.55) : (p.rate || 0.95);
      var pitch = slow ? (p.slowPitch || 0.9) : (p.pitch || 1);
      var lang = (cfg && cfg.tts) || 'en-US';
      try {
        window.KdoAndroidTts.speak(String(text), lang, rate, pitch);
      } catch (_) {}
      var ms = Math.max(700, String(text).length * (slow ? 140 : 85));
      _webSpeakTimer = setTimeout(function () {
        _webSpeakTimer = null;
        resolve();
      }, ms);
    });
  }

  // Android Chrome: utterance GC + speak() yutulması. Referansı tut, kısa gecikmeyle söyle.
  function speakWebSpeech(text, slow, gender, cfg) {
    return new Promise(function (resolve) {
      if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
        resolve();
        return;
      }
      var prof = profile(cfg);
      var g = gender === 'm' ? 'm' : (gender === 'f' ? 'f' : 'd');
      var p = prof[g] || prof.d;
      var u = new SpeechSynthesisUtterance(text);
      u.lang = cfg.tts || 'en-US';
      u.pitch = slow ? p.slowPitch : p.pitch;
      u.rate = slow ? p.slowRate : p.rate;
      var voices = window.speechSynthesis.getVoices() || [];
      var pick = prof.pick || PROFILES.default.pick;
      var voice = pick(voices, gender, cfg);
      if (voice) u.voice = voice;
      var done = false;
      var finish = function () {
        if (done) return;
        done = true;
        resolve();
      };
      u.onend = finish;
      u.onerror = finish;
      _heldUtterance = u;
      try { window.speechSynthesis.cancel(); } catch (_) {}
      var start = function () {
        try {
          window.speechSynthesis.speak(u);
          if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        } catch (_) {
          finish();
        }
      };
      if (/Android/i.test(navigator.userAgent || '')) {
        setTimeout(start, 40);
      } else {
        start();
      }
      var fallbackMs = Math.max(2500, String(text).length * 120);
      setTimeout(finish, fallbackMs);
    });
  }

  function playBase64Mp3(b64) {
    return new Promise(function (resolve, reject) {
      try {
        if (_audio) { _audio.pause(); _audio = null; }
        _audio = new Audio('data:audio/mp3;base64,' + b64);
        _audio.onended = resolve;
        _audio.onerror = reject;
        _audio.play().catch(reject);
      } catch (e) { reject(e); }
    });
  }

  function speakGoogle(text, slow, gender, cfg) {
    var key = googleKey();
    if (!key || !cfg) return Promise.resolve(false);
    var voiceName = gender === 'f' ? cfg.googleVoiceF : cfg.googleVoiceM;
    if (!voiceName) voiceName = cfg.googleVoiceF || cfg.googleVoiceM;
    if (!voiceName) return Promise.resolve(false);
    var lang = cfg.tts || 'en-US';
    return fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=' + encodeURIComponent(key), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text: text },
        voice: { languageCode: lang, name: voiceName },
        audioConfig: { audioEncoding: 'MP3', speakingRate: slow ? 0.78 : 1.0, pitch: 0 }
      })
    }).then(function (r) {
      if (!r.ok) return false;
      return r.json().then(function (d) {
        if (!d || !d.audioContent) return false;
        return playBase64Mp3(d.audioContent).then(function () { return true; });
      });
    }).catch(function () { return false; });
  }

  function speak(text, slow, gender, cfg) {
    if (!text || !String(text).trim()) return Promise.resolve();
    cfg = cfg || window.KDO_CFG || {};
    speakStop();
    if (hasAndroidTts()) {
      return speakAndroidNative(text, slow, gender, cfg);
    }
    if (!googleKey()) {
      return speakWebSpeech(text, slow, gender, cfg);
    }
    return speakGoogle(text, slow, gender, cfg).then(function (ok) {
      if (!ok) return speakWebSpeech(text, slow, gender, cfg);
    });
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function () { window.speechSynthesis.getVoices(); };
  }

  window.KDO_speakStop = speakStop;
  window.KDO_speak = speak;
  window.KDO_hasAndroidTts = hasAndroidTts;
})();
