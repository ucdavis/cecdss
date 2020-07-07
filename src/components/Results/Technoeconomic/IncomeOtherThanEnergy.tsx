import React from 'react';
import { formatNumber } from '../../Shared/util';
import {
  IncomeOtherThanEnergyInputMod,
  IncomeOtherThanEnergyInputModGP
} from '@ucdavis/tea/out/models/input.model';
import {
  IncomeOtherThanEnergyMod,
  IncomeOtherThanEnergyModGP
} from '@ucdavis/tea/out/models/output.model';
import {
  IncomeOtherThanEnergyModGPClass,
  IncomeOtherThanEnergyInputModGPClass
} from '../../../models/GPClasses';

interface Props {
  inputs: IncomeOtherThanEnergyInputMod | IncomeOtherThanEnergyInputModGP;
  results: IncomeOtherThanEnergyMod | IncomeOtherThanEnergyModGP;
}

export const IncomeOtherThanEnergy = (props: Props) => {
  return (
    <div>
      <h3>Income Other Than Energy</h3>
      <table className='table'>
        <tbody>
          <>
            <tr>
              <td>Capacity Payment ($/kW-y)</td>
              <td>{formatNumber(props.inputs.CapacityPayment)}</td>
            </tr>
            <tr>
              <td>Interest Rate on DebtReserve (%/y)</td>
              <td>{formatNumber(props.inputs.InterestRateOnDebtReserve)}</td>
            </tr>
          </>
          {props.inputs instanceof IncomeOtherThanEnergyInputModGPClass && (
            <tr>
              <td>
                Sales Price for Char/Ash ($/t)--for disposal, include above
              </td>
              <td>{formatNumber(props.inputs.SalesPriceForChar)}</td>
            </tr>
          )}
          <tr>
            <td>Annual Capacity Payment ($/y)</td>
            <td>{formatNumber(props.results.AnnualCapacityPayment)}</td>
          </tr>
          <tr>
            <td>Annual Debt Reserve Interest ($/y)</td>
            <td>{formatNumber(props.results.AnnualDebtReserveInterest)}</td>
          </tr>
          {props.results instanceof IncomeOtherThanEnergyModGPClass && (
            <tr>
              <td>Annual Income from Char/Ash Sales ($/y)</td>
              <td>{formatNumber(props.results.AnnualIncomeFromChar)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
