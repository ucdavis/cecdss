import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import './Styles/Landing.css'
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';

const rootElement = document.getElementById('root');

console.log(process.env.AUTH0_DOMAIN)

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Auth0Provider
        domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
        clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
          scope: "read:current_user update:current_user_metadata"
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
} else {
  console.error('Root element not found');
}
