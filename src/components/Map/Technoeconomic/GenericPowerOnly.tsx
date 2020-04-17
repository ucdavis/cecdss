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
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';

interface Props {
  inputs: InputModGPO;
  setInputs: (inputs: InputModGPO) => void;
}

export const GenericPowerOnly = (props: Props) => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Capital Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.CapitalCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  CapitalCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Total installed cost of plant</FormText>
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
            Size of plant based on net power output to grid
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
            <InputGroupAddon addonType='append'>% Wet Basis</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Moisture Content of Biomass Feedstock
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
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Annual fraction that rated capacity is available from plant
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Net Station Efficiency</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.NetStationEfficiency}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  NetStationEfficiency: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Ratio of net energy output from plant to fuel energy input to plant
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Fuel Heating Value</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.FuelHeatingValue}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  FuelHeatingValue: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>kJ/kg</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Higher heating value (heat of combustion) of fuel expressed on a dry
            basis input in SI units
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Fuel AshConcentration</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.FuelAshConcentration}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  FuelAshConcentration: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Fraction of ash in fuel, percent dry basis
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Fuel Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.FuelCost}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  FuelCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>
              $/dry metric ton
            </InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Cost of fuel</FormText>
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
          <Label>Insurance Property Tax</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.InsurancePropertyTax}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  InsurancePropertyTax: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
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
          <Label>Ash Disposal</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.AshDisposal}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  AshDisposal: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Cost of ash disposal from plant, use negative value when ash is sold
            at value
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
          <FormText color='muted'>Life of Loan </FormText>
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
        <FormGroup>
          <Label>Capacity Payment</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.CapacityPayment}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  CapacityPayment: Number(e.target.value)
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
          <Label>Interest Rate on Debt Reserve</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.InterestRateonDebtReserve}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  InterestRateonDebtReserve: Number(e.target.value)
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
          <Label>Escalation Fuel</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.EscalationFuel}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  EscalationFuel: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Rate at which fuel cost escalates over time
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
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Rate at which other expenses escalate over time
          </FormText>
        </FormGroup>

        {/* TODO: add tax credit frac */}
      </Form>
      {/* <div>
        <Button color='primary' onClick={() => props.props.setInputs(props.inputs)}>
          Next
        </Button>
      </div> */}
    </div>
  );
};
