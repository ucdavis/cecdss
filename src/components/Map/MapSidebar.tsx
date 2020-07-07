import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FrcsInputs } from '../../models/Types';
import { FrcsInputsContainer } from './Frcs/FrcsInputsContainer';
import { TechnoeconomicInputs } from './Technoeconomic/TechnoeconomicInputs';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';

interface Props {
  frcsInputs: FrcsInputs;
  setFrcsInputs: (inputs: FrcsInputs) => void;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP | InputModGP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
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
        teaInputs={props.teaInputs}
        setTeaInputs={props.setTeaInputs}
        teaModel={props.teaModel}
        setTeaModel={props.setTeaModel}
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
