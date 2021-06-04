const LOCAL_DEVEOPMENT_MODE = false;

export const serviceUrl = LOCAL_DEVEOPMENT_MODE
  ? 'http://localhost:3000/'
  : 'https://cecdss-backend.azurewebsites.net/';

// Run 20 years worth of data
// TODO: Eventually we want to run 30 full years
export const NUM_YEARS_TO_RUN = LOCAL_DEVEOPMENT_MODE ? 20 : 20;
