import { ElectricalFuelBaseYearModCHP } from '@ucdavis/tea/output.model';
import {
  InputModCHP,
  ExpensesBaseYearInputMod,
  ElectricalFuelBaseYearInputModCHP
} from '@ucdavis/tea/input.model';
import {
  HeatBaseYearInputModClass,
  TaxesInputModClass,
  FinancingInputModClass,
  IncomeOtherThanEnergyInputModClass,
  EscalationInflationInputModClass,
  CarbonCreditClass
} from './TEASharedClasses';

export class InputModCHPClass implements InputModCHP {
  CapitalCost = 100_000_000;
  ElectricalFuelBaseYear = new ElectricalFuelBaseYearInputModCHPClass();
  HeatBaseYear = new HeatBaseYearInputModClass();
  ExpensesBaseYear = new ExpensesBaseYearInputModCHPClass();
  Taxes = new TaxesInputModClass();
  Financing = new FinancingInputModClass();
  IncomeOtherThanEnergy = new IncomeOtherThanEnergyInputModClass();
  EscalationInflation = new EscalationInflationInputModClass();
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CarbonCredit = new CarbonCreditClass();
  IncludeCarbonCredit = false;
  FirstYear = 2016;
}

export class ElectricalFuelBaseYearInputModCHPClass
  implements ElectricalFuelBaseYearInputModCHP {
  NetElectricalCapacity = 25000;
  CapacityFactor = 80;
  MoistureContent = 50;
  NetStationEfficiency = 20;
  FuelHeatingValue = 18608;
  FuelAshConcentration = 5;
  GrossElectricalCapacity = 25000;
}

export class ExpensesBaseYearInputModCHPClass
  implements ExpensesBaseYearInputMod {
  BiomassFuelCost = 22.05;
  LaborCost = 3_000_000;
  MaintenanceCost = 2_000_000;
  InsurancePropertyTax = 2_000_000;
  Utilities = 300_000;
  AshDisposal = 150_000;
  Management = 300_000;
  OtherOperatingExpenses = 600_000;
}

export class ElectricalFuelBaseYearModCHPClass
  implements ElectricalFuelBaseYearModCHP {
  BiomassTarget = 0;
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

export class ExpensesBaseYearInputModClass implements ExpensesBaseYearInputMod {
  BiomassFuelCost = 0;
  LaborCost = 0;
  MaintenanceCost = 0;
  InsurancePropertyTax = 0;
  Utilities = 0;
  Management = 0;
  OtherOperatingExpenses = 0;
}
