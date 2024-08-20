import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Platform/Landing/Home';
import { URL_LANDING_PAGE, URL_MODEL_ID_PAGE, URL_MODEL_PAGE, URL_REROUTE_PAGE } from './Resources/Constants';
import NotFound from './Shared/NotFound';
import './Styles/App.css';
import { MapContainerWrapper } from './Platform/Model/components/Map/MapContainer';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`${URL_MODEL_PAGE}`} element={<MapContainerWrapper />} />
          <Route path={`${URL_MODEL_ID_PAGE}`} element={<MapContainerWrapper />} />
          <Route path={`${URL_LANDING_PAGE}`} element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route index element={<Navigate to={`${URL_REROUTE_PAGE}`} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
