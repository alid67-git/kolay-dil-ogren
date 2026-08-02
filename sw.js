const CACHE = 'kdo-v3';
const CORE = [
  '/kolay-dil-ogren/',
  '/kolay-dil-ogren/index.html',
  '/kolay-dil-ogren/learn.html',
  '/kolay-dil-ogren/manifest.json',
  '/kolay-dil-ogren/icon-192.png',
  '/kolay-dil-ogren/icon-512.png',
  '/kolay-dil-ogren/shared/kdo-version.js',
  '/kolay-dil-ogren/shared/kdo-lang-registry.js',
  '/kolay-dil-ogren/shared/kdo-hub-picker.js',
  '/kolay-dil-ogren/shared/kdo-ui-i18n.js',
  '/kolay-dil-ogren/shared/kdo-ui-helpers.js',
  '/kolay-dil-ogren/shared/kdo-ui-extra.js',
  '/kolay-dil-ogren/shared/kdo-platform-init.js',
  '/kolay-dil-ogren/shared/kdo-geo-locale.js',
  '/kolay-dil-ogren/shared/kdo-analytics.js',
  '/kolay-dil-ogren/shared/kdo-analytics-config.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (!url.origin.includes('github.io') && !url.hostname.includes('localhost')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
