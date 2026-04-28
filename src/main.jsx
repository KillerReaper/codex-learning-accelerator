import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {
  clearMemory,
  getMemory,
  processNexisInput,
  saveMemory,
} from './lib/nexisMemory';
import { parseNexisIntent } from './lib/nexisIntentParser';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

window.parseNexisIntent = parseNexisIntent;
window.processNexisInput = processNexisInput;
window.saveMemory = saveMemory;
window.getMemory = getMemory;
window.clearMemory = clearMemory;
