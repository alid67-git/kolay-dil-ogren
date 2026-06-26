#!/usr/bin/env node
/** Validate inline script blocks in the HTML apps. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const defaultFiles = [
  'index.html',
  'turkish-v3.html',
  'tayca-v3.html',
  'english-v3.html',
  'german-v3.html',
  'italian-v3.html',
  'spanish-v3.html',
  'french-v3.html',
  'russian-v3.html',
  'arabic-v3.html',
  'chinese-v3.html',
  'admin.html',
];
const files = process.argv.slice(2).length ? process.argv.slice(2) : defaultFiles;
let ok = true;

function inlineScripts(html) {
  const scripts = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    const attrs = match[1];
    const type = attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i)?.[1]?.toLowerCase() || '';
    if (/\bsrc\s*=/i.test(attrs)) continue;
    if (type && !['text/javascript', 'application/javascript', 'module'].includes(type)) continue;
    if (!match[2].trim()) continue;
    scripts.push(match[2]);
  }
  return scripts;
}

for (const file of files) {
  const full = path.isAbsolute(file) ? file : path.join(root, file);
  const html = fs.readFileSync(full, 'utf8');
  const scripts = inlineScripts(html);
  const errors = [];

  scripts.forEach((script, i) => {
    try {
      new Function(script);
    } catch (e) {
      errors.push(`script ${i + 1}: ${e.message}`);
    }
  });

  if (errors.length) {
    ok = false;
    console.error(`x ${file}`);
    errors.forEach((e) => console.error(`  - ${e}`));
  } else {
    console.log(`ok ${file} (${scripts.length} inline script${scripts.length === 1 ? '' : 's'})`);
  }
}

process.exit(ok ? 0 : 1);
