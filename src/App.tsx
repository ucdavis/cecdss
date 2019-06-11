import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Map</h2>
        </div>
        <MapContainer />
      </div>
    );
  }
}

export default App;
