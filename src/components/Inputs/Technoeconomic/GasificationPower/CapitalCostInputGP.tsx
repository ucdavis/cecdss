import React from 'react';
import { CapitalCostInputModGP } from '@ucdavis/tea/out/models/input.model';
import {
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon,
  FormText
} from 'reactstrap';

interface Props {
  inputs: CapitalCostInputModGP;
  setInputs: (inputs: CapitalCostInputModGP) => void;
  disabled: boolean;
}

export const CapitalCostInputGP = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Gasifier System Capital Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.GasifierSystemCapitalCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                GasifierSystemCapitalCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Gasifier and Feedstock Handling System Capital Cost
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Gas Cleaning System Capital Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.GasCleaningSystemCapitalCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                GasCleaningSystemCapitalCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Gas Cleaning System Capital Cost</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Power Generation Capital Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.PowerGenerationCapitalCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                PowerGenerationCapitalCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Power Generation/Interconnect System Capital Cost
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Emission Control System Capital Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.EmissionControlSystemCapitalCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                EmissionControlSystemCapitalCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Emission Control System Capital Cost</FormText>
      </FormGroup>
      <FormGroup>
        <Label>HeatRecoverySystemCapitalCost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.HeatRecoverySystemCapitalCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                HeatRecoverySystemCapitalCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Heat Recovery System Capital Cost</FormText>
      </FormGroup>
    </>
  );
};
