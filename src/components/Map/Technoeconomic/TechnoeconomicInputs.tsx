import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Inputs, FrcsParameters } from '../../../models/Types';
import { GenericPowerOnly } from './GenericPowerOnly';

interface Props {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void;
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
      <GenericPowerOnly />
      <br />
      <hr />
    </div>
  );
};
