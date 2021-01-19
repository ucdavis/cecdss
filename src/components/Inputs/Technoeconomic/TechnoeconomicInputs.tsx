import React, { useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  FormGroup,
  Form
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { GenericPowerOnly } from './GenericPowerOnly/GenericPowerOnly';
import { TechnoeconomicModels } from '../../../models/Types';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { CombinedHeatAndPower } from './GenericCombinedHeatPower/CombinedHeatAndPower';
import { InputModGPOClass } from '../../../models/GPOClasses';
import { InputModCHPClass } from '../../../models/CHPClasses';
import { InputModGPClass } from '../../../models/GPClasses';
import { GasificationPower } from './GasificationPower/GasificationPower';
import { BasicTeaInputs } from './BasicTeaInputs';

interface Props {
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP | InputModGP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
  disabled: boolean;
}

export const TechnoeconomicInputs = (props: Props) => {
  const [showDetailedInputs, toggleShowDetailedInputs] = useState<boolean>(
    false
  );

  const renderInputs = showDetailedInputs ? (
    <>
      {props.teaModel === TechnoeconomicModels.genericPowerOnly && (
        // props.teaInputs instanceof InputModGPOClass && (
        <GenericPowerOnly
          inputs={props.teaInputs}
          setInputs={props.setTeaInputs}
          disabled={props.disabled}
        />
      )}
      {props.teaModel === TechnoeconomicModels.genericCombinedHeatAndPower && (
        // props.teaInputs instanceof InputModCHPClass && (
        <CombinedHeatAndPower
          inputs={props.teaInputs}
          setInputs={props.setTeaInputs}
          disabled={props.disabled}
        />
      )}
      {props.teaModel === TechnoeconomicModels.gasificationPower && (
        // props.teaInputs instanceof InputModGPClass && (
        <GasificationPower
          inputs={props.teaInputs}
          setInputs={props.setTeaInputs}
          disabled={props.disabled}
        />
      )}
    </>
  ) : (
    <>
      <BasicTeaInputs
        inputs={props.teaInputs.ElectricalFuelBaseYear}
        setInputs={(inputs: any) =>
          props.setTeaInputs({
            ...props.teaInputs,
            ElectricalFuelBaseYear: inputs
          })
        }
        teaModel={props.teaModel}
        disabled={props.disabled}
      />
    </>
  );
  return (
    <div className='cardcontents'>
      <h4>Techno-Economic Assessment </h4>
      <Button onClick={() => toggleShowDetailedInputs(!showDetailedInputs)}>
        {showDetailedInputs
          ? 'Hide More Detailed Inputs'
          : 'View More Detailed Inputs'}
      </Button>
      <Form>
        <FormGroup>
          <Label>Model</Label>
          <Input
            type='select'
            onChange={x => props.setTeaModel(x.target.value)}
            value={props.teaModel}
            disabled={props.disabled}
          >
            <option value={TechnoeconomicModels.genericPowerOnly}>
              Generic Power Only (GPO)
            </option>
            <option value={TechnoeconomicModels.genericCombinedHeatAndPower}>
              Generic Combined Heat and Power (CHP)
            </option>
            <option value={TechnoeconomicModels.gasificationPower}>
              Gasification Power (GP)
            </option>
          </Input>
        </FormGroup>
        {renderInputs}
      </Form>
      {showDetailedInputs && (
        <Button onClick={() => toggleShowDetailedInputs(!showDetailedInputs)}>
          Hide More Detailed Inputs
        </Button>
      )}
      <hr />
    </div>
  );
};
