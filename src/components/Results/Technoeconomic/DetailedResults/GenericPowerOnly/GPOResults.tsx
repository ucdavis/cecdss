import React from 'react';
import { ElectricalAndFuelBaseYear } from '../ElectricalAndFuelBaseYear';
import { GPOCharts } from './GPOCharts';
import { AnnualCashFlowTable } from '../AnnualCashFlowTable';
import { CapitalCost } from '../CapitalCost';
import { ExpensesBaseYear } from '../ExpensesBaseYear';
import { CurrentLAC } from '../CurrentLAC';
import { ConstantLAC } from '../ConstantLAC';
import { Taxes } from '../Taxes';
import { IncomeOtherThanEnergy } from '../IncomeOtherThanEnergy';
import { EscalationInflation } from '../EscalationInflation';
import { Financing } from '../Financing';
import { InputModGPO } from '@ucdavis/tea/input.model';
import { OutputModGPO } from '@ucdavis/tea/output.model';
import { AnnualCashFlow } from '../AnnualCashFlow';

interface Props {
  inputs: InputModGPO;
  results: OutputModGPO;
}

export const GPOResults = (props: Props) => {
  return (
    <div>
      <h2>Generic Power Only Results</h2>
      <CapitalCost inputs={props.inputs} />
      <ElectricalAndFuelBaseYear
        results={props.results.ElectricalAndFuelBaseYear}
        inputs={props.inputs.ElectricalFuelBaseYear}
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
      <AnnualCashFlow
        teaModel='GPO'
        annualCashFlow={props.results.AnnualCashFlows[0]}
      />
      <CurrentLAC results={props.results.CurrentLAC} />
      <ConstantLAC results={props.results.ConstantLAC} />
    </div>
  );
};
