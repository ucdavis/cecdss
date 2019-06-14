import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Parameters } from './MapContainer';

interface Props {
  parameters: Parameters;
  setParameters: (parameters: Parameters) => void;
}

export const MapSidebar = (props: Props) => {

  return (
    <div id='sidebar'>
      <h2>Select Refinery Parameters</h2>
      <div>
        <div>
          <h4>Forestry and Conversion</h4>
          <Label>Radius:</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.parameters.radius}
              onChange={e =>
                props.setParameters({
                  ...props.parameters,
                  radius: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>meters</InputGroupAddon>
          </InputGroup>
          <Input
            type='range'
            min={100}
            max={50000}
            value={props.parameters.radius}
            onChange={e =>
              props.setParameters({
                ...props.parameters,
                radius: Number(e.target.value)
              })
            }
          />
          <Label>Capacity of processing unit:</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.parameters.capacity}
              onChange={e =>
                props.setParameters({ ...props.parameters, capacity: e.target.value })
              }
            />
            <InputGroupAddon addonType='append'>MW</InputGroupAddon>
          </InputGroup>
          <Label>Tree management</Label>
          <Input
            type='select'
            value={props.parameters.treeManagement}
            onChange={e =>
              props.setParameters({
                ...props.parameters,
                treeManagement: e.target.value
              })
            }
          >
            <option>Thin from below</option>
            <option>Thin from above</option>
          </Input>
          <Label>Conversion</Label>
          <Input
            type='select'
            value={props.parameters.conversion}
            onChange={e =>
              props.setParameters({ ...props.parameters, conversion: e.target.value })
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
            value={props.parameters.debtRatio}
            onChange={e =>
              props.setParameters({ ...props.parameters, debtRatio: e.target.value })
            }
          />

          <Label>Interest on Return equity</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.parameters.interest}
              onChange={e =>
                props.setParameters({ ...props.parameters, interest: e.target.value })
              }
            />
            <InputGroupAddon addonType='append'>%</InputGroupAddon>
          </InputGroup>
          <Label>Debt term</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.parameters.debtTerm}
              onChange={e =>
                props.setParameters({ ...props.parameters, debtTerm: e.target.value })
              }
            />
            <InputGroupAddon addonType='append'>years</InputGroupAddon>
          </InputGroup>
          <Label>Life of project</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.parameters.lifeOfProject}
              onChange={e =>
                props.setParameters({
                  ...props.parameters,
                  lifeOfProject: e.target.value
                })
              }
            />
            <InputGroupAddon addonType='append'>years</InputGroupAddon>
          </InputGroup>
        </div>
        <br />
        <hr />
        <div>
          <Button color='primary'>Model Refinery</Button>
        </div>
      </div>
    </div>
  );
};
