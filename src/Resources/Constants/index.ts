import {
  faArrowsSpin,
  faAsterisk,
  faCircleNodes,
  faClone,
  faCopy,
  faDollarSign,
  faLayerGroup,
  faOilCan,
  faSatellite,
  faTruck
} from '@fortawesome/free-solid-svg-icons';

// URLS
export const URL_REROUTE_PAGE = '/pages/home'
export const URL_LANDING_PAGE = '/pages/home'
export const URL_MODEL_PAGE = '/pages/model'
export const URL_MODEL_ID_PAGE = '/pages/model/:modelID'

// LEAFLET MAP LAYERS
export const ACCESS_TOKEN =
    'pk.eyJ1IjoibGF1cmFob2xzdGVnZSIsImEiOiJjazZnc3U3c3gybWw5M25xamc2M2RnNTl2In0.Zcg_-cmP110dT_JzIN3QdA';

export const MAP_BOX_TILES =
    'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

export const MAP_BOX_TILES_SATELLITE =
    'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=' +
    ACCESS_TOKEN;

export const ATTRIBUTION =
    '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

// USER GUIDE 
export const USER_GUIDE_LINK =
  'https://ucdavis.box.com/s/i0mjr3yzbqrrapcr3u4iuy3sfi7g26wf';


// REGISTER 
// Organization Types
export const ORG_TYPE_OPTS = [
    {
        name: 'Federal Government',
        value: 'federalGovernment'
    },
    {
        name: 'State or Local Government',
        value: 'stateOrLocalGovernment'
    },
    {
        name: 'Non-Profit',
        value: 'nonProfit'
    },
    {
        name: 'Educational Institution',
        value: 'educationalInstitution'
    },
    {
        name: 'Industry',
        value: 'industry'
    },
    {
        name: 'Consulting',
        value: 'consulting'
    },
    {
        name: 'National Lab',
        value: 'nationalLab'
    },
    {
        name: 'Other',
        value: 'other'
    },
]

// Expertise Types
export const EXPERTISE_TYPE_OPTS = [
    {
        name: 'Biodiesel',
        value: 'biodiesel'
    },
    {
        name: 'Portfolio Analysis',
        value: 'portfolioAnalysis'
    },
    {
        name: 'Thermochemical Conversion',
        value: 'thermochemicalConversion'
    },
    {
        name: 'Biorefineries',
        value: 'biorefineries'
    },
    {
        name: 'Heat & Power',
        value: 'heatAndPower'
    },
    {
        name: 'Technoeconomic Analysis',
        value: 'technoeconomicAnalysis'
    },
    {
        name: 'Feedstock Production',
        value: 'feedstockProduction'
    },
    {
        name: 'Biofuel Distribution',
        value: 'biofuelDistribution'
    },
    {
        name: 'Policy',
        value: 'policy'
    },
    {
        name: 'Strategic Analysis',
        value: 'strategicAnalysis'
    },
    {
        name: 'Feedstock Logistics',
        value: 'feedstockLogistics'
    },
    {
        name: 'Biofuel Enduse',
        value: 'biofuelEnduse'
    },
    {
        name: 'Project Finance',
        value: 'projectFinance'
    },
    {
        name: 'Engineer',
        value: 'engineer'
    },
    {
        name: 'Biochemical Conversion',
        value: 'biochemicalConversion'
    },
    {
        name: 'Algae',
        value: 'algae'
    },
    {
        name: 'Sustainability',
        value: 'sustainability'
    },
]

// PRIVACY POLICY 
export const URL_PRIVACY_POLICY = 'https://privacy.ucdavis.edu/web-page-privacy'

export const DEFAULT_TRANSMISSION_VAL: any = {
        VoltageClass: '230 kV Single Circuit',
        ConductorType: 'ACSS',
        Structure: 'Lattice',
        LengthCategory: '> 10 miles',
        NewOrReconductor: 'New',
        AverageTerrainMultiplier: 1,
        Miles: {
          Forested: 0,
          Flat: 0,
          Wetland: 0,
          Farmland: 0,
          Desert: 0,
          Urban: 0,
          Hills: 0,
          Mountain: 0,
          Zone1: 1,
          Zone2: 0,
          Zone3: 0,
          Zone4: 0,
          Zone5: 0,
          Zone6: 0,
          Zone7: 0,
          Zone8: 0,
          Zone9: 0,
          Zone10: 0,
          Zone11: 0,
          Zone12: 0
        }
      }

export const modelFeatures = [
  {
    title: 'Technoeconomic Assessment',
    description:
      'Evaluate financial viability and economic performance of forest biomass projects.',
    icon: faDollarSign
  },
  {
    title: 'Fuel Reduction Cost Simulator',
    description:
      'Estimate and analyze fuel costs for various biomass feed stocks and supply scenarios.',
    icon: faOilCan
  },
  {
    title: 'Life Cycle Assessment',
    description:
      'Evaluate environmental impacts and emissions across the complete biomass-to-energy process.',
    icon: faArrowsSpin
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
    link: 'https://www.energy.ca.gov/publications/2024/forest-resource-and-renewable-energy-decision-support-system-online-application'
  },
  {
    title:
      'Integrated Economic and Environmental Modeling of Forest Biomass for Renewable Energy in California',
    description: [
      'Developed the FRREDSS model for lifecycle and technoeconomic assessment, estimating the economic and environmental performance of potential biopower projects in California.',
      'The model supports decision-making by analyzing site-specific data to optimize feedstock supply, reduce costs, and minimize greenhouse gas emissions in forest biomass-based electricity generation.'
    ],
    link: 'https://www.sciencedirect.com/science/article/pii/S0961953423000727?via%3Dihub'
  }
];

export const appFeatures = [
  {
    title: 'Save Model Runs',
    description:
      'Store and retrieve multiple simulation scenarios for comparative analysis and future reference.',
    icon: faCopy
  },
  {
    title: 'Cluster Visualization',
    description:
      'Visually represent biomass resource clusters on interactive maps for efficient spatial analysis.',
    icon: faCircleNodes
  },
  {
    title: 'Detailed Assessment',
    description:
      'Conduct comprehensive evaluations of forest biomass projects, including economic, environmental, and logistical factors.',
    icon: faAsterisk
  },
  {
    title: 'Map Types',
    description:
      'Toggle between various map views, including topographic, satellite, and hybrid, to enhance geographical context.',
    icon: faSatellite
  },
  {
    title: 'Varied Models',
    description:
      'Access a range of analytical models for diverse aspects of forest resource management and renewable energy planning.',
    icon: faClone
  },
  {
    title: 'Map Layers',
    description:
      'Customize map displays with overlays for factors such as forest density, transportation routes, and facility locations.',
    icon: faLayerGroup
  }
];

export const BE_APP_URL = 'http://localhost:3000'
