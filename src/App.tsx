import React from 'react';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './Shared/NotFound';
import { URL_COMPLETE_REGISTER_PAGE, URL_DASHBOARD_PAGE, URL_LANDING_PAGE, URL_MODEL_ID_PAGE, URL_MODEL_PAGE, URL_REROUTE_PAGE, URL_SETTINGS_PAGE } from './Resources/Constants';
import { MapContainerWrapper } from './Platform/App/Model/components/Map/MapContainer';
import Home from './Platform/Landing/Home';
import { AuthenticationGuard } from './Platform/App/Auth/AuthenticationGuard';
import Dashboard from './Platform/App/Dashboard'
import Register from './Platform/App/Register'
import Settings from './Platform/App/Settings'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`${URL_MODEL_PAGE}`} element={<MapContainerWrapper />} />
          <Route path={`${URL_MODEL_ID_PAGE}`} element={<MapContainerWrapper />} />
          <Route path={`${URL_LANDING_PAGE}`} element={<Home />} />
          <Route 
            path={`${URL_DASHBOARD_PAGE}`} 
            element={<AuthenticationGuard component={Dashboard} />}
          />
          <Route 
            path={`${URL_COMPLETE_REGISTER_PAGE}`} 
            element={<AuthenticationGuard component={Register} />}
          />
          <Route 
            path={`${URL_SETTINGS_PAGE}`} 
            element={<AuthenticationGuard component={Settings} />}
          />
          <Route path='*' element={<NotFound />} />
          <Route index element={<Navigate to={`${URL_REROUTE_PAGE}`} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
