#!/usr/bin/env node
/** Tam platform derlemesi: registry → learn.html → sürüm senkronu */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const steps = [
  'node tools/gen-lang-registry.mjs',
  'node tools/build-learn-app.mjs',
  'node tools/sync-platform-version.mjs',
];

for (const cmd of steps) {
  console.log('>', cmd);
  execSync(cmd, { cwd: root, stdio: 'inherit' });
}
console.log('Build complete.');
