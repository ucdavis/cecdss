import { GenericPowerOnlyInputMod } from './TechnoeconomicInputs';
import { OutputModGPO } from './TechnoeconomicOutputs';

export interface Inputs {
  TechnoeconomicAssessmentInputs: TechnoeconomicAssessmentInputs;
  FrcsParameters: FrcsParameters;
  ExampleParameters: ExampleParameters;
}

export interface ExampleParameters {
  capacity: string;
  conversion: string;
  debtRatio: string;
  interest: string;
  debtTerm: string;
  lifeOfProject: string;
}

export interface FrcsParameters {
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
