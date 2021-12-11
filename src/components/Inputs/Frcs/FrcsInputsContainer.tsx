import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  FormGroup,
  Form,
  FormText,
  UncontrolledTooltip,
  Button
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
        <h4>FRCS Inputs</h4>
        <Button color='outline-primary' onClick={() => setHide(!hide)}>
          {hide ? 'View More Detailed Inputs' : 'Hide More Detailed Inputs'}
        </Button>
        {hide && (
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
                <option value='Helicopter Manual WT'>
                  Helicopter Manual Whole Tree
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
                <option value='Helicopter Manual WT'>
                  Helicopter Manual Whole Tree
                </option>
                <option value='Helicopter CTL'>Helicopter Cut To Length</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Diesel Fuel Price</Label>
              <InputGroup>
                <Input
                  type='text'
                  value={props.inputs.dieselFuelPrice}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      dieselFuelPrice: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupAddon addonType='append'>$/gal</InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Hourly wage for Fallers</Label>
              <InputGroup>
                <Input
                  type='text'
                  value={props.inputs.wageFaller}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      wageFaller: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupAddon addonType='append'>$/hour</InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Hourly wage for Other Workers</Label>
              <InputGroup>
                <Input
                  type='text'
                  value={props.inputs.wageOther}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      wageOther: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupAddon addonType='append'>$/hour</InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Percent benefits</Label>
              <InputGroup>
                <Input
                  type='text'
                  value={props.inputs.laborBenefits}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      laborBenefits: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupAddon addonType='append'>%</InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Current Producer Price Index</Label>
              <InputGroup>
                <Input
                  type='text'
                  value={props.inputs.ppiCurrent}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      ppiCurrent: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Recovery Fraction of Residues for WT systems</Label>
              <InputGroup>
                <Input
                  type='text'
                  value={props.inputs.residueRecovFracWT}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      residueRecovFracWT: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupAddon addonType='append'>%</InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Recovery Fraction of Residues for CTL</Label>
              <InputGroup>
                <Input
                  type='text'
                  value={props.inputs.residueRecovFracCTL}
                  onChange={e =>
                    props.setInputs({
                      ...props.inputs,
                      residueRecovFracCTL: Number(e.target.value)
                    })
                  }
                  disabled={props.disabled}
                />
                <InputGroupAddon addonType='append'>%</InputGroupAddon>
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
