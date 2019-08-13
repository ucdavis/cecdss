import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Inputs } from '../../Types';
import { TechnoEchonomicInputs } from './TechnoEconomicInputs';
import { ExampleInputs } from './ExampleInputs';

interface Props {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void;
  submitInputs: () => void;
}

export const MapSidebar = (props: Props) => {
  return (
    <div id='sidebar'>
      <h2>Select Refinery Inputs</h2>
      <ExampleInputs inputs={props.inputs} setInputs={props.setInputs} />
      <TechnoEchonomicInputs
        inputs={props.inputs}
        setInputs={props.setInputs}
      />
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
