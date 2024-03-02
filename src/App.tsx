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
        </div>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
