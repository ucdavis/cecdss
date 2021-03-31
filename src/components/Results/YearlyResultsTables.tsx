import React from 'react';
import { YearlyResult } from '../../models/Types';
import { Alert } from 'reactstrap';
import { formatNumber, formatCurrency } from '../Shared/util';

interface Props {
  biomassTarget: number;
  results: YearlyResult;
}

export const YearlyResultsTable = (props: Props) => {
  return (
    <div>
      {props.biomassTarget > props.results.totalFeedstock && (
        <Alert color='danger'>
          The settings you selected did not return enough biomass to meet the
          yearly requirement.
        </Alert>
      )}
      <table className='table'>
        <tbody>
          <tr>
            <td>Annual Fuel Consumption (tons)</td>
            <td>{formatNumber(props.biomassTarget)}</td>
          </tr>
          <tr>
            <td>Harvest Cost ($/ton)</td>
            <td>
              {formatCurrency(props.results.harvestCostPerDryTon)}
            </td>
          </tr>
          <tr>
            <td>Transportation Cost ($/ton)</td>
            <td>
              {formatCurrency(props.results.transportationCostPerDryTon)}
            </td>
          </tr>
          {props.results.totalMoveInCost > 0 && (
            <tr>
              <td>Move In Cost ($/ton)</td>
              <td>
                {formatCurrency(props.results.moveInCostPerDryTon)}
              </td>
            </tr>
          )}
          <tr>
            <td>Fuel Cost ($/ton)</td>
            <td>{formatCurrency(props.results.totalCostPerDryTon)}</td>
          </tr>
          {/* <tr>
            <td>Number of Clusters Used</td>
            <td>{props.results.numberOfClusters}</td>
          </tr> */}
          {/* <tr>
            <td>Number of Skipped Clusters</td>
            <td>{props.results.skippedClusters.length}</td>
          </tr>
          <tr>
            <td>Number of Error Clusters</td>
            <td>{props.results.errorClusters.length}</td>
          </tr> */}
        </tbody>
      </table>
      {/* <FrcsClusterResultsContainer results={props.results} /> */}
    </div>
  );
};
