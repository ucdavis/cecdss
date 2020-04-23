import React from 'react';
import { formatNumber } from '../../Shared/util';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import {
  IncomeOtherThanEnergyMod,
  IncomeOtherThanEnergyModGP
} from '@ucdavis/tea/out/models/output.model';
import { InputModGPOClass } from '../../../models/GPOClasses';
import { InputModCHPClass } from '../../../models/CHPClasses';
import {
  InputModGPClass,
  IncomeOtherThanEnergyModGPClass
} from '../../../models/GPClasses';

interface Props {
  inputs: InputModGPO | InputModCHP | InputModGP;
  results: IncomeOtherThanEnergyMod | IncomeOtherThanEnergyModGP;
}

export const IncomeOtherThanEnergy = (props: Props) => {
  return (
    <div>
      <h3>Income Other Than Energy</h3>
      <table className='table'>
        <tbody>
          {(props.inputs instanceof InputModGPOClass ||
            props.inputs instanceof InputModCHPClass) && (
            <>
              <tr>
                <td>Capacity Payment ($/kW-y)</td>
                <td>{formatNumber(props.inputs.CapacityPayment)}</td>
              </tr>
              <tr>
                <td>Interest Rate on DebtReserve (%/y)</td>
                <td>{formatNumber(props.inputs.InterestRateonDebtReserve)}</td>
              </tr>
            </>
          )}
          {props.inputs instanceof InputModGPClass && (
            // TODO: combine top 2 with above
            <>
              <tr>
                <td>Electricity Capacity Payment ($/kW-y)</td>
                <td>{formatNumber(props.inputs.ElectricityCapacityPayment)}</td>
              </tr>
              <tr>
                <td>Interest Rate on Debt Reserve (%/y)</td>
                <td>{formatNumber(props.inputs.InterestRateOnDebtReserve)}</td>
              </tr>
              <tr>
                <td>
                  Sales Price for Char/Ash ($/t)--for disposal, include above
                </td>
                <td>{formatNumber(props.inputs.SalesPriceForChar)}</td>
              </tr>
            </>
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
