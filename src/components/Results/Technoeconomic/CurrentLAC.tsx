import React from 'react';
import { CurrentLevelAnnualCostMod } from '../../../models/TechnoeconomicOutputs';
import { formatNumber, formatCurrency } from '../../Shared/util';

interface Props {
  results: CurrentLevelAnnualCostMod;
}

export const CurrentLAC = (props: Props) => {
  return (
    <div>
      <h3>Current $ Level Annual Cost (LAC)</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Cost of Money</td>
            <td>{formatNumber(props.results.CostOfMoney)}</td>
          </tr>
          <tr>
            {/* TODO: display entire array */}
            <td>Present Worth (time 0)</td>
            <td>{formatNumber(props.results.PresentWorth[0])}</td>
          </tr>
          <tr>
            <td>Total Present Worth</td>
            <td>{formatNumber(props.results.TotalPresentWorth)}</td>
          </tr>
          <tr>
            <td>Capital Recovery Factor (current)</td>
            <td>{formatNumber(props.results.CapitalRecoveryFactorCurrent)}</td>
          </tr>
          <tr>
            <td>Current $ Level Annual Revenue Requirements ($/y)</td>
            <td>
              {formatCurrency(
                props.results.CurrentLevelAnnualRevenueRequirements
              )}
            </td>
          </tr>
          <tr>
            <td>
              <b>Current $ LAC of Energy ($/kWh)</b>
            </td>
            <td>
              <b>{formatNumber(props.results.CurrentLACofEnergy)}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
