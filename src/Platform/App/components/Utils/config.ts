let REACT_APP_LOCAL_DEVELOPMENT_MODE = false

export const serviceUrl = REACT_APP_LOCAL_DEVELOPMENT_MODE
  ? 'http://localhost:3000/'
  : 'https://cecdss-backend-v2.azurewebsites.net/';
