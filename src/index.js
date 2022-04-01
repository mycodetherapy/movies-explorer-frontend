import React from 'react';
//import ReactDOM from 'react-dom';
import createRoot from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
