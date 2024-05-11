import { default as i18n } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const LANG_STORAGE_KEY = 'lang';

export enum Locale {
  ru = 'ru',
  en = 'en',
}


i18n
  .use(HttpApi) // Загружать переводы с сервера
  .use(LanguageDetector) // Определять язык браузера пользователя
  .use(initReactI18next) // Инициализировать react-i18next
  .init({
    supportedLngs: ['en', 'ru'], // Поддерживаемые языки
    lng: localStorage.getItem(LANG_STORAGE_KEY) || Locale.ru,
    fallbackLng: 'en', // Язык по умолчанию
    detection: {
      // Опции для определения языка
    },
    resources: {
      en: {
        translation: {
          toggle_language: 'Переключить на русский',
          welcome_message: 'Welcome to our application!',
        },
      },
      ru: {
        translation: {
          toggle_language: 'Switch to English',
          welcome_message: 'Добро пожаловать в наше приложение!',
        },
      },

      // backend: {
      // Опции для загрузки переводов
      //   loadPath: '/localization/{{lng}}/{{ns}}.json', // Путь к файлам переводов
      // },
      // Остальные настройки...
    },
  });

export default i18n;

// import  {default as i18n, InitOptions } from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import { resources } from './resources';

// export const LANG_STORAGE_KEY = 'lang';

// export enum Locale {
//   ru = 'ru',
//   en = 'en',
// }

// i18n.use(initReactI18next).init({
//   resources,
//   lng: localStorage.getItem(LANG_STORAGE_KEY) || Locale.ru,

//   interpolation: {
//     escapeValue: false,
//   },
// } as InitOptions);

// export default i18n;
