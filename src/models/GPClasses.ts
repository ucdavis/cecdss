import { InputModGP } from '@ucdavis/tea/out/models/input.model';
import {
  ExpensesBaseYearModGP,
  IncomeOtherThanEnergyModGP
} from '@ucdavis/tea/out/models/output.model';

export class InputModGPClass implements InputModGP {
  GasifierSystemCapitalCost = 300000;
  GasCleaningSystemCapitalCost = 50000;
  PowerGenerationCapitalCost = 450000;
  EmissionControlSystemCapitalCost = 25000;
  HeatRecoverySystemCapitalCost = 50000;
  GrossElectricalCapacity = 650;
  NetElectricalCapacity = 500;
  CapacityFactor = 85;
  HHVEfficiency = 65;
  NetHHVEfficiency = 23;
  FractionOfInputEnergy = 20;
  CO = 20;
  H2 = 12;
  Hydrocarbons = 5;
  CO2 = 12;
  O2 = 0;
  HHV = 18608;
  MoistureContent = 50;
  AshContent = 5;
  CarbonConcentration = 30;
  AggregateFractionOfHeatRecovered = 50;
  AggregateSalesPriceForHeat = 0.01;
  BiomassFuelCost = 22.05;
  DualFuelCost = 0.3;
  LaborCost = 20000;
  MaintenanceCost = 4000;
  WasteTreatment = 2000;
  Insurance = 1000;
  Utilities = 1000;
  Management = 1000;
  OtherOperatingExpenses = 1000;
  FederalTaxRate = 34;
  StateTaxRate = 9.6;
  ProductionTaxCredit = 0.009;
  ElectricityCapacityPayment = 0;
  InterestRateOnDebtReserve = 2;
  SalesPriceForChar = 0;
  GeneralInflation = 2.1;
  EscalationBiomassFuel = 2.1;
  EscalationDualFuel = 2.1;
  EscalationProductionTaxCredit = 2.1;
  EscalationHeatSales = 2.1;
  EscalationCharSales = 2.1;
  EscalationOther = 2.1;
  DebtRatio = 90;
  InterestRateOnDebt = 5;
  EconomicLife = 20;
  CostOfEquity = 15;
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
