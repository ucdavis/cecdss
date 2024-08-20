import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/Landing.css';
import './Styles/index.css';
import * as serviceWorker from './serviceWorker';
import { AppContextProvider } from './Context/AppContextProvider';

const rootElement = document.getElementById('root');

console.log(process.env.AUTH0_DOMAIN)

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </React.StrictMode>
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
} else {
  console.error('Root element not found');
}
