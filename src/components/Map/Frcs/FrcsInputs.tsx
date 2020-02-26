import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Inputs, FrcsParameters } from '../../../models/Types';

interface Props {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void;
}

export const FrcsInputs = (props: Props) => {
  return (
    <div>
      <div>
        <h4>Forestry and Conversion</h4>
        <Label>Radius:</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.FrcsParameters.radius}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                FrcsParameters: {
                  ...props.inputs.FrcsParameters,
                  radius: Number(e.target.value)
                }
              })
            }
          />
          <InputGroupAddon addonType='append'>meters</InputGroupAddon>
        </InputGroup>
        <Input
          type='range'
          min={100}
          max={50000}
          value={props.inputs.FrcsParameters.radius}
          onChange={e =>
            props.setInputs({
              ...props.inputs,
              FrcsParameters: {
                ...props.inputs.FrcsParameters,
                radius: Number(e.target.value)
              }
            })
          }
        />
        <Label>Treatment</Label>
        <Input
          type='select'
          value={props.inputs.FrcsParameters.treatment}
          onChange={e =>
            props.setInputs({
              ...props.inputs,
              FrcsParameters: {
                ...props.inputs.FrcsParameters,
                treatment: e.target.value
              }
            })
          }
        >
          <option>Clearcut</option>
          <option>Thin from below</option>
          <option>Thin from above</option>
        </Input>
        <Label>FRCS System</Label>
        <Input
          type='select'
          value={props.inputs.FrcsParameters.system}
          onChange={e =>
            props.setInputs({
              ...props.inputs,
              FrcsParameters: {
                ...props.inputs.FrcsParameters,
                system: e.target.value
              }
            })
          }
        >
          <option value='Ground-Based Mech WT'>Ground-Based Mech WT</option>
          <option value='Ground-Based Manual WT'>Ground-Based Manual WT</option>
          <option value='Ground-Based Manual Log'>
            Ground-Based Manual Log
          </option>
          <option value='Ground-Based CTL'>Ground-Based CTL</option>
          <option value='Cable Manual WT/Log'>Cable Manual WT/Log</option>
          <option value='Cable Manual WT'>Cable Manual WT</option>
          <option value='Cable Manual Log'>Cable Manual Log</option>
          <option value='Cable CTL'>Cable CTL</option>
          <option value='Helicopter Manual WT'>Helicopter Manual WT</option>
          <option value='Helicopter CTL'>Helicopter CTL</option>
        </Input>
      </div>
      <br />
      <hr />
    </div>
  );
};
