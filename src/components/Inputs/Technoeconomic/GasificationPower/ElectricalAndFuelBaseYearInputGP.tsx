import React from 'react';
import { ElectricalFuelBaseYearInputModGP } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';

interface Props {
  inputs: ElectricalFuelBaseYearInputModGP;
  setInputs: (inputs: any) => void;
  disabled: boolean;
}

export const ElectricalAndFuelBaseYearInputGP = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Gross Electrical Capacity</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.GrossElectricalCapacity}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                GrossElectricalCapacity: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>kWe</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Total gross generating capacity</FormText>
      </FormGroup>
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
                MoistureContent: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% wet basis</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Moisture Content of Biomass Feedstock to Gasifier
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>HHV Efficiency</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.HHVEfficiency}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                HHVEfficiency: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          HHV Efficiency of Gasification System--Biomass to Clean Gas
        </FormText>
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
          Net HHV Efficiency of Power Generation incl. Dual Fuel
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Fraction Of Input Energy</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.FractionOfInputEnergy}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                FractionOfInputEnergy: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>%</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Dual Fuel -{'>'} Fraction of Input Energy
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>CO</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CO}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CO: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% by volume, dry</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Clean Gas Composition -{'>'} CO</FormText>
      </FormGroup>
      <FormGroup>
        <Label>H2</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.H2}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                H2: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% by volume, dry</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Clean Gas Composition -{'>'} H2</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Hydrocarbons</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.Hydrocarbons}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                Hydrocarbons: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% by volume, dry</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Clean Gas Composition -{'>'} Hydrocarbons (as CH4)
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>CO2</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CO2}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CO2: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% by volume, dry</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Clean Gas Composition -{'>'} CO2</FormText>
      </FormGroup>
      <FormGroup>
        <Label>O2</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.O2}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                O2: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% by volume, dry</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Clean Gas Composition -{'>'} O2</FormText>
      </FormGroup>
      <FormGroup>
        <Label>HHV</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.HHV}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                HHV: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>kJ/kg</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Higher Heating Value of Biomass Feedstock to Gasifier
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Ash Content</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.AshContent}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                AshContent: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% dry matter</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Ash Content of Biomass</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Carbon Concentration</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CarbonConcentration}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CarbonConcentration: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>% dry basis</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Carbon Concentration of Char</FormText>
      </FormGroup>
    </>
  );
};
