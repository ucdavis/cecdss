import React from 'react';
import { formatNumber } from '../../Shared/util';
import { YearlyResult } from '../../../models/Types';
import { Table } from 'reactstrap';

interface Props {
  yearlyResults: YearlyResult[];
}

export const FrcsTables = (props: Props) => {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th rowSpan={2}>Resource Supply</th>
          <th rowSpan={2}>Unit</th>
          <th rowSpan={2}>Total</th>
          <th colSpan={props.yearlyResults.length}>Year</th>
        </tr>
        <tr>
          {props.yearlyResults.map((x, i) => (
            <td key={`year-${i}`}>{i + 1}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Feedstock</td>
          <td>BDMT</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce((sum, x) => sum + x.totalDryFeedstock, 0)
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`totalFeedstock-${i}`}>
              {formatNumber(result.totalDryFeedstock)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Coproduct</td>
          <td>BDMT</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce((sum, x) => sum + x.totalDryCoproduct, 0)
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`totalCoproduct-${i}`}>
              {formatNumber(result.totalDryCoproduct)}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
