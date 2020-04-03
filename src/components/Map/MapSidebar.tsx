import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FrcsInputs, TechnoeconomicAssessmentInputs } from '../../models/Types';
import { FrcsInputsContainer } from './Frcs/FrcsInputsContainer';
import { TechnoeconomicInputs } from './Technoeconomic/TechnoeconomicInputs';

interface Props {
  frcsInputs: FrcsInputs;
  setFrcsInputs: (inputs: FrcsInputs) => void;
  teaInputs: TechnoeconomicAssessmentInputs;
  setTeaInputs: (inputs: TechnoeconomicAssessmentInputs) => void;
  submitInputs: () => void;
}

export const MapSidebar = (props: Props) => {
  return (
    <div id='sidebar'>
      <h2>Select Inputs</h2>
      <FrcsInputsContainer
        inputs={props.frcsInputs}
        setInputs={props.setFrcsInputs}
      />
      <TechnoeconomicInputs
        inputs={props.teaInputs}
        setInputs={props.setTeaInputs}
      />
      <div>
        <Link to='/results'>
          <Button color='primary' onClick={props.submitInputs}>
            Run Model
          </Button>
        </Link>
      </div>
    </div>
  );
};
