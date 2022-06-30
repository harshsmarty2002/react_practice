import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Result from './Result';
ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Login/>
    <Result/>
  </React.StrictMode>,
  document.getElementById('root')
);

