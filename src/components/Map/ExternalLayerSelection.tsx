import React, { useCallback, useState } from 'react';
import { Collapse } from 'reactstrap';

import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  onChange: (layers: string[]) => void;
}

const AllLayers: { [key: string]: string } = {
  fire: 'Fire Hazard Zones',
  transmission: 'Transmission Lines',
  substation: 'Substations',
  plant: 'Power plants'
};

export const ExternalLayerSelection = (props: Props) => {
  const [layers, setLayers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(true);

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
      return <FontAwesomeIcon icon={faCoffee} />;
    } else {
      return <FontAwesomeIcon icon={faAddressCard} />;
    }
  }

  return (
    <div className='layers'>
      <div className='cardheader' onClick={() => setIsOpen(!isOpen)}>
        <h3>
          Map Layers {layerIcon()}
        </h3>
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
              <label className='form-check-label' htmlFor={layer}>
                {AllLayers[layer]}
              </label>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};
