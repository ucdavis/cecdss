import {
  OutputModCHP,
  OutputModGPO,
  OutputModGP
} from '@ucdavis/tea/out/models/output.model';
import { OutputVarMod } from '@ucdavis/frcs/out/systems/frcs.model';
import { LCAresults } from './LCAModels';

export interface FrcsInputs {
  radius: number;
  system: string;
  treatmentid: number;
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
  biomassTarget: number;
  totalBiomass: number;
  totalArea: number;
  totalCombinedCost: number;
  totalResidueCost: number;
  totalTransportationCost: number;
  numberOfClusters: number;
  clusterNumbers: number[];
  // clusters: ClusterResult[];
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
