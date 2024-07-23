import * as yup from 'yup';
import { Schema } from 'yup';
import {
  ElectricalFuelBaseYearInputModCHP,
  ElectricalFuelBaseYearInputModGPO,
  ElectricalFuelBaseYearInputModGP,
  ExpensesBaseYearInputModGPO,
  ExpensesBaseYearInputModGP,
  EscalationInflationInputMod,
  EscalationInflationInputModGP,
  FinancingInputMod,
  HeatBaseYearInputMod,
  IncomeOtherThanEnergyInputMod,
  IncomeOtherThanEnergyInputModGP,
  InputModGPO,
  InputModCHP,
  InputModGP,
  TaxesInputMod,
  CarbonCredit
} from '@ucdavis/tea/input.model';

export const electricalFuelBaseYearGPOSchema: Schema<ElectricalFuelBaseYearInputModGPO> = yup
  .object()
  .shape({
    CapacityFactor: yup.number().required().min(0),
    FuelAshConcentration: yup.number().required().min(0),
    FuelHeatingValue: yup.number().required().min(0),
    MoistureContent: yup.number().required().min(0),
    NetElectricalCapacity: yup.number().required().min(0),
    NetStationEfficiency: yup.number().required().min(0)
  });

export const electricalFuelBaseYearCHPSchema: Schema<ElectricalFuelBaseYearInputModCHP> = yup
  .object()
  .shape({
    CapacityFactor: yup.number().required().min(0),
    FuelAshConcentration: yup.number().required().min(0),
    FuelHeatingValue: yup.number().required().min(0),
    GrossElectricalCapacity: yup.number().required().min(0),
    MoistureContent: yup.number().required().min(0),
    NetElectricalCapacity: yup.number().required().min(0),
    NetStationEfficiency: yup.number().required().min(0)
  });

export const electricalFuelBaseYearGPSchema: Schema<ElectricalFuelBaseYearInputModGP> = yup
  .object()
  .shape({
    AshContent: yup.number().required().min(0),
    CO: yup.number().required().min(0),
    CO2: yup.number().required().min(0),
    CapacityFactor: yup.number().required().min(0),
    CarbonConcentration: yup.number().required().min(0),
    FractionOfInputEnergy: yup.number().required().min(0),
    GrossElectricalCapacity: yup.number().required().min(0),
    H2: yup.number().required().min(0),
    HHV: yup.number().required().min(0),
    HHVEfficiency: yup.number().required().min(0),
    Hydrocarbons: yup.number().required().min(0),
    MoistureContent: yup.number().required().min(0),
    NetElectricalCapacity: yup.number().required().min(0),
    NetStationEfficiency: yup.number().required().min(0),
    O2: yup.number().required().min(0)
  });

export const escalationInflationSchema: Schema<EscalationInflationInputMod> = yup
  .object()
  .shape({
    EscalationBiomassFuel: yup.number().required().min(0),
    EscalationCharSales: yup.number().required().min(0),
    EscalationDualFuel: yup.number().required().min(0),
    EscalationHeatSales: yup.number().required().min(0),
    EscalationOther: yup.number().required().min(0),
    EscalationProductionTaxCredit: yup.number().required().min(0),
    GeneralInflation: yup.number().required().min(0)
  });

export const escalationInflationGPSchema: Schema<EscalationInflationInputModGP> = yup
  .object()
  .shape({
    EscalationBiomassFuel: yup.number().required().min(0),
    EscalationCharSales: yup.number().required().min(0),
    EscalationDualFuel: yup.number().required().min(0),
    EscalationHeatSales: yup.number().required().min(0),
    EscalationOther: yup.number().required().min(0),
    EscalationProductionTaxCredit: yup.number().required().min(0),
    GeneralInflation: yup.number().required().min(0)
  });

export const expenseBaseYearGPOSchema: Schema<ExpensesBaseYearInputModGPO> = yup
  .object()
  .shape({
    AshDisposal: yup.number().required().min(0),
    BiomassFuelCost: yup.number().required().min(0),
    InsurancePropertyTax: yup.number().required().min(0),
    LaborCost: yup.number().required().min(0),
    MaintenanceCost: yup.number().required().min(0),
    Management: yup.number().required().min(0),
    OtherOperatingExpenses: yup.number().required().min(0),
    Utilities: yup.number().required().min(0)
  });

export const expenseBaseYearGPSchema: Schema<ExpensesBaseYearInputModGP> = yup
  .object()
  .shape({
    BiomassFuelCost: yup.number().required().min(0),
    DualFuelCost: yup.number().required().min(0),
    InsurancePropertyTax: yup.number().required().min(0),
    LaborCost: yup.number().required().min(0),
    MaintenanceCost: yup.number().required().min(0),
    Management: yup.number().required().min(0),
    OtherOperatingExpenses: yup.number().required().min(0),
    Utilities: yup.number().required().min(0),
    WasteTreatment: yup.number().required().min(0)
  });

export const financingSchema: Schema<FinancingInputMod> = yup.object().shape({
  CostOfEquity: yup.number().required().min(0),
  DebtRatio: yup.number().required().min(0),
  EconomicLife: yup.number().required().min(0),
  InterestRateOnDebt: yup.number().required().min(0)
});

export const heatBaseYearSchema: Schema<HeatBaseYearInputMod> = yup
  .object()
  .shape({
    AggregateFractionOfHeatRecovered: yup.number().required().min(0),
    AggregateSalesPriceForHeat: yup.number().required().min(0)
  });

export const incomeOtherThanEnergySchema: Schema<IncomeOtherThanEnergyInputMod> = yup
  .object()
  .shape({
    CapacityPayment: yup.number().required().min(0),
    InterestRateOnDebtReserve: yup.number().required().min(0)
  });

export const incomeOtherThanEnergyGPSchema: Schema<IncomeOtherThanEnergyInputModGP> = yup
  .object()
  .shape({
    CapacityPayment: yup.number().required().min(0),
    InterestRateOnDebtReserve: yup.number().required().min(0),
    SalesPriceForChar: yup.number().required().min(0)
  });

export const taxesSchema: Schema<TaxesInputMod> = yup.object().shape({
  FederalTaxRate: yup.number().required().min(0),
  ProductionTaxCredit: yup.number().required().min(0),
  StateTaxRate: yup.number().required().min(0)
});

export const carbonCreditSchema: Schema<CarbonCredit> = yup.object().shape({
  CreditPrice: yup.number().required().min(0),
  CIscore: yup.number().required().min(0),
  EnergyEconomyRatio: yup.number().required().min(0)
});

export const teaGPOSchema: Schema<InputModGPO> = yup.object().shape({
  CapitalCost: yup.number().required().min(0),
  ElectricalFuelBaseYear: electricalFuelBaseYearGPOSchema,
  EscalationInflation: escalationInflationSchema,
  ExpensesBaseYear: expenseBaseYearGPOSchema,
  Financing: financingSchema,
  IncomeOtherThanEnergy: incomeOtherThanEnergySchema,
  TaxCreditFrac: yup.array().of(yup.number().required()).default([]).required(),
  Taxes: taxesSchema,
  CarbonCredit: carbonCreditSchema,
  IncludeCarbonCredit: yup.boolean().required(),
  FirstYear: yup.number().required().min(2016)
});

export const teaCHPSchema: Schema<InputModCHP> = yup.object().shape({
  CapitalCost: yup.number().required().min(0),
  ElectricalFuelBaseYear: electricalFuelBaseYearCHPSchema,
  EscalationInflation: escalationInflationSchema,
  ExpensesBaseYear: expenseBaseYearGPOSchema,
  Financing: financingSchema,
  HeatBaseYear: heatBaseYearSchema,
  IncomeOtherThanEnergy: incomeOtherThanEnergySchema,
  TaxCreditFrac: yup.array().of(yup.number().required()).default([]).required(),
  Taxes: taxesSchema,
  CarbonCredit: carbonCreditSchema,
  IncludeCarbonCredit: yup.boolean().required(),
  FirstYear: yup.number().required().min(2016)
});

export const teaGPSchema: Schema<InputModGP> = yup.object().shape({
  CapitalCost: yup.number().required().min(0),
  ElectricalFuelBaseYear: electricalFuelBaseYearGPSchema,
  EscalationInflation: escalationInflationGPSchema,
  ExpensesBaseYear: expenseBaseYearGPSchema,
  Financing: financingSchema,
  HeatBaseYear: heatBaseYearSchema,
  IncomeOtherThanEnergy: incomeOtherThanEnergyGPSchema,
  TaxCreditFrac: yup.array().of(yup.number().required()).default([]).required(),
  Taxes: taxesSchema,
  CarbonCredit: carbonCreditSchema,
  IncludeCarbonCredit: yup.boolean().required(),
  FirstYear: yup.number().required().min(2016)
});
