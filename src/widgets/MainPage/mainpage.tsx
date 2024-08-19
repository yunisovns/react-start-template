import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizationInitiator } from '../../shared/localization/LocalizationInitiator';

export const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <LocalizationInitiator />
      <div className="text-1xl m-5 flex h-1/2 flex-col text-center">
        <p>{t('welcome_message')}</p>
        <h3 className="italic">Юнисов Никита</h3>
        <p>г.Москва</p>
        <h3>Цели обучения</h3>
        <p>Получение фундаментальных знаний о React</p>
        <h3>Обо мне</h3>
        <p>
          Всем привет. Карьеру в IT начал полтора года назад. На данный момент являюсь Middle Fullstack QA. Пишу e2e
          тесты на фреймворке Playwright. Стек на проекте TS/React/MaterialUI/Vite. Логичным продолжением стало изучение
          Frontend с наставничеством от коллег. Благодаря чему начал править некоторые баги на фронте, которые сам же и
          находил.
        </p>
      </div>
    </>
  );
};
