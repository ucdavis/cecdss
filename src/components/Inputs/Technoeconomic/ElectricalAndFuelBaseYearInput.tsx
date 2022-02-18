import React from 'react';
import {
  ElectricalFuelBaseYearInputModGPO,
  ElectricalFuelBaseYearInputModCHP
} from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';

interface Props {
  inputs: ElectricalFuelBaseYearInputModGPO | ElectricalFuelBaseYearInputModCHP;
  setInputs: (inputs: any) => void;
  teaInputs: any;
  disabled: boolean;
}

export const ElectricalAndFuelBaseYearInput = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Net Electrical Capacity</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.NetElectricalCapacity}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                NetElectricalCapacity: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>kWe</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Net power available for on-site use or grid sales
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Capacity Factor</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CapacityFactor}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CapacityFactor: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Annual fraction that rated capacity is available from plant
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Moisture Content</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.MoistureContent}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                MoistureContent: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% wet basis</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Moisture Content of Biomass Feedstock</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Net Station Efficiency</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.NetStationEfficiency}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                NetStationEfficiency: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Ratio of net energy output from plant to fuel energy input to plant
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Fuel Heating Value</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.FuelHeatingValue}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                FuelHeatingValue: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>kJ/kg</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Higher heating value (heat of combustion) of fuel expressed on a dry
          basis input in SI units
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Fuel AshConcentration</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.FuelAshConcentration}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                FuelAshConcentration: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Fraction of ash in fuel, percent dry basis
        </FormText>
      </FormGroup>
    </>
  );
};
