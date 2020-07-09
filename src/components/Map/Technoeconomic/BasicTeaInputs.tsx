import React from 'react';
import {
  ElectricalFuelBaseYearInputModGP,
  ElectricalFuelBaseYearInputModGPO,
  ElectricalFuelBaseYearInputModCHP
} from '@ucdavis/tea/out/models/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';
import { ElectricalFuelBaseYearInputModGPClass } from '../../../models/GPClasses';
import { ElectricalFuelBaseYearInputModGPOClass } from '../../../models/GPOClasses';
import { ElectricalFuelBaseYearInputModCHPClass } from '../../../models/CHPClasses';

interface Props {
  inputs: any;
  // | ElectricalFuelBaseYearInputModGPO
  // | ElectricalFuelBaseYearInputModCHP
  // | ElectricalFuelBaseYearInputModGP;
  setInputs: (inputs: any) => void;
  teaModel: string;
}

export const BasicTeaInputs = (props: Props) => {
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
                NetElectricalCapacity: Number(e.target.value)
              })
            }
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
                CapacityFactor: Number(e.target.value)
              })
            }
          />
          <InputGroupAddon addonType='append'>kWe</InputGroupAddon>
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
                MoistureContent: Number(e.target.value)
              })
            }
          />
          <InputGroupAddon addonType='append'>% wet basis</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Moisture Content of Biomass Feedstock to Gasifier
        </FormText>
      </FormGroup>
      {props.teaModel !== 'GP' && (
        <FormGroup>
          <Label>Fuel Heating Value</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.FuelHeatingValue}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  FuelHeatingValue: Number(e.target.value)
                })
              }
            />
            <InputGroupAddon addonType='append'>kJ/kg</InputGroupAddon>
          </InputGroup>
          <FormText color='muted'>
            Higher heating value (heat of combustion) of fuel expressed on a dry
            basis input in SI units
          </FormText>
        </FormGroup>
      )}
    </>
  );
};
