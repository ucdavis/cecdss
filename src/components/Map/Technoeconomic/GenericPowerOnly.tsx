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
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  setInputs: (inputs: GenericPowerOnlyInputMod) => void;
}

export const GenericPowerOnly = () => {
  const [inputs, setInputs] = useState<GenericPowerOnlyInputMod>(defaultValue);
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Capital Cost</Label>
          <InputGroup>
            <Input
              type='text'
              value={inputs.CapitalCost}
              onChange={e =>
                setInputs({
                  ...inputs,
                  CapitalCost: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>$</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>Total installed cost of plant</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Net Electrical Capacity</Label>
          <InputGroup>
            <Input
              type='text'
              value={inputs.NetElectricalCapacity}
              onChange={e =>
                setInputs({
                  ...inputs,
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
          <Label>Capacity Factor</Label>
          <InputGroup>
            <Input
              type='text'
              value={inputs.CapacityFactor}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.NetStationEfficiency}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.FuelHeatingValue}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.FuelAshConcentration}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.FuelCost}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.LaborCost}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.MaintenanceCost}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.InsurancePropertyTax}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.Utilities}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.AshDisposal}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.Management}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.OtherOperatingExpenses}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.FederalTaxRate}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.StateTaxRate}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.ProductionTaxCredit}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.DebtRatio}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.InterestRateOnDebt}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.EconomicLife}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.CostOfEquity}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.CapacityPayment}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.InterestRateonDebtReserve}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.GeneralInflation}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.EscalationFuel}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.EscalationProductionTaxCredit}
              onChange={e =>
                setInputs({
                  ...inputs,
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
              value={inputs.EscalationOther}
              onChange={e =>
                setInputs({
                  ...inputs,
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
        <Button color='primary' onClick={() => props.setInputs(inputs)}>
          Next
        </Button>
      </div> */}
    </div>
  );
};

const defaultValue: GenericPowerOnlyInputMod = {
  CapitalCost: 70000000,
  NetElectricalCapacity: 25000,
  CapacityFactor: 85,
  NetStationEfficiency: 20,
  FuelHeatingValue: 18608,
  FuelAshConcentration: 5,
  FuelCost: 22.05,
  LaborCost: 2000000,
  MaintenanceCost: 1500000,
  InsurancePropertyTax: 1400000,
  Utilities: 200000,
  AshDisposal: 100000,
  Management: 200000,
  OtherOperatingExpenses: 400000,
  FederalTaxRate: 34,
  StateTaxRate: 9.6,
  ProductionTaxCredit: 0.009,
  DebtRatio: 75,
  InterestRateOnDebt: 5,
  EconomicLife: 20,
  CostOfEquity: 15,
  CapacityPayment: 166,
  InterestRateonDebtReserve: 5,
  GeneralInflation: 2.1,
  EscalationFuel: 2.1,
  EscalationProductionTaxCredit: 2.1,
  EscalationOther: 2.1,
  TaxCreditFrac: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};
