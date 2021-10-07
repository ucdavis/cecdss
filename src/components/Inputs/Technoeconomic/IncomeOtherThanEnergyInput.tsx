import React from 'react';
import { IncomeOtherThanEnergyInputMod } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';

interface Props {
  inputs: IncomeOtherThanEnergyInputMod;
  setInputs: (inputs: any) => void;
  disabled: boolean;
}

export const IncomeOtherThanEnergyInput = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Electricity Capacity Payment</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CapacityPayment}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CapacityPayment: e.target.value
              })
            }
            disabled={props.disabled}
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
                InterestRateOnDebtReserve: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Interest income earned on reserve account if financing institution
          requires security deposit
        </FormText>
      </FormGroup>
    </>
  );
};
