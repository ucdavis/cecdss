import React from 'react';
import {
  OutputModGPO,
  IncomeOtherThanEnergyMod
} from '../../../models/TechnoeconomicOutputs';
import { formatNumber } from '../../Shared/util';
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  inputs: GenericPowerOnlyInputMod;
  results: IncomeOtherThanEnergyMod;
}

export const IncomeOtherThanEnergy = (props: Props) => {
  return (
    <div>
      <h3>Income Other Than Energy</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Capacity Payment ($/kW-y)</td>
            <td>{formatNumber(props.inputs.CapacityPayment)}</td>
          </tr>
          <tr>
            <td>Interest Rate on DebtReserve (%/y)</td>
            <td>{formatNumber(props.inputs.InterestRateonDebtReserve)}</td>
          </tr>
          <tr>
            <td>Annual Capacity Payment ($/y)</td>
            <td>{formatNumber(props.results.AnnualCapacityPayment)}</td>
          </tr>
          <tr>
            <td>Annual Debt Reserve Interest ($/y)</td>
            <td>{formatNumber(props.results.AnnualDebtReserveInterest)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
