import React from 'react';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MapContainerComponent } from './Model/components/Map/MapContainer';
import Home from './Landing/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './Shared/NotFound';
import { URL_LANDING_PAGE, URL_MODEL_PAGE, URL_REROUTE_PAGE } from './Resources/Constants';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`${URL_MODEL_PAGE}`} element={<MapContainerComponent />} />
          <Route path={`${URL_LANDING_PAGE}`} element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route index element={<Navigate to={`${URL_REROUTE_PAGE}`} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
