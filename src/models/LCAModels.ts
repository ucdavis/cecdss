import { LcaInputs, LifeCycleEmissions, LifeCycleImpacts } from '@ucdavis/lca/model';

export interface LCAresults {
  lifeCycleEmissions: LifeCycleEmissions;
  lifeCycleImpacts: LifeCycleImpacts;
  inputs: LcaInputs;
}
