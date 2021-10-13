import React from 'react';
import { CarbonCredit } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';

interface Props {
  inputs: CarbonCredit;
  setInputs: (inputs: CarbonCredit) => void;
  includeCredits: boolean;
  setIncludeCredits: (incluideCredits: boolean) => void;
  disabled: boolean;
}

export const CarbonCreditInput = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup check={true}>
        <Input
          id='includeCredits'
          type='checkbox'
          className='form-check-input'
          checked={props.includeCredits}
          onChange={e => props.setIncludeCredits(e.target.checked)}
          disabled={props.disabled}
        />
        <Label for='includeCredits'>Include Carbon Credits</Label>
      </FormGroup>
      <FormGroup>
        <Label>Carbon Credit Price</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CreditPrice}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CreditPrice: isNaN(+e.target.value) ? 0 : +e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/tonne</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Carbon Credit Price in $/tonne</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Energy Economy Ratio</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.EnergyEconomyRatio}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                EnergyEconomyRatio: isNaN(+e.target.value) ? 0 : +e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>TBD</FormText>
      </FormGroup>
    </>
  );
};
