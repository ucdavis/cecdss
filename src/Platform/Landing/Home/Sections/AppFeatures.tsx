import { faAsterisk, faCircleNodes, faClone, faCopy, faLayerGroup, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppFeatures = () => {
  return (
    <>
      <div className="app-features-container">
        <div className="app-feature">
          <FontAwesomeIcon icon={faCopy} fontSize={40} />
          <div className="feature-title">Save Model Runs</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
        </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faCircleNodes} fontSize={40} />
          <div className="feature-title">Cluster Visualization</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faAsterisk} fontSize={40} />
          <div className="feature-title">Detailed Assessment</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
      </div>

      <div className="app-features-container">
        <div className="app-feature">
          <FontAwesomeIcon icon={faSatellite} fontSize={40} />
          <div className="feature-title">Map Types</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faClone} fontSize={40} />
          <div className="feature-title">Different Models</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
        <div className="app-feature">
          <FontAwesomeIcon icon={faLayerGroup} fontSize={40} />
          <div className="feature-title">Map Layers</div>
          <div className="feature-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFeatures;
