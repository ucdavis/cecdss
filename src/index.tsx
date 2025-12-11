import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './App';
import './Styles/Landing.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
  serviceWorker.unregister();
} else {
  console.error('Root element not found');
}
