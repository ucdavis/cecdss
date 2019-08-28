import { GenericPowerOnlyInputMod } from './TechnoeconomicInputs';

export interface Inputs {
  TechnoEconomicAssessmentInputs: TechnoEconomicAssessmentInputs;
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

export interface TechnoEconomicAssessmentInputs {
  model: string;
  genericPowerOnly?: GenericPowerOnlyInputMod;
}
