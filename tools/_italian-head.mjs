export const ITALIAN_HEAD = `#!/usr/bin/env node
/**
 * Generates Italian lesson files ders1.js – ders49.js
 * Run: node tools/gen-italian-lessons.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../languages/it/lessons');
mkdirSync(OUT_DIR, { recursive: true });

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

function render(n, title, data, tag = 'beginner') {
  return \`// ders\${n}.js — Italian Lesson \${n}: \${title} (\${tag})\\nconst L\${n} = \${ser(data, 0)};\\nLESSONS[\${n}] = L\${n};\\n\`;
}

// ─── Italian numbers for Lesson 3 UI ─────────────────────────
const IT_NUMBERS = [
  { n: 0, word: 'zero', tr: 'sıfır' },
  { n: 1, word: 'uno', tr: 'bir' },
  { n: 2, word: 'due', tr: 'iki' },
  { n: 3, word: 'tre', tr: 'üç' },
  { n: 4, word: 'quattro', tr: 'dört' },
  { n: 5, word: 'cinque', tr: 'beş' },
  { n: 6, word: 'sei', tr: 'altı' },
  { n: 7, word: 'sette', tr: 'yedi' },
  { n: 8, word: 'otto', tr: 'sekiz' },
  { n: 9, word: 'nove', tr: 'dokuz' },
  { n: 10, word: 'dieci', tr: 'on' },
  { n: 11, word: 'undici', tr: 'on bir' },
  { n: 12, word: 'dodici', tr: 'on on iki' },
  { n: 13, word: 'tredici', tr: 'on üç' },
  { n: 14, word: 'quattordici', tr: 'on dört' },
  { n: 15, word: 'quindici', tr: 'on beş' },
  { n: 16, word: 'sedici', tr: 'on altı' },
  { n: 17, word: 'diciassette', tr: 'on yedi' },
  { n: 18, word: 'diciotto', tr: 'on sekiz' },
  { n: 19, word: 'diciannove', tr: 'on dokuz' },
  { n: 20, word: 'venti', tr: 'yirmi' },
  { n: 30, word: 'trenta', tr: 'otuz' },
  { n: 40, word: 'quaranta', tr: 'kırk' },
  { n: 50, word: 'cinquanta', tr: 'elli' },
  { n: 60, word: 'sessanta', tr: 'altmış' },
  { n: 70, word: 'settanta', tr: 'yetmiş' },
  { n: 80, word: 'ottanta', tr: 'seksen' },
  { n: 90, word: 'novanta', tr: 'doksan' },
  { n: 100, word: 'cento', tr: 'yüz' },
  { n: 1000, word: 'mille', tr: 'bin' }
];

const IT_COMPOUNDS = [
  { n: 21, word: 'ventuno', tr: 'yirmi bir' },
  { n: 32, word: 'trentadue', tr: 'otuz iki' },
  { n: 105, word: 'centocinque', tr: 'yüz beş' },
  { n: 350, word: 'trecentocinquanta', tr: 'üç yüz elli' },
  { n: 1835, word: 'milleottocentotrentacinque', tr: 'bin sekiz yüz otuz beş' },
  { n: 10000, word: 'diecimila', tr: 'on bin' }
];

function mkScenarioWords(list) {
  return list.map(([id, en, ro, tr, o = {}], i) => W(id || \`w\${i + 1}\`, en, ro, tr, o));
}

function buildVocabLesson(n, title, entries) {
  const words = entries.map(([en, ro, tr, ex], i) => {
    const o = {};
    if (ex) o.ex = ex;
    return W(\`w\${i + 1}\`, en, ro, tr, o);
  });
  return vocab(title, words);
}

`;
