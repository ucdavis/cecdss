import React, { createRef, useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Circle } from 'react-leaflet';
import L, { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { MapSidebar } from './MapSidebar';
import { FrcsInputs } from '../../models/Types';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';

interface IProps {
  frcsInputs: FrcsInputs;
  setFrcsInputs: (inputs: FrcsInputs) => void;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP | InputModGP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
  submitInputs: (lat: number, lng: number) => void;
}

export const MapContainer = (props: IProps) => {
  console.log(props);
  const [mapState, setMapState] = useState({
    lat: 39.644308,
    lng: -121.553971
  });
  let mapRef: any = createRef<Map>();

  const bounds: LatLngBoundsExpression = [
    [43.7, -125.5],
    [30, -105.5]
  ];
  const accessToken =
    'pk.eyJ1IjoibGF1cmFob2xzdGVnZSIsImEiOiJjazZnc3U3c3gybWw5M25xamc2M2RnNTl2In0.Zcg_-cmP110dT_JzIN3QdA';
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
      <MapSidebar
        {...props}
        submitInputs={() => props.submitInputs(mapState.lat, mapState.lng)}
      />
      <Map
        ref={mapRef}
        onClick={(e: any) => {
          setMapState(e.latlng);
        }}
        maxBounds={bounds}
        bounds={bounds}
      >
        <TileLayer attribution={attribution} url={mapboxTiles} />

        {props.frcsInputs.radius > 0 && (
          <Circle
            center={position}
            fillColor='blue'
            radius={props.frcsInputs.radius * 1000}
          />
        )}
        <Marker position={position} />
      </Map>
    </div>
  );
};
