import React from 'react';
import avatar from './avatar.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <div>
          <h3>Юнисов Никита</h3>
          <p>г.Москва</p>
          <h3>Цели обучения</h3>
          <p>Получение фундаментальных знаний о React</p>
          <h3>Обо мне</h3>
          <p>Всем привет. Карьеру в IT начал полтора года назад. 
            На данный момент являюсь Middle Fullstack QA. 
            Пишу e2e тесты на фреймворке Playwright. Стек на проекте TS/React/MaterialUI/Vite.
            Логичным продолжением стало изучение Frontend с наставничеством от коллег. 
            Благодаря чему начал править некоторые баги на фронте, которые сам же и находил.
          </p>
        </div>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
