#!/usr/bin/env node
/** Generate shared/kdo-lang-registry.js from lang-config.mjs */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LANGS } from './lang-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function buildTargetUi(L) {
  const t = L.targetLabelTr;
  const e = L.targetLabelEn;
  const f = L.flag;
  return {
    tr: {
      test_dir_en2tr: `${t} → Anlam`,
      test_dir_tr2en: `Anlam → ${t}`,
      translate_placeholder: `${t} veya Türkçe yaz...`,
      translate_tip: `${t} veya Türkçe bir kelime veya cümle yaz.`,
      settings_voices: `🔊 ${t} Sesleri`,
      pron_col_english: t,
      num_info: L.numInfoTr,
      calc_info: `Herhangi bir sayıyı gir — ${t} karşılığı anında çıkar. 🔊 ile seslendir.`,
      review_q_en2tr: `${f} ${t} → Türkçe`,
      review_q_tr2en: `🇹🇷 Türkçe → ${t}`,
    },
    en: {
      test_dir_en2tr: `${e} → Meaning`,
      test_dir_tr2en: `Meaning → ${e}`,
      translate_placeholder: `Type ${e} or Turkish...`,
      translate_tip: `Type a ${e} or Turkish word or sentence.`,
      settings_voices: `🔊 ${e} Voices`,
      pron_col_english: e,
      num_info: L.numInfoEn,
      calc_info: `Enter any number — instant ${e} equivalent. Tap 🔊 to hear.`,
      review_q_en2tr: `${f} ${e} → Turkish`,
      review_q_tr2en: `🇹🇷 Turkish → ${e}`,
    },
  };
}

function toRegistryEntry(L) {
  const entry = {
    code: L.code,
    kdoTarget: L.kdoTarget,
    prefix: L.prefix,
    storageBrand: L.storageBrand,
    flag: L.flag,
    nameTr: L.nameTr,
    nameEn: L.nameEn,
    title: L.title,
    lessonsPath: L.lessonsPath,
    tts: L.tts,
    ttsAlt: L.ttsAlt,
    ttsPrefix: L.ttsPrefix,
    googleVoiceF: L.googleVoiceF,
    googleVoiceM: L.googleVoiceM,
    targetLabelTr: L.targetLabelTr,
    targetLabelEn: L.targetLabelEn,
    l2Meta: L.l2Meta,
    targetUi: buildTargetUi(L),
    legacy: !!L.legacy,
    legacyUrl: L.legacyUrl || null,
    enLesson2Migration: !!L.enLesson2Migration,
    extras: L.extras || [],
    rtl: !!L.rtl,
    cjk: !!L.cjk,
  };
  return entry;
}

const registry = {};
for (const [key, L] of Object.entries(LANGS)) {
  registry[key] = toRegistryEntry(L);
}

const translateBlock = {};
for (const [key, L] of Object.entries(LANGS)) {
  if (!L.translateTarget) continue;
  const raw = L.translateRe;
  const m = raw.match(/^\/(.+)\/([gimsuy]*)$/);
  const t = {
    target: L.translateTarget,
    pattern: m ? m[1] : raw,
    flags: m ? m[2] : 'i',
  };
  if (L.translateFallback) t.fallback = L.translateFallback;
  if (L.translateLessonTarget) t.lessonTargetField = L.translateLessonTarget;
  if (L.translateLessonBase) t.lessonBaseField = L.translateLessonBase;
  translateBlock[key] = t;
}

const out = `/** Kolay Dil Öğren — dil kayıt defteri (tools/gen-lang-registry.mjs ile üretilir) */
window.KDO_LANG_REGISTRY = ${JSON.stringify(registry, null, 2)};

window.KDO_TRANSLATE_BY_LANG = ${JSON.stringify(translateBlock, null, 2)};

window.KDO_resolveTarget = function () {
  var q = new URLSearchParams(location.search);
  var t = q.get('t') || localStorage.getItem('kdo:target') || 'de';
  var R = window.KDO_LANG_REGISTRY;
  if (!R[t]) t = 'de';
  return t;
};

window.KDO_bootLang = function () {
  var t = window.KDO_resolveTarget();
  var R = window.KDO_LANG_REGISTRY;
  var cfg = R[t];
  if (!cfg) { location.href = 'index.html?hub=1'; return false; }
  if (cfg.legacy) {
    localStorage.setItem('kdo:target', cfg.kdoTarget || t);
    location.replace(cfg.legacyUrl || 'tayca-v3.html');
    return false;
  }
  window.KDO_TARGET = t;
  window.KDO_CFG = cfg;
  window.KDO_PREFIX = cfg.prefix;
  var tr = window.KDO_TRANSLATE_BY_LANG[t];
  if (tr) {
    window.KDO_TRANSLATE = {
      target: tr.target,
      targetRe: new RegExp(tr.pattern, tr.flags || 'i'),
    };
    if (tr.fallback) window.KDO_TRANSLATE.fallback = tr.fallback;
    if (tr.lessonTargetField) window.KDO_TRANSLATE.lessonTargetField = tr.lessonTargetField;
    if (tr.lessonBaseField) window.KDO_TRANSLATE.lessonBaseField = tr.lessonBaseField;
  }
  localStorage.setItem('kdo:target', cfg.kdoTarget || t);
  if (cfg.title) document.title = cfg.title;
  if (typeof KDO_fixTv3CrossMigration === 'function') KDO_fixTv3CrossMigration(cfg.prefix);
  return true;
};
`;

fs.writeFileSync(path.join(root, 'shared', 'kdo-lang-registry.js'), out);
console.log('Generated shared/kdo-lang-registry.js with', Object.keys(registry).length, 'languages');
