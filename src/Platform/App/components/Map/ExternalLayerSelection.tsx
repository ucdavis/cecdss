import React, { useCallback, useState } from 'react';
import { Collapse } from 'reactstrap';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  onChange: (layers: string[]) => void;
}

const AllLayers: { [key: string]: string } = {
  fire: 'Fire Hazard Zones',
  transmission: 'Transmission Lines',
  substation: 'Substations',
  plant: 'Power plants',
  ownership: 'Ownership',
  county: 'County Lines',
  urbanCities: 'Urban City Limits',
  airDistricts: 'Air Districts',
  dataBoundary: 'Biomass Data Boundary',
  feedstockBiomassCompetition: 'Wood Biomass Energy Facilities',
  feedstockWoodProcessingCompetition: 'Current Sawmills',
};

export const ExternalLayerSelection = (props: Props) => {
  const [layers, setLayers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const layer = event.target.value;

      let newLayers;
      if (event.target.checked) {
        newLayers = [...layers, layer];
      } else {
        newLayers = layers.filter(l => l !== layer);
      }

      setLayers(newLayers);
      props.onChange(newLayers);
    },
    [props.onChange, layers]
  );

  const layerIcon = () => {
    if (isOpen) {
      return <FontAwesomeIcon icon={faAngleDown} />;
    } else {
      return <FontAwesomeIcon icon={faAngleUp} />;
    }
  };

  return (
    <div className='layers scrollbar'>
      <div
        className='cardheader d-flex align-items-center justify-content-between gap-x-2'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='text-white text-14p'>Map Layers</div>
        <p>{layerIcon()}</p>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='cardcontents'>
          {Object.keys(AllLayers).map(layer => (
            <div className='form-check' key={layer}>
              <input
                className='form-check-input'
                type='checkbox'
                value={layer}
                checked={layers.includes(layer)}
                onChange={handleClick}
                id={layer}
              />
              <label className='form-check-label text-14p' htmlFor={layer}>
                {AllLayers[layer]}
              </label>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};
