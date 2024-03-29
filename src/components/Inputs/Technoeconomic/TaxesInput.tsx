import React from 'react';
import {
  TaxesInputMod
} from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';

interface Props {
  inputs: TaxesInputMod;
  setInputs: (inputs: TaxesInputMod) => void;
  disabled: boolean;
}

export const TaxesInput = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Federal Tax Rate</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.FederalTaxRate}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                FederalTaxRate: e.target.value
              })
            }
            disabled={props.disabled}
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
                StateTaxRate: e.target.value
              })
            }
            disabled={props.disabled}
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
                ProductionTaxCredit: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/kWh</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Production Tax Credit</FormText>
      </FormGroup>
    </>
  );
};
