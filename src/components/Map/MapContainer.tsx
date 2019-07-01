import React, { createRef, useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup, Circle, withLeaflet, GeoJSON} from 'react-leaflet';
import L, { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { HexbinLayer } from 'react-leaflet-d3';
import { MapSidebar } from './MapSidebar';
const WrappedHexbinLayer: any = withLeaflet(HexbinLayer);
const geoJsonParser = require('geojson');
const dataFile = require('../../data/lemma_json.json');

const data = geoJsonParser.parse(dataFile, {Point: ['attributes.latitude', 'attributes.longitude']});
console.log(data);

export interface Parameters {
  capacity: string;
  radius: number;
  treeManagement: string;
  conversion: string;
  debtRatio: string;
  interest: string;
  debtTerm: string;
  lifeOfProject: string;
}

export const MapContainer = () => {
  const [mapState, setMapState] = useState({ lat: 38.538762, lng: -121.75305 });
  const [showSidebar, toggleSidebar] = useState(true);
  const [parameters, setParameters] = useState({
    capacity: '5',
    radius: 100,
    treeManagement: 'Thin from below',
    conversion: 'Direct-combustion & steam turbine(3-50MW)',
    debtRatio: '2:1',
    interest: '12',
    debtTerm: '10',
    lifeOfProject: '25'
  });

  let mapRef: any = createRef<Map>();

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
  const position: LatLngExpression = mapState;

  // const data: any = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-121.75305, 38.538762]
  //       },
  //       properties: { prop0: 'value0', prop1: { this: 'that' } }
  //     },
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-110, 43]
  //       },
  //       properties: { prop0: 'value0', prop1: { this: 'that' } }
  //     },
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-115, 40]
  //       },
  //       properties: { prop0: 'value0', prop1: { this: 'that' } }
  //     },
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-110, 34]
  //       },
  //       properties: { prop0: 'value0', prop1: { this: 'that' } }
  //     },
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-120, 42]
  //       },
  //       properties: { prop0: 'value0', prop1: { this: 'that' } }
  //     }
  //   ]
  // };

  return (
    <div style={style}>
      {showSidebar && (
        <MapSidebar parameters={parameters} setParameters={setParameters} />
      )}
      <Map
        ref={mapRef}
        onClick={(e: any) => setMapState(e.latlng)}
        maxBounds={bounds}
        bounds={bounds}
      >
        <TileLayer attribution={attribution} url={mapboxTiles} />
        <WrappedHexbinLayer
          data={data}
        />
        {/* <GeoJSON data={data} /> */}
        {parameters.radius > 0 && (
          <Circle
            center={position}
            fillColor='blue'
            radius={parameters.radius}
          />
        )}
        <Marker position={position} />
      </Map>
    </div>
  );
};
