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
import { AirDistrictsLegend } from './Layers/AirDistrictsLegend';
import { BiomassBoundaryLegend } from './Layers/BiomassBoundaryLegend';
import { FeedstockBiomassCompetitionLegend } from './Layers/BasicFeedstockCompetitionLegend';

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
        <div className='text-white text-14p'>Layer Legends</div>
        <p>{layerIcon()}</p>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='cardcontents text-14p'>
          {props.layers.includes('fire') && <FireLegend />}
          {props.layers.includes('transmission') && <TransmissionLegend />}
          {props.layers.includes('substation') && <StationLegend />}
          {props.layers.includes('plant') && <PlantLegend />}
          {props.layers.includes('ownership') && <OwnershipLegend />}
          {props.layers.includes('county') && <CountyLegend />}
          {props.layers.includes('urbanCities') && <UrbanCitiesLegend />}
          {props.layers.includes('airDistricts') && <AirDistrictsLegend />}
          {props.layers.includes('dataBoundary') && <BiomassBoundaryLegend />}
          {props.layers.includes('feedstockBiomassCompetition') && (
            <FeedstockBiomassCompetitionLegend />
          )}
          {props.layers.includes('feedstockWoodProcessingCompetition') && (
            <FeedstockBiomassCompetitionLegend />
          )}
        </div>
      </Collapse>
    </div>
  );
};
