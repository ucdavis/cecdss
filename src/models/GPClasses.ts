import {
  InputModGP,
  ExpensesBaseYearInputModGP,
  FinancingInputMod,
  IncomeOtherThanEnergyInputModGP,
  EscalationInflationInputModGP,
  ElectricalFuelBaseYearInputModGP
} from '@ucdavis/tea/input.model';
import {
  ExpensesBaseYearModGP,
  IncomeOtherThanEnergyModGP,
  ElectricalFuelBaseYearModGP
} from '@ucdavis/tea/output.model';
import {
  CarbonCreditClass,
  HeatBaseYearInputModClass,
  TaxesInputModClass
} from './TEASharedClasses';

export class InputModGPClass implements InputModGP {
  CapitalCost = 3_000_000;
  ElectricalFuelBaseYear = new ElectricalFuelBaseYearInputModGPClass();
  HeatBaseYear = new HeatBaseYearInputModGPClass();
  ExpensesBaseYear = new ExpensesBaseYearInputModGPClass();
  Taxes = new TaxesInputModClass();
  Financing = new FinancingInputModGPClass();
  IncomeOtherThanEnergy = new IncomeOtherThanEnergyInputModGPClass();
  EscalationInflation = new EscalationInflationInputModGPClass();
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CarbonCredit = new CarbonCreditClass();
  IncludeCarbonCredit = false;
  FirstYear = 2016;
}

export class ElectricalFuelBaseYearInputModGPClass
  implements ElectricalFuelBaseYearInputModGP {
  NetElectricalCapacity = 500;
  CapacityFactor = 80;
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

export class ExpensesBaseYearInputModGPClass
  implements ExpensesBaseYearInputModGP {
  BiomassFuelCost = 22.05;
  LaborCost = 70_000;
  MaintenanceCost = 15_000;
  WasteTreatment = 7_000;
  InsurancePropertyTax = 3500;
  Utilities = 3500;
  Management = 3500;
  OtherOperatingExpenses = 3500;
  DualFuelCost = 0.3;
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
  AnnualBiomassConsumption = 0;
  CharProductionRate = 0;
  AnnualCharProduction = 0;
}
