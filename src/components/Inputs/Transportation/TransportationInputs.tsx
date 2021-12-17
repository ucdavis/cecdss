import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  FormGroup,
  Form
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
  const [hide, setHide] = useState(true);
  return (
    <div className='cardcontents'>
      <Form>
        <h4>Transportation</h4>
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
              <InputGroupAddon addonType='append'>$/hour</InputGroupAddon>
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
              <InputGroupAddon addonType='append'>%</InputGroupAddon>
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
              <InputGroupAddon addonType='append'>$/mile</InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </>
      </Form>

      <br />
      <hr />
    </div>
  );
};
