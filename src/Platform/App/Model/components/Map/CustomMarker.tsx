import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Leaflet from 'leaflet';
import { Marker } from 'react-leaflet';

import { faIndustry, faTree } from '@fortawesome/free-solid-svg-icons';
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
      icon={props.icon === 'facility' ? faIndustry : faTree}
      size='3x'
    />
  );
  const customMarkerIcon = new Leaflet.DivIcon({
    html: iconHTML
  });
  return <Marker position={props.position} icon={customMarkerIcon}></Marker>;
};
