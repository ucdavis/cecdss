import React, { useState } from 'react';
import { Results } from '../../../models/Types';
import { Button, Alert } from 'reactstrap';
import { FrcsClusterCharts } from './FrcsClusterCharts';
import { FrcsClusterResultsContainer } from './FrcsClusterResultsContainer';
import { formatNumber, formatCurrency } from '../../Shared/util';

interface Props {
  results: Results;
}

interface State {
  viewClusterTable: boolean;
  viewClusterCharts: boolean;
}

export const FrcsResultsContainer = (props: Props) => {
  const [state, setState] = useState<State>({
    viewClusterTable: false,
    viewClusterCharts: false
  });

  return (
    <div>
      <h2>Fuel Reduction Cost Simulator Results</h2>
      {props.results.teaResults.ElectricalAndFuelBaseYear
        .AnnualFuelConsumption > props.results.totalBiomass &&
        props.results.skippedClusters.length === 0 && (
          <Alert color='danger'>
            The settings you selected did not return enough biomass to meet the
            yearly requirement.
          </Alert>
        )}
      <table className='table'>
        <tbody>
          <tr>
            <td>Biomass Target (US tons)</td>
            <td>
              {formatNumber(
                props.results.teaResults.ElectricalAndFuelBaseYear
                  .AnnualFuelConsumption
              )}
            </td>
          </tr>
          <tr>
            <td>Total Biomass (US tons)</td>
            <td>{formatNumber(props.results.totalBiomass)}</td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td>{formatCurrency(props.results.totalCombinedCost)}</td>
          </tr>
          <tr>
            <td>Total Harvest Cost</td>
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
          <tr>
            <td>Number of Skipped Clusters</td>
            <td>{props.results.skippedClusters.length}</td>
          </tr>
          <tr>
            <td>Number of Error Clusters</td>
            <td>{props.results.errorClusters.length}</td>
          </tr>
        </tbody>
      </table>
      {/* <Button
        onClick={() => {
          setState({
            viewClusterCharts: false,
            viewClusterTable: !state.viewClusterTable
          });
        }}
      >
        View Cluster Table
      </Button>
      <Button
        onClick={() => {
          setState({
            viewClusterTable: false,
            viewClusterCharts: !state.viewClusterCharts
          });
        }}
      >
        View Cluster Charts
      </Button> */}
      {/* {state.viewClusterTable && ( */}
      <FrcsClusterResultsContainer results={props.results} />
      {/* )} */}
      {/* {state.viewClusterCharts && (
        <FrcsClusterCharts outputs={props.results.clusters} />
      )} */}
    </div>
  );
};
