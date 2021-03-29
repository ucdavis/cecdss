import React from 'react';
import {
  FinancingInputMod
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
  inputs: FinancingInputMod;
  setInputs: (inputs: FinancingInputMod) => void;
  disabled: boolean;
}

export const FinancingInput = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Debt Ratio</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.DebtRatio}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                DebtRatio: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
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
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                InterestRateOnDebt: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
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
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                EconomicLife: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>years</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Life of Loan</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Cost Of Equity</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CostOfEquity}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CostOfEquity: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Rate of return on equity portion of investment
        </FormText>
      </FormGroup>
    </>
  );
};
