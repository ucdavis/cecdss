import { ElectricalFuelBaseYearModCHP } from '@ucdavis/tea/out/models/output.model';
import { InputModCHP } from '@ucdavis/tea/out/models/input.model';

export class InputModCHPClass implements InputModCHP {
  CapitalCost = 70000000;
  GrossElectricalCapacity = 28000;
  NetElectricalCapacity = 25000;
  CapacityFactor = 85;
  NetStationEfficiency = 20;
  MoistureContent = 50;
  FuelHeatingValue = 18608;
  FuelAshConcentration = 5;
  AggregateFractionOfHeatRecovered = 60;
  AggregateSalesPriceForHeat = 0.0102;
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
  EscalationHeatSales = 2.1;
  EscalationOther = 2.1;
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

export class ElectricalFuelBaseYearModCHPClass
  implements ElectricalFuelBaseYearModCHP {
  AnnualHours = 0;
  FuelConsumptionRate = 0;
  AnnualGeneration = 0;
  CapitalCostNEC = 0;
  AnnualFuelConsumption = 0;
  AnnualAshDisposal = 0;
  ParasiticLoad = 0;
  FuelPower = 0;
  GrossStationElectricalEfficiency = 0;
}
