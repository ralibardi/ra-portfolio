const CACHE_NAME = 'ra-protfolio-cache';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        caches
          .open(CACHE_NAME)
          .then((cache) => {
            void cache.put(event.request, responseToCache);
          })
          .catch((error) => {
            console.error('Error initializing service worker:', error);
          });

        return response;
      });
    }),
  );
});
