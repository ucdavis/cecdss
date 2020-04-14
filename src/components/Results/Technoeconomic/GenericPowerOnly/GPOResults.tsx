import React from 'react';
import { OutputModGPO } from '../../../../models/TechnoeconomicOutputs';
import { ElectricalAndFuelBaseYear } from '../ElectricalAndFuelBaseYear';
import { GPOCharts } from './GPOCharts';
import { GenericPowerOnlyInputMod } from '../../../../models/TechnoeconomicInputs';
import { AnnualCashFlow } from '../AnnualCashFlow';
import { CapitalCost } from '../CapitalCost';
import { ExpensesBaseYear } from '../ExpensesBaseYear';
import { CurrentLAC } from '../CurrentLAC';
import { ConstantLAC } from '../ConstantLAC';

interface Props {
  inputs: GenericPowerOnlyInputMod;
  results: OutputModGPO;
}

export const GPOResults = (props: Props) => {
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
      <AnnualCashFlow annualCashFlows={props.results.AnnualCashFlows} />
      <CurrentLAC results={props.results.Shared.CurrentLAC} />
      <ConstantLAC results={props.results.Shared.ConstantLAC} />
      {/* <GPOCharts inputs={props.inputs} results={props.results} /> */}
    </div>
  );
};
