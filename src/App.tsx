import React from 'react';
import ModalInputButton from './shared/ModalInputButton/ModalInputButton';
import { BaseLayout } from './shared/layouts/BaseLayout';

function App() {
  return (
    <div>
      <BaseLayout>
        <ModalInputButton />
      </BaseLayout>
      <body className="flex flex-col items-center justify-center">
        <div className="text-1xl m-5 w-1/2 text-center">
          <h3 className="italic">Юнисов Никита</h3>
          <p>г.Москва</p>
          <h3>Цели обучения</h3>
          <p>Получение фундаментальных знаний о React</p>
          <h3>Обо мне</h3>
          <p>
            Всем привет. Карьеру в IT начал полтора года назад. На данный момент являюсь Middle Fullstack QA. Пишу e2e
            тесты на фреймворке Playwright. Стек на проекте TS/React/MaterialUI/Vite. Логичным продолжением стало
            изучение Frontend с наставничеством от коллег. Благодаря чему начал править некоторые баги на фронте,
            которые сам же и находил.
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
