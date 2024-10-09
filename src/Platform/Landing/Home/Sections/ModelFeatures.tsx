import { faDollarSign, faOilCan, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModelFeatures = () => {
  return (
    <div className="model-features-container flex items-center justify-center gap-8 px-4">
      <div className="flex flex-col items-center feature-item">
        <div>
          <FontAwesomeIcon icon={faDollarSign} fontSize={40} />
        </div>
        <div className="text-28p font-bold mt-4">
          Techno-Econ Sim
        </div>
        <div className="text-18p mt-2 text-center">
            Evaluate financial viability and economic performance of forest biomass projects.
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
          Estimate and analyze fuel costs for various biomass feedstocks and supply scenarios.
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
          Optimize biomass transportation logistics and calculate associated costs and emissions.        </div>
      </div>
    </div>
  );
};

export default ModelFeatures;
