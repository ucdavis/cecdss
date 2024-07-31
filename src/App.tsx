import React from 'react';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MapContainerComponent } from './App/Model/components/Map/MapContainer';
import Home from './App/Landing/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './Shared/NotFound';
import { URL_LANDING_PAGE, URL_LOGIN_PAGE, URL_MODEL_PAGE, URL_REGISTER_PAGE, URL_REROUTE_PAGE } from './Resources/Constants';
import Login from './App/Landing/Login/Login';
import Register from './App/Landing/Register/Register';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`${URL_MODEL_PAGE}`} element={<MapContainerComponent />} />
          <Route path={`${URL_LANDING_PAGE}`} element={<Home />} />
          <Route path={`${URL_LOGIN_PAGE}`} element={<Login />} />
          <Route path={`${URL_REGISTER_PAGE}`} element={<Register />} />
          <Route path='*' element={<NotFound />} />
          <Route index element={<Navigate to={`${URL_REROUTE_PAGE}`} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
