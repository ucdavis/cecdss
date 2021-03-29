import {
  InputModGP,
  CapitalCostInputModGP,
  ExpensesBaseYearInputModGP,
  FinancingInputMod,
  IncomeOtherThanEnergyInputModGP,
  EscalationInflationInputModGP,
  ElectricalFuelBaseYearInputModGP,
} from '@ucdavis/tea/out/models/input.model';
import {
  ExpensesBaseYearModGP,
  IncomeOtherThanEnergyModGP,
  ElectricalFuelBaseYearModGP
} from '@ucdavis/tea/out/models/output.model';
import {
  HeatBaseYearInputModClass,
  TaxesInputModClass,
} from './TEASharedClasses';

export class InputModGPClass implements InputModGP {
  doSensitivityAnalysis = true;
  CapitalCostElements = new CapitalCostInputModGPClass();
  CapitalCost = 875000;
  ElectricalFuelBaseYear = new ElectricalFuelBaseYearInputModGPClass();
  HeatBaseYear = new HeatBaseYearInputModGPClass();
  ExpensesBaseYear = new ExpensesBaseYearInputModGPClass();
  Taxes = new TaxesInputModClass();
  Financing = new FinancingInputModGPClass();
  IncomeOtherThanEnergy = new IncomeOtherThanEnergyInputModGPClass();
  EscalationInflation = new EscalationInflationInputModGPClass();
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

export class CapitalCostInputModGPClass implements CapitalCostInputModGP {
  GasifierSystemCapitalCost = 300000;
  GasCleaningSystemCapitalCost = 50000;
  PowerGenerationCapitalCost = 450000;
  EmissionControlSystemCapitalCost = 25000;
  HeatRecoverySystemCapitalCost = 50000;
}

export class ElectricalFuelBaseYearInputModGPClass
  implements ElectricalFuelBaseYearInputModGP {
  NetElectricalCapacity = 500;
  CapacityFactor = 85;
  MoistureContent = 50;
  GrossElectricalCapacity = 650;
  HHVEfficiency = 65;
  NetStationEfficiency = 23;
  FractionOfInputEnergy = 20;
  CO = 20;
  H2 = 12;
  Hydrocarbons = 5;
  CO2 = 12;
  O2 = 0;
  HHV = 18608;
  AshContent = 5;
  CarbonConcentration = 30;
}

export class HeatBaseYearInputModGPClass implements HeatBaseYearInputModClass {
  AggregateFractionOfHeatRecovered = 50;
  AggregateSalesPriceForHeat = 0.01;
}

export class ExpensesBaseYearInputModGPClass implements ExpensesBaseYearInputModGP {
  BiomassFuelCost = 22.05;
  LaborCost = 20000;
  MaintenanceCost = 4000;
  InsurancePropertyTax = 1000;
  Utilities = 1000;
  Management = 1000;
  OtherOperatingExpenses = 1000;
  DualFuelCost = 0.3;
  WasteTreatment = 2000;
}

export class IncomeOtherThanEnergyInputModGPClass
  implements IncomeOtherThanEnergyInputModGP {
  CapacityPayment = 0;
  InterestRateOnDebtReserve = 2;
  SalesPriceForChar = 0;
}

export class FinancingInputModGPClass implements FinancingInputMod {
  DebtRatio = 90;
  InterestRateOnDebt = 5;
  EconomicLife = 20; // TODO: set back to 20
  CostOfEquity = 15;
}

export class EscalationInflationInputModGPClass
  implements EscalationInflationInputModGP {
  GeneralInflation = 2.1;
  EscalationBiomassFuel = 2.1;
  EscalationProductionTaxCredit = 2.1;
  EscalationHeatSales = 2.1;
  EscalationOther = 2.1;
  EscalationDualFuel = 2.1;
  EscalationCharSales = 2.1;
}

export class ExpensesBaseYearModGPClass implements ExpensesBaseYearModGP {
  TotalNonFuelExpenses = 0;
  TotalExpensesIncludingFuel = 0;
  LaborCostKwh = 0;
  MaintenanceCostKwh = 0;
  InsurancePropertyTaxKwh = 0;
  UtilitiesKwh = 0;
  ManagementKwh = 0;
  OtherOperatingExpensesKwh = 0;
  TotalNonFuelExpensesKwh = 0;
  TotalExpensesIncludingFuelKwh = 0;
  BiomassFuelCostKwh = 0;
  DualFuelCostKwh = 0;
  WasteTreatmentKwh = 0;
}

export class IncomeOtherThanEnergyModGPClass
  implements IncomeOtherThanEnergyModGP {
  AnnualCapacityPayment = 0;
  AnnualDebtReserveInterest = 0;
  AnnualIncomeFromChar = 0;
}

export class ElectricalFuelBaseYearModGPClass
  implements ElectricalFuelBaseYearModGP {
  BiomassTarget = 0;
  ParasiticLoad = 0;
  AnnualHours = 0;
  AnnualGeneration = 0;
  OverallNetSystemEfficiency = 0;
  NitrogenGas = 0;
  CleanGasMolecularMass = 0;
  CleanGasDensity = 0;
  CleanGasHigherHeatingValue = 0;
  CleanGasLowerHeatingValue = 0;
  TotalFuelPowerInput = 0;
  CleanGasPowerInput = 0;
  DualFuelPowerInput = 0;
  CleanGasFlowRateVolume = 0;
  CleanGasFlowRateMass = 0;
  AnnualCleanGasConsumption = 0;
  DualFuelFlowRate = 0;
  AnnualDualFuelConsumption = 0;
  BiomassFeedRate = 0;
  AnnualBiomassConsumptionDryMass = 0;
  AnnualBiomassConsumptionWetMass = 0;
  CharProductionRate = 0;
  AnnualCharProduction = 0;
}
