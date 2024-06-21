import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './en/translation.json';

async function initializeI18n() { // Make the function async
  await i18next.use(initReactI18next).init({
    lng: 'en', 
    debug: false,
    resources: {
      en: {
        translation,
      },
    },
  })
}

initializeI18n().then(() => {
  console.log('i18next initialized successfully');
}).catch((error) => {
  console.error('Error initializing i18next:', error);
}); // Call the async function
