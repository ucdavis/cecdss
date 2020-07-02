import React from 'react';
import {
  InputModGP,
  CapitalCostInputModGP
} from '@ucdavis/tea/out/models/input.model';
import { CapitalCostMod } from '@ucdavis/tea/out/models/output.model';
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
}

export const CapitalCostInputGP = (props: Props) => {
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
                GasifierSystemCapitalCost: Number(e.target.value)
              })
            }
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
                GasCleaningSystemCapitalCost: Number(e.target.value)
              })
            }
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
                PowerGenerationCapitalCost: Number(e.target.value)
              })
            }
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
                EmissionControlSystemCapitalCost: Number(e.target.value)
              })
            }
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
                HeatRecoverySystemCapitalCost: Number(e.target.value)
              })
            }
          />
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Heat Recovery System Capital Cost</FormText>
      </FormGroup>
    </>
  );
};
