import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GenericPowerOnly } from './GenericPowerOnly';
import {
  TechnoeconomicAssessmentInputs,
  TechnoeconomicModels
} from '../../../models/Types';
import { InputModGPO } from '@ucdavis/tea/out/models/input.model';

interface Props {
  tea: TechnoeconomicAssessmentInputs;
  setInputs: (inputs: TechnoeconomicAssessmentInputs) => void;
}

export const TechnoeconomicInputs = (props: Props) => {
  return (
    <div>
      <div>
        <h4>Techno-Economic Assessment </h4>
        <Label>Treatment</Label>
        <Input
          type='select'
          onChange={x =>
            props.setInputs({ ...props.tea, model: x.target.value })
          }
        >
          <option value={TechnoeconomicModels.genericPowerOnly}>
            Generic Power Only
          </option>
          <option value={TechnoeconomicModels.genericCombinedHeatAndPower}>
            Generic Combined Heat and Power
          </option>
        </Input>
        <br />
      </div>
      {props.tea.model === TechnoeconomicModels.genericPowerOnly && (
        <GenericPowerOnly
          inputs={props.tea.inputs}
          setInputs={(inputs: InputModGPO) => {
            props.setInputs({ ...props.tea, inputs: inputs });
          }}
        />
      )}
      {props.tea.model === TechnoeconomicModels.genericCombinedHeatAndPower && (
        <GenericPowerOnly
          inputs={props.tea.inputs}
          setInputs={(inputs: InputModGPO) => {
            props.setInputs({ ...props.tea, inputs: inputs });
          }}
        />
      )}
      <br />
      <hr />
    </div>
  );
};
