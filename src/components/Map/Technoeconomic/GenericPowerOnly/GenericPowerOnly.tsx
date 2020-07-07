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
import {
  InputModGPO,
  ElectricalFuelBaseYearInputModGPO,
  IncomeOtherThanEnergyInputMod,
  ExpensesBaseYearInputModGPO,
  TaxesInputMod,
  EscalationInflationInputMod,
  FinancingInputMod
} from '@ucdavis/tea/out/models/input.model';
import { ElectricalAndFuelBaseYearInput } from '../ElectricalAndFuelBaseYearInput';
import { ExpensesBaseYearInput } from '../ExpensesBaseYearInput';
import { TaxesInput } from '../TaxesInput';
import { IncomeOtherThanEnergyInput } from '../IncomeOtherThanEnergyInput';
import { EscalationInflationInput } from '../EscalationInflationInput';
import { FinancingInput } from '../FinancingInput';

interface Props {
  // inputs: InputModGPO;
  // setInputs: (inputs: InputModGPO) => void;
  inputs: any;
  setInputs: (inputs: any) => void;
}

export const GenericPowerOnly = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
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

        <ElectricalAndFuelBaseYearInput
          inputs={props.inputs.ElectricalFuelBaseYear}
          setInputs={(inputs: ElectricalFuelBaseYearInputModGPO) =>
            props.setInputs({
              ...props.inputs,
              ElectricalFuelBaseYear: inputs
            })
          }
        />

        <ExpensesBaseYearInput
          inputs={props.inputs.ExpensesBaseYear}
          setInputs={(inputs: ExpensesBaseYearInputModGPO) =>
            props.setInputs({ ...props.inputs, ExpensesBaseYear: inputs })
          }
        />
        <TaxesInput
          inputs={props.inputs.Taxes}
          setInputs={(inputs: TaxesInputMod) =>
            props.setInputs({ ...props.inputs, Taxes: inputs })
          }
        />
        <IncomeOtherThanEnergyInput
          inputs={props.inputs.IncomeOtherThanEnergy}
          setInputs={(inputs: IncomeOtherThanEnergyInputMod) =>
            props.setInputs({ ...props.inputs, IncomeOtherThanEnergy: inputs })
          }
        />
        <EscalationInflationInput
          inputs={props.inputs.EscalationInflation}
          setInputs={(inputs: EscalationInflationInputMod) =>
            props.setInputs({ ...props.inputs, EscalationInflation: inputs })
          }
        />
        <FinancingInput
          inputs={props.inputs.Financing}
          setInputs={(inputs: FinancingInputMod) =>
            props.setInputs({ ...props.inputs, Financing: inputs })
          }
        />

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
