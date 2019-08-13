export interface Outputs {
  TechnoEconomicAssessmentOutputs: TechnoEconomicAssessmentOutputs;
}
export interface Inputs {
  TechnoEconomicAssessmentInputs: TechnoEconomicAssessmentInputs;
  ExampleParameters: ExampleParameters;
}

export interface ExampleParameters {
  capacity: string;
  radius: number;
  treeManagement: string;
  conversion: string;
  debtRatio: string;
  interest: string;
  debtTerm: string;
  lifeOfProject: string;
}

export interface TechnoEconomicAssessmentInputs {
  model: string;
  CapitalCost: number;
  NetPlantCapacity: number;
  CapacityFactor: number;
  NetStationEfficiency: number;
  FuelHeatingValue: number;
  FuelAshConcentration: number;

  FuelCost: number;
  LaborCost: number;
  MaintenanceCost: number;
  InsurancePropertyTax: number;
  Utilities: number;
  AshDisposal: number;
  Management: number;
  OtherOperatingExpenses: number;

  FederalTaxRate: number;
  StateTaxRate: number;
  ProductionTaxCredit: number;

  DebtRatio: number;
  InterestRateOnDebt: number;
  EconomicLife: number;
  CostOfEquity: number;

  CapacityPayment: number;
  InterestRateonDebtReserve: number;

  GeneralInflation: number;
  EscalationFuel: number;
  EscalationForProductionTaxCredit: number;
  EscalationOther: number;

  TaxCreditFrac: number[];
}

export interface TechnoEconomicAssessmentOutputs {
  AnnualCashFlows: TechnoEconomicAssessmentAnnualCashFlowOutput[];
  TotalCashFlow: TechnoEconomicAssessmentTotalCashFlowOutput;
  TotalPresentWorth: number;
  CurrentLevelAnnualRevenueRequirements: number;
  CurrentLACofEnergy: number;
  RealCostOfMoney: number;
  CapitalRecoveryFactorConstant: number;
  ConstantLevelAnnualRevenueRequirements: number;
  ConstantLACofEnergy: number;
}

export interface TechnoEconomicAssessmentAnnualCashFlowOutput {
  Year: number;
  EquityRecovery: number;
  EquityInterest: number;
  EquityPrincipalPaid: number;
  EquityPrincipalRemaining: number;
  DebtRecovery: number;
  DebtInterest: number;
  DebtPrincipalPaid: number;
  DebtPrincipalRemaining: number;
  FuelCost: number;
  NonFuelExpenses: number;
  DebtReserve: number;
  Depreciation: number;
  CapacityIncome: number;
  InterestOnDebtReserve: number;
  TaxesWoCredit: number;
  TaxCredit: number;
  Taxes: number;
  EnergyRevenueRequired: number;
}

export interface TechnoEconomicAssessmentTotalCashFlowOutput {
  EquityRecovery: number;
  EquityInterest: number;
  EquityPrincipalPaid: number;
  DebtRecovery: number;
  DebtInterest: number;
  DebtPrincipalPaid: number;
  FuelCost: number;
  NonFuelExpenses: number;
  DebtReserve: number;
  Depreciation: number;
  CapacityIncome: number;
  InterestOnDebtReserve: number;
  TaxesWoCredit: number;
  TaxCredit: number;
  Taxes: number;
  EnergyRevenueRequired: number;
}
