const CACHE_NAME = 'ra-protfolio-cache';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return the response from the cache
      if (response) {
        return response;
      }

      // Cache miss - fetch from the network
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response to cache it (responses are streams)
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          void cache.put(event.request, responseToCache);
        }).catch((error) => {
          console.error('Error initializing service worker:', error);
        });

        return response;
      });
    })
  );
});

// Add other event listeners as needed (e.g., 'activate')
