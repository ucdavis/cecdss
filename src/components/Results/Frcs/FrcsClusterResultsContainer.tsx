import React, { useState } from 'react';
import { Outputs, FrcsClusterOutput } from '../../../models/Types';
import { Button } from 'reactstrap';
import { FrcsClusterCharts } from './FrcsClusterCharts';
import { ReactTable } from '../../Shared/ReactTable';
import { formatNumber } from '../../Shared/util';
import { Cell } from 'react-table';
import { FrcsErrorClusterResultsContainer } from './FrcsSkippedClusterResultsContainer';

interface Props {
  results: Outputs;
}

export const FrcsClusterResultsContainer = (props: Props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Cluster No', accessor: 'cluster_no' },
      {
        Header: 'Biomass',
        accessor: 'biomass',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.biomass)
      },
      {
        Header: 'Cost',
        accessor: 'cost',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.totalCost)
      },
      {
        Header: 'Area',
        accessor: 'area',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.area)
      },
      {
        Header: 'Distance',
        accessor: 'distance',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.distance)
      },
      {
        Header: 'Total Per Acre',
        accessor: 'frcsResult.TotalPerAcre',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.frcsResult.TotalPerAcre)
      },
      {
        Header: 'Total Per Bole CCF',
        accessor: 'frcsResult.TotalPerBoleCCF',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.frcsResult.TotalPerBoleCCF)
      },
      {
        Header: 'Total Per GT',
        accessor: 'frcsResult.TotalPerGT',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.frcsResult.TotalPerGT)
      }
    ],
    [props.results]
  );

  const results = React.useMemo(() => props.results.clusters, []);
  const skippedClusters = React.useMemo(
    () => props.results.skippedClusters,
    []
  );
  return (
    <div>
      <h3>Clusters</h3>
      <ReactTable columns={columns} data={results} />
      {props.results.skippedClusters && (
        <div>
          <h3>Skipped Clusters</h3>
          <ReactTable columns={columns} data={skippedClusters} />
        </div>
      )}
      {props.results.errorClusters && (
        <FrcsErrorClusterResultsContainer
          results={props.results.errorClusters}
        />
      )}
    </div>
  );
};
