import * as yup from 'yup';
import { SchemaOf, ValidationError } from 'yup';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { FrcsInputs, TechnoeconomicModels } from '../../models/Types';

// FrcsInputs
let frcsSchema: SchemaOf<FrcsInputs> = yup.object().shape({
  system: yup.string().required(),
  dieselFuelPrice: yup.number().required().min(0),
  treatmentid: yup.number().required().min(0)
});

export const checkFrcsValidity = async (inputs: FrcsInputs) => {
  try {
    await frcsSchema.validate(inputs);
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.errors;
    }
  }

  return [];
};

// Tea Example
// TODO: each schema need to be defined as SchemaOf<InputModGPO> or correct type
// Then each of the properties need to be listed with proper validation rules.
// Eventually we'll even want to make sure the values are between certain numbers, but for now
// we'll just make sure that any percentages are between 0 and 100 and leave everything else alone.
let electricalFuelBaseYearSchema = yup.object().shape({
  NetElectricalCapacity: yup.number().required().min(0),
  NetStationEfficiency: yup.number().required().min(0),
  CapacityFactor: yup.number().required().min(0),
  MoistureContent: yup.number().required().min(0),
  FuelHeatingValue: yup.number().required().min(0),
  FuelAshConcentration: yup.number().required().min(0)
});

let escalationInflationSchema = yup.object().shape({
  EscalationBiomassFuel: yup.number().required().min(0),
  EscalationCharSales: yup.number().required().min(0),
  EscalationDualFuel: yup.number().required().min(0),
  EscalationHeatSales: yup.number().required().min(0),
  EscalationOther: yup.number().required().min(0),
  EscalationProductionTaxCredit: yup.number().required().min(0),
  GeneralInflation: yup.number().required().min(0)
});

let expenseBaseYearSchema = yup.object().shape({
  AshDisposal: yup.number().required().min(0),
  BiomassFuelCost: yup.number().required().min(0),
  InsurancePropertyTax: yup.number().required().min(0),
  LaborCost: yup.number().required().min(0),
  MaintenanceCost: yup.number().required().min(0),
  Management: yup.number().required().min(0),
  OtherOperatingExpenses: yup.number().required().min(0),
  Utilities: yup.number().required().min(0)
});

let financingSchema = yup.object().shape({
  CostOfEquity: yup.number().required().min(0),
  DebtRatio: yup.number().required().min(0),
  EconomicLife: yup.number().required().min(0),
  InterestRateOnDebt: yup.number().required().min(0)
});

let incomeOtherThanEnergySchema = yup.object().shape({
  CapacityPayment: yup.number().required().min(0),
  InterestRateOnDebtReserve: yup.number().required().min(0),
  SalesPriceForChar: yup.number().required().min(0)
});

let taxesSchema = yup.object().shape({
  FederalTaxRate: yup.number().required().min(0),
  ProductionTaxCredit: yup.number().required().min(0),
  StateTaxRate: yup.number().required().min(0)
});

let teaGPOSchema = yup.object().shape({
  CapitalCost: yup.number().required().min(0),
  ElectricalFuelBaseYear: electricalFuelBaseYearSchema,
  EscalationInflation: escalationInflationSchema,
  ExpensesBaseYear: expenseBaseYearSchema,
  Financing: financingSchema,
  IncomeOtherThanEnergy: incomeOtherThanEnergySchema,
  TaxCreditFrac: yup.array().of(yup.number()),
  Taxes: taxesSchema
});

let teaCHPSchema = yup.object().shape({});
let teaGPSchema = yup.object().shape({});

export const checkTeaValidity = async (
  model: string,
  inputs: InputModGPO | InputModCHP | InputModGP
) => {
  try {
    if (model === "GPO") {
      await teaGPOSchema.validate(inputs);
    }
    if (model === "CHP") {
      await teaCHPSchema.validate(inputs);
    }
    if (model === "GP") {
      await teaGPSchema.validate(inputs);
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.errors;
    }
  }

  return [];
};
