#!/usr/bin/env node
/** Cross-audit: target language × UI language word meaning coverage */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGETS = ['de', 'en', 'fr', 'es', 'it', 'ru', 'ar', 'zh', 'tk', 'th'];
const UI_LANGS = ['tr', 'en', 'th', 'de', 'fr', 'es', 'it', 'ru', 'ar', 'zh'];

const glossSrc = fs.readFileSync(path.join(root, 'shared', 'kdo-gloss.js'), 'utf8');
const glossCtx = { window: {} };
vm.runInNewContext(glossSrc, glossCtx);
const GLOSS = glossCtx.window.KDO_GLOSS;

function meaningBaseLang(target) {
  return target === 'tk' ? 'en' : 'tr';
}

function normKey(s) {
  return String(s || '').trim().toLowerCase()
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ş/g, 's')
    .replace(/ç/g, 'c').replace(/ö/g, 'o').replace(/ü/g, 'u');
}

function glossLookup(lang, text) {
  if (!text || !GLOSS[lang]) return '';
  const g = GLOSS[lang];
  const k = String(text).trim();
  return g[k] || g[k.toLowerCase()] || g[normKey(k)] || '';
}

function bridgeGloss(lang, bridge) {
  if (!bridge) return '';
  let hit = glossLookup(lang, bridge);
  if (hit) return hit;
  for (const part of String(bridge).split(/\s*\/\s*|\s*—\s*|\s*–\s*/)) {
    hit = glossLookup(lang, part.trim());
    if (hit) return hit;
  }
  return '';
}

function Lm(item, field, lang, target) {
  if (!item) return '';
  const loc = item[field + '_' + lang];
  if (loc !== undefined && loc !== '') return loc;
  let bridge = item[field];
  if (bridge === undefined || bridge === null) bridge = '';
  bridge = String(bridge);
  if (lang === 'tr') return bridge;
  let hit = bridgeGloss(lang, bridge);
  if (!hit && field === 'tr') {
    hit = glossLookup(lang, item.en) || glossLookup(lang, item.th);
  }
  if (hit) return hit;
  const en = item[field + '_en'];
  if (en !== undefined && en !== '') {
    const glossed = glossLookup(lang, en);
    if (glossed) return glossed;
    if (lang === 'en' || ['explanation', 'explain', 'title'].includes(field)) return en;
  }
  if (lang === 'en') {
    if (meaningBaseLang(target) === 'en') return bridge;
    return glossLookup('en', item.en) || glossLookup('en', bridge) || bridge;
  }
  if (meaningBaseLang(target) === 'en') {
    const enHit = bridgeGloss(lang, bridge) || glossLookup(lang, bridge);
    if (enHit) return enHit;
    return bridge;
  }
  return '';
}

function loadLessonWords(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const m = src.match(/const\s+L\d+\s*=\s*(\{[\s\S]*\});?\s*$/m);
  if (!m) return [];
  try {
    const L = vm.runInNewContext(`(${m[1]})`, {});
    return (L.words || []).map((w) => ({ ...w, file: path.basename(filePath) }));
  } catch {
    return [];
  }
}

function collectAllWords(target) {
  const langDir = target === 'tk' ? 'tr' : target;
  const dir = path.join(root, 'languages', langDir, 'lessons');
  if (!fs.existsSync(dir)) return [];
  const all = [];
  for (const f of fs.readdirSync(dir).filter((x) => /^ders\d+\.js$/.test(x))) {
    all.push(...loadLessonWords(path.join(dir, f)));
  }
  return all.filter((w) => w.tr && (w.en || w.th));
}

const report = {};
let totalChecks = 0;
let totalMissing = 0;
const samples = {};

for (const target of TARGETS) {
  const words = collectAllWords(target);
  if (!words.length) {
    console.error(`WARN: no words for target ${target}`);
    continue;
  }
  report[target] = { wordCount: words.length };

  for (const ui of UI_LANGS) {
    if (ui === 'tr') continue;
    let missing = 0;
    const misses = [];
    for (const w of words) {
      totalChecks++;
      const meaning = Lm(w, 'tr', ui, target);
      if (!meaning || !meaning.trim()) {
        missing++;
        totalMissing++;
        if (misses.length < 3) {
          misses.push({ id: w.id, file: w.file, key: w.en || w.th, bridge: w.tr });
        }
      }
    }
    const pct = ((words.length - missing) / words.length * 100).toFixed(1);
    report[target][ui] = { total: words.length, missing, pct, misses };
    if (missing > 0) samples[`${target}→${ui}`] = { missing, total: words.length, pct, misses };
  }
}

console.log('=== GLOSS CROSS-AUDIT (word meanings, non-tr UI) ===\n');
console.log(`Words per target: ${TARGETS.map((t) => `${t}=${report[t]?.wordCount || 0}`).join(', ')}`);
console.log(`Total checks: ${totalChecks}, missing: ${totalMissing} (${(totalMissing / totalChecks * 100).toFixed(1)}%)\n`);

console.log('Coverage matrix (%):');
console.log('target'.padEnd(6) + UI_LANGS.map((l) => l.padStart(5)).join(''));
for (const target of TARGETS) {
  if (!report[target]?.wordCount) continue;
  const row = [target.padEnd(6)];
  for (const ui of UI_LANGS) {
    if (ui === 'tr') { row.push(' 100%'); continue; }
    const r = report[target][ui];
    row.push((r.missing > 0 ? r.pct + '%' : '100%').padStart(5));
  }
  console.log(row.join(''));
}

console.log('\n=== Gaps by combo (sorted worst first) ===');
for (const [k, v] of Object.entries(samples).sort((a, b) => b[1].missing / b[1].total - a[1].missing / a[1].total)) {
  console.log(`${k}: ${v.missing}/${v.total} missing (${v.pct}% ok) e.g. ${v.misses.map((m) => `"${m.key}"→"${m.bridge}"`).join('; ')}`);
}

console.log('\n=== tk: English bridge shown instead of UI lang ===');
const tkWords = collectAllWords('tk');
for (const ui of UI_LANGS.filter((l) => l !== 'tr' && l !== 'en')) {
  let enFb = 0, empty = 0, ok = 0;
  for (const w of tkWords) {
    const m = Lm(w, 'tr', ui, 'tk');
    if (!m) empty++;
    else if (m.toLowerCase() === String(w.tr).toLowerCase()) enFb++;
    else ok++;
  }
  if (enFb || empty) console.log(`  tk→${ui}: localized=${ok}, english_fallback=${enFb}, empty=${empty} / ${tkWords.length}`);
}
