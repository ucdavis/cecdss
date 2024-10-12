import React from 'react';
import { IncomeOtherThanEnergyInputModGP } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupText
} from 'reactstrap';

interface Props {
  inputs: IncomeOtherThanEnergyInputModGP;
  setInputs: (inputs: any) => void;
  disabled: boolean;
}

export const IncomeOtherThanEnergyInputGP = (props: Props) => {
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
          <InputGroupText>$/kW-year</InputGroupText>
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
          <InputGroupText>%/year</InputGroupText>
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
                SalesPriceForChar: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText>$/t</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Sales Price for Char/Ash --for disposal
        </FormText>
      </FormGroup>
    </>
  );
};
