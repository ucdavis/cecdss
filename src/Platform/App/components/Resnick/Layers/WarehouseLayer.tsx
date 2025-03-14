import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Leaflet from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapCoordinates } from '../../../models/Types';

// Define a new interface that extends MapCoordinates to include company name and capacity
interface WarehouseData extends MapCoordinates {
  name: string;
  capacity: string;
}

export const WarehouseLayer = () => {
  // Updated warehouse data with names and capacities
  const warehouseLocations: WarehouseData[] = [
    {
      lat: 36.7378,
      lng: -119.7871,
      name: 'Minturn Huller Cooperative',
      capacity: '50,000 tons per season'
    },
    {
      lat: 35.3733,
      lng: -119.0187,
      name: 'Campos Brothers Farms',
      capacity: '65,000 tons per season'
    },
    {
      lat: 37.6391,
      lng: -120.9969,
      name: 'Hughson Nut Company',
      capacity: '45,000 tons per season'
    },
    {
      lat: 37.9577,
      lng: -121.2908,
      name: 'Central California Almond Growers Association',
      capacity: '110,000 tons per season'
    },
    {
      lat: 37.3022,
      lng: -120.4829,
      name: 'Blue Diamond Growers',
      capacity: '170,000 tons per season'
    },
    {
      lat: 36.3302,
      lng: -119.2921,
      name: 'Chico Nut Company',
      capacity: '35,000 tons per season'
    },
    {
      lat: 36.9613,
      lng: -120.0607,
      name: 'Treehouse California Almonds',
      capacity: '55,000 tons per season'
    },
    {
      lat: 36.2077,
      lng: -119.3473,
      name: 'Superior Almond Hulling',
      capacity: '60,000 tons per season'
    },
    {
      lat: 37.7397,
      lng: -121.4252,
      name: 'Harris Woolf California Almonds',
      capacity: '70,000 tons per season'
    },
    {
      lat: 37.4947,
      lng: -120.8466,
      name: 'Travaille and Phippen, Inc.',
      capacity: '40,000 tons per season'
    }
  ];

  const iconHTML = ReactDOMServer.renderToString(
    <FontAwesomeIcon
      icon={faWarehouse}
      size='2x'
      style={{
        color: '#037016',
        // Add a border to the icon with text-shadow (works for Font Awesome icons)
        textShadow: '0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000'
      }}
    />
  );

  const warehouseIcon = new Leaflet.DivIcon({
    html: iconHTML,
    className: 'warehouse-icon'
  });

  return (
    <>
      {warehouseLocations.map((location, index) => (
        <Marker
          key={`warehouse-${index}`}
          position={{ lat: location.lat, lng: location.lng }}
          icon={warehouseIcon}
        >
          <Tooltip
            permanent={false}
            direction='top'
            offset={[0, -20]}
          >
            <div>
              <strong>{location.name}</strong>
              <br />
              <span>Capacity: {location.capacity}</span>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </>
  );
};
