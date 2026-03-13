const CACHE_NAME = 'v1';
const ASSETS = [
  '/atividades-escolares/',
  '/atividades-escolares/index.html',
  '/atividades-escolares/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
