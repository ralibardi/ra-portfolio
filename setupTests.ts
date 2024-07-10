import '@testing-library/jest-dom';
import { initializeI18n } from './src/app/i18n/config';

(async () => {
  await initializeI18n();
})()
  .then()
  .catch((error) => {
    console.error('Error initializing i18next:', error);
  });
