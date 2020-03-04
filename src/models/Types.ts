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

export interface Outputs {
  teaResults: OutputModGPO;
  totalBiomass: number;
  totalArea: number;
  totalCost: number;
  numberOfClusters: number;
  clusters: FrcsClusterOutput[];
  skippedClusters: FrcsClusterOutput[];
  errorClusters: ClusterErrorResult[];
}

export interface FrcsClusterOutput {
  cluster_no: number;
  biomass: number;
  totalCost: number;
  area: number;
  distance: number;
  harvestCost: number;
  transportationCost: number;
  frcsResult: OutputVarMod;
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
}
