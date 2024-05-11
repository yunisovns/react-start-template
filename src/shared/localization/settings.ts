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
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ru'],
    lng: localStorage.getItem(LANG_STORAGE_KEY) || Locale.ru,
    fallbackLng: 'en',
    detection: {},
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
    },
  });

export default i18n;
