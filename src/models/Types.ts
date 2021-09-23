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
  facilityLat: number;
  facilityLng: number;
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
  costOfEquity: number;
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
  description: string;
  private: string;
  forest: string;
}

export const Treatments: Treatment[] = [
  {
    id: 1,
    name: 'Clearcut',
    description: 'All live and dead trees over 10 inches cut.',
    private:
      'For smaller size classes, cut at the following proportions for both live and dead: 0-1" DBH - 30%, 1-5" DBH - 60%, 5-10" DBH - 90%',
    forest: 'This treatment is not performed on FS land.'
  },
  {
    id: 2,
    name: 'Commercial Thin',
    description:
      'Remove trees > 10 inches DBH, starting with small ones closest to 10” until a certain residual basal area is reached, which is based on site class',
    private: 'N/A',
    forest: 'This treatment is not performed on FS land.'
  },
  {
    id: 3,
    name: 'Commercial Thin Chip Tree Removal',
    description:
      'Same as Commercial thin but with the additional removal of small trees.',
    private:
      'Remove small trees in the following proportions: 0-1" DBH, - 20% 1-5" DBH - 50%, 5-10" DBH - 80%',
    forest:
      'Remove small trees in the following proportions: 0-1" DBH - 20%, 1-5" DBH - 85%, 5-10" DBH - 90%'
  },
  {
    id: 4,
    name: 'Timber Salvage',
    description: 'Remove all dead trees for timber (fire salvage)',
    private: 'N/A',
    forest: 'N/A'
  },
  {
    id: 5,
    name: 'Timber Salvage Chip Tree Removal',
    description:
      'Same as Timber Salvage but with the additional removal of small trees.',
    private:
      'Remove small trees in the following proportions: 0-1" DBH - 30%, 1-5" DBH - 60%, 5-10" DBH - 90%',
    forest:
      'Remove small trees in the following proportions: 0-1" DBH - 20%, 1-5" DBH - 85%, 5-10" DBH - 90%'
  },
  {
    id: 6,
    name: 'Selection',
    description:
      'Remove some trees but leave behind at least 15 sq ft/ac of basal area of trees > 18" DBH',
    private: 'N/A',
    forest: 'This treatment is not performed on FS land.'
  },
  {
    id: 7,
    name: 'Selection Chip Tree Removal',
    description:
      'Same as Selection thin but with the additional removal of small trees.',
    private:
      'Remove small trees in the following proportions: 0-1" DBH - 20%, 1-5" DBH - 50%, 5-10" DBH - 80%',
    forest: 'This treatment is not performed on FS land.'
  },
  {
    id: 8,
    name: 'Ten Percent Group Selection',
    description:
      '10% of the area of the harvest unit is Clearcut and the rest of the area meets requirements for Selection with small tree removal',
    private: '',
    forest: ''
  },
  {
    id: 9,
    name: 'Twenty Percent Group Selection',
    description:
      '20% of the area of the harvest unit is Clearcut and the rest of the area meets requirements for Selection with small tree removal',
    private: '',
    forest: 'This treatment is not performed on FS land.'
  },
  {
    id: 10,
    name: 'Biomass Salvage',
    description: 'Remove all dead trees for biomass (die-off salvage)',
    private:
      'Remove small trees in the following proportions: 0-1" DBH - 30%, 1-5" DBH - 60%, 5-10" DBH - 90%',
    forest:
      'Remove small trees in the following proportions: 0-1" DBH - 20%, 1-5" DBH - 85%, 5-10" DBH - 90%'
  }
];

export interface Geometry {
  coordinates: number[][];
  type: string;
}

export interface Results {
  clusterIds: string[];
  errorIds: string[];
  years: YearlyResult[];
  radius: number;
}

export interface YearlyResult {
  tripGeometries: Geometry[];
  year: number;
  lcaResults?: LCAresults;
  totalArea: number;
  totalFeedstock: number; // total biomass from frcs residue output
  totalDryFeedstock: number; // feedstock multipled by (1-moistureContent)
  totalHarvestCost: number; // cost of harvesting residue biomass from frcs
  totalCoproduct: number; // Frcs.Total - Frcs.Residue weight
  totalDryCoproduct: number;
  totalCoproductCost: number;
  totalMoveInCost: number; // move in cost from separate frcs function
  totalMoveInDistance: number;
  totalTransportationCost: number; // transportation cost per gt * cluster biomass (distance from osrm)
  harvestCostPerDryTon: number;
  transportationCostPerDryTon: number;
  moveInCostPerDryTon: number;
  totalCostPerDryTon: number;
  numberOfClusters: number;
  clusterNumbers: string[];
  clusters: ClusterResult[];
  errorClusters: ClusterErrorResult[];
  errorClusterNumbers: string[];
  radius: number;
  fuelCost: number;
  energyRevenueRequired: number;
  energyRevenueRequiredPW: number;
  cashFlow: any;
  geoJson: any;
  errorGeoJson: any;
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
  slope: number;
}

export interface ErrorClusterFeature extends Feature {
  properties: ClusterErrorResult;
}

export interface ClusterFeature extends Feature {
  properties: ClusterResult;
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
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  transmissionResults: any;
  nearestSubstation: string;
  location: MapCoordinates;
  facilityCoordinates: MapCoordinates;
  biomassCoordinates: MapCoordinates;
  distanceToNearestSubstation: number; // km
}
