import React, { createRef, useState, useEffect } from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Circle,
  withLeaflet,
  GeoJSON
} from 'react-leaflet';
import L, { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { HexbinLayer } from 'react-leaflet-d3';
import { MapSidebar } from './MapSidebar';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { Inputs } from '../../models/Types';
const WrappedHexbinLayer: any = withLeaflet(HexbinLayer);
const geoJsonParser = require('geojson');
const dataFile: any[] = require('../../data/lemma_json.json');

const maxValue = dataFile.length;
const data = geoJsonParser.parse(dataFile, {
  Point: ['attributes.latitude', 'attributes.longitude']
});
console.log(data);

console.log(dataFile);

interface IProps {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void;
  submitInputs: () => void;
}

export const MapContainer = (props: IProps) => {
  console.log(props);
  const [mapState, setMapState] = useState({ lat: 38.538762, lng: -121.75305 });
  const [showSidebar, toggleSidebar] = useState(false);

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

  return (
    <div style={style}>
      {showSidebar && (
        <MapSidebar
          inputs={props.inputs}
          setInputs={props.setInputs}
          submitInputs={props.submitInputs}
        />
      )}
      <Map
        ref={mapRef}
        onClick={(e: any) => {
          if (!showSidebar) {
            toggleSidebar(true);
          }
          setMapState(e.latlng);
        }}
        maxBounds={bounds}
        bounds={bounds}
      >
        <TileLayer attribution={attribution} url={mapboxTiles} />
        <HeatmapLayer
          fitBoundsOnLoad={false}
          fitBoundsOnUpdate={false}
          points={dataFile}
          longitudeExtractor={(m: any) => m.attributes.longitude}
          latitudeExtractor={(m: any) => m.attributes.latitude}
          intensityExtractor={(m: any) =>
            ((m.attributes.BPH_GE_3_C +
              m.attributes.DBPH_GE_25 +
              m.attributes.SBPH_GE_25) /
              maxValue) *
            50
          }
          radius={40}
          blur={60}
          max={0.015}
        />
        {/* <WrappedHexbinLayer
          data={data}
        /> */}
        {/* <GeoJSON data={data} /> */}
        {props.inputs.ExampleParameters.radius > 0 && (
          <Circle
            center={position}
            fillColor='blue'
            radius={props.inputs.ExampleParameters.radius}
          />
        )}
        <Marker position={position} />
      </Map>
    </div>
  );
};
