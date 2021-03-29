import React from 'react';
import { HeatBaseYearInputMod } from '@ucdavis/tea/out/models/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';

interface Props {
  inputs: HeatBaseYearInputMod;
  setInputs: (inputs: HeatBaseYearInputMod) => void;
  disabled: boolean;
}

export const HeatBaseYearInput = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Aggregate Fraction Of Heat Recovered</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.AggregateFractionOfHeatRecovered}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                AggregateFractionOfHeatRecovered: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Aggregate fraction of heat recovered</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Aggregate Sales Price For Heat</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.AggregateSalesPriceForHeat}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                AggregateSalesPriceForHeat: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/kWh</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Aggregrate sales price for heat</FormText>
      </FormGroup>
    </>
  );
};
