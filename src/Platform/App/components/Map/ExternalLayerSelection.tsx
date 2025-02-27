// ExternalLayerSelection.tsx
import React, { useCallback, useState } from 'react';
import { Collapse } from 'reactstrap';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useExternalLayerContext } from '../../../Context/ExternalLayerContext';

const AllLayers: { [key: string]: string } = {
  almondsCA: 'Almonds',
  pistachiosCA: 'Pistachios',
  pomegranatesCA: 'Pomegranates',
  // grapesCA: 'Grapes'
};

export const ExternalLayerSelection = () => {
  const { externalLayers, setExternalLayers, setMapLayerLoading } =
    useExternalLayerContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickLayerSelection = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMapLayerLoading(true); // Set loading state to true when layers change
      const layer = event.target.value;

      let newLayers;
      if (event.target.checked) {
        newLayers = [...externalLayers, layer];
      } else {
        newLayers = externalLayers.filter(l => l !== layer);
      }

      setExternalLayers(newLayers);
      setMapLayerLoading(false);
    },
    [externalLayers, setExternalLayers, setMapLayerLoading]
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
                checked={externalLayers.includes(layer)}
                onChange={handleClickLayerSelection}
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
