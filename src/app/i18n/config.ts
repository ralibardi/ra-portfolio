import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishTranslation from './en/translation.json';
import spanishTranslation from './es/translation.json';

export async function initializeI18n() {
  await i18next.use(initReactI18next).init({
    lng: 'en',
    debug: false,
    resources: {
      en: {
        translation: englishTranslation,
      },
      es: {
        translation: spanishTranslation,
      },
    },
  });

  return i18next;
}

initializeI18n()
  .then()
  .catch((error) => {
    console.error('Error initializing i18next:', error);
  });
