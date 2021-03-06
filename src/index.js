import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import './style/font/stylesheet.css';
import './style/main.scss';
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter>
  <div className="container">
  <Header/>
    <App />
    <Footer/>
  </div>
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
