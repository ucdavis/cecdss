import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modelFeatures } from '../../../../Resources/Constants';

const ModelFeatures = () => {
  return (
    <div className="model-features-container">
      {modelFeatures.length > 0 && modelFeatures.map(({ title, description, icon }, index) => (
        <div className="feature-item flex flex-col items-center" key={index}>
          <div>
            <FontAwesomeIcon icon={icon} fontSize={40} />
          </div>
          <div className="text-28p font-bold mt-4 text-center">
            {title}
          </div>
          <div className="text-18p mt-2 text-center">
            {description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModelFeatures;
