export const serviceUrl = process.env.APPSETTING_SERVICE_URL
  ? process.env.APPSETTING_SERVICE_URL
  : 'http://localhost:3000/';
// export const serviceUrl = 'https://cecdss-backend.azurewebsites.net/';

// Run 20 years worth of data
// TODO: Eventually we want to run 30 full years
export const NUM_YEARS_TO_RUN = process.env.APPSETTING_NUM_YEARS_TO_RUN
  ? process.env.APPSETTING_NUM_YEARS_TO_RUN
  : 20;
