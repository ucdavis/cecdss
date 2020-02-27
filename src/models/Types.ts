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

export interface FrcsOutputs {
  totalBiomass: number;
  totalArea: number;
  totalCost: number;
  numberOfClusters: number;
  clusters: FrcsClusterOutput[];
}

export interface FrcsClusterOutput {
  cluster_no: number;
  biomass: number;
  cost: number;
  area: number;
  distance: number;
  frcsResult: OutputVarMod;
}

export interface OutputVarMod {
  TotalPerBoleCCF: number;
  TotalPerGT: number;
  TotalPerAcre: number;
}
