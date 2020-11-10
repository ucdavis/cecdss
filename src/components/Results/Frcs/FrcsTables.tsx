import React from 'react';
import { formatNumber, formatCurrency } from '../../Shared/util';
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
          <th rowSpan={2}>Resource Supply (ton)</th>
          <th rowSpan={2}>Unit</th>
          <th rowSpan={2}>Total</th>
          <th colSpan={props.yearlyResults.length}>Year</th>
        </tr>
        <tr>
          {props.yearlyResults.map((x, i) => (
            <td>{i + 1}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Feedstock</td>
          <td>t</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce((sum, x) => sum + x.totalFeedstock, 0)
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.totalFeedstock)}</td>
          ))}
        </tr>
        <tr>
          <td>Coproduct</td>
          <td>t</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce((sum, x) => sum + x.totalCoproduct, 0)
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.totalCoproduct)}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
