import React, { useState } from 'react';
import { Input, Label, Button } from 'reactstrap';
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  setInputs: (inputs: GenericPowerOnlyInputMod) => void;
}

export const GenericPowerOnly = (props: Props) => {
  const [inputs, setInputs] = useState<GenericPowerOnlyInputMod>(defaultValue);
  return (
    <div>
      <div>
        <Label>Capital Cost</Label>
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
        <Label>Net Electrical Capacity</Label>
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
        <Label>Capacity Factor</Label>
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
        <Label>Net Station Efficiency</Label>
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
        <Label>Fuel HeatingValue</Label>
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
        <Label>Fuel AshConcentration</Label>
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
        <Label>Fuel Cost</Label>
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
        <Label>Labor Cost</Label>
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
        <Label>Maintenance Cost</Label>
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
        <Label>Insurance Property Tax</Label>
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
        <Label>Utilities</Label>
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
        <Label>Ash Disposal</Label>
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
        <Label>Management</Label>
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
        <Label>Other Operating Expenses</Label>
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
        <Label>Federal Tax Rate</Label>
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
        <Label>State Tax Rate</Label>
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
        <Label>Production Tax Credit</Label>
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
        <Label>Debt Ratio</Label>
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
        <Label>Interest Rate On Debt</Label>
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
        <Label>Economic Life</Label>
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
        <Label>Cost Of Equity</Label>
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
        <Label>Capacity Payment</Label>
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
        <Label>Interest Rate on Debt Reserve</Label>
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
        <Label>General Inflation</Label>
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
        <Label>Escalation Fuel</Label>
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
        <Label>Escalation Production Tax Credit</Label>
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
        <Label>Escalation Other</Label>
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
        {/* TODO: add tax credit frac */}
      </div>
      <hr />
      <div>
        <Button color='primary' onClick={() => props.setInputs(inputs)}>
          Next
        </Button>
      </div>
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
