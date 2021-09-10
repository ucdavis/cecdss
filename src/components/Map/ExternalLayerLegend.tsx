import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransmissionLegend } from './Layers/TransmissionLegend';
import { StationLegend } from './Layers/StationLegend';
import { FireLegend } from './Layers/FireLegend';
import { PlantLegend } from './Layers/PlantLegend';
import { OwnershipLegend } from './Layers/OwnershipLegend';
import { CountyLegend } from './Layers/CountyLegend';
import { UrbanCitiesLegend } from './Layers/UrbanCitiesLegend';
import { AirQualityLegend } from './Layers/AirQualityLegend';

interface Props {
  layers: string[];
}

export const ExternalLayerLegend = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const layerIcon = () => {
    if (isOpen) {
      return <FontAwesomeIcon icon={faAngleDown} />;
    } else {
      return <FontAwesomeIcon icon={faAngleUp} />;
    }
  };

  if (!props.layers || props.layers.length === 0) {
    return <></>;
  }

  return (
    <div className='layers'>
      <div
        className='cardheader d-flex align-items-center justify-content-between'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>Layer Legends</h3>
        <p>{layerIcon()}</p>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='cardcontents'>
          {props.layers.includes('fire') && <FireLegend />}
          {props.layers.includes('transmission') && <TransmissionLegend />}
          {props.layers.includes('substation') && <StationLegend />}
          {props.layers.includes('plant') && <PlantLegend />}
          {props.layers.includes('ownership') && <OwnershipLegend />}
          {props.layers.includes('county') && <CountyLegend />}
          {props.layers.includes('urbanCities') && <UrbanCitiesLegend />}
          {props.layers.includes('airQuality') && <AirQualityLegend />}
        </div>
      </Collapse>
    </div>
  );
};
