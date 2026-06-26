#!/usr/bin/env node
/** Validate main script blocks in *-v3.html apps */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = ['italian-v3.html', 'spanish-v3.html', 'french-v3.html', 'german-v3.html'];
let ok = true;

for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const s = html.slice(html.lastIndexOf('<script>') + 8, html.lastIndexOf('</script>'));
  try {
    new Function(s);
    console.log(`✓ ${file}`);
  } catch (e) {
    ok = false;
    console.error(`✗ ${file}: ${e.message}`);
  }
}

process.exit(ok ? 0 : 1);
