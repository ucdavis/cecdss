import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// Get the root element
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a root
  const root = ReactDOM.createRoot(rootElement);

  // Initial render
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
} else {
  console.error('Root element not found');
}
