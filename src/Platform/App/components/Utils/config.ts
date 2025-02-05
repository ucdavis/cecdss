export const serviceUrl =
  process.env.REACT_APP_LOCAL_DEVELOPMENT_MODE === 'true'
    ? 'http://localhost:3000/'
    : process.env.REACT_APP_BACKEND_BASE_API;
