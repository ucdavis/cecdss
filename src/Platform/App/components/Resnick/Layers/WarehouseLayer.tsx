import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Leaflet from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapCoordinates } from '../../../models/Types';
import minTurnLogo from '../../../../../Resources/Images/minturn.png'

// Define a new interface that extends MapCoordinates to include all required data for the tooltip card
interface WarehouseData extends MapCoordinates {
  name: string;
  capacity: string;
  price: string;
  location: string;
  image: string;
}

export const WarehouseLayer = () => {
  // Updated warehouse data with all required tooltip card information
  const warehouseLocations: WarehouseData[] = [
    {
      lat: 36.7378,
      lng: -119.7871,
      name: 'Minturn Huller Cooperative',
      capacity: '50,000 tons per season',
      price: '$3.95 per pound',
      location: 'Fresno County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 35.3733,
      lng: -119.0187,
      name: 'Campos Brothers Farms',
      capacity: '65,000 tons per season',
      price: '$4.10 per pound',
      location: 'Kern County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 37.6391,
      lng: -120.9969,
      name: 'Hughson Nut Company',
      capacity: '45,000 tons per season',
      price: '$3.85 per pound',
      location: 'Stanislaus County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 37.9577,
      lng: -121.2908,
      name: 'Central California Almond Growers Association',
      capacity: '110,000 tons per season',
      price: '$4.25 per pound',
      location: 'San Joaquin County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 37.3022,
      lng: -120.4829,
      name: 'Blue Diamond Growers',
      capacity: '170,000 tons per season',
      price: '$4.50 per pound',
      location: 'Merced County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 36.3302,
      lng: -119.2921,
      name: 'Chico Nut Company',
      capacity: '35,000 tons per season',
      price: '$3.75 per pound',
      location: 'Tulare County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 36.9613,
      lng: -120.0607,
      name: 'Treehouse California Almonds',
      capacity: '55,000 tons per season',
      price: '$4.15 per pound',
      location: 'Madera County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 36.2077,
      lng: -119.3473,
      name: 'Superior Almond Hulling',
      capacity: '60,000 tons per season',
      price: '$4.05 per pound',
      location: 'Kings County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 37.7397,
      lng: -121.4252,
      name: 'Harris Woolf California Almonds',
      capacity: '70,000 tons per season',
      price: '$4.30 per pound',
      location: 'San Joaquin County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    },
    {
      lat: 37.4947,
      lng: -120.8466,
      name: 'Travaille and Phippen, Inc.',
      capacity: '40,000 tons per season',
      price: '$3.90 per pound',
      location: 'Stanislaus County, CA',
      image: 'https://i.postimg.cc/d0yTVc8Z/Screenshot-2025-03-21-at-9-39-59-AM.png'
    }
  ];

  const iconHTML = ReactDOMServer.renderToString(
    <FontAwesomeIcon
      icon={faWarehouse}
      size='2x'
      style={{
        color: '#058005',
        // Add a border to the icon with text-shadow (works for Font Awesome icons)
        textShadow: '0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000'
      }}
    />
  );

  const warehouseIcon = new Leaflet.DivIcon({
    html: iconHTML,
    className: 'warehouse-icon'
  });

  // Custom card tooltip style
  const cardTooltipStyle = {
    card: {
      width: '250px',
      // border: '1px solid #ddd',
      // borderRadius: '8px',
      overflow: 'hidden',
      // boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
      backgroundColor: 'white'
    },
    imageContainer: {
      width: '100%',
      height: '100px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    content: {
      padding: '12px'
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#333'
    },
    detail: {
      fontSize: '13px',
      margin: '3px 0',
      color: '#666'
    },
    icon: {
      marginRight: '5px',
      color: '#90fcc6'
    }
  };

  return (
    <>
      {warehouseLocations.map((location, index) => (
        <Marker
          key={`warehouse-${index}`}
          position={{ lat: location.lat, lng: location.lng }}
          icon={warehouseIcon}
        >
          <Tooltip
            permanent={index === 0 && true}
            direction='top'
            offset={[0, -20]}
            className='custom-tooltip'
            opacity={1}
          >
            <div style={cardTooltipStyle.card}>
              {index === 0 && (
                <div style={cardTooltipStyle.imageContainer}>
                  <img
                    src={minTurnLogo}
                    alt={location.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}
              <div style={cardTooltipStyle.content}>
                <div style={cardTooltipStyle.title}>{location.name}</div>
                <div style={cardTooltipStyle.detail}>
                  <span style={cardTooltipStyle.icon}>📍</span>{' '}
                  {location.location}
                </div>
                <div style={cardTooltipStyle.detail}>
                  <span style={cardTooltipStyle.icon}>💰</span> {location.price}
                </div>
                <div style={cardTooltipStyle.detail}>
                  <span style={cardTooltipStyle.icon}>📦</span> Capacity:{' '}
                  {location.capacity}
                </div>
              </div>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </>
  );
};
