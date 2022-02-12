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

export const determineScaledCost = (
  defaultElectricCapacity: number,
  electricalCapacity: number,
  defaultCost: number
) => {
  // source: https://evcvaluation.com/wp-content/uploads/2019/06/Cost-to-Capacity-Method_Applications-and-Considerations.pdf
  const scaleFactor = 0.82;
  if (electricalCapacity === defaultElectricCapacity) {
    return defaultCost;
  } else {
    const scaledCapitalCost =
      defaultCost *
      Math.pow(electricalCapacity / defaultElectricCapacity, scaleFactor);

    return Math.round(scaledCapitalCost);
  }
};

export const TechnoeconomicInputs = (props: Props) => {
  useEffect(() => {
    if (props.teaInputs.CapitalCostManuallySet) {
      props.teaInputs.CapitalCost = Number(props.teaInputs.CapitalCost);
      return;
    }

    let scaledCapitalCost = props.teaInputs.CapitalCost;
    if (props.teaModel === TechnoeconomicModels.gasificationPower) {
      scaledCapitalCost = determineScaledCost(
        500,
        props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
        3_000_000
      );
    } else {
      scaledCapitalCost = determineScaledCost(
        25_000,
        props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
        100_000_000
      );
    }

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
