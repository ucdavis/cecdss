import { faAsterisk, faCircleNodes, faClone, faCopy, faLayerGroup, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { appFeatures } from '../data';

const AppFeatures = () => {
  return (
      <div className="app-features-container">
        {appFeatures.length > 0 && appFeatures.map(({ title, description, icon }, index) => (
        <div className="app-feature" key={index}>
          <FontAwesomeIcon icon={icon} fontSize={40} />
          <div className="feature-title">{title}</div>
          <div className="feature-description">
            {description}
        </div>
        </div>
        ))}
      </div>
  );
};

export default AppFeatures;
