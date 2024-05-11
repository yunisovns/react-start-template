import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../localization/settings';

export const LangSwitcherButton = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <>
      <button
        onClick={toggleLanguage}
        className=" flex h-6 justify-center rounded-full bg-white text-center hover:cursor-pointer dark:bg-slate-800 dark:text-white"
      >
        {language}
      </button>
      <p>{t('welcome_message')}</p>
    </>
  );
};
