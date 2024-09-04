import { faDollarSign, faOilCan, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ModelFeatures = () => {
  return (
    <div className="model-features-container flex items-center justify-center gap-8 px-4">
      <div className="flex flex-col items-center feature-item">
        <div>
          <FontAwesomeIcon icon={faDollarSign} fontSize={40} />
        </div>
        <div className="text-28p font-bold mt-4">
          Techno-Economic Sim
        </div>
        <div className="text-18p mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
        </div>
      </div>
      <div className="flex flex-col items-center feature-item">
        <div>
          <FontAwesomeIcon icon={faOilCan} fontSize={40} />
        </div>
        <div className="text-28p font-bold mt-4">
          Fuel Cost Simulator
        </div>
        <div className="text-18p mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
        </div>
      </div>
      <div className="flex flex-col items-center feature-item">
        <div>
          <FontAwesomeIcon icon={faTruck} fontSize={40} />
        </div>
        <div className="text-30p font-bold mt-4">
          Transportation
        </div>
        <div className="text-18p mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
        </div>
      </div>
    </div>
  );
};

export default ModelFeatures;
