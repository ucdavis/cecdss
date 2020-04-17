import React from 'react';
import { ElectricalAndFuelBaseYear } from '../ElectricalAndFuelBaseYear';
import { AnnualCashFlow } from '../AnnualCashFlow';
import { CapitalCost } from '../CapitalCost';
import { ExpensesBaseYear } from '../ExpensesBaseYear';
import { CurrentLAC } from '../CurrentLAC';
import { ConstantLAC } from '../ConstantLAC';
import { Taxes } from '../Taxes';
import { IncomeOtherThanEnergy } from '../IncomeOtherThanEnergy';
import { EscalationInflation } from '../EscalationInflation';
import { Financing } from '../Financing';
import { InputModCHP } from '@ucdavis/tea/out/models/input.model';
import { OutputModCHP } from '@ucdavis/tea/out/models/output.model';

interface Props {
  inputs: InputModCHP;
  results: OutputModCHP;
}

export const CHPResults = (props: Props) => {
  return (
    <div>
      <h2>Generic Power Only Results</h2>
      <CapitalCost inputs={props.inputs} />
      <ElectricalAndFuelBaseYear
        results={props.results.ElectricalAndFuelBaseYear}
        inputs={props.inputs}
      />
      <ExpensesBaseYear
        results={props.results.ExpensesBaseYear}
        inputs={props.inputs}
      />
      <Taxes inputs={props.inputs} results={props.results} />
      <IncomeOtherThanEnergy
        inputs={props.inputs}
        results={props.results.IncomeOtherThanEnergy}
      />
      <EscalationInflation inputs={props.inputs} />
      <Financing inputs={props.inputs} results={props.results.Financing} />
      <AnnualCashFlow annualCashFlows={props.results.AnnualCashFlows} />
      <CurrentLAC results={props.results.CurrentLAC} />
      <ConstantLAC results={props.results.ConstantLAC} />
      {/* <GPOCharts inputs={props.inputs} results={props.results} /> */}
    </div>
  );
};
