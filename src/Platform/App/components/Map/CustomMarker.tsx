import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Leaflet from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';

import { faIndustry, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MapCoordinates } from '../../models/Types';

interface Props {
  position: MapCoordinates;
  icon: string;
}


export const CustomMarker = (props: Props) => {
  const iconHTML = ReactDOMServer.renderToString(
    <FontAwesomeIcon
      color='blue'
      icon={props.icon === 'facility' ? faIndustry : faLocationDot}
      size='3x'
      style={
        props.icon === 'facility' ? { color: '#cde0f7' } : { color: '#fc9090' }
      }
    />
  );

  const customMarkerIcon = new Leaflet.DivIcon({
    html: iconHTML
  });

  return (
    <Marker position={props.position} icon={customMarkerIcon}>
      <Tooltip permanent={true} direction='top' offset={[0, -20]}>
        {props.icon === 'facility' ? 'Facility Location' : 'Shipping Location'}
      </Tooltip>
    </Marker>
  );
};

