import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  CapitalCostInputModGP,
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

export const capitalCostElements: SchemaOf<CapitalCostInputModGP> = yup
  .object()
  .shape({
    EmissionControlSystemCapitalCost: yup.number().required().min(0),
    GasCleaningSystemCapitalCost: yup.number().required().min(0),
    GasifierSystemCapitalCost: yup.number().required().min(0),
    HeatRecoverySystemCapitalCost: yup.number().required().min(0),
    PowerGenerationCapitalCost: yup.number().required().min(0)
  });

export const electricalFuelBaseYearGPOSchema: SchemaOf<ElectricalFuelBaseYearInputModGPO> = yup
  .object()
  .shape({
    CapacityFactor: yup.number().required().min(0),
    FuelAshConcentration: yup.number().required().min(0),
    FuelHeatingValue: yup.number().required().min(0),
    MoistureContent: yup.number().required().min(0),
    NetElectricalCapacity: yup.number().required().min(0),
    NetStationEfficiency: yup.number().required().min(0)
  });

export const electricalFuelBaseYearCHPSchema: SchemaOf<ElectricalFuelBaseYearInputModCHP> = yup
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

export const electricalFuelBaseYearGPSchema: SchemaOf<ElectricalFuelBaseYearInputModGP> = yup
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

export const escalationInflationSchema: SchemaOf<EscalationInflationInputMod> = yup
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

export const escalationInflationGPSchema: SchemaOf<EscalationInflationInputModGP> = yup
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

export const expenseBaseYearGPOSchema: SchemaOf<ExpensesBaseYearInputModGPO> = yup
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

export const expenseBaseYearGPSchema: SchemaOf<ExpensesBaseYearInputModGP> = yup
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

export const financingSchema: SchemaOf<FinancingInputMod> = yup.object().shape({
  CostOfEquity: yup.number().required().min(0),
  DebtRatio: yup.number().required().min(0),
  EconomicLife: yup.number().required().min(0),
  InterestRateOnDebt: yup.number().required().min(0)
});

export const heatBaseYearSchema: SchemaOf<HeatBaseYearInputMod> = yup
  .object()
  .shape({
    AggregateFractionOfHeatRecovered: yup.number().required().min(0),
    AggregateSalesPriceForHeat: yup.number().required().min(0)
  });

export const incomeOtherThanEnergySchema: SchemaOf<IncomeOtherThanEnergyInputMod> = yup
  .object()
  .shape({
    CapacityPayment: yup.number().required().min(0),
    InterestRateOnDebtReserve: yup.number().required().min(0)
  });

export const incomeOtherThanEnergyGPSchema: SchemaOf<IncomeOtherThanEnergyInputModGP> = yup
  .object()
  .shape({
    CapacityPayment: yup.number().required().min(0),
    InterestRateOnDebtReserve: yup.number().required().min(0),
    SalesPriceForChar: yup.number().required().min(0)
  });

export const taxesSchema: SchemaOf<TaxesInputMod> = yup.object().shape({
  FederalTaxRate: yup.number().required().min(0),
  ProductionTaxCredit: yup.number().required().min(0),
  StateTaxRate: yup.number().required().min(0)
});

export const carbonCreditSchema: SchemaOf<CarbonCredit> = yup.object().shape({
  CreditPrice: yup.number().required().min(0),
  CIscore: yup.number().required().min(0),
  EnergyEconomyRatio: yup.number().required().min(0)
});

export const teaGPOSchema: SchemaOf<InputModGPO> = yup.object().shape({
  CapitalCost: yup.number().required().min(0),
  ElectricalFuelBaseYear: electricalFuelBaseYearGPOSchema,
  EscalationInflation: escalationInflationSchema,
  ExpensesBaseYear: expenseBaseYearGPOSchema,
  Financing: financingSchema,
  IncomeOtherThanEnergy: incomeOtherThanEnergySchema,
  TaxCreditFrac: yup.array().of(yup.number().required()),
  Taxes: taxesSchema,
  CarbonCredit: carbonCreditSchema,
  IncludeCarbonCredit: yup.boolean().required(),
  FirstYear: yup.number().required().min(2016)
});

export const teaCHPSchema: SchemaOf<InputModCHP> = yup.object().shape({
  CapitalCost: yup.number().required().min(0),
  ElectricalFuelBaseYear: electricalFuelBaseYearCHPSchema,
  EscalationInflation: escalationInflationSchema,
  ExpensesBaseYear: expenseBaseYearGPOSchema,
  Financing: financingSchema,
  HeatBaseYear: heatBaseYearSchema,
  IncomeOtherThanEnergy: incomeOtherThanEnergySchema,
  TaxCreditFrac: yup.array().of(yup.number().required()),
  Taxes: taxesSchema,
  CarbonCredit: carbonCreditSchema,
  IncludeCarbonCredit: yup.boolean().required(),
  FirstYear: yup.number().required().min(2016)
});

export const teaGPSchema: SchemaOf<InputModGP> = yup.object().shape({
  CapitalCost: yup.number().required().min(0),
  CapitalCostElements: capitalCostElements,
  doSensitivityAnalysis: yup.boolean().required(),
  ElectricalFuelBaseYear: electricalFuelBaseYearGPSchema,
  EscalationInflation: escalationInflationGPSchema,
  ExpensesBaseYear: expenseBaseYearGPSchema,
  Financing: financingSchema,
  HeatBaseYear: heatBaseYearSchema,
  IncomeOtherThanEnergy: incomeOtherThanEnergyGPSchema,
  TaxCreditFrac: yup.array().of(yup.number().required()),
  Taxes: taxesSchema,
  CarbonCredit: carbonCreditSchema,
  IncludeCarbonCredit: yup.boolean().required(),
  FirstYear: yup.number().required().min(2016)
});
