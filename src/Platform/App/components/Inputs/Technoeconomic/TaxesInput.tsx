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
  InputGroupText
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
      props.setInputs({
        ...props.inputs,
        [type]: value
      });
    }
  };

  return (
    <>
      <FormGroup>
        <Label>Federal Tax Rate</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.FederalTaxRate}
            onChange={e => handleChange(e, 'FederalTaxRate')}
            disabled={props.disabled}
          />
          <InputGroupText>%</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Federal Tax Rate</FormText>
      </FormGroup>
      <FormGroup>
        <Label>State Tax Rate</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.StateTaxRate}
            onChange={e => handleChange(e, 'StateTaxRate')}
            disabled={props.disabled}
          />
          <InputGroupText>%</InputGroupText>
        </InputGroup>
        <FormText color='muted'>State Tax Rate </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Production Tax Credit</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.ProductionTaxCredit}
            onChange={e => handleChange(e, 'ProductionTaxCredit')}
            disabled={props.disabled}
          />
          <InputGroupText>$/kWh</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Production Tax Credit</FormText>
      </FormGroup>
    </>
  );
};
