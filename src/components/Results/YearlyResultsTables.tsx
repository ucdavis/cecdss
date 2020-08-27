import React from 'react';
import { YearlyResult } from '../../models/Types';
import { Alert } from 'reactstrap';
import { FrcsClusterResultsContainer } from './Frcs/FrcsClusterResultsContainer';
import { formatNumber, formatCurrency } from '../Shared/util';
import { VictoryPie } from 'victory';

interface Props {
  results: YearlyResult;
}

export const YearlyResultsTable = (props: Props) => {
  return (
    <div>
      {props.results.biomassTarget > props.results.totalBiomass && (
        <Alert color='danger'>
          The settings you selected did not return enough biomass to meet the
          yearly requirement.
        </Alert>
      )}
      <Alert color='secondary'>Note: all results are in green short tons</Alert>{' '}
      <table className='table'>
        <tbody>
          <tr>
            <td>Annual Fuel Consumption (tons)</td>
            <td>{formatNumber(props.results.biomassTarget)}</td>
          </tr>
          <tr>
            <td>Harvest Cost ($/ton)</td>
            <td>
              {formatCurrency(
                props.results.totalResidueCost / props.results.totalBiomass
              )}
            </td>
          </tr>
          <tr>
            <td>Transportation Cost ($/ton)</td>
            <td>
              {formatCurrency(
                props.results.totalTransportationCost /
                  props.results.totalBiomass
              )}
            </td>
          </tr>
          {props.results.totalMoveInCost > 0 && (
            <tr>
              <td>Move In Cost ($/ton)</td>
              <td>
                {formatCurrency(
                  props.results.totalMoveInCost / props.results.totalBiomass
                )}
              </td>
            </tr>
          )}
          <tr>
            <td>Fuel Cost ($/ton)</td>
            <td>{formatCurrency(props.results.fuelCost)}</td>
          </tr>
          <tr>
            <td>Current $ LAC of Energy ($/kWh)</td>
            <td>
              {formatNumber(
                props.results.teaResults.CurrentLAC.CurrentLACofEnergy,
                4
              )}
            </td>
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
