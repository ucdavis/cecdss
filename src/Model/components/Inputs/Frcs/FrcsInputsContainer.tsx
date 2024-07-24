import { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  UncontrolledTooltip
} from 'reactstrap';
import { FrcsInputs, Treatments } from '../../../models/Types';

interface Props {
  inputs: FrcsInputs;
  setInputs: (inputs: FrcsInputs) => void;
  disabled: boolean;
}

export const FrcsInputsContainer = (props: Props) => {
  const treatments = Treatments.map(treatment => (
    <option key={treatment.id} value={treatment.id}>
      {treatment.name}
    </option>
  ));
  const [hide, setHide] = useState(true);
  return (
    <div className='cardcontents'>
      <Form>
        <h4>Fuel Reduction Cost Simulator</h4>
        <Button color='outline-primary' onClick={() => setHide(!hide)}>
          {hide ? 'View More Detailed Inputs' : 'Hide More Detailed Inputs'}
        </Button>
        {hide && (
          <>
            <FormGroup>
              <Label>Forest Treatment</Label>
              <Input
                bsSize="sm"
                type='select'
                value={props.inputs.treatmentid}
                onChange={e =>
                  props.setInputs({
                    ...props.inputs,
                    treatmentid: Number(e.target.value)
                  })
                }
                disabled={props.disabled}
              >
                {treatments}
              </Input>
              <FormText>
                <span id='treatmentTooltip'>
                  Description:
                  {Treatments[props.inputs.treatmentid - 1].description}
                </span>
                <UncontrolledTooltip
                  placement='bottom'
                  target='treatmentTooltip'
                  className='tooltip-sidebar'
                  container='sidebar'
                >
                  Private: {Treatments[props.inputs.treatmentid - 1].private}
                  <br />
                  Forest: {Treatments[props.inputs.treatmentid - 1].forest}
                </UncontrolledTooltip>
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label>Harvesting System</Label>
              <Input
                type='select'
                value={props.inputs.system}
                onChange={e =>
                  props.setInputs({
                    ...props.inputs,
                    system: e.target.value
                  })
                }
                disabled={props.disabled}
              >
                <option value='Ground-Based Mech WT'>
                  Ground-Based Mechanized Whole Tree
                </option>
                <option value='Ground-Based Manual WT'>
                  Ground-Based Manual Whole Tree
                </option>
                <option value='Ground-Based Manual Log'>
                  Ground-Based Manual Log
                </option>
                <option value='Ground-Based CTL'>
                  Ground-Based Cut To Length
                </option>
                <option value='Cable Manual WT/Log'>
                  Cable Manual Whole Tree/Log
                </option>
                <option value='Cable Manual WT'>Cable Manual Whole Tree</option>
                <option value='Cable Manual Log'>Cable Manual Log</option>
                <option value='Cable CTL'>Cable Cut To Length</option>
                <option value='Helicopter Manual Log'>
                  Helicopter Manual Log
                </option>
                <option value='Helicopter CTL'>Helicopter Cut To Length</option>
              </Input>
            </FormGroup>
          </>
        )}
        {!hide && (
          <>
            <FormGroup>
              <Label>Forest Treatment</Label>
              <Input
                type='select'
                value={props.inputs.treatmentid}
                onChange={e =>
                  props.setInputs({
                    ...props.inputs,
                    treatmentid: Number(e.target.value)
                  })
                }
                disabled={props.disabled}
              >
                {treatments}
              </Input>
              <FormText>
                <span id='treatmentTooltip'>
                  Description:
                  {Treatments[props.inputs.treatmentid - 1].description}
                </span>
                <UncontrolledTooltip
                  placement='bottom'
                  target='treatmentTooltip'
                  className='tooltip-sidebar'
                  container='sidebar'
                >
                  Private: {Treatments[props.inputs.treatmentid - 1].private}
                  <br />
                  Forest: {Treatments[props.inputs.treatmentid - 1].forest}
                </UncontrolledTooltip>
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label>Harvesting System</Label>
              <Input
                type='select'
                value={props.inputs.system}
                onChange={e =>
                  props.setInputs({
                    ...props.inputs,
                    system: e.target.value
                  })
                }
                disabled={props.disabled}
              >
                <option value='Ground-Based Mech WT'>
                  Ground-Based Mechanized Whole Tree
                </option>
                <option value='Ground-Based Manual WT'>
                  Ground-Based Manual Whole Tree
                </option>
                <option value='Ground-Based Manual Log'>
                  Ground-Based Manual Log
                </option>
                <option value='Ground-Based CTL'>
                  Ground-Based Cut To Length
                </option>
                <option value='Cable Manual WT/Log'>
                  Cable Manual Whole Tree/Log
                </option>
                <option value='Cable Manual WT'>Cable Manual Whole Tree</option>
                <option value='Cable Manual Log'>Cable Manual Log</option>
                <option value='Cable CTL'>Cable Cut To Length</option>
                <option value='Helicopter Manual Log'>
                  Helicopter Manual Log
                </option>
                <option value='Helicopter CTL'>Helicopter Cut To Length</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Diesel Fuel Price</Label>
              <InputGroup>
                <Input
                  type='number'
                  value={props.inputs.dieselFuelPrice.toString()}
                  min={0}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      dieselFuelPrice: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupText>$/gal</InputGroupText>
              </InputGroup>
              <FormText color='muted'>
                The default reflects 2021 wholesale diesel price and retail
                price may be higher
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label>Hourly Wage for Fallers</Label>
              <InputGroup>
                <Input
                  type='number'
                  value={props.inputs.wageFaller.toString()}
                  min={0}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      wageFaller: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupText>$/hour</InputGroupText>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Hourly Wage for Other Workers</Label>
              <InputGroup>
                <Input
                  type='number'
                  value={props.inputs.wageOther.toString()}
                  min={0}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      wageOther: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupText>$/hour</InputGroupText>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Percent Benefits and Overhead for Logging Workers</Label>
              <InputGroup>
                <Input
                  type='number'
                  value={props.inputs.laborBenefits.toString()}
                  min={0}
                  max={100}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      laborBenefits: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupText>%</InputGroupText>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Current Producer Price Index</Label>
              <InputGroup>
                <Input
                  type='number'
                  value={props.inputs.ppiCurrent.toString()}
                  min={0}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      ppiCurrent: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Residue Recovery Fraction for WT Systems</Label>
              <InputGroup>
                <Input
                  type='number'
                  value={props.inputs.residueRecovFracWT.toString()}
                  min={0}
                  max={100}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      residueRecovFracWT: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupText>%</InputGroupText>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>
                Residue Recovery Fraction for Ground-based CTL System
              </Label>
              <InputGroup>
                <Input
                  type='number'
                  value={props.inputs.residueRecovFracCTL.toString()}
                  min={0}
                  max={100}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      residueRecovFracCTL: parseFloat(e.target.value) || 0
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupText>%</InputGroupText>
              </InputGroup>
            </FormGroup>
          </>
        )}
      </Form>

      <br />
      <hr />
    </div>
  );
};
