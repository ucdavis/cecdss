import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Inputs } from '../../../models/Types';

interface Props {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void;
}

export const AnnualCashFlow = (props: Props) => {
  return (
    <div>
      <Label>Capital Cost</Label>
      {/* <Input
        type='text'
        value={props.inputs.TechnoEconomicAssessmentInputs..CapitalCost}
        onChange={e =>
          props.setInputs({
            ...props.inputs,
            TechnoEconomicAssessmentInputs: {
              ...props.inputs.TechnoEconomicAssessmentInputs,
              CapitalCost: Number(e.target.value)
            }
          })
        }
      /> */}
    </div>
  );
};
