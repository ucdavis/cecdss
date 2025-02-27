import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Platform/Landing/Home';
import { URL_LANDING_PAGE, URL_MODEL_ID_PAGE, URL_MODEL_PAGE, URL_REROUTE_PAGE } from './Resources/Constants';
import NotFound from './Shared/NotFound';
import { AllProviders } from './Platform/Context';
import { MapContainerWrapper } from './Platform/App/components/Map/MapContainer';
import './Styles/App.css';

const REACT_APP_GA_MEASUREMENT_ID = 'G-R6MSB6V25R';

const App = () => {

  useEffect(() => {
    ReactGA.initialize(REACT_APP_GA_MEASUREMENT_ID);
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`${URL_MODEL_PAGE}`} element={<MapContainerWrapper />} />
          <Route
            path={`${URL_MODEL_ID_PAGE}`}
            element={<MapContainerWrapper />}
          />
          <Route
            path={`${URL_LANDING_PAGE}`}
            element={<MapContainerWrapper />}
          />
          <Route path='*' element={<NotFound />} />
          <Route index element={<MapContainerWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <AllProviders>
      <App />
    </AllProviders>
  )
};

export default AppWrapper;
