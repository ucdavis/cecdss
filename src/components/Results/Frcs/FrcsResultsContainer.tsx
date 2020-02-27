import React, { useState } from 'react';
import { FrcsOutputs } from '../../../models/Types';
import { Button } from 'reactstrap';
import { FrcsClusterCharts } from './FrcsClusterCharts';
import { FrcsClusterResultsContainer } from './FrcsClusterResultsContainer';
import { formatNumber } from '../../Shared/util';

interface Props {
  results: FrcsOutputs;
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
      <table className='table'>
        <tbody>
          <tr>
            <td>Total Biomass Available</td>
            <td>{formatNumber(props.results.totalBiomass)}</td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td>{formatNumber(props.results.totalCost)}</td>
          </tr>
          <tr>
            <td>Total Area</td>
            <td>{formatNumber(props.results.totalArea)}</td>
          </tr>
        </tbody>
      </table>
      <Button
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
      </Button>
      {state.viewClusterTable && (
        <FrcsClusterResultsContainer results={props.results} />
      )}
      {state.viewClusterCharts && (
        <FrcsClusterCharts outputs={props.results.clusters} />
      )}
    </div>
  );
};
