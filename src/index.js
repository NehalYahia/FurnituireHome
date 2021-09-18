import React from 'react';
import ReactDOM from 'react-dom';
// import "./scss/bootstrap.scss";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './test.scss'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();