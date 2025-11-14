import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hook_ControlledButtonState from './Counter';
import EmojeeCounter from './EmojeeCounters'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic='Love'/>
    <EmojeeCounter pic='sad'/>
    <EmojeeCounter pic='like'/>
  </React.StrictMode>
);
reportWebVitals(console.log);
