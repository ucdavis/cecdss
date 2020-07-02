import { ElectricalFuelBaseYearModCHP } from '@ucdavis/tea/out/models/output.model';
import {
  InputModCHP,
  ExpensesBaseYearInputMod,
  ElectricalFuelBaseYearInputModCHP
} from '@ucdavis/tea/out/models/input.model';
import {
  HeatBaseYearInputModClass,
  TaxesInputModClass,
  FinancingInputModClass,
  IncomeOtherThanEnergyInputModClass,
  EscalationInflationInputModClass
} from './TEASharedClasses';
import { ExpensesBaseYearInputModGPOClass } from './GPOClasses';

export class InputModCHPClass implements InputModCHP {
  CapitalCost = 70000000;
  ElectricalFuelBaseYear = new ElectricalFuelBaseYearInputModCHPClass();
  HeatBaseYear = new HeatBaseYearInputModClass();
  ExpensesBaseYear = new ExpensesBaseYearInputModGPOClass();
  Taxes = new TaxesInputModClass();
  Financing = new FinancingInputModClass();
  IncomeOtherThanEnergy = new IncomeOtherThanEnergyInputModClass();
  EscalationInflation = new EscalationInflationInputModClass();
  TaxCreditFrac = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

export class ElectricalFuelBaseYearInputModCHPClass
  implements ElectricalFuelBaseYearInputModCHP {
  NetElectricalCapacity = 25000;
  CapacityFactor = 85;
  MoistureContent = 50;
  NetStationEfficiency = 20;
  FuelHeatingValue = 18608;
  FuelAshConcentration = 5;
  GrossElectricalCapacity = 28000;
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
