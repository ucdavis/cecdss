import React, { useState } from 'react';
import { FrcsOutputs, FrcsClusterOutput } from '../../../models/Types';
import { Button } from 'reactstrap';
import { FrcsClusterCharts } from './FrcsClusterCharts';
import { ReactTable } from '../../Shared/ReactTable';
import { formatNumber } from '../../Shared/util';
import { Cell } from 'react-table';

interface Props {
  results: FrcsClusterOutput[];
}

export const FrcsSkippedClusterResultsContainer = (props: Props) => {
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
        Header: 'Area',
        accessor: 'area',
        Cell: ({ row }: Cell<FrcsClusterOutput>) =>
          formatNumber(row.original.area)
      },
      {
        Header: 'Frcs Error',
        accessor: 'frcsResult',
        Cell: ({ row }: Cell<any>) => row.original.frcsResult
      }
    ],
    [props.results]
  );

  const results = React.useMemo(() => props.results, []);
  return (
    <div>
      <h3>Skipped Clusters</h3>
      <ReactTable columns={columns} data={results} />
    </div>
  );
};
