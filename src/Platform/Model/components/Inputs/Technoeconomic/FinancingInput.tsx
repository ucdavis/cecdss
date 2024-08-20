import React from 'react';
import {
  FinancingInputMod
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
  inputs: FinancingInputMod;
  setInputs: (inputs: FinancingInputMod) => void;
  disabled: boolean;
}

export const FinancingInput = (props: Props) => {
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
        <Label>Debt Ratio</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.DebtRatio}
            onChange={e => handleChange(e, 'DebtRatio')}
            disabled={props.disabled}
          />
          <InputGroupText>%</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Fraction of financing covered by debt borrowing
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Interest Rate On Debt</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.InterestRateOnDebt}
            onChange={e => handleChange(e, 'InterestRateOnDebt')}
            disabled={props.disabled}
          />
          <InputGroupText>%</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Interest rate applied to debt portion of investment
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Economic Life</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.EconomicLife}
            onChange={e => handleChange(e, 'EconomicLife')}
            disabled={props.disabled}
          />
          <InputGroupText>years</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Life of Loan</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Cost Of Equity</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CostOfEquity}
            onChange={e => handleChange(e, 'CostOfEquity')}
            disabled={props.disabled}
          />
          <InputGroupText>%/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Rate of return on equity portion of investment
        </FormText>
      </FormGroup>
    </>
  );
};
