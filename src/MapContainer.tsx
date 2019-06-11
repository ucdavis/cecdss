import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';

type State = {
  lat: number;
  lng: number;
  zoom: number;
  bounds: LatLngBoundsExpression;
};

const outer: LatLngBoundsExpression = [[43.7, -125.5], [30, -112.5]];
const inner = [[49.505, -2.09], [53.505, 2.09]];

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 38.538762,
    lng: -121.75305,
    zoom: 8,
    bounds: outer
  };

  onClickOuter = () => {
    this.setState({ bounds: outer });
  };

  render() {

    const mapboxTiles =
      'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' +
      accessToken;
    const attribution =
      '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const position: LatLngExpression = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} maxBounds={this.state.bounds}>
        <TileLayer attribution={attribution} url={mapboxTiles} />
        <Rectangle
          bounds={outer}
          color={this.state.bounds === outer ? 'red' : 'white'}
          onClick={this.onClickOuter}
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}
