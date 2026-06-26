#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const es = fs.readFileSync(path.join(root, 'gen-spanish-lessons.mjs'), 'utf8');
const frOld = fs.readFileSync(path.join(root, 'gen-french-lessons.mjs'), 'utf8');

const frL1Start = frOld.indexOf('// ─── Lesson 1: Greetings');
const frL3End = frOld.indexOf('// ─── Helper: compact scenario builder');
const frCore = frOld.slice(frL1Start, frL3End);

let out = es
  .replace('Spanish lesson files', 'French lesson files')
  .replace('gen-spanish-lessons.mjs', 'gen-french-lessons.mjs')
  .replace('../languages/es/lessons', '../languages/fr/lessons')
  .replace('Spanish Lesson', 'French Lesson')
  .replace('Generated ${created}/49 Spanish', 'Generated ${created}/49 French');

const esL1Start = out.indexOf('// ─── Lesson 1: Greetings');
const esHelper = out.indexOf('// ─── Helper: compact scenario builder');
out = out.slice(0, esL1Start) + frCore + out.slice(esHelper);

fs.writeFileSync(path.join(root, 'gen-french-lessons.mjs'), out);
console.log('Rebuilt gen-french: FR L1-L3 + ES L4-49, size', out.length);
