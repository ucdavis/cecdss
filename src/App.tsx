import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
      </div>
    );
  }
}

export default App;
