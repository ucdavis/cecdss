import React from 'react';
import {
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  FormText,
  FormGroup
} from 'reactstrap';
import {
  ElectricalFuelBaseYearInputModGP,
  HeatBaseYearInputMod,
  ExpensesBaseYearInputModGP,
  TaxesInputMod,
  FinancingInputMod,
  IncomeOtherThanEnergyInputModGP,
  EscalationInflationInputModGP,
  CarbonCredit
} from '@ucdavis/tea/input.model';
import { HeatBaseYearInput } from '../HeatBaseYearInput';
import { TaxesInput } from '../TaxesInput';
import { FinancingInput } from '../FinancingInput';
import { IncomeOtherThanEnergyInput } from '../IncomeOtherThanEnergyInput';
import { EscalationInflationInput } from '../EscalationInflationInput';
import { ElectricalAndFuelBaseYearInputGP } from './ElectricalAndFuelBaseYearInputGP';
import { ExpensesBaseYearInputGP } from './ExpensesBaseYearInputGP';
import { CarbonCreditInput } from '../CarbonCreditInput';

interface Props {
  // inputs: InputModGP;
  // setInputs: (inputs: InputModGP) => void;
  inputs: any;
  setInputs: (inputs: any) => void;
  teaInputs: any;
  teaModel: string;
  disabled: boolean;
}

export const GasificationPower = (props: Props) => {
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
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Total installed cost of plant, including truck unloading cost
        </FormText>
      </FormGroup>
      <ElectricalAndFuelBaseYearInputGP
        inputs={props.inputs.ElectricalFuelBaseYear}
        setInputs={(inputs: ElectricalFuelBaseYearInputModGP) =>
          props.setInputs({
            ...props.inputs,
            ElectricalFuelBaseYear: inputs
          })
        }
        disabled={props.disabled}
      />
      <HeatBaseYearInput
        inputs={props.inputs.HeatBaseYear}
        setInputs={(inputs: HeatBaseYearInputMod) =>
          props.setInputs({ ...props.inputs, HeatBaseYear: inputs })
        }
        disabled={props.disabled}
      />
      <ExpensesBaseYearInputGP
        inputs={props.inputs.ExpensesBaseYear}
        setInputs={(inputs: ExpensesBaseYearInputModGP) =>
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
        setInputs={(inputs: IncomeOtherThanEnergyInputModGP) =>
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
        setInputs={(inputs: EscalationInflationInputModGP) =>
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
