import React, {
  createRef,
  useState,
} from 'react';
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { MapSidebar } from './MapSidebar';

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
    radius: 0,
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
  return (
    <div style={style}>
      {showSidebar && (
       <MapSidebar parameters={parameters} setParameters={setParameters}/>
      )}
      <Map
        ref={mapRef}
        onClick={(e: any) => setMapState(e.latlng)}
        maxBounds={bounds}
        bounds={bounds}
      >
        <TileLayer attribution={attribution} url={mapboxTiles} />
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
}
