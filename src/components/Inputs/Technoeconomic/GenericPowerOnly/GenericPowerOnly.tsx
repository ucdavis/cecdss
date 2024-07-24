import React from 'react';
import {
  Input,
  Label,
  InputGroup,
  InputGroupText,
  FormText,
  FormGroup
} from 'reactstrap';
import {
  ElectricalFuelBaseYearInputModGPO,
  IncomeOtherThanEnergyInputMod,
  ExpensesBaseYearInputModGPO,
  TaxesInputMod,
  EscalationInflationInputMod,
  FinancingInputMod,
  CarbonCredit
} from '@ucdavis/tea/input.model';
import { ElectricalAndFuelBaseYearInput } from '../ElectricalAndFuelBaseYearInput';
import { ExpensesBaseYearInput } from '../ExpensesBaseYearInput';
import { TaxesInput } from '../TaxesInput';
import { IncomeOtherThanEnergyInput } from '../IncomeOtherThanEnergyInput';
import { EscalationInflationInput } from '../EscalationInflationInput';
import { FinancingInput } from '../FinancingInput';
import { CarbonCreditInput } from '../CarbonCreditInput';

interface Props {
  // inputs: InputModGPO;
  // setInputs: (inputs: InputModGPO) => void;
  inputs: any;
  setInputs: (inputs: any) => void;
  teaInputs: any;
  teaModel: string;
  disabled: boolean;
}

export const GenericPowerOnly = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Capital Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CapitalCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CapitalCost: e.target.value,
                CapitalCostManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupText>$</InputGroupText>
        </InputGroup>
        <FormText color='muted'>
          Total installed cost of plant, including truck unloading cost
        </FormText>
      </FormGroup>

      <ElectricalAndFuelBaseYearInput
        inputs={props.inputs.ElectricalFuelBaseYear}
        setInputs={(inputs: ElectricalFuelBaseYearInputModGPO) =>
          props.setInputs({
            ...props.inputs,
            ElectricalFuelBaseYear: inputs
          })
        }
        teaInputs={props.teaInputs}
        disabled={props.disabled}
      />

      <ExpensesBaseYearInput
        inputs={props.inputs.ExpensesBaseYear}
        setInputs={(inputs: ExpensesBaseYearInputModGPO) =>
          props.setInputs({ ...props.inputs, ExpensesBaseYear: inputs })
        }
        teaInputs={props.inputs}
        teaModel={props.teaModel}
        disabled={props.disabled}
      />
      <TaxesInput
        inputs={props.inputs.Taxes}
        setInputs={(inputs: TaxesInputMod) =>
          props.setInputs({ ...props.inputs, Taxes: inputs })
        }
        disabled={props.disabled}
      />
      <IncomeOtherThanEnergyInput
        inputs={props.inputs.IncomeOtherThanEnergy}
        setInputs={(inputs: IncomeOtherThanEnergyInputMod) =>
          props.setInputs({ ...props.inputs, IncomeOtherThanEnergy: inputs })
        }
        disabled={props.disabled}
      />
      {/* <CarbonCreditInput
        inputs={props.inputs.CarbonCredit}
        setInputs={(inputs: CarbonCredit) =>
          props.setInputs({ ...props.inputs, CarbonCredit: inputs })
        }
        includeCredits={props.inputs.IncludeCarbonCredit}
        setIncludeCredits={(includeCredits: boolean) => {
          props.setInputs({
            ...props.inputs,
            IncludeCarbonCredit: includeCredits
          });
        }}
        disabled={props.disabled}
      ></CarbonCreditInput> */}
      <EscalationInflationInput
        inputs={props.inputs.EscalationInflation}
        setInputs={(inputs: EscalationInflationInputMod) =>
          props.setInputs({ ...props.inputs, EscalationInflation: inputs })
        }
        disabled={props.disabled}
      />
      <FinancingInput
        inputs={props.inputs.Financing}
        setInputs={(inputs: FinancingInputMod) =>
          props.setInputs({ ...props.inputs, Financing: inputs })
        }
        disabled={props.disabled}
      />
    </>
  );
};
