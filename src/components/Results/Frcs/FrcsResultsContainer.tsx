import React from 'react';
import { YearlyResult } from '../../../models/Types';
import { Alert } from 'reactstrap';
import { FrcsClusterResultsContainer } from './FrcsClusterResultsContainer';
import { formatNumber, formatCurrency } from '../../Shared/util';

interface Props {
  results: YearlyResult;
}

export const FrcsResultsContainer = (props: Props) => {
  return (
    <div>
      <h2>Fuel Reduction Cost Simulator Results</h2>
      {props.results.biomassTarget > props.results.totalBiomass && (
        <Alert color='danger'>
          The settings you selected did not return enough biomass to meet the
          yearly requirement.
        </Alert>
      )}
      <table className='table'>
        <tbody>
          <tr>
            <td>Biomass Target (US tons)</td>
            <td>{formatNumber(props.results.biomassTarget)}</td>
          </tr>
          <tr>
            <td>Total Biomass (US tons)</td>
            <td>{formatNumber(props.results.totalBiomass)}</td>
          </tr>
          <tr>
            <td>Total Feedstock Cost</td>
            <td>{formatCurrency(props.results.totalResidueCost)}</td>
          </tr>
          <tr>
            <td>Total Transportation Cost</td>
            <td>{formatCurrency(props.results.totalTransportationCost)}</td>
          </tr>
          <tr>
            <td>Total Area (acres)</td>
            <td>{formatNumber(props.results.totalArea)}</td>
          </tr>
          <tr>
            <td>Number of Clusters Used</td>
            <td>{props.results.numberOfClusters}</td>
          </tr>
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
