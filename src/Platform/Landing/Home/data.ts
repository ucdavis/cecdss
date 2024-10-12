import { faAsterisk, faCircleNodes, faClone, faCopy, faDollarSign, faLayerGroup, faOilCan, faSatellite, faTruck } from "@fortawesome/free-solid-svg-icons";

export const modelFeatures = [
  {
    title: 'TEA',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faDollarSign
  },
  {
    title: 'Fuel Cost Simulator',
    description:
      'Estimate and analyze fuel costs for various biomass feed stocks and supply scenarios.',
    icon: faOilCan
  },
  {
    title: 'Transportation',
    description:
      'Optimize biomass transportation logistics and calculate associated costs and emissions.',
    icon: faTruck
  }
];


export const publications = [
  {
    title:
      'Forest Resource and Renewable Energy Decision Support System: An Online Application for Siting Woody Biomass to Electricity Facilities',
    description: [
      'Created a decision support system (FRREDSS) for assessing the feasibility of biopower facilities in California, focusing on forest biomass resources.',
      'The system includes spatial analysis for feedstock availability, economic feasibility, and environmental impact, aiding in informed decision-making for facility siting.'
    ],
    link:
      'https://www.energy.ca.gov/publications/2024/forest-resource-and-renewable-energy-decision-support-system-online-application'
  },
  {
    title:
      'Design of a GIS-Based Web Application for Simulating Biofuel Feedstock Yields',
    description: [
      'Developed a web application that uses a GIS-based interface to predict poplar biomass yields under different management and climate conditions.',
      'The application allows stakeholders to make informed decisions about feedstock growing locations and management strategies in the U.S. Pacific Northwest.'
    ],
    link:
      'https://www.researchgate.net/publication/264159830_Design_of_a_GIS-Based_Web_Application_for_Simulating_Biofuel_Feedstock_Yields'
  },
  {
    title:
      'Integrated Economic and Environmental Modeling of Forest Biomass for Renewable Energy in California',
    description: [
      'Developed the FRREDSS model for lifecycle and technoeconomic assessment, estimating the economic and environmental performance of potential biopower projects in California.',
      'The model supports decision-making by analyzing site-specific data to optimize feedstock supply, reduce costs, and minimize greenhouse gas emissions in forest biomass-based electricity generation.'
    ],
    link:
      'https://www.sciencedirect.com/science/article/pii/S0961953423000727?via%3Dihub'
  }
];

export const appFeatures = [
  {
    title: 'Save Model Runs',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faCopy
  },
  {
    title: 'Cluster Visualization',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faCircleNodes
  },
  {
    title: 'Detailed Assessment',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faAsterisk
  },
  {
    title: 'Map Types',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faSatellite
  },
  {
    title: 'Varied Models',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faClone
  },
  {
    title: 'Map Layers',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faLayerGroup
  },
];