import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Container/Context/addContext';
import { BrowserRouter as Router } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <React.StrictMode>
      <Router>
        <CartProvider>
          <App />
        </CartProvider>
      </Router>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
