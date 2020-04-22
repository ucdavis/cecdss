import { InputModGPO } from '@ucdavis/tea/out/models/input.model';

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
