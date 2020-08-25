import {
  OutputModCHP,
  OutputModGPO,
  OutputModGP
} from '@ucdavis/tea/out/models/output.model';
import { OutputVarMod } from '@ucdavis/frcs/out/systems/frcs.model';
import { LCAresults } from './LCAModels';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { Feature, Point } from 'geojson';

export interface RequestParams {
  lat: number;
  lng: number;
  system: string;
  treatmentid: number;
  dieselFuelPrice: number; // $/gal
  teaModel: string;
  teaInputs: InputModGPO | InputModCHP | InputModGP; // | InputModHydrogen;
}

export interface RequestParamsYears extends RequestParams {
  years: number[];
}

export interface RequestParamsYear extends RequestParams {
  year: number;
  clusterIds: number[];
  errorIds: number[];
  radius: number;
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

export interface YearlyResult {
  year: number;
  lcaResults: LCAresults;
  teaResults: OutputModGPO | OutputModCHP | OutputModGP;
  biomassTarget: number; // from tea output
  totalBiomass: number; // total biomass from frcs residue output
  totalArea: number;
  totalResidueCost: number; // cost of harvesting residue biomass from frcs
  totalMoveInCost: number; // move in cost from separate frcs function
  totalMoveInDistance: number;
  totalTransportationCost: number; // transportation cost per gt * cluster biomass (distance from osrm)
  numberOfClusters: number;
  clusterNumbers: number[];
  clusters: ClusterResult[];
  errorClusters: ClusterErrorResult[];
  errorClusterNumbers: number[];
  radius: number;
}

export interface ClusterResult {
  cluster_no: number;
  biomass: number;
  combinedCost: number;
  area: number;
  distance: number;
  residueCost: number;
  transportationCost: number;
  frcsResult: OutputVarMod;
  lat: number;
  lng: number;
}

export interface ClusterErrorResult {
  cluster_no: number;
  biomass: number;
  area: number;
  error: string;
}

export interface ClusterFeature extends Feature {
  properties: {
    cluster_no: number;
    biomass: number;
  };
}
