import React, { createRef, useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Circle } from 'react-leaflet';
import L, { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { MapSidebar } from './MapSidebar';
import {
  FrcsInputs,
  TechnoeconomicModels,
  YearlyResult,
  RequestParams
} from '../../models/Types';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { InputModGPOClass } from '../../models/GPOClasses';
import { InputModCHPClass } from '../../models/CHPClasses';
import { InputModGPClass } from '../../models/GPClasses';
import { ResultsContainer } from '../Results/ResultsContainer';

export const MapContainer = () => {
  const [loading, toggleLoading] = useState<boolean>(false);
  const frcsInputsExample: FrcsInputs = {
    system: 'Ground-Based Mech WT',
    radius: 15,
    treatmentid: 1,
    dieselFuelPrice: 3.882
  };
  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);

  const [teaInputs, setTeaInputs] = useState<
    InputModGPO | InputModCHP | InputModGP
  >(new InputModGPOClass());
  const [teaModel, setTeaModel] = useState(
    TechnoeconomicModels.genericPowerOnly
  );
  useEffect(() => {
    // when teaModel changes, change default values
    if (teaModel === TechnoeconomicModels.genericPowerOnly) {
      setTeaInputs(new InputModGPOClass());
    }
    if (teaModel === TechnoeconomicModels.genericCombinedHeatAndPower) {
      setTeaInputs(new InputModCHPClass());
    }
    if (teaModel === TechnoeconomicModels.gasificationPower) {
      setTeaInputs(new InputModGPClass());
    }
  }, [teaModel]);

  const [mapState, setMapState] = useState({
    lat: 39.727116,
    lng: -121.429053
  });
  let mapRef: any = createRef<Map>();

  const bounds: LatLngBoundsExpression = [
    [40.1, -122.5],
    [39.2, -120]
  ];

  const [results, setResults] = useState<YearlyResult[]>();

  const submitInputs = async (lat: number, lng: number) => {
    toggleLoading(true);
    const reqBody: RequestParams = {
      lat: lat,
      lng: lng,
      radius: frcsInputs.radius,
      system: frcsInputs.system,
      treatmentid: frcsInputs.treatmentid,
      dieselFuelPrice: frcsInputs.dieselFuelPrice,
      teaModel: teaModel,
      teaInputs: teaInputs
    };
    console.log(JSON.stringify(reqBody));
    const results: YearlyResult[] = await fetch(
      // 'http://localhost:3000/process',
      'https://cecdss-backend.azurewebsites.net/process',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json());
    setResults(results);
    toggleLoading(false);
  };

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
      {!results && (
        <MapSidebar
          frcsInputs={frcsInputs}
          setFrcsInputs={setFrcsInputs}
          teaInputs={teaInputs}
          setTeaInputs={setTeaInputs}
          teaModel={teaModel}
          setTeaModel={setTeaModel}
          submitInputs={() => submitInputs(mapState.lat, mapState.lng)}
          loading={loading}
        />
      )}
      {!!results && (
        <ResultsContainer
          teaInputs={teaInputs}
          teaModel={teaModel}
          results={results}
        />
      )}
      <Map
        ref={mapRef}
        onClick={(e: any) => {
          setMapState(e.latlng);
        }}
        maxBounds={bounds}
        bounds={bounds}
      >
        <TileLayer attribution={attribution} url={mapboxTiles} />

        {frcsInputs.radius > 0 && (
          <Circle
            center={position}
            fillColor='blue'
            radius={frcsInputs.radius * 1000}
          />
        )}
        <Marker position={position} />
      </Map>
    </div>
  );
};
