import { InputModGPO } from '@ucdavis/tea/out/models/input.model';
import { ExpensesBaseYearModGPO } from '@ucdavis/tea/out/models/output.model';

export class InputModGPOClass implements InputModGPO {
  CapitalCost = 70000000;
  NetElectricalCapacity = 25000;
  CapacityFactor = 85;
  NetStationEfficiency = 20;
  MoistureContent = 50;
  FuelHeatingValue = 18608;
  FuelAshConcentration = 5;
  FuelCost = 22.05;
  LaborCost = 2000000;
  MaintenanceCost = 1500000;
  InsurancePropertyTax = 1400000;
  Utilities = 200000;
  AshDisposal = 100000;
  Management = 200000;
  OtherOperatingExpenses = 400000;
  FederalTaxRate = 34;
  StateTaxRate = 9.6;
  ProductionTaxCredit = 0.009;
  DebtRatio = 75;
  InterestRateOnDebt = 5;
  EconomicLife = 20;
  CostOfEquity = 15;
  CapacityPayment = 166;
  InterestRateonDebtReserve = 5;
  GeneralInflation = 2.1;
  EscalationFuel = 2.1;
  EscalationProductionTaxCredit = 2.1;
  EscalationOther = 2.1;
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

export class ExpensesBaseYearModGPOClass implements ExpensesBaseYearModGPO {
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
  FuelCostKwh = 0;
  AshDisposalKwh = 0;
}
