import React, { Component, createRef } from 'react';
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';

interface State {
  // map controls
  lat: number;
  lng: number;
  showSidebar: boolean;
  zoom: number;

  // parameters
  capacity: string;
  radius: number;
  treeManagement: string;
  conversion: string;
  debtRatio: string;
  interest: string;
  debtTerm: string;
  lifeOfProject: string;
}

export default class MapContainer extends React.Component<{}, State> {
  mapRef: any;
  constructor(props: {}) {
    super(props);
    this.state = {
      lat: 38.538762,
      lng: -121.75305,
      showSidebar: true,
      zoom: 8,

      capacity: '5',
      radius: 0,
      treeManagement: 'Thin from below',
      conversion: 'Direct-combustion & steam turbine(3-50MW)',
      debtRatio: '2:1',
      interest: '12',
      debtTerm: '10',
      lifeOfProject: '25'
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
    const bounds: LatLngBoundsExpression = [[43.7, -125.5], [30, -105.5]];
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
            <div>
              <div>
                <h4>Forestry and Conversion</h4>
                <Label>Radius:</Label>
                <InputGroup>
                  <Input
                    type='text'
                    value={this.state.radius}
                    onChange={e => this._changeRadius(e.target.value)}
                  />
                  <InputGroupAddon addonType='append'>meters</InputGroupAddon>
                </InputGroup>
                <Input
                  type='range'
                  min={100}
                  max={50000}
                  value={this.state.radius}
                  onChange={e => this._changeRadius(e.target.value)}
                />
                <Label>Capacity of processing unit:</Label>
                <InputGroup>
                  <Input
                    type='text'
                    value={this.state.capacity}
                    onChange={e => this.setState({capacity: e.target.value})}
                  />
                  <InputGroupAddon addonType='append'>MW</InputGroupAddon>
                </InputGroup>
                <Label>Tree management</Label>
                <Input type='select' value={this.state.treeManagement} onChange={e => this.setState({treeManagement: e.target.value})}>
                  <option>Thin from below</option>
                  <option>Thin from above</option>
                </Input>
                <Label>Conversion</Label>
                <Input type='select' value={this.state.conversion} onChange={e => this.setState({conversion: e.target.value})}>
                  <option>Direct-combustion & steam turbine(3-50MW)</option>
                </Input>
              </div>
              <br />
              <hr />
              <div>
                <h4>Financing assumptions</h4>
                <Label>Debt Ratio</Label>
                  <Input
                    type='text'
                    value={this.state.debtRatio}
                    onChange={e => this.setState({debtRatio: e.target.value})}
                  />

                <Label>Interest on Return equity</Label>
                <InputGroup>
                  <Input
                    type='text'
                    value={this.state.interest}
                    onChange={e => this.setState({interest: e.target.value})}
                  />
                  <InputGroupAddon addonType='append'>%</InputGroupAddon>
                </InputGroup>
                <Label>Debt term</Label>
                <InputGroup>
                  <Input
                    type='text'
                    value={this.state.debtTerm}
                    onChange={e => this.setState({debtTerm: e.target.value})}
                  />
                  <InputGroupAddon addonType='append'>years</InputGroupAddon>
                </InputGroup>
                <Label>Life of project</Label>
                <InputGroup>
                  <Input
                    type='text'
                    value={this.state.lifeOfProject}
                    onChange={e => this.setState({lifeOfProject: e.target.value})}
                  />
                  <InputGroupAddon addonType='append'>years</InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>
        )}
        <Map
          ref={this.mapRef}
          onClick={this.handleClick}
          maxBounds={bounds}
          bounds={bounds}
        >
          <TileLayer attribution={attribution} url={mapboxTiles} />
          {this.state.radius > 0 && (
            <Circle
              center={position}
              fillColor='blue'
              radius={this.state.radius}
            />
          )}
          <Marker position={position} />
        </Map>
      </div>
    );
  }

  private _changeRadius = (radius: string) => {
    if (!radius) {
      this.setState({ radius: 0 });
      return;
    }
    const r = Number(radius);
    if (!r) {
      return;
    }
    this.setState({ radius: r });
  };
}
