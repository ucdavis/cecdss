import React, { useState } from 'react';
import {
  Input,
  Label,
  Button,
  InputGroup,
  InputGroupAddon,
  FormText,
  Form,
  FormGroup
} from 'reactstrap';
import { InputModGP } from '@ucdavis/tea/out/models/input.model';

interface Props {
  inputs: InputModGP;
  setInputs: (inputs: InputModGP) => void;
}

export const GasificationPower = (props: Props) => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Gasifier System Capital Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.GasifierSystemCapitalCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  GasifierSystemCapitalCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Gasifier and Feedstock Handling System Capital Cost
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Gas Cleaning System Capital Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.GasCleaningSystemCapitalCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  GasCleaningSystemCapitalCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Gas Cleaning System Capital Cost</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Power Generation Capital Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.PowerGenerationCapitalCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  PowerGenerationCapitalCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Power Generation/Interconnect System Capital Cost
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Emission Control System Capital Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EmissionControlSystemCapitalCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EmissionControlSystemCapitalCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Emission Control System Capital Cost
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>HeatRecoverySystemCapitalCost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.HeatRecoverySystemCapitalCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  HeatRecoverySystemCapitalCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Heat Recovery System Capital Cost</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Gross Electrical Capacity</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.GrossElectricalCapacity}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  GrossElectricalCapacity: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>kWe</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Total gross generating capacity</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Net Electrical Capacity</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.NetElectricalCapacity}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  NetElectricalCapacity: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>kWe</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Net power available for on-site use or grid sales
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Capacity Factor</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.CapacityFactor}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  CapacityFactor: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>kWe</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Annual fraction that rated capacity is available from plant
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>HHV Efficiency</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.HHVEfficiency}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  HHVEfficiency: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            HHV Efficiency of Gasification System--Biomass to Clean Gas
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Net HHV Efficiency</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.NetHHVEfficiency}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  NetHHVEfficiency: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Net HHV Efficiency of Power Generation incl. Dual Fuel
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Fraction Of Input Energy</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.FractionOfInputEnergy}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  FractionOfInputEnergy: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Dual Fuel -> Fraction of Input Energy
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>CO</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.CO}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  CO: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>
              % by volume, dry
            </InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Clean Gas Composition -> CO</FormText>
        </FormGroup>
        <FormGroup>
          <Label>H2</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.H2}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  H2: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>
              % by volume, dry
            </InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Clean Gas Composition -> H2</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Hydrocarbons</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.Hydrocarbons}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  Hydrocarbons: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>
              % by volume, dry
            </InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Clean Gas Composition -> Hydrocarbons (as CH4)
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>CO2</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.CO2}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  CO2: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>
              % by volume, dry
            </InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Clean Gas Composition -> CO2</FormText>
        </FormGroup>
        <FormGroup>
          <Label>O2</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.O2}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  O2: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>
              % by volume, dry
            </InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Clean Gas Composition -> O2</FormText>
        </FormGroup>
        <FormGroup>
          <Label>HHV</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.HHV}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  HHV: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>kJ/kg</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Higher Heating Value of Biomass Feedstock to Gasifier
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Moisture Content</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.MoistureContent}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  MoistureContent: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>% wet basis</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Moisture Content of Biomass Feedstock to Gasifier
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Ash Content</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.AshContent}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  AshContent: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>% dry matter</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Ash Content of Biomass</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Carbon Concentration</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.CarbonConcentration}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  CarbonConcentration: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>% dry basis</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Carbon Concentration of Char</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Aggregate Fraction Of Heat Recovered</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.AggregateFractionOfHeatRecovered}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  AggregateFractionOfHeatRecovered: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Aggregate fraction of heat recovered
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Aggregate Sales Price For Heat</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.AggregateSalesPriceForHeat}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  AggregateSalesPriceForHeat: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/kWh</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Aggregrate sales price for heat</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Biomass Fuel Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.BiomassFuelCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  BiomassFuelCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/t</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Biomass Fuel Cost, use negative value for tipping fee
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Dual Fuel Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.DualFuelCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  DualFuelCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/L</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Dual Fuel Cost, Default assumes heavy diesel fuel
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Labor Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.LaborCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  LaborCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Cost of labor to operate facility</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Maintenance Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.MaintenanceCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  MaintenanceCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Cost of maintaining the plant</FormText>
        </FormGroup>
        <FormGroup>
          <Label>WasteTreatment</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.WasteTreatment}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  WasteTreatment: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Waste Treatment/Disposal</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Insurance</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.Insurance}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  Insurance: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Cost of insurance for the plant plus any property or other local
            taxes
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Utilities</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.Utilities}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  Utilities: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Purchased utilities including power, gas, water, waste disposal
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Management</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.Management}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  Management: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Cost for administrative personnel and other administration
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Other Operating Expenses</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.OtherOperatingExpenses}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  OtherOperatingExpenses: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            All other expenses for operating the plant, for example natural gas
            not included in utilities, chemicals, or additives
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Federal Tax Rate</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.FederalTaxRate}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  FederalTaxRate: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Federal Tax Rate</FormText>
        </FormGroup>
        <FormGroup>
          <Label>State Tax Rate</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.StateTaxRate}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  StateTaxRate: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>State Tax Rate </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Production Tax Credit</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.ProductionTaxCredit}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  ProductionTaxCredit: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/kWh</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Production Tax Credit</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Electricity Capacity Payment</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.ElectricityCapacityPayment}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  ElectricityCapacityPayment: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/kW-year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Payment made from power purchaser if plant can guarantee capacity
            (depends on contract)
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Interest Rate On Debt Reserve</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.InterestRateOnDebtReserve}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  InterestRateOnDebtReserve: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Interest income earned on reserve account if financing institution
            requires security deposit
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Sales Price For Char</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.SalesPriceForChar}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  SalesPriceForChar: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/t</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Sales Price for Char/Ash --for disposal
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>General Inflation</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.GeneralInflation}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  GeneralInflation: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Overall inflation rate used to adjust current dollar result to
            constant dollars
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Escalation Biomass Fuel</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EscalationBiomassFuel}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EscalationBiomassFuel: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Rate at which biomass fuel cost escalates over time
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Escalation Dual Fuel</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EscalationDualFuel}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EscalationDualFuel: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Rate at which dual fuel cost escalates over time
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Escalation Production Tax Credit</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EscalationProductionTaxCredit}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EscalationProductionTaxCredit: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Specified index for production tax credit
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Escalation Heat Sales</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EscalationHeatSales}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EscalationHeatSales: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Escalation rate applied to heat sales
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Escalation Char Sales</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EscalationCharSales}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EscalationCharSales: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Escalation rate applied to char or ash
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Escalation Other</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EscalationOther}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EscalationOther: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Rate at which other expenses escalate over time
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Debt Ratio</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.DebtRatio}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  DebtRatio: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Fraction of financing covered by debt borrowing
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Interest Rate On Debt</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.InterestRateOnDebt}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  InterestRateOnDebt: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Interest rate applied to debt portion of investment
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Economic Life</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EconomicLife}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EconomicLife: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>years</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Life of Loan</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Cost Of Equity</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.CostOfEquity}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  CostOfEquity: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Rate of return on equity portion of investment
          </FormText>
        </FormGroup>
      </Form>
    </div>
  );
};
