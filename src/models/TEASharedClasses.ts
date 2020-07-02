import {
  IncomeOtherThanEnergyInputMod,
  EscalationInflationInputMod,
  TaxesInputMod,
  FinancingInputMod,
  HeatBaseYearInputMod
} from '@ucdavis/tea/out/models/input.model';

export class IncomeOtherThanEnergyInputModClass
  implements IncomeOtherThanEnergyInputMod {
  CapacityPayment = 166;
  InterestRateOnDebtReserve = 5;
  SalesPriceForChar = 0;
}
export class EscalationInflationInputModClass
  implements EscalationInflationInputMod {
  GeneralInflation = 2.1;
  EscalationBiomassFuel = 2.1;
  EscalationProductionTaxCredit = 2.1;
  EscalationHeatSales = 2.1;
  EscalationOther = 2.1;
  EscalationDualFuel = 2.1;
  EscalationCharSales = 2.1;
}

export class TaxesInputModClass implements TaxesInputMod {
  FederalTaxRate = 34;
  StateTaxRate = 9.6;
  ProductionTaxCredit = 0.009;
}
export class FinancingInputModClass implements FinancingInputMod {
  DebtRatio = 75;
  InterestRateOnDebt = 5;
  EconomicLife = 20;
  CostOfEquity = 15;
}

export class HeatBaseYearInputModClass implements HeatBaseYearInputMod {
  AggregateFractionOfHeatRecovered = 60;
  AggregateSalesPriceForHeat = 0.0102;
}
