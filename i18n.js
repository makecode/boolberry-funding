import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import LocalStorage from 'source/framework/LocalStorage';
import { LANG_KEY } from 'source/framework/constants';
// import LanguageDetector from 'i18next-browser-languagedetector';
let initLanguage = LocalStorage.get(LANG_KEY);
if (!initLanguage) {
  initLanguage = 'en';
}

i18n
  .use(XHR)
  .use(Cache)
  .init({
    lng: initLanguage,
    fallbackLng: 'en',
    wait: true,

    ns: ['common'],
    defaultNS: 'common',

    debug: (process.env.NODE_ENV === 'development'),

    cache: {
      enabled: false
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },

    interpolation: {
      escapeValue: false, // not needed for react
      formatSeparator: ',',
      format: (value, format) => {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }

        return value;
      }
    }
  });

  export default i18n;