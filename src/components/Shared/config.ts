const LOCAL_DEVEOPMENT_MODE = true;

export const serviceUrl = LOCAL_DEVEOPMENT_MODE
  ? 'http://localhost:3000/'
  : 'https://cecdss-backend.azurewebsites.net/';