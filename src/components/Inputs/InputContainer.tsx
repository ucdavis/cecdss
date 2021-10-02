import React from 'react';
import {
  Button,
  Spinner,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { FrcsInputs, MapCoordinates } from '../../models/Types';
import { FrcsInputsContainer } from './Frcs/FrcsInputsContainer';
import { TechnoeconomicInputs } from './Technoeconomic/TechnoeconomicInputs';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/input.model';

interface Props {
  facilityCoordinates: MapCoordinates;
  setFacilityCoordinates: (coordinates: MapCoordinates) => void;
  biomassCoordinates: MapCoordinates;
  setBiomassCoordinates: (coordinates: MapCoordinates) => void;
  selectBiomassCoordinates: boolean;
  setSelectBiomassCoordinates: (val: boolean) => void;
  frcsInputs: FrcsInputs;
  setFrcsInputs: (inputs: FrcsInputs) => void;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP | InputModGP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
  submitInputs: () => void;
  loading: boolean;
  disabled: boolean;
  errors: string[];
}

export const InputContainer = (props: Props) => {
  const button = (!props.disabled || props.loading) && (
    <div className='cardcontents'>
      <ul>
        {props.errors.map((error, i) => {
          return (
            <li style={{ color: 'red' }} key={`error-${i}`}>
              {error}
            </li>
          );
        })}
      </ul>
      <Button
        className='btn-block'
        color='primary'
        onClick={props.submitInputs}
        disabled={props.loading}
      >
        {props.loading ? (
          <>
            Running Model...
            <Spinner color='light' />
          </>
        ) : (
          <>Run Model</>
        )}
      </Button>
      <br />
    </div>
  );
  return (
    <>
      <div className='cardheader'>
        <h4>CEC DSS</h4>
        <h2>Select Inputs</h2>
      </div>
      <div className='cardcontents'>
        <h4>Forestry and Conversion</h4>
        <Form>
          <FormGroup>
            <Label>Facility Coordinates</Label>
            <InputGroup>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>lat</InputGroupText>
              </InputGroupAddon>
              <Input
                type='text'
                value={props.facilityCoordinates.lat}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lat: Number(e.target.value)
                  })
                }
                disabled={props.disabled}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>lng</InputGroupText>
              </InputGroupAddon>
              <Input
                type='text'
                value={props.facilityCoordinates.lng}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lng: Number(e.target.value)
                  })
                }
                disabled={props.disabled}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className='ml-4'>
            <Label check>
              <Input
                type='checkbox'
                checked={props.selectBiomassCoordinates}
                onChange={e =>
                  props.setSelectBiomassCoordinates(e.target.checked)
                }
              />{' '}
              Select Separate Biomass Coordinates
            </Label>
          </FormGroup>
          {props.selectBiomassCoordinates && (
            <FormGroup>
              <Label>Biomass Coordinates</Label>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>lat</InputGroupText>
                </InputGroupAddon>
                <Input
                  type='text'
                  value={props.biomassCoordinates.lat}
                  onChange={e =>
                    props.setBiomassCoordinates({
                      ...props.biomassCoordinates,
                      lat: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>lng</InputGroupText>
                </InputGroupAddon>
                <Input
                  type='text'
                  value={props.biomassCoordinates.lng}
                  onChange={e =>
                    props.setBiomassCoordinates({
                      ...props.biomassCoordinates,
                      lng: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
              </InputGroup>
            </FormGroup>
          )}
        </Form>
      </div>

      <FrcsInputsContainer
        inputs={props.frcsInputs}
        setInputs={props.setFrcsInputs}
        disabled={props.disabled}
      />
      <TechnoeconomicInputs
        teaInputs={props.teaInputs}
        setTeaInputs={props.setTeaInputs}
        teaModel={props.teaModel}
        setTeaModel={props.setTeaModel}
        disabled={props.disabled}
      />
      {button}
    </>
  );
};
