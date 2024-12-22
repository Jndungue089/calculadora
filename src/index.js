import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyes from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyes />
    <App />
  </React.StrictMode>
);
