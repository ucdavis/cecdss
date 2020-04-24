import React, { useState } from 'react';
import {
  Results,
  ClusterResult,
  ClusterErrorResult
} from '../../../models/Types';
import { Button } from 'reactstrap';
import { ReactTable } from '../../Shared/ReactTable';
import { formatNumber } from '../../Shared/util';
import { Cell } from 'react-table';

interface Props {
  results: ClusterResult[];
}

export const FrcsSkippedClusterResultsContainer = (props: Props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Cluster No', accessor: 'cluster_no' },
      {
        Header: 'Biomass',
        accessor: 'biomass',
        Cell: ({ row }: Cell<ClusterErrorResult>) =>
          formatNumber(row.original.biomass)
      },
      {
        Header: 'Area',
        accessor: 'area',
        Cell: ({ row }: Cell<ClusterErrorResult>) =>
          formatNumber(row.original.area)
      },
      {
        Header: 'Frcs Error',
        accessor: 'frcsResult',
        Cell: ({ row }: Cell<ClusterErrorResult>) => row.original.error
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
