import { GenericPowerOnlyInputMod } from './TechnoeconomicInputs';
import { OutputModGPO } from './TechnoeconomicOutputs';

export interface Inputs {
  TechnoeconomicAssessmentInputs: TechnoeconomicAssessmentInputs;
  ExampleParameters: ExampleParameters;
}

export interface ExampleParameters {
  capacity: string;
  radius: number;
  treeManagement: string;
  conversion: string;
  debtRatio: string;
  interest: string;
  debtTerm: string;
  lifeOfProject: string;
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
