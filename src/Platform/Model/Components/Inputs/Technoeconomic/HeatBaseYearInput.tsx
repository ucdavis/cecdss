import React from 'react';
import { HeatBaseYearInputMod } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupText
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
        <Label>Aggregate Fraction Of Heat Recovered</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.AggregateFractionOfHeatRecovered}
            onChange={e => handleChange(e, 'AggregateFractionOfHeatRecovered')}
            disabled={props.disabled}
          />
          <InputGroupText>%</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Aggregate fraction of heat recovered</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Aggregate Sales Price For Heat</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.AggregateSalesPriceForHeat}
            onChange={e => handleChange(e, 'AggregateSalesPriceForHeat')}
            disabled={props.disabled}
          />
          <InputGroupText>$/kWh</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Aggregrate sales price for heat</FormText>
      </FormGroup>
    </>
  );
};
