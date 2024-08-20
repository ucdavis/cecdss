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
export const USER_GUIDE_LINK = 'https://ucdavis.box.com/s/ptum3pvtfarexagd1nmgy479gej1otmz';


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
export const EXPT_TYPE_OPTS = [
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

export const BE_APP_URL = 'http://localhost:3000'
