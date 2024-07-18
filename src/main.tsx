import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import App from '@app/app';
import ErrorBoundary from '@components/error-boundary';
import { ThemeProvider } from '@contexts/theme-context';

import '@assets/index.scss';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../public/sw.ts')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function (error) {
      console.log('Service Worker registration failed:', error);
    });
}
