import {
  OutputModCHP,
  OutputModGPO,
  OutputModGP,
  CashFlowCHP,
  CashFlowGP,
  CashFlow
} from '@ucdavis/tea/out/models/output.model';
import { OutputVarMod } from '@ucdavis/frcs/out/systems/frcs.model';
import { LCAresults } from './LCAModels';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { Feature, FeatureCollection, GeoJsonObject, Point } from 'geojson';

export interface RequestParams {
  lat: number;
  lng: number;
  system: string;
  treatmentid: number;
  dieselFuelPrice: number; // $/gal
  biomassTarget: number;
  year: number;
  clusterIds: string[];
  errorIds: string[];
  radius: number;
  teaModel: string;
  annualGeneration: number; // used for LCA, kWh
  moistureContent: number; // for frcs
  cashFlow: CashFlow | CashFlowCHP | CashFlowGP;
}

export interface FrcsInputs {
  system: string;
  treatmentid: number;
  dieselFuelPrice: number;
}

export const TechnoeconomicModels = {
  genericPowerOnly: 'GPO',
  genericCombinedHeatAndPower: 'CHP',
  gasificationPower: 'GP',
  hydrogen: 'Hydrogen'
};

export interface Treatment {
  id: number;
  name: string;
}

export const Treatments: Treatment[] = [
  { id: 1, name: 'Clearcut' },
  { id: 2, name: 'Commercial Thin' },
  { id: 3, name: 'Commercial Thin Chip Tree Removal' },
  { id: 4, name: 'Timber Salvage' },
  { id: 5, name: 'Timber Salvage Chip Tree Removal' },
  { id: 6, name: 'Selection' },
  { id: 7, name: 'Selection Chip Tree Removal' },
  { id: 8, name: 'Ten Percent Group Selection' },
  { id: 9, name: 'Twenty Percent Group Selection' },
  { id: 10, name: 'Biomass Salvage' }
];

export interface Results {
  clusterIds: string[];
  errorIds: string[];
  years: YearlyResult[];
  radius: number;
}

export interface YearlyResult {
  year: number;
  lcaResults: LCAresults;
  totalArea: number;
  totalFeedstock: number; // total biomass from frcs residue output
  totalFeedstockCost: number; // cost of harvesting residue biomass from frcs
  totalCoproduct: number; // Frcs.Total - Frcs.Residue weight
  totalCoproductCost: number;
  totalMoveInCost: number; // move in cost from separate frcs function
  totalMoveInDistance: number;
  totalTransportationCost: number; // transportation cost per gt * cluster biomass (distance from osrm)
  numberOfClusters: number;
  clusterNumbers: string[];
  clusters: ClusterResult[];
  errorClusters: ClusterErrorResult[];
  errorClusterNumbers: string[];
  radius: number;
  fuelCost: number;
  energyRevenueRequired: number;
  geoJson: FeatureCollection;
}

export interface ClusterResult {
  cluster_no: string;
  biomass: number;
  combinedCost: number;
  area: number;
  distance: number;
  residueCost: number;
  transportationCost: number;
  frcsResult: OutputVarMod;
  center_lat: number;
  center_lng: number;
  landing_lat: number;
  landing_lng: number;
  county: string;
  land_use: string;
  site_class: number;
  forest_type: string;
  haz_class: number;
  // total live biomass (including saw log)
  // total dead biomass
  // tons of biomass
  // 2, 7, 15, 25, 35, 40
  // vol of merch timber
  // land_use
  // slope, elevation, site_class, forest_type
  // county
}

export interface ClusterErrorResult {
  cluster_no: string;
  biomass: number;
  area: number;
  error: string;
}

export interface ClusterFeature extends Feature {
  properties: {
    cluster_no: string;
    lat: number;
    lng: number;
    area: number;
    distance: number;
    biomass: number;
    combinedCost: number;
    residueCost: number;
    transportationCost: number;
  };
}

export interface MapCoordinates {
  lat: number;
  lng: number;
}

export interface RequestParamsAllYears {
  facilityLat: number;
  facilityLng: number;
  transmission: any; // InputModTransimission;
  teaModel: string;
  teaInputs: InputModGPO | InputModCHP | InputModGP; // | InputModHydrogen;
  includeUnloadingCost: boolean;
  unloadingCost: number; // default to 10,000
}

export interface AllYearsResults {
  biomassTarget: number; // from tea output
  annualGeneration: number;
  teaResults: OutputModGPO | OutputModCHP | OutputModGP;
  transmissionResults?: any;
  nearestSubstation: string;
  distanceToNearestSubstation: number; // km
}
