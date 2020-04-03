import { GenericPowerOnlyInputMod } from './TechnoeconomicInputs';
import { OutputModGPO } from './TechnoeconomicOutputs';

export interface FrcsInputs {
  radius: number;
  system: string;
  treatment: string;
}

export interface TechnoeconomicAssessmentInputs {
  model: string;
  genericPowerOnly?: GenericPowerOnlyInputMod;
}

export interface TechnoeconomicAssessmentOutputs {
  genericPowerOnly?: OutputModGPO;
}

export const TechnoeconomicModels = {
  genericPowerOnly: 'genericPowerOnly',
  genericCombinedHeatAndPower: 'genericCombinedHeatAndPower',
  gasificationPower: 'gasificationPower',
  hydrogen: 'hydrogen'
};

export interface Results {
  teaResults: OutputModGPO;
  totalBiomass: number;
  totalArea: number;
  totalCost: number;
  totalHarvestCost: number;
  totalTransportationCost: number;
  numberOfClusters: number;
  clusters: ClusterResult[];
  skippedClusters: ClusterResult[];
  errorClusters: ClusterErrorResult[];
}

export interface ClusterResult {
  cluster_no: number;
  biomass: number;
  totalCost: number;
  area: number;
  distance: number;
  harvestCost: number;
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

export interface OutputVarMod {
  TotalPerBoleCCF: number;
  TotalPerGT: number;
  TotalPerAcre: number;
  Residue: {
    ResidueWt: number;
    ResiduePerAcre: number;
    ResiduePerGT: number;
  };
}
