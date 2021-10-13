import React from 'react';
import {
  InputModGP,
  CapitalCostInputModGP,
  ElectricalFuelBaseYearInputModGP,
  HeatBaseYearInputMod,
  ExpensesBaseYearInputModGP,
  TaxesInputMod,
  FinancingInputMod,
  IncomeOtherThanEnergyInputModGP,
  EscalationInflationInputModGP,
  CarbonCredit
} from '@ucdavis/tea/input.model';
import { CapitalCostInputGP } from './CapitalCostInputGP';
import { HeatBaseYearInput } from '../HeatBaseYearInput';
import { TaxesInput } from '../TaxesInput';
import { FinancingInput } from '../FinancingInput';
import { IncomeOtherThanEnergyInput } from '../IncomeOtherThanEnergyInput';
import { EscalationInflationInput } from '../EscalationInflationInput';
import { ElectricalAndFuelBaseYearInputGP } from './ElectricalAndFuelBaseYearInputGP';
import { ExpensesBaseYearInputGP } from './ExpensesBaseYearInputGP';
import { CarbonCreditInput } from '../CarbonCreditInput';

interface Props {
  inputs: InputModGP;
  setInputs: (inputs: InputModGP) => void;
  disabled: boolean;
}

export const GasificationPower = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <CapitalCostInputGP
        inputs={props.inputs.CapitalCostElements}
        setInputs={(inputs: CapitalCostInputModGP) =>
          props.setInputs({ ...props.inputs, CapitalCostElements: inputs })
        }
        disabled={props.disabled}
      />
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
      <CarbonCreditInput
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
      ></CarbonCreditInput>
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
