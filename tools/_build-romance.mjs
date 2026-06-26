#!/usr/bin/env node
/** One-time assembler → tools/gen-romance-lessons.mjs */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function extract(src, start, end) {
  const i = src.indexOf(start);
  const j = src.indexOf(end, i);
  if (i < 0 || j < 0) throw new Error(`extract failed: ${start}`);
  return src.slice(i, j).trim();
}

function extractArrayBody(src, varName) {
  const re = new RegExp(`const ${varName} = \\[([\\s\\S]*?)\\];`);
  const m = src.match(re);
  if (!m) throw new Error(`extractArrayBody failed: ${varName}`);
  return m[1].trim();
}

function toScenarioExpr(extracted, constName) {
  return extracted
    .replace(new RegExp(`^const ${constName} = scenario`), 'scenario')
    .replace(/\)\s*;\s*$/, ')');
}

const esSrc = readFileSync(join(__dirname, 'gen-spanish-lessons.mjs'), 'utf8');
const itSrc = readFileSync(join(__dirname, 'gen-italian-lessons.mjs'), 'utf8');
const frSrc = readFileSync(join(__dirname, 'gen-french-lessons.mjs'), 'utf8');

const esL1 = extract(esSrc, 'const L1 = scenario', '// ─── Lesson 2:');
const esL2 = extract(esSrc, 'const L2 = scenario', '// ─── Lesson 3:');
const esL3Body = extract(esSrc, 'const L3 = scenario', '// ─── Helper:');
const esL3Helpers = extract(esSrc, '// ─── Lesson 3:', 'const L3 = scenario');
const itL1 = extract(itSrc, 'const L1 = scenario', '// ─── Lesson 2:');
const itL2 = extract(itSrc, 'const L2 = scenario', 'function numWords');
const itNumWordsFn = extract(itSrc, 'function numWords()', 'const L3 = scenario');
const itL3Body = extract(itSrc, 'const L3 = scenario', '// ─── Lessons 4–20');
const frL1 = extract(frSrc, 'const L1 = scenario', '// ─── Lesson 2:');
const frL2 = extract(frSrc, 'const L2 = scenario', '// ─── Lesson 3:');
const frL3Body = extract(frSrc, 'const L3 = scenario', '// ─── Helper:');
const frNumWordsFn = extract(frSrc, 'function numWords()', 'const L3 = scenario');

const esNumbers = `const ES_NUMBERS = [
  { n: 0, word: 'cero', tr: 'sıfır' }, { n: 1, word: 'uno', tr: 'bir' }, { n: 2, word: 'dos', tr: 'iki' },
  { n: 3, word: 'tres', tr: 'üç' }, { n: 4, word: 'cuatro', tr: 'dört' }, { n: 5, word: 'cinco', tr: 'beş' },
  { n: 6, word: 'seis', tr: 'altı' }, { n: 7, word: 'siete', tr: 'yedi' }, { n: 8, word: 'ocho', tr: 'sekiz' },
  { n: 9, word: 'nueve', tr: 'dokuz' }, { n: 10, word: 'diez', tr: 'on' }, { n: 11, word: 'once', tr: 'on bir' },
  { n: 12, word: 'doce', tr: 'on iki' }, { n: 13, word: 'trece', tr: 'on üç' }, { n: 14, word: 'catorce', tr: 'on dört' },
  { n: 15, word: 'quince', tr: 'on beş' }, { n: 16, word: 'dieciséis', tr: 'on altı' }, { n: 17, word: 'diecisiete', tr: 'on yedi' },
  { n: 18, word: 'dieciocho', tr: 'on sekiz' }, { n: 19, word: 'diecinueve', tr: 'on dokuz' }, { n: 20, word: 'veinte', tr: 'yirmi' },
  { n: 30, word: 'treinta', tr: 'otuz' }, { n: 40, word: 'cuarenta', tr: 'kırk' }, { n: 50, word: 'cincuenta', tr: 'elli' },
  { n: 60, word: 'sesenta', tr: 'altmış' }, { n: 70, word: 'setenta', tr: 'yetmiş' }, { n: 80, word: 'ochenta', tr: 'seksen' },
  { n: 90, word: 'noventa', tr: 'doksan' }, { n: 100, word: 'cien', tr: 'yüz' }, { n: 1000, word: 'mil', tr: 'bin' }
];
const ES_COMPOUNDS = [
  { n: 21, word: 'veintiuno', tr: 'yirmi bir' }, { n: 32, word: 'treinta y dos', tr: 'otuz iki' },
  { n: 105, word: 'ciento cinco', tr: 'yüz beş' }, { n: 350, word: 'trescientos cincuenta', tr: 'üç yüz elli' },
  { n: 999, word: 'novecientos noventa y nueve', tr: 'dokuz yüz doksan dokuz' }, { n: 10000, word: 'diez mil', tr: 'on bin' }
];`;

const frNumbers = `const FR_NUMBERS = [
  { n: 0, word: 'zéro', tr: 'sıfır' }, { n: 1, word: 'un', tr: 'bir' }, { n: 2, word: 'deux', tr: 'iki' },
  { n: 3, word: 'trois', tr: 'üç' }, { n: 4, word: 'quatre', tr: 'dört' }, { n: 5, word: 'cinq', tr: 'beş' },
  { n: 6, word: 'six', tr: 'altı' }, { n: 7, word: 'sept', tr: 'yedi' }, { n: 8, word: 'huit', tr: 'sekiz' },
  { n: 9, word: 'neuf', tr: 'dokuz' }, { n: 10, word: 'dix', tr: 'on' }, { n: 11, word: 'onze', tr: 'on bir' },
  { n: 12, word: 'douze', tr: 'on iki' }, { n: 13, word: 'treize', tr: 'on üç' }, { n: 14, word: 'quatorze', tr: 'on dört' },
  { n: 15, word: 'quinze', tr: 'on beş' }, { n: 16, word: 'seize', tr: 'on altı' }, { n: 17, word: 'dix-sept', tr: 'on yedi' },
  { n: 18, word: 'dix-huit', tr: 'on sekiz' }, { n: 19, word: 'dix-neuf', tr: 'on dokuz' }, { n: 20, word: 'vingt', tr: 'yirmi' },
  { n: 30, word: 'trente', tr: 'otuz' }, { n: 40, word: 'quarante', tr: 'kırk' }, { n: 50, word: 'cinquante', tr: 'elli' },
  { n: 60, word: 'soixante', tr: 'altmış' }, { n: 70, word: 'soixante-dix', tr: 'yetmiş' }, { n: 80, word: 'quatre-vingt', tr: 'seksen' },
  { n: 90, word: 'quatre-vingt-dix', tr: 'doksan' }, { n: 100, word: 'cent', tr: 'yüz' }, { n: 1000, word: 'mille', tr: 'bin' }
];
const FR_COMPOUNDS = [
  { n: 21, word: 'vingt et un', tr: 'yirmi bir' }, { n: 32, word: 'trente-deux', tr: 'otuz iki' },
  { n: 105, word: 'cent cinq', tr: 'yüz beş' }, { n: 350, word: 'trois cent cinquante', tr: 'üç yüz elli' },
  { n: 999, word: 'neuf cent quatre-vingt-dix-neuf', tr: 'dokuz yüz doksan dokuz' }, { n: 10000, word: 'dix mille', tr: 'on bin' }
];`;

const itNumbersBody = extractArrayBody(itSrc, 'IT_NUMBERS');
const itCompoundsBody = extractArrayBody(itSrc, 'IT_COMPOUNDS');

// L4-L20 + vocab tail from separate module
const tail = readFileSync(join(__dirname, '_romance-L4-49.mjs'), 'utf8');

const out = `#!/usr/bin/env node
/**
 * Generates Italian, Spanish, French lesson files ders1.js – ders49.js
 * Run: node tools/gen-romance-lessons.mjs it|es|fr|all
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Serialization ───────────────────────────────────────────
function esc(s) {
  return String(s).replace(/\\\\/g, '\\\\\\\\').replace(/'/g, "\\\\'").replace(/\\r/g, '');
}

function ser(v, d = 0) {
  const p = '  '.repeat(d);
  const pi = '  '.repeat(d + 1);
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') return \`'\${esc(v)}'\`;
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return '[\\n' + v.map(x => pi + ser(x, d + 1)).join(',\\n') + '\\n' + p + ']';
  }
  const keys = Object.keys(v);
  if (!keys.length) return '{}';
  return '{\\n' + keys.map(k => {
    const key = /^[a-zA-Z_]\\w*$/.test(k) ? k : \`'\${k}'\`;
    return pi + key + ':' + ser(v[k], d + 1);
  }).join(',\\n') + '\\n' + p + '}';
}

// ─── Builders ────────────────────────────────────────────────
function W(id, en, ro, tr, o = {}) {
  const w = { id, en, ro, tr };
  if (o.tip) w.tip = o.tip;
  if (o.ctx) w.ctx = o.ctx;
  if (o.ex) {
    const ex = { en: o.ex.en, tr: o.ex.tr, bd: o.ex.bd || [] };
    if (o.ex.gramNote) ex.gramNote = o.ex.gramNote;
    w.examples = [ex];
  }
  return w;
}

function G(id, title, title_en, explanation, table, note) {
  return { id, title, title_en, explanation, table, note };
}

function SP(id, en, tr, prompt, o = {}) {
  const s = { id, en, tr, prompt };
  if (o.gramNote) s.gramNote = o.gramNote;
  if (o.ro) s.ro = o.ro;
  if (o.tip) s.tip = o.tip;
  return s;
}

function DL(id, title, title_en, lines) {
  return { id, title, title_en, lines };
}

function LN(speaker, gender, en, tr, gramNote, bd) {
  const l = { speaker, gender, en, tr };
  if (gramNote) l.gramNote = gramNote;
  if (bd) l.bd = bd;
  return l;
}

function BD(ro, tr, role, note) {
  return { ro, tr, role, note };
}

function LI(id, transcript, tr, questions) {
  return { id, audio: '', transcript, tr, questions };
}

function Q(q, opts, answer, tr) {
  return { q, opts, answer, tr };
}

function scenario(title, words, grammar, speaking, dialogues, listening) {
  return { words, grammar, speaking, dialogues, listening, tones: [] };
}

function vocab(title, words) {
  return { words, grammar: [], speaking: [], dialogues: [], listening: [], tones: [] };
}

function render(n, title, data, langLabel, tag = 'beginner') {
  return \`// ders\${n}.js — \${langLabel} Lesson \${n}: \${title} (\${tag})\\nconst L\${n} = \${ser(data, 0)};\\nLESSONS[\${n}] = L\${n};\\n\`;
}

function mkScenarioWords(list) {
  return list.map(([id, en, ro, tr, o = {}], i) => W(id || \`w\${i + 1}\`, en, ro, tr, o));
}

function buildVocabLesson(title, entries) {
  const words = entries.map(([en, ro, tr, ex], i) => {
    const o = {};
    if (ex) o.ex = ex;
    return W(\`w\${i + 1}\`, en, ro, tr, o);
  });
  return vocab(title, words);
}

const LANG_META = {
  es: { label: 'Spanish', l2: 'Artículos & ser' },
  it: { label: 'Italian', l2: 'Articoli & essere' },
  fr: { label: 'French', l2: 'Articles & être' }
};

// ─── Spanish L1-L3 ───────────────────────────────────────────
function buildEsL1() { return ${toScenarioExpr(esL1, 'L1')}; }
function buildEsL2() { return ${toScenarioExpr(esL2, 'L2')}; }
${esNumbers}
function buildEsL3() {
  ${esL3Helpers}
  return { ...${toScenarioExpr(esL3Body, 'L3')}, numbers: ES_NUMBERS, compounds: ES_COMPOUNDS };
}

// ─── Italian L1-L3 ───────────────────────────────────────────
function buildItL1() { return ${toScenarioExpr(itL1, 'L1')}; }
function buildItL2() { return ${toScenarioExpr(itL2, 'L2')}; }
const IT_NUMBERS = [
${itNumbersBody}
];
const IT_COMPOUNDS = [
${itCompoundsBody}
];
function buildItL3() {
  ${itNumWordsFn}
  const data = ${toScenarioExpr(itL3Body, 'L3')};
  return { ...data, numbers: IT_NUMBERS, compounds: IT_COMPOUNDS };
}

// ─── French L1-L3 ────────────────────────────────────────────
function buildFrL1() { return ${toScenarioExpr(frL1, 'L1')}; }
function buildFrL2() { return ${toScenarioExpr(frL2, 'L2')}; }
${frNumbers}
function buildFrL3() {
  ${frNumWordsFn}
  return { ...${toScenarioExpr(frL3Body, 'L3')}, numbers: FR_NUMBERS, compounds: FR_COMPOUNDS };
}

${tail}

function buildLessonsForLang(code) {
  const builders = { es: [buildEsL1, buildEsL2, buildEsL3], it: [buildItL1, buildItL2, buildItL3], fr: [buildFrL1, buildFrL2, buildFrL3] };
  const l2title = LANG_META[code].l2;
  const all = {
    1: ['Greetings & Introductions', builders[code][0]()],
    2: [l2title, builders[code][1]()],
    3: ['Numbers & Money', builders[code][2]()],
    4: ['Time & Date', buildL4(code)],
    5: ['Restaurant & Food', buildL5(code)],
    6: ['Shopping', buildL6(code)],
    7: ['Directions', buildL7(code)],
    8: ['Transport & Travel', buildL8(code)],
    9: ['Hotel & Accommodation', buildL9(code)],
    10: ['Work & Business', buildL10(code)],
    11: ['Health', buildL11(code)],
    12: ['Phone & Communication', buildL12(code)],
    13: ['Social Life', buildL13(code)],
    14: ['Home & Living', buildL14(code)],
    15: ['Education & School', buildL15(code)],
    16: ['Countries & Nationalities', buildL16(code)],
    17: ['Emotions & Feelings', buildL17(code)],
    18: ['Weather', buildL18(code)],
    19: ['Entertainment & Hobbies', buildL19(code)],
    20: ['Daily Conversation Practice', buildL20(code)]
  };
  for (const [n, [title, entries]] of Object.entries(VOCAB_BY_LANG[code])) {
    all[+n] = [title, buildVocabLesson(title, entries)];
  }
  return all;
}

const arg = (process.argv[2] || 'all').toLowerCase();
const codes = arg === 'all' ? ['es', 'it', 'fr'] : [arg];
if (!codes.every(c => LANG_META[c])) {
  console.error('Usage: node tools/gen-romance-lessons.mjs it|es|fr|all');
  process.exit(1);
}

let total = 0;
for (const code of codes) {
  const outDir = join(__dirname, \`../languages/\${code}/lessons\`);
  mkdirSync(outDir, { recursive: true });
  const lessons = buildLessonsForLang(code);
  const label = LANG_META[code].label;
  let created = 0;
  for (let n = 1; n <= 49; n++) {
    const [title, data] = lessons[n];
    const tag = n <= 20 ? 'beginner' : 'vocabulary';
    writeFileSync(join(outDir, \`ders\${n}.js\`), render(n, title, data, label, tag), 'utf8');
    created++;
  }
  total += created;
  console.log(\`✓ \${code}: \${created}/49 lessons → \${outDir}\`);
}
console.log(\`\\nTotal: \${total} files generated.\`);
`;

writeFileSync(join(__dirname, 'gen-romance-lessons.mjs'), out, 'utf8');
console.log('Wrote gen-romance-lessons.mjs, lines:', out.split('\n').length);
