import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Inputs } from '../../Types';

interface Props {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void;
}

export const ExampleInputs = (props: Props) => {
  return (
    <div>
      <div>
        <h4>Forestry and Conversion</h4>
        <Label>Radius:</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.ExampleParameters.radius}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                ExampleParameters: {
                  ...props.inputs.ExampleParameters,
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
          value={props.inputs.ExampleParameters.radius}
          onChange={e =>
            props.setInputs({
              ...props.inputs,
              ExampleParameters: {
                ...props.inputs.ExampleParameters,
                radius: Number(e.target.value)
              }
            })
          }
        />
        <Label>Capacity of processing unit:</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.ExampleParameters.capacity}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                ExampleParameters: {
                  ...props.inputs.ExampleParameters,
                  capacity: e.target.value
                }
              })
            }
          />
          <InputGroupAddon addonType='append'>MW</InputGroupAddon>
        </InputGroup>
        <Label>Tree management</Label>
        <Input
          type='select'
          value={props.inputs.ExampleParameters.treeManagement}
          onChange={e =>
            props.setInputs({
              ...props.inputs,
              ExampleParameters: {
                ...props.inputs.ExampleParameters,
                treeManagement: e.target.value
              }
            })
          }
        >
          <option>Thin from below</option>
          <option>Thin from above</option>
        </Input>
        <Label>Conversion</Label>
        <Input
          type='select'
          value={props.inputs.ExampleParameters.conversion}
          onChange={e =>
            props.setInputs({
              ...props.inputs,
              ExampleParameters: {
                ...props.inputs.ExampleParameters,
                conversion: e.target.value
              }
            })
          }
        >
          <option>Direct-combustion & steam turbine(3-50MW)</option>
        </Input>
      </div>
      <br />
      <hr />
      <div>
        <h4>Financing assumptions</h4>
        <Label>Debt Ratio</Label>
        <Input
          type='text'
          value={props.inputs.ExampleParameters.debtRatio}
          onChange={e =>
            props.setInputs({
              ...props.inputs,
              ExampleParameters: {
                ...props.inputs.ExampleParameters,
                debtRatio: e.target.value
              }
            })
          }
        />

        <Label>Interest on Return equity</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.ExampleParameters.interest}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                ExampleParameters: {
                  ...props.inputs.ExampleParameters,
                  interest: e.target.value
                }
              })
            }
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <Label>Debt term</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.ExampleParameters.debtTerm}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                ExampleParameters: {
                  ...props.inputs.ExampleParameters,
                  debtTerm: e.target.value
                }
              })
            }
          />
          <InputGroupAddon addonType='append'>years</InputGroupAddon>
        </InputGroup>
        <Label>Life of project</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.ExampleParameters.lifeOfProject}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                ExampleParameters: {
                  ...props.inputs.ExampleParameters,
                  lifeOfProject: e.target.value
                }
              })
            }
          />
          <InputGroupAddon addonType='append'>years</InputGroupAddon>
        </InputGroup>
      </div>
      <br />
      <hr />
    </div>
  );
};
