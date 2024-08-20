const LOCAL_DEVEOPMENT_MODE = false;

export const serviceUrl = LOCAL_DEVEOPMENT_MODE
  ? 'http://localhost:3000/'
  : 'https://cecdss-backend.azurewebsites.net/';
