import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/login/App';
import Dashboard from './pages/dashboard/index';
import Router from "./router"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);


