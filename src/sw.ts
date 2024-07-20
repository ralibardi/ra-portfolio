import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope;
declare let process: {
  env: {
    PUBLIC_URL: string;
  };
};

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = /\/[^/?]+\.[^/]+$/;
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/_')) {
      return false;
    }
    if (RegExp(fileExtensionRegexp).exec(url.pathname)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html'),
);

registerRoute(
  ({ url }: { url: URL }) =>
    (url.origin === self.location.origin &&
      (url.pathname.endsWith('.png') || url.pathname.endsWith('.json'))) ||
    url.href.includes('kit.fontawesome.com'),
  new StaleWhileRevalidate({
    cacheName: 'files',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
);

self.addEventListener('message', (event: ExtendableMessageEvent) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting().catch(console.error);
  }
});
