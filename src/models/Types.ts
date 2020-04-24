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
  treatment: string;
}

export const TechnoeconomicModels = {
  genericPowerOnly: 'GPO',
  genericCombinedHeatAndPower: 'CHP',
  gasificationPower: 'GP',
  hydrogen: 'Hydrogen'
};

export interface Results {
  lcaResults: LCAresults;
  teaResults: OutputModGPO | OutputModCHP | OutputModGP;
  totalBiomass: number;
  totalArea: number;
  totalCombinedCost: number;
  totalResidueCost: number;
  totalTransportationCost: number;
  numberOfClusters: number;
  clusters: ClusterResult[];
  skippedClusters: ClusterResult[];
  errorClusters: ClusterErrorResult[];
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
