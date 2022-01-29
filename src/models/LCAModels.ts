import { LcaInputs, LcaOutputs } from '@ucdavis/lca/model';

export interface LCAresults extends LcaOutputs {
  inputs: LcaInputs;
}
