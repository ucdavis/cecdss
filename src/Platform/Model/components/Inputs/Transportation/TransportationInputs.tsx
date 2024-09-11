import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputGroupText,
  Label,
  FormGroup,
  Form,
  Button
} from 'reactstrap';
import { TransportInputs, Treatments } from '../../../models/Types';

interface Props {
  inputs: TransportInputs;
  setTransportInputs: (inputs: TransportInputs) => void;
  disabled: boolean;
}

export const TransportInputsContainer = (props: Props) => {
  const treatments = Treatments.map(treatment => (
    <option key={treatment.id} value={treatment.id}>
      {treatment.name}
    </option>
  ));
  const [showDetailedInputs, setShowDetailedInputs] = useState(true);
  return (
    <div className='cardcontents'>
      <Form>
        <h4 className='font-bold mb-2'>Transportation</h4>
        <>
         <div className="flex gap-x-2 w-full my-2">
          <Button color={showDetailedInputs ? 'primary' : 'outline-primary'} size='sm' onClick={() => setShowDetailedInputs(true)}>
            Detail Inputs
          </Button>
          <Button color={!showDetailedInputs ? 'primary' : 'outline-primary'} size='sm' onClick={() => setShowDetailedInputs(false)}>
            Fully Loaded Rate
          </Button>
         </div>
          {showDetailedInputs ? (
            <>
              <FormGroup>
            <Label>Hourly Wage for Truck Drivers</Label>
            <InputGroup>
              <Input
                type='number'
                value={props.inputs.wageTruckDriver.toString()}
                min={0}
                onChange={e =>
                  props.setTransportInputs({
                    ...props.inputs,
                    wageTruckDriver: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
              <InputGroupText>$/hour</InputGroupText>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label>Percent Benefits and Overhead for Truck Drivers</Label>
            <InputGroup>
              <Input
                type='number'
                value={props.inputs.driverBenefits.toString()}
                min={0}
                max={100}
                onChange={e =>
                  props.setTransportInputs({
                    ...props.inputs,
                    driverBenefits: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
              <InputGroupText>%</InputGroupText>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label>Oil Cost</Label>
            <InputGroup>
              <Input
                type='number'
                value={props.inputs.oilCost.toString()}
                min={0}
                onChange={e =>
                  props.setTransportInputs({
                    ...props.inputs,
                    oilCost: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
              <InputGroupText>$/mile</InputGroupText>
            </InputGroup>
          </FormGroup>
            </>
          ) : (
              <FormGroup>
                <Label>Fully Loaded Rate</Label>
                <InputGroup>
                  <Input
                    type='number'
                    value={props.inputs.fullyLoadedRate.toString()}
                    min={0}
                    onChange={e =>
                      props.setTransportInputs({
                        ...props.inputs,
                        fullyLoadedRate: parseFloat(e.target.value) || 0
                      })
                    }
                    disabled={props.disabled}
                  />
                  <InputGroupText>$/hour</InputGroupText>
                </InputGroup>
              </FormGroup>
          )}
        </>
      </Form>

      <br />
      <hr />
    </div>
  );
};
