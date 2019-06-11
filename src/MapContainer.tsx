import React, { Component, createRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';

interface State {
  hasLocation: boolean;
  lat: number;
  lng: number;
  zoom: number;
};

export default class MapContainer extends React.Component<{}, State> {
  mapRef: any;
  constructor(props: {}) {
    super(props);
    this.state = {
      hasLocation: false,
      lat: 38.538762,
      lng: -121.75305,
      zoom: 8
    };
    this.mapRef = createRef<Map>();
  }

  handleClick = (e: any) => {
    const map = this.mapRef.current;
    if (map != null) {
      this.setState({
        lat: e.latlng.lat,
        lng: e.latlng.lng
      });
    }
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
      <Map
        ref={this.mapRef}
        onClick={this.handleClick}
        center={position}
        maxBounds={bounds}
        bounds={bounds}
      >
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
