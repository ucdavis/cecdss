import React, { useCallback, useState } from 'react';

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
  return (
    <div className="layers">
      <h3>Additional Layers</h3>
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
          <label className='form-check-label' htmlFor={layer}>{AllLayers[layer]}</label>
        </div>
      ))}
    </div>
  );
};
