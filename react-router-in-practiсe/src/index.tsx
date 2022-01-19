import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

/*
  ЗАДАЧА:
  при переходе внутри приложения
  или по ссылке извне отобразить
  соответствующий адресу компонент,
  другими словами "страницу"
*/

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement);
