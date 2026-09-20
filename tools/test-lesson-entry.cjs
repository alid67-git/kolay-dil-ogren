// Usage: NODE_PATH=<directory containing playwright> node tools/test-lesson-entry.cjs
// Mobile Chromium with Web Speech disabled reproduces the APK capability boundary.
const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const server = http.createServer((req, res) => {
  const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/kolay-dil-ogren\//, '/');
  const file = path.resolve(root, '.' + (name.endsWith('/') ? name + 'index.html' : name));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.html') ? 'text/html; charset=utf-8' : 'application/octet-stream');
    res.end(data);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({channel: 'msedge', headless: true});
    const context = await browser.newContext({viewport: {width: 393, height: 851}, isMobile: true, hasTouch: true, serviceWorkers: 'block', userAgent: 'Mozilla/5.0 (Linux; Android 13; wv) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36'});
    await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await context.addInitScript(() => { Object.defineProperty(window, 'speechSynthesis', {value: undefined}); });
    const base = `http://127.0.0.1:${server.address().port}/kolay-dil-ogren/`;
    for (const target of (process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'vi', 'th'])) {
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', err => errors.push(err.message));
      await page.goto(base + (target === 'th' ? 'tayca-v3.html' : `learn.html?t=${target}`));
      await page.waitForTimeout(800);
      assert.deepEqual(errors, [], `${target}: page initialization errors`);
      if (target !== 'th') assert.equal(await page.evaluate(() => KDO_TARGET), target);
      await page.locator('.lesson-card[data-num="1"]').tap();
      await page.locator('#detail-view.active .lesson-back-btn').waitFor({timeout: 8000}).catch(async err => {
        console.error(target, await page.locator('#detail-content').innerText(), errors);
        throw err;
      });
      assert.ok((await page.locator('#detail-content').innerText()).length > 100);
      if (target === 'vi') {
        assert.ok((await page.locator('#detail-content').textContent()).includes('Xin chào'));
        assert.ok(await page.locator('#detail-content .dialog-card').count() > 0);
        assert.ok((await page.locator('#detail-content .speak-en').first().textContent()).trim());
      }
      assert.deepEqual(errors, [], `${target}: lesson errors`);
      await page.locator('.lesson-back-btn').tap();
      await page.locator('#lessons-view.active').waitFor({timeout: 4000});
      if (target === 'vi') {
        for (let num = 2; num <= 20; num++) {
          await page.locator(`.lesson-card[data-num="${num}"]`).tap();
          await page.locator('#detail-view.active .lesson-back-btn').waitFor({timeout: 8000});
          assert.ok((await page.locator('#detail-content').innerText()).length > 100, `vi lesson ${num}`);
          await page.locator('.lesson-back-btn').tap();
        }
        console.log('PASS vi: all 20 lesson cards open and render');
      }
      await page.setViewportSize({width: 851, height: 393});
      await page.locator('.lesson-card[data-num="1"]').tap();
      await page.locator('#detail-view.active .lesson-back-btn').waitFor({timeout: 8000});
      assert.deepEqual(errors, [], `${target}: portrait and landscape errors`);
      console.log(`PASS ${target}: initialize without Web Speech, tap lesson, render, return`);
      await page.close();
    }
  } finally { if (browser) await browser.close(); server.close(); }
})().catch(err => { console.error(err); process.exitCode = 1; });
