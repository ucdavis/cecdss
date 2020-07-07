import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GenericPowerOnly } from './GenericPowerOnly/GenericPowerOnly';
import { TechnoeconomicModels } from '../../../models/Types';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { CombinedHeatAndPower } from './GenericCombinedHeatPower/CombinedHeatAndPower';
import { InputModGPOClass } from '../../../models/GPOClasses';
import { InputModCHPClass } from '../../../models/CHPClasses';
import { InputModGPClass } from '../../../models/GPClasses';
import { GasificationPower } from './GasificationPower/GasificationPower';

interface Props {
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP | InputModGP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
}

export const TechnoeconomicInputs = (props: Props) => {
  return (
    <div>
      <div>
        <h4>Techno-Economic Assessment </h4>
        <Label>Treatment</Label>
        <Input
          type='select'
          onChange={x => props.setTeaModel(x.target.value)}
          value={props.teaModel}
        >
          <option value={TechnoeconomicModels.genericPowerOnly}>
            Generic Power Only (GPO)
          </option>
          <option value={TechnoeconomicModels.genericCombinedHeatAndPower}>
            Generic Combined Heat and Power (CHP)
          </option>
          <option value={TechnoeconomicModels.gasificationPower}>
            Gasification Power (GP)
          </option>
        </Input>
        <br />
      </div>
      {props.teaModel === TechnoeconomicModels.genericPowerOnly && (
        // props.teaInputs instanceof InputModGPOClass && (
        <GenericPowerOnly
          inputs={props.teaInputs}
          setInputs={props.setTeaInputs}
        />
      )}
      {props.teaModel === TechnoeconomicModels.genericCombinedHeatAndPower && (
        // props.teaInputs instanceof InputModCHPClass && (
        <CombinedHeatAndPower
          inputs={props.teaInputs}
          setInputs={props.setTeaInputs}
        />
      )}
      {props.teaModel === TechnoeconomicModels.gasificationPower && (
        // props.teaInputs instanceof InputModGPClass && (
        <GasificationPower
          inputs={props.teaInputs}
          setInputs={props.setTeaInputs}
        />
      )}
      <br />
      <hr />
    </div>
  );
};
