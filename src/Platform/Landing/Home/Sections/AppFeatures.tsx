import { faDollarSign, faOilCan, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AppFeatures = () => {
  return (
    <>
      <div className="app-features-container">
        <div className="app-feature">
          <FontAwesomeIcon icon={faDollarSign} fontSize={40} />
          <div className="feature-title">Techno-Economic Sim</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faOilCan} fontSize={40} />
          <div className="feature-title">Fuel Cost Simulator</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faTruck} fontSize={40} />
          <div className="feature-title">Transportation</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
      </div>

      <div className="app-features-container">
        <div className="app-feature">
          <FontAwesomeIcon icon={faDollarSign} fontSize={40} />
          <div className="feature-title">Techno-Economic Sim</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faOilCan} fontSize={40} />
          <div className="feature-title">Fuel Cost Simulator</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faTruck} fontSize={40} />
          <div className="feature-title">Transportation</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFeatures;
