import { LCIAresults, LCIresults, RunParams } from '@ucdavis/lca/out/lca.model';

export interface LCAresults {
  lciResults: LCIresults;
  lciaResults: LCIAresults;
  inputs: RunParams;
}
