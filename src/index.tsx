import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Sandwich from './Sandwich/Sandwich';
// eslint-disable-next-line import/no-named-as-default
import RandomActivity from './RandomActivity/RandomActivity';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Sandwich />
    <RandomActivity />
  </React.StrictMode>
);
