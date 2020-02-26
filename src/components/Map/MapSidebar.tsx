import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Inputs } from '../../models/Types';
import { GenericPowerOnly } from './Technoeconomic/GenericPowerOnly';
import { GenericPowerOnlyInputMod } from '../../models/TechnoeconomicInputs';
import { FrcsInputs } from './Frcs/FrcsInputs';
import { TechnoeconomicInputs } from './Technoeconomic/TechnoeconomicInputs';

interface Props {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void;
  submitInputs: () => void;
}

export const MapSidebar = (props: Props) => {
  const setGenericPowerOnly = (genericPowerOnly: GenericPowerOnlyInputMod) => {
    props.setInputs({
      ...props.inputs,
      TechnoeconomicAssessmentInputs: {
        ...props.inputs.TechnoeconomicAssessmentInputs,
        genericPowerOnly: genericPowerOnly
      }
    });
  };
  return (
    <div id='sidebar'>
      <h2>Select Refinery Inputs</h2>
      <FrcsInputs inputs={props.inputs} setInputs={props.setInputs} />
      <TechnoeconomicInputs inputs={props.inputs} setInputs={props.setInputs} />
      <div>
        {/* <Link to='/results'> */}
        <Button color='primary' onClick={props.submitInputs}>
          Model Refinery
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};
