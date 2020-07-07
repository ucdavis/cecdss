import React from 'react';
import {
  HeatBaseYearInputMod,
  TaxesInputMod
} from '@ucdavis/tea/out/models/input.model';
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
    </>
  );
};
