import React from 'react';
import { AnnualCashFlow } from '../AnnualCashFlow';
import { ExpensesBaseYear } from '../ExpensesBaseYear';
import { CurrentLAC } from '../CurrentLAC';
import { ConstantLAC } from '../ConstantLAC';
import { Taxes } from '../Taxes';
import { IncomeOtherThanEnergy } from '../IncomeOtherThanEnergy';
import { EscalationInflation } from '../EscalationInflation';
import { Financing } from '../Financing';
import { InputModGP } from '@ucdavis/tea/out/models/input.model';
import { OutputModGP } from '@ucdavis/tea/out/models/output.model';
import { CapitalCostGP } from './CapitalCostGP';
import { ElectricalAndFuelBaseYearGP } from './ElectricalAndFuelBaseYearGP';
import { HeatBaseYear } from '../GenericCombinedHeatPower/HeatBaseYear';

interface Props {
  inputs: InputModGP;
  results: OutputModGP;
}

export const GPResults = (props: Props) => {
  return (
    <div>
      <h2>Gasification Results</h2>
      <CapitalCostGP
        inputs={props.inputs.CapitalCost}
        results={props.results.CapitalCost}
      />
      <ElectricalAndFuelBaseYearGP
        results={props.results.ElectricalAndFuelBaseYear}
        inputs={props.inputs.ElectricalFuelBaseYear}
      />
      <HeatBaseYear
        inputs={props.inputs.HeatBaseYear}
        results={props.results.HeatBaseYear}
      />
      <ExpensesBaseYear
        results={props.results.ExpensesBaseYear}
        inputs={props.inputs.ExpensesBaseYear}
      />
      <Taxes inputs={props.inputs.Taxes} results={props.results} />
      <IncomeOtherThanEnergy
        inputs={props.inputs.IncomeOtherThanEnergy}
        results={props.results.IncomeOtherThanEnergy}
      />
      <EscalationInflation inputs={props.inputs.EscalationInflation} />
      <Financing
        inputs={props.inputs.Financing}
        results={props.results.Financing}
      />
      <AnnualCashFlow annualCashFlows={props.results.AnnualCashFlows} />
      <CurrentLAC results={props.results.CurrentLAC} />
      <ConstantLAC results={props.results.ConstantLAC} />
      {/* <GPOCharts inputs={props.inputs} results={props.results} /> */}
    </div>
  );
};
