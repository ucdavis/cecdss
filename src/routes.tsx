import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import { MapContainer } from './components/Map/MapContainer';
import { ResultsContainer } from './components/Results/ResultsContainer';

export const routes = (
  <App>
    <Route exact path='/' component={MapContainer} />
    <Route path='/results' component={ResultsContainer} />
  </App>
);
