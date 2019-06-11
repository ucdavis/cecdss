import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';

type State = {
  lat: number;
  lng: number;
  zoom: number;
};

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 38.538762,
    lng: -121.75305,
    zoom: 8
  };

  render() {
    const bounds: LatLngBoundsExpression = [[43.7, -125.5], [30, -112.5]];
    const accessToken =
      'pk.eyJ1IjoibGFob2xzdGVnZSIsImEiOiJjandzYjZjYzkwMjRxNDlwY21tNjJqbDN4In0.dyqHfQbzFrVPs2MP1EiaCA';
    const mapboxTiles =
      'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' +
      accessToken;
    const attribution =
      '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
      
    const position: LatLngExpression = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom} maxBounds={bounds}>
        <TileLayer attribution={attribution} url={mapboxTiles} />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}
