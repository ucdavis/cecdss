import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GenericPowerOnly } from './GenericPowerOnly';
import { TechnoeconomicAssessmentInputs } from '../../../models/Types';
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  inputs: TechnoeconomicAssessmentInputs;
  setInputs: (inputs: TechnoeconomicAssessmentInputs) => void;
}

export const TechnoeconomicInputs = (props: Props) => {
  return (
    <div>
      <div>
        <h4>Techno-Economic Assessment </h4>
        <Label>Treatment</Label>
        <Input type='select'>
          <option>Generic Power Only</option>
        </Input>
        <br />
      </div>
      {props.inputs.genericPowerOnly && (
        <GenericPowerOnly
          inputs={props.inputs.genericPowerOnly}
          setInputs={(inputs: GenericPowerOnlyInputMod) => {
            props.setInputs({ ...props.inputs, genericPowerOnly: inputs });
          }}
        />
      )}
      <br />
      <hr />
    </div>
  );
};
