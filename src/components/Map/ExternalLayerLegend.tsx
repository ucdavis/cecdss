import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransmissionLegend } from './Layers/TransmissionLegend';
import { StationLegend } from './Layers/StationLegend';
import { FireLegend } from './Layers/FireLegend';
import { PlantLegend } from './Layers/PlantLegend';

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
    <div className='layers layers-legend'>
      <div
        className='cardheader d-flex align-items-center justify-content-between'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>Layer Legend</h3>
        <p>{layerIcon()}</p>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='cardcontents'>
          {props.layers.includes('fire') && <FireLegend></FireLegend>}
          {props.layers.includes('transmission') && (
            <TransmissionLegend></TransmissionLegend>
          )}
          {props.layers.includes('substation') && (
            <StationLegend></StationLegend>
          )}
          {props.layers.includes('plant') && <PlantLegend></PlantLegend>}
        </div>
      </Collapse>
    </div>
  );
};
