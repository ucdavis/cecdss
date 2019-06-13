import React, { Component, createRef } from 'react';
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

interface State {
  hasLocation: boolean;
  lat: number;
  lng: number;
  zoom: number;
  showSidebar: boolean;
  selected: string;
}

export default class MapContainer extends React.Component<{}, State> {
  mapRef: any;
  constructor(props: {}) {
    super(props);
    this.state = {
      hasLocation: false,
      lat: 38.538762,
      lng: -121.75305,
      selected: 'home',
      showSidebar: false,
      zoom: 8
    };
    this.mapRef = createRef<Map>();
  }

  handleClick = (e: any) => {
    const map = this.mapRef.current;
    if (map != null) {
      this.setState({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        showSidebar: true
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
    const style = {
      height: window.innerHeight
    };
    const position: LatLngExpression = [this.state.lat, this.state.lng];
    return (
      <div style={style}>
        {this.state.showSidebar && (
          <div id='sidebar'>
            <h2>Select Refinery Parameters</h2>
          </div>
        )}
        <Map
          ref={this.mapRef}
          onClick={this.handleClick}
          
          // maxBounds={bounds}
          bounds={bounds}
        >
          <TileLayer attribution={attribution} url={mapboxTiles} />
          <Circle center={position} fillColor='blue' radius={10000} />
          <Marker position={position} />
        </Map>
      </div>
    );
  }
}
