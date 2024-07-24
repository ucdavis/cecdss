import React, { useEffect } from 'react';
import { ExpensesBaseYearInputModGP } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupText
} from 'reactstrap';
import { determineScaledCost } from '../TechnoeconomicInputs';
import { InputModGPClass } from '../../../../models/GPClasses';

// ! CHECK THE BELOW DECLARATION
export interface ExpensesBaseYearInputModGPNew extends ExpensesBaseYearInputModGP {
  LaborCostManuallySet: number;
  MaintenanceCostManuallySet: number;
  InsurancePropertyTaxManuallySet: number;
  UtilitiesManuallySet: number;
  ManagementManuallySet: number;
  OtherOperatingExpensesManuallySet: number;
  WasteTreatmentManuallySet: number;
}


interface Props {
  inputs: ExpensesBaseYearInputModGPNew;
  setInputs: (inputs: any) => void;
  teaInputs: any;
  teaModel: string;
  disabled: boolean;
}

const defaultInputsGP = new InputModGPClass();

export const ExpensesBaseYearInputGP = (props: Props) => {
  useEffect(() => {
    let scaledLaborCost = props.inputs.LaborCost;
    let scaledMaintenanceCost = props.inputs.MaintenanceCost;
    let scaledWasteTreatment = props.inputs.WasteTreatment;
    let scaledInsurancePropertyTax = props.inputs.InsurancePropertyTax;
    let scaledUtilities = props.inputs.Utilities;
    let scaledManagement = props.inputs.Management;
    let scaledOtherOperatingExpenses = props.inputs.OtherOperatingExpenses;

    scaledLaborCost = determineScaledCost(
      defaultInputsGP.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      defaultInputsGP.ExpensesBaseYear.LaborCost
    );

    scaledMaintenanceCost = determineScaledCost(
      defaultInputsGP.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      defaultInputsGP.ExpensesBaseYear.MaintenanceCost
    );

    scaledWasteTreatment = determineScaledCost(
      defaultInputsGP.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      defaultInputsGP.ExpensesBaseYear.WasteTreatment
    );

    scaledInsurancePropertyTax = determineScaledCost(
      defaultInputsGP.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      defaultInputsGP.ExpensesBaseYear.InsurancePropertyTax
    );

    scaledUtilities = determineScaledCost(
      defaultInputsGP.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      defaultInputsGP.ExpensesBaseYear.Utilities
    );

    scaledManagement = determineScaledCost(
      defaultInputsGP.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      defaultInputsGP.ExpensesBaseYear.Management
    );

    scaledOtherOperatingExpenses = determineScaledCost(
      defaultInputsGP.ElectricalFuelBaseYear.NetElectricalCapacity,
      props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity,
      defaultInputsGP.ExpensesBaseYear.OtherOperatingExpenses
    );

    if (
      scaledLaborCost !== props.inputs.LaborCost &&
      !props.inputs.LaborCostManuallySet
    ) {
      props.setInputs({
        ...props.inputs,
        LaborCost: scaledLaborCost
      });
    }

    if (
      scaledMaintenanceCost !== props.inputs.MaintenanceCost &&
      !props.inputs.MaintenanceCostManuallySet
    ) {
      props.setInputs({
        ...props.inputs,
        MaintenanceCost: scaledMaintenanceCost
      });
    }

    if (
      scaledWasteTreatment !== props.inputs.WasteTreatment &&
      !props.inputs.WasteTreatmentManuallySet
    ) {
      props.setInputs({
        ...props.inputs,
        WasteTreatment: scaledWasteTreatment
      });
    }

    if (
      scaledInsurancePropertyTax !== props.inputs.InsurancePropertyTax &&
      !props.inputs.InsurancePropertyTaxManuallySet
    ) {
      props.setInputs({
        ...props.inputs,
        InsurancePropertyTax: scaledInsurancePropertyTax
      });
    }

    if (
      scaledUtilities !== props.inputs.Utilities &&
      !props.inputs.UtilitiesManuallySet
    ) {
      props.setInputs({
        ...props.inputs,
        Utilities: scaledUtilities
      });
    }

    if (
      scaledManagement !== props.inputs.Management &&
      !props.inputs.ManagementManuallySet
    ) {
      props.setInputs({
        ...props.inputs,
        Management: scaledManagement
      });
    }

    if (
      scaledOtherOperatingExpenses !== props.inputs.OtherOperatingExpenses &&
      !props.inputs.OtherOperatingExpensesManuallySet
    ) {
      props.setInputs({
        ...props.inputs,
        OtherOperatingExpenses: scaledOtherOperatingExpenses
      });
    }
  }, [props, props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity]);

  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Biomass Fuel Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.BiomassFuelCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                BiomassFuelCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='append'>$/t</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Biomass Fuel Cost, use negative value for tipping fee
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Dual Fuel Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.DualFuelCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                DualFuelCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='append'>$/L</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Dual Fuel Cost, Default assumes heavy diesel fuel
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Labor Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.LaborCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                LaborCost: e.target.value,
                LaborCostManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='append'>$/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Cost of labor to operate facility</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Maintenance Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.MaintenanceCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                MaintenanceCost: e.target.value,
                MaintenanceCostManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='append'>$/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Cost of maintaining the plant</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Waste Treatment</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.WasteTreatment}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                WasteTreatment: e.target.value,
                WasteTreatmentManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='prepend'>$/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>Waste Treatment/Disposal</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Insurance</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.InsurancePropertyTax}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                InsurancePropertyTax: e.target.value,
                InsurancePropertyTaxManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='prepend'>$/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Cost of insurance for the plant plus any property or other local taxes
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Utilities</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.Utilities}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                Utilities: e.target.value,
                UtilitiesManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='append'>$/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Purchased utilities including power, gas, water, waste disposal
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Management</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.Management}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                Management: e.target.value,
                ManagementManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='append'>$/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Cost for administrative personnel and other administration
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Other Operating Expenses</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.OtherOperatingExpenses}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                OtherOperatingExpenses: e.target.value,
                OtherOperatingExpensesManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText addonType='append'>$/year</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          All other expenses for operating the plant, for example natural gas
          not included in utilities, chemicals, or additives
        </FormText>
      </FormGroup>
    </>
  );
};
