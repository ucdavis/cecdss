import React from 'react';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { YearlyResult } from '../../../models/Types';

interface Props {
  yearlyResults: YearlyResult[];
}

export const TechnoeconomicTables = (props: Props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th rowSpan={2}>Technoeconomic Analysis ($)</th>
          <td rowSpan={2}>Total</td>
          <td colSpan={props.yearlyResults.length}>Year</td>
        </tr>
        <tr>
          {props.yearlyResults.map((x, i) => (
            <td>{i + 1}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Harvest cost</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalFeedstockCost,
                0
              ) /
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalFeedstock,
                  0
                )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatCurrency(
                result.totalFeedstockCost / result.totalFeedstock
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Transport cost</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalTransportationCost,
                0
              ) /
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalFeedstock,
                  0
                )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatCurrency(
                result.totalTransportationCost / result.totalFeedstock
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Move-in cost</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalMoveInCost,
                0
              ) /
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalFeedstock,
                  0
                )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatCurrency(result.totalMoveInCost / result.totalFeedstock)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Feedstock cost</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce((sum, x) => sum + x.fuelCost, 0) /
                props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatCurrency(result.fuelCost)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
