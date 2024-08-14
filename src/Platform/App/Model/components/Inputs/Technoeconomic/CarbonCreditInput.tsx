import React from 'react';
import { CarbonCredit } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupText
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
          <InputGroupText>$/MT</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Low Carbon Fuel Standard (LCFS) credit price
        </FormText>
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
          <InputGroupText>%</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Different vehicles have different fuel efficiencies. The EER allows
          for fuel used through more efficient vehicle pathways to be given
          credit for displacing conventional fuels.
        </FormText>
      </FormGroup>
    </>
  );
};
