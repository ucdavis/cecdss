import {
  OutputModCHP,
  OutputModGP,
  OutputModGPO,
  ElectricalFuelBaseYearModCHP
} from '@ucdavis/tea/out/models/output.model';
import {
  InputModCHP,
  InputModGP,
  InputModGPO,
  InputModHydrogen
} from '@ucdavis/tea/out/models/input.model';

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
  teaResults: OutputModGPO | OutputModCHP;
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
