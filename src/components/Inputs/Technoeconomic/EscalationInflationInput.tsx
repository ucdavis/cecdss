import React from 'react';
import {
  EscalationInflationInputModGP,
  EscalationInflationInputMod
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
  inputs: EscalationInflationInputMod;
  setInputs: (inputs: any) => void;
  disabled: boolean;
}

export const EscalationInflationInput = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>General Inflation</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.GeneralInflation}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                GeneralInflation: Number(e.target.value)
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Overall inflation rate used to adjust current dollar result to
          constant dollars
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Escalation Biomass Fuel</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.EscalationBiomassFuel}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                EscalationBiomassFuel: Number(e.target.value)
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Rate at which biomass fuel cost escalates over time
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Escalation Production Tax Credit</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.EscalationProductionTaxCredit}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                EscalationProductionTaxCredit: Number(e.target.value)
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Specified index for production tax credit
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Escalation Heat Sales</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.EscalationHeatSales}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                EscalationHeatSales: Number(e.target.value)
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Escalation rate applied to heat sales</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Escalation Other</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.EscalationOther}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                EscalationOther: Number(e.target.value)
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Rate at which other expenses escalate over time
        </FormText>
      </FormGroup>
    </>
  );
};
