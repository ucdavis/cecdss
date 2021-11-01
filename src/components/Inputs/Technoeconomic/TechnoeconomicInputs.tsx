import React, { useEffect, useState } from 'react';
import { Button, Input, Label, FormGroup, Form } from 'reactstrap';
import { GenericPowerOnly } from './GenericPowerOnly/GenericPowerOnly';
import { TechnoeconomicModels } from '../../../models/Types';
import { InputModGPO, InputModCHP, InputModGP } from '@ucdavis/tea/input.model';
import { CombinedHeatAndPower } from './GenericCombinedHeatPower/CombinedHeatAndPower';
import { GasificationPower } from './GasificationPower/GasificationPower';
import { BasicTeaInputs } from './BasicTeaInputs';

interface Props {
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP | InputModGP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
  disabled: boolean;
}

const determineScaledCapitalCost = (
  electricalCapacity: number,
  teaModel: string
) => {
  const scaleFactor = 0.82; // source: https://evcvaluation.com/cost-to-capacity-method-applications-and-considerations/
  let defaultCapitalCost = 71_000_000;
  let defaultElectricCapacity = 25_000;

  if (teaModel === TechnoeconomicModels.gasificationPower) {
    defaultCapitalCost = 920_000;
    defaultElectricCapacity = 500;
  }

  if (electricalCapacity === defaultElectricCapacity) {
    return defaultCapitalCost;
  } else {
    const scaledCapitalCost =
      (defaultCapitalCost * (electricalCapacity / defaultElectricCapacity)) ^
      scaleFactor;

    return scaledCapitalCost;
  }
};

export const TechnoeconomicInputs = (props: Props) => {
  useEffect(() => {
    if (props.teaInputs.CapitalCostManuallySet) {
      return; // do nothing if the user has manually set the capital cost
    }

    const scaledCapitalCost = determineScaledCapitalCost(
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaModel
    );

    if (scaledCapitalCost !== props.teaInputs.CapitalCost) {
      props.setTeaInputs({
        ...props.teaInputs,
        CapitalCost: scaledCapitalCost
      });
    }
  }, [props, props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity]);
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
      <Button
        color='outline-primary'
        onClick={() => toggleShowDetailedInputs(!showDetailedInputs)}
      >
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
        <Button
          color='outline-primary'
          onClick={() => toggleShowDetailedInputs(!showDetailedInputs)}
        >
          Hide More Detailed Inputs
        </Button>
      )}

      <hr />
    </div>
  );
};
