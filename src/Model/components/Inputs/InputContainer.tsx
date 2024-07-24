import React from 'react';
import {
  Button,
  Spinner,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import { FrcsInputs, MapCoordinates, TransportInputs } from '../../models/Types';
import { FrcsInputsContainer } from './Frcs/FrcsInputsContainer';
import { TechnoeconomicInputs } from './Technoeconomic/TechnoeconomicInputs';
import { InputModGPO, InputModCHP, InputModGP } from '@ucdavis/tea/input.model';
import { TransportInputsContainer } from './Transportation/TransportationInputs';

interface Props {
  facilityCoordinates: MapCoordinates;
  setFacilityCoordinates: (coordinates: MapCoordinates) => void;
  biomassCoordinates: MapCoordinates;
  setBiomassCoordinates: (coordinates: MapCoordinates) => void;
  selectBiomassCoordinates: boolean;
  setSelectBiomassCoordinates: (val: boolean) => void;
  expansionFactor: number;
  setExpansionFactor: (val: number) => void;
  frcsInputs: FrcsInputs;
  setFrcsInputs: (inputs: FrcsInputs) => void;
  transportInputs: TransportInputs;
  setTransportInputs: (inputs: TransportInputs) => void;
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
            <Spinner size="sm" color='light'>
              {''}
            </Spinner>
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
        <h4>
          Forest Resource and Renewable Energy Decision Support System (FRREDSS)
        </h4>
        <h2>Select Inputs</h2>
      </div>
      <div className='cardcontents'>
        <h4>Forestry and Conversion</h4>
        <Form>
          <FormGroup>
            <Label>Facility Coordinates</Label>
            <InputGroup>
              <InputGroupText addonType='prepend'>
                <InputGroupText>lat</InputGroupText>
              </InputGroupText>
              <Input
                type='number'
                value={props.facilityCoordinates.lat.toString()}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lat: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupText addonType='prepend'>
                <InputGroupText>lng</InputGroupText>
              </InputGroupText>
              <Input
                type='number'
                value={props.facilityCoordinates.lng.toString()}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lng: parseFloat(e.target.value) || 0
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
                onChange={e => {
                  if (!e.target.checked) {
                    // if we are unchecking the box, set the biomass to whatever the facility location is
                    props.setBiomassCoordinates({
                      ...props.facilityCoordinates
                    });
                  }
                  props.setSelectBiomassCoordinates(e.target.checked);
                }}
              />{' '}
              Select Separate Biomass Coordinates
            </Label>
          </FormGroup>
          {props.selectBiomassCoordinates && (
            <FormGroup>
              <Label>Biomass Coordinates</Label>
              <InputGroup>
                <InputGroupText addonType='prepend'>
                  <InputGroupText>lat</InputGroupText>
                </InputGroupText>
                <Input
                  type='number'
                  value={props.biomassCoordinates.lat.toString()}
                  onChange={e =>
                    props.setBiomassCoordinates({
                      ...props.biomassCoordinates,
                      lat: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
              </InputGroup>
              <InputGroup>
                <InputGroupText addonType='prepend'>
                  <InputGroupText>lng</InputGroupText>
                </InputGroupText>
                <Input
                  type='number'
                  value={props.biomassCoordinates.lng.toString()}
                  onChange={e =>
                    props.setBiomassCoordinates({
                      ...props.biomassCoordinates,
                      lng: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
              </InputGroup>
            </FormGroup>
          )}
          <FormGroup>
            <Label>Expansion Factor</Label>
            <InputGroup>
              <Input
                type='number'
                value={props.expansionFactor.toString()}
                onChange={e =>
                  props.setExpansionFactor(parseFloat(e.target.value) || 0)
                }
                disabled={props.disabled}
              />
            </InputGroup>
          </FormGroup>
        </Form>
      </div>

      <FrcsInputsContainer
        inputs={props.frcsInputs}
        setInputs={props.setFrcsInputs}
        disabled={props.disabled}
      />
      <TransportInputsContainer
        inputs={props.transportInputs}
        setTransportInputs={props.setTransportInputs}
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
