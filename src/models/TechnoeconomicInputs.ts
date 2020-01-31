// GenericPowerOnly
export interface GenericPowerOnlyInputMod {
  CapitalCost: number;
  // Electrical and Fuel--base year
  NetElectricalCapacity: number;
  CapacityFactor: number;
  NetStationEfficiency: number;
  FuelHeatingValue: number;
  FuelAshConcentration: number;
  // Expenses--base year
  FuelCost: number;
  LaborCost: number;
  MaintenanceCost: number;
  InsurancePropertyTax: number;
  Utilities: number;
  AshDisposal: number;
  Management: number;
  OtherOperatingExpenses: number;
  // Taxes
  FederalTaxRate: number;
  StateTaxRate: number;
  ProductionTaxCredit: number;
  // Financing
  DebtRatio: number;
  InterestRateOnDebt: number;
  EconomicLife: number;
  CostOfEquity: number;
  // Income other than energy
  CapacityPayment: number;
  InterestRateonDebtReserve: number;
  // Escalation/Inflation
  GeneralInflation: number;
  EscalationFuel: number;
  EscalationProductionTaxCredit: number;
  EscalationOther: number;
  // Tax Credit Schedule
  TaxCreditFrac: number[];
}

// GenericCombinedHeatPower
export interface GenericCombinedHeatPowerInputMod {
  CapitalCost: number;
  // Electrical and Fuel--base year
  GrossElectricalCapacity: number;
  NetElectricalCapacity: number;
  CapacityFactor: number;
  NetStationEfficiency: number;
  FuelHeatingValue: number;
  FuelAshConcentration: number;
  // Heat-base year
  AggregateFractionOfHeatRecovered: number;
  AggregateSalesPriceForHeat: number;
  // Expenses--base year
  FuelCost: number;
  LaborCost: number;
  MaintenanceCost: number;
  InsurancePropertyTax: number;
  Utilities: number;
  AshDisposal: number;
  Management: number;
  OtherOperatingExpenses: number;
  // Taxes
  FederalTaxRate: number;
  StateTaxRate: number;
  ProductionTaxCredit: number;
  // Financing
  DebtRatio: number;
  InterestRateOnDebt: number;
  EconomicLife: number;
  CostOfEquity: number;
  // Income other than energy
  CapacityPayment: number;
  InterestRateonDebtReserve: number;
  // Escalation/Inflation
  GeneralInflation: number;
  EscalationFuel: number;
  EscalationProductionTaxCredit: number;
  EscalationHeatSales: number;
  EscalationOther: number;
  // Tax Credit Schedule
  TaxCreditFrac: number[];
}

// GasificationPower
export interface GasificationPowerInputMod {
  // Fuel Properties
  GasolineDensity: number;
  GasolineHigherHeatingMjPerKg: number;
  GasolineLowerHeatingMjPerKg: number;
  LightDieselDensity: number;
  LightDieselHigherHeatingMjPerKg: number;
  LightDieselLowerHeatingMjPerKg: number;
  HeavyDieselDensity: number;
  HeavyDieselHigherHeatingMjPerKg: number;
  HeavyDieselLowerHeatingMjPerKg: number;
  NaturalGasDensity: number;
  NaturalGasHigherHeatingMjPerKg: number;
  NaturalGasLowerHeatingMjPerKg: number;
  COHigherHeatingMjPerKg: number;
  COLowerHeatingMjPerKg: number;
  H2HigherHeatingMjPerKg: number;
  H2LowerHeatingMjPerKg: number;
  CH4HigherHeatingMjPerKg: number;
  CH4LowerHeatingMjPerKg: number;
  // Capital Cost from Gasification Power Generation
  GasifierSystemCapitalCost: number;
  GasCleaningSystemCapitalCost: number;
  PowerGenerationCapitalCost: number;
  EmissionControlSystemCapitalCost: number;
  HeatRecoverySystemCapitalCost: number;
  // Electrical and Fuel -- base year from Gasification Power Generation
  GrossElectricalCapacity: number;
  NetElectricalCapacity: number;
  HHVEfficiency: number;
  NetHHVEfficiency: number;
  FractionOfInputEnergy: number; // Dual Fuel if ant, default set to heavy disele
  CleanGasComposition: number;
  CO: number;
  H2: number;
  Hydrocarbons: number;
  CO2: number;
  O2: number;
  HigherHeating: number;
  MoistureContent: number;
  AshContent: number;
  CarbonConcentration: number;
  CapacityFactor: number;
  // Heat--Base Year
  AggregateFractionOfHeatRecovered: number;
  AggregateSalesPriceForHeat: number;
  // Expenses--Base Year
  BiomassFuelCost: number;
  DualFuelCost: number;
  LaborCost: number;
  MaintenanceCost: number;
  WasteTreatment: number;
  Insurance: number;
  Utilities: number;
  Management: number;
  OtherOperatingExpenses: number;
  // Taxes
  FederalTaxRate: number;
  StateTaxRate: number;
  ProductionTaxCredit: number;
  // Income Other Than Energy
  ElectricityCapacityPayment: number;
  InterestRateOnDebtReserve: number;
  SalesPriceForChar: number;
  // Escalation/Inflation
  GeneralInflation: number;
  EscalationBiomassFuel: number;
  EscalationDualFuel: number;
  EscalationProductionTaxCredit: number;
  EscalationHeatSales: number;
  EscalationCharSales: number;
  EscalationOther: number;
  // Financing
  DebtRatio: number;
  InterestRateOnDebt: number;
  EconomicLife: number;
  CostOfEquity: number;
  // Tax Rate Schedule
  TaxCreditFrac: number[];
}

// Hydrogen
export interface HydrogenInputMod {
  // Hydrogen Generation
  GrossDesignHydrogenCapacity: number;
  HydrogenHHV: number;
  HydrogenLHV: number;
  Feedstock: number;
  OverallProductionEfficiency: number;
  CapacityFactor: number;
  // Capital Cost
  CapitalCost: number;
  // Expenses--base year
  FeedstockCost: number;
  OperatingExpensesRate: number;
  // Other Revenues or Cost Savings
  ElectricalEnergy: number;
  IncentivePayments: number;
  Capacity: number;
  Heat: number;
  Residues: number;
  // Taxes and Tax credit
  FederalTaxRate: number;
  StateTaxRate: number;
  ProductionTaxCredit: number;
  NegativeTaxesOffset: boolean;
  // Escalation/Inflation
  GeneralInflation: number;
  EscalationFeedstock: number;
  EscalationElectricalEnergy: number;
  EscalationIncentivePayments: number;
  EscalationCapacityPayment: number;
  EscalationProductionTaxCredit: number;
  EscalationHeatSales: number;
  EscalationResidueSales: number;
  EscalationOther: number;
  // Financing
  DebtRatio: number;
  InterestRateOnDebt: number;
  OneYearDebtReserveRequired: boolean;
  MARR: number;
  EconomicLife: number;
  InterestRateOnDebtReserve: number;
  // Tax Credit Schedule
  TaxCreditFrac: number[];
}
