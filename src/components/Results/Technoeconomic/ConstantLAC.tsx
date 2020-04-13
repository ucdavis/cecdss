import React from 'react';
import { ConstantLevelAnnualCostMod } from '../../../models/TechnoeconomicOutputs';
import { formatNumber } from '../../Shared/util';

interface Props {
  results: ConstantLevelAnnualCostMod;
}

export const ConstantLAC = (props: Props) => {
  return (
    <div>
      <h3>Constant $ Level Annual Cost (LAC)</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Real Cost of Money (inflation adjusted)</td>
            <td>{formatNumber(props.results.RealCostOfMoney)}</td>
          </tr>
          <tr>
            <td>Capital Recovery Factor (constant)</td>
            <td>{formatNumber(props.results.CapitalRecoveryFactorConstant)}</td>
          </tr>
          <tr>
            <td>Constant $ Level Annual Revenue Requirements ($/y)</td>
            <td>
              {formatNumber(
                props.results.ConstantLevelAnnualRevenueRequirements
              )}
            </td>
          </tr>
          <tr>
            <td>
              <b>Constant $ LAC of Energy ($/kWh)</b>
            </td>
            <td>
              <b>{formatNumber(props.results.ConstantLACofEnergy)}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
