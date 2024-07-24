import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
} else {
  console.error('Root element not found');
}
