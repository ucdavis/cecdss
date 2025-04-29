import {
  ElectricalFuelBaseYearInputModGPO,
  ExpensesBaseYearInputModGPO,
  InputModGPO
} from '@ucdavis/tea/input.model';
import {
  ElectricalFuelBaseYearMod,
  ExpensesBaseYearModGPO,
  IncomeOtherThanEnergyMod
} from '@ucdavis/tea/output.model';
import {
  CarbonCreditClass,
  EscalationInflationInputModClass,
  FinancingInputModClass,
  IncomeOtherThanEnergyInputModClass,
  TaxesInputModClass
} from './TEASharedClasses';

export class InputModGPOClass implements InputModGPO {
  CapitalCost = 100_000_000;
  CapitalCostManuallySet = false;
  ElectricalFuelBaseYear = new ElectricalFuelBaseYearInputModGPOClass();
  ExpensesBaseYear = new ExpensesBaseYearInputModGPOClass();
  Taxes = new TaxesInputModClass();
  Financing = new FinancingInputModClass();
  IncomeOtherThanEnergy = new IncomeOtherThanEnergyInputModClass();
  EscalationInflation = new EscalationInflationInputModClass();
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CarbonCredit = new CarbonCreditClass();
  IncludeCarbonCredit = false;
  FirstYear = 2025;
}

export class ElectricalFuelBaseYearInputModGPOClass
  implements ElectricalFuelBaseYearInputModGPO {
  NetElectricalCapacity = 25000;
  CapacityFactor = 80;
  MoistureContent = 50;
  NetStationEfficiency = 20;
  FuelHeatingValue = 18608;
  FuelAshConcentration = 5;
}

export class ExpensesBaseYearInputModGPOClass
  implements ExpensesBaseYearInputModGPO {
  BiomassFuelCost = 22.05;
  LaborCost = 3_000_000;
  LaborCostManuallySet = false;
  MaintenanceCost = 2_000_000;
  MaintenanceCostManuallySet = false;
  InsurancePropertyTax = 2_000_000;
  InsurancePropertyTaxManuallySet = false;
  Utilities = 300_000;
  UtilitiesManuallySet = false;
  AshDisposal = 150_000;
  Management = 300_000;
  ManagementManuallySet = false;
  OtherOperatingExpenses = 600_000;
  OtherOperatingExpensesManuallySet = false;
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

export class IncomeOtherThanEnergyModClass implements IncomeOtherThanEnergyMod {
  AnnualCapacityPayment = 0;
  AnnualDebtReserveInterest = 0;
}

export class ElectricalFuelBaseYearModGPOClass
  implements ElectricalFuelBaseYearMod {
  AnnualHours = 0;
  BiomassTarget = 0;
}
