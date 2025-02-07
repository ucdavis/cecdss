# CEC Decision Support Web Application

## Local setup

1. Make sure you are using node v18
1. `npm install` the dependencies

## Choose your backend

This web front-end relies on the backend project [https://github.com/ucdavis/cecdss-backend](https://github.com/ucdavis/cecdss-backend) to be running and accessible.  By default the backend is expected to be running at localhost:3000 but this can be changed in [https://github.com/ucdavis/cecdss/blob/master/src/components/Shared/config.ts](https://github.com/ucdavis/cecdss/blob/master/src/components/Shared/config.ts). You can point to the production backend by making `LOCAL_DEVELOPMENT_MODE = false`.

## Running the app

To run locally on port 3001 (the [backend app](https://github.com/ucdavis/cecdss-backend) will be running on 3000)

`npm run dev`

## Documentation

Developer Guide is available [here.](https://github.com/ucdavis/cecdss/wiki/Developer-Guide-V2)

Application User Guide is available [here.](https://github.com/ucdavis/cecdss/wiki/CEC-DSS-Web-Application-User's-Guide)

## Other options for advance users

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
