import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './en/translation.json';

export async function initializeI18n() {
  await i18next.use(initReactI18next).init({
    lng: 'en',
    debug: false,
    resources: {
      en: {
        translation,
      },
    },
  });
}

initializeI18n()
  .then()
  .catch((error) => {
    console.error('Error initializing i18next:', error);
  });
