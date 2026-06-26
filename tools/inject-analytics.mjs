#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const snippet = `<script src="shared/kdo-analytics-config.js"></script>\n<script src="shared/kdo-analytics.js"></script>\n`;

const files = ['index.html', ...fs.readdirSync(root).filter(f => f.endsWith('-v3.html'))];

for (const file of files) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, 'utf8');
  if (s.includes('kdo-analytics.js')) {
    console.log('Skip (already):', file);
    continue;
  }
  if (!s.includes('</body>')) {
    console.warn('No </body>:', file);
    continue;
  }
  s = s.replace('</body>', snippet + '</body>');
  fs.writeFileSync(fp, s);
  console.log('Injected:', file);
}
