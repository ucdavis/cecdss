import React, { useState } from 'react';
import { Form } from 'reactstrap';
import {
  InputModGP,
  CapitalCostInputModGP,
  ElectricalFuelBaseYearInputModGP,
  HeatBaseYearInputMod,
  ExpensesBaseYearInputModGP,
  TaxesInputMod,
  FinancingInputMod,
  IncomeOtherThanEnergyInputModGP,
  EscalationInflationInputModGP
} from '@ucdavis/tea/out/models/input.model';
import { CapitalCostInputGP } from './CapitalCostInputGP';
import { ElectricalAndFuelBaseYearInput } from '../ElectricalAndFuelBaseYearInput';
import { HeatBaseYearInput } from '../HeatBaseYearInput';
import { ExpensesBaseYearInput } from '../ExpensesBaseYearInput';
import { TaxesInput } from '../TaxesInput';
import { FinancingInput } from '../FinancingInput';
import { IncomeOtherThanEnergyInput } from '../IncomeOtherThanEnergyInput';
import { EscalationInflationInput } from '../EscalationInflationInput';
import { ElectricalFuelBaseYearInputModGPClass } from '../../../../models/GPClasses';

interface Props {
  inputs: InputModGP;
  setInputs: (inputs: InputModGP) => void;
}

export const GasificationPower = (props: Props) => {
  return (
    <div>
      <Form>
        <CapitalCostInputGP
          inputs={props.inputs.CapitalCost}
          setInputs={(inputs: CapitalCostInputModGP) =>
            props.setInputs({ ...props.inputs, CapitalCost: inputs })
          }
        />
        <ElectricalAndFuelBaseYearInput
          inputs={props.inputs.ElectricalFuelBaseYear}
          setInputs={(inputs: ElectricalFuelBaseYearInputModGP) =>
            props.setInputs({
              ...props.inputs,
              ElectricalFuelBaseYear: inputs
            })
          }
        />
        <HeatBaseYearInput
          inputs={props.inputs.HeatBaseYear}
          setInputs={(inputs: HeatBaseYearInputMod) =>
            props.setInputs({ ...props.inputs, HeatBaseYear: inputs })
          }
        />
        <ExpensesBaseYearInput
          inputs={props.inputs.ExpensesBaseYear}
          setInputs={(inputs: ExpensesBaseYearInputModGP) =>
            props.setInputs({ ...props.inputs, ExpensesBaseYear: inputs })
          }
        />
        <TaxesInput
          inputs={props.inputs.Taxes}
          setInputs={(inputs: TaxesInputMod) =>
            props.setInputs({ ...props.inputs, Taxes: inputs })
          }
        />
        <IncomeOtherThanEnergyInput
          inputs={props.inputs.IncomeOtherThanEnergy}
          setInputs={(inputs: IncomeOtherThanEnergyInputModGP) =>
            props.setInputs({ ...props.inputs, IncomeOtherThanEnergy: inputs })
          }
        />
        <EscalationInflationInput
          inputs={props.inputs.EscalationInflation}
          setInputs={(inputs: EscalationInflationInputModGP) =>
            props.setInputs({ ...props.inputs, EscalationInflation: inputs })
          }
        />
        <FinancingInput
          inputs={props.inputs.Financing}
          setInputs={(inputs: FinancingInputMod) =>
            props.setInputs({ ...props.inputs, Financing: inputs })
          }
        />
      </Form>
    </div>
  );
};
