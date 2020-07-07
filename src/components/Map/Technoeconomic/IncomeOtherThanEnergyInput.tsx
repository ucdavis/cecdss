import React from 'react';
import {
  IncomeOtherThanEnergyInputModGP,
  IncomeOtherThanEnergyInputMod
} from '@ucdavis/tea/out/models/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';
import { IncomeOtherThanEnergyInputModGPClass } from '../../../models/GPClasses';

interface Props {
  inputs: IncomeOtherThanEnergyInputMod | IncomeOtherThanEnergyInputModGP;
  setInputs: (inputs: any) => void;
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
      {props.inputs instanceof IncomeOtherThanEnergyInputModGPClass && (
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
      )}
    </>
  );
};
