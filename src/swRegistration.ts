interface IConfig {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
}

const isLocalhost: boolean = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    ),
);

export function register(config?: IConfig): void {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicURL = process.env.PUBLIC_URL;
    if (!publicURL) {
      console.error('No PUBLIC_URL found in environment variables.');
      return;
    }

    const publicUrl = new URL(publicURL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = '/sw.ts';

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config).catch(console.error);
      } else {
        registerValidSW(swUrl, config).catch(console.error);
      }
    });
  }
}

async function registerValidSW(swUrl: string, config?: IConfig): Promise<void> {
  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker) {
        installingWorker.onstatechange = () => {
          if (
            installingWorker.state === 'installed' &&
            navigator.serviceWorker.controller
          ) {
            console.log('New content is available...');
            config?.onUpdate?.(registration);
          } else {
            console.log('Content is cached for offline use.');
            config?.onSuccess?.(registration);
          }
        };
      }
    };
  } catch (error) {
    console.error('Error during service worker registration:', error);
  }
}

async function checkValidServiceWorker(
  swUrl: string,
  config?: IConfig,
): Promise<void> {
  try {
    const response = await fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    });
    const contentType = response.headers.get('content-type');
    if (
      response.status === 404 ||
      (contentType != null && !contentType.includes('javascript'))
    ) {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
      window.location.reload();
    } else {
      await registerValidSW(swUrl, config);
    }
  } catch (_error) {
    console.log(
      'No internet connection found. App is running in offline mode.',
    );
  }
}

export async function unregister(): Promise<void> {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
    } catch (error) {
      console.error('Error during service worker unregistration:', error);
    }
  }
}
