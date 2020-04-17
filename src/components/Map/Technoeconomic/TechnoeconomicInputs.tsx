import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GenericPowerOnly } from './GenericPowerOnly';
import {
  TechnoeconomicModels,
  InputModGPOClass,
  InputModCHPClass
} from '../../../models/Types';
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';
import { CombinedHeatAndPower } from './CombinedHeatAndPower';

interface Props {
  teaInputs: InputModGPO | InputModCHP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
}

export const TechnoeconomicInputs = (props: Props) => {
  return (
    <div>
      <div>
        <h4>Techno-Economic Assessment </h4>
        <Label>Treatment</Label>
        <Input type='select' onChange={x => props.setTeaModel(x.target.value)}>
          <option value={TechnoeconomicModels.genericPowerOnly}>
            Generic Power Only
          </option>
          <option value={TechnoeconomicModels.genericCombinedHeatAndPower}>
            Generic Combined Heat and Power
          </option>
        </Input>
        <br />
      </div>
      {props.teaModel === TechnoeconomicModels.genericPowerOnly &&
        props.teaInputs instanceof InputModGPOClass && (
          <GenericPowerOnly
            inputs={props.teaInputs}
            setInputs={props.setTeaInputs}
          />
        )}
      {props.teaModel === TechnoeconomicModels.genericCombinedHeatAndPower &&
        props.teaInputs instanceof InputModCHPClass && (
          <CombinedHeatAndPower
            inputs={props.teaInputs}
            setInputs={props.setTeaInputs}
          />
        )}
      <br />
      <hr />
    </div>
  );
};
