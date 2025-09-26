/*
  Service Worker per caching efficiente.
  Strategie:
  - HTML/documenti: network-first (fresco), fallback a cache.
  - CSS/JS/font/immagini: stale-while-revalidate (risposte istantanee + aggiornamento in background).
  - Pulizia cache su activate con versioning.
*/

const VERSION = 'v2025-09-01';
const PRECACHE = `precache-${VERSION}`;
const RUNTIME_STATIC = `static-${VERSION}`;
const RUNTIME_PAGES = `pages-${VERSION}`;

// Asset minimi per il "shell" dell'app
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/css/theme.min.css',
  '/js/app.bundle.min.js'
];

self.addEventListener('install', event => {
  // Attiva subito la nuova SW (evita attesa)
  self.skipWaiting();
  event.waitUntil(
    caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS)).catch(() => undefined)
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      // Elimina vecchie cache non corrispondenti alla versione corrente
      const keys = await caches.keys();
      await Promise.all(
        keys.map(key => {
          if (key !== PRECACHE && key !== RUNTIME_STATIC && key !== RUNTIME_PAGES) {
            return caches.delete(key);
          }
        })
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  // Solo GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Lascia passare richieste di tracking/analytics o cross-origin per semplicità
  if (!sameOrigin) return;

  // Documenti/HTML: network-first con fallback a cache
  if (req.mode === 'navigate' || (req.destination === 'document') || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(req, RUNTIME_PAGES));
    return;
  }

  // Statici: CSS/JS/Font/Immagini -> stale-while-revalidate
  const path = url.pathname;
  const isStyle = /\.(css)$/.test(path) || req.destination === 'style';
  const isScript = /\.(js)$/.test(path) || req.destination === 'script';
  const isFont = /\.(woff2?|ttf|otf|eot)$/.test(path) || req.destination === 'font';
  const isImage = /\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(path) || req.destination === 'image';

  if (isStyle || isScript || isFont || isImage || path.startsWith('/assets/') || path.startsWith('/css/') || path.startsWith('/js/')) {
    event.respondWith(staleWhileRevalidate(req, RUNTIME_STATIC));
    return;
  }
  // Default: prova rete, fallback cache
  event.respondWith(networkFirst(req, RUNTIME_STATIC));
});

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(request);
    // Clona e metti in cache solo risposte OK
    if (res && res.ok) {
      cache.put(request, res.clone());
    }
    return res;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    // Fallback di base per navigazioni alla root
    if (request.mode === 'navigate') {
      const fallback = await caches.match('/index.html');
      if (fallback) return fallback;
    }
    throw err;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedPromise = cache.match(request);
  const networkPromise = fetch(request)
    .then(res => {
      if (res && res.ok) {
        cache.put(request, res.clone());
      }
      return res;
    })
    .catch(() => undefined);

  const cached = await cachedPromise;
  return cached || (await networkPromise) || fetch(request);
}
