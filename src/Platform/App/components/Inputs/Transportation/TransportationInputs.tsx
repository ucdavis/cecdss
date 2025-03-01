import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label
} from 'reactstrap';
import { TransportInputs } from '../../../models/Types';

interface Props {
  inputs: TransportInputs;
  setTransportInputs: (inputs: TransportInputs) => void;
  disabled: boolean;
}

export const TransportInputsContainer = (props: Props) => {
  return (
    <div className='cardcontents'>
      <Form>
        <h4 className='font-bold mb-2'>Transportation</h4>
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
      </Form>

      <br />
      <hr />
    </div>
  );
};
