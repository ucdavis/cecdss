import React, { useState } from 'react';
import { FrcsOutputs, FrcsClusterOutput } from '../../../models/Types';
import { Button } from 'reactstrap';
import { FrcsClusterCharts } from './FrcsClusterCharts';
import { ReactTable } from '../../Shared/ReactTable';

interface Props {
  results: FrcsClusterOutput[];
}

export const FrcsClusterResultsContainer = (props: Props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Cluster No', accessor: 'cluster_no' },
      { Header: 'Biomass', accessor: 'biomass' },
      { Header: 'Cost', accessor: 'cost' },
      { Header: 'Area', accessor: 'area' },
      { Header: 'Distance', accessor: 'distance' },
      { Header: 'Total Per Acre', accessor: 'TotalPerAcre' },
      { Header: 'Total Per Bole CCF', accessor: 'TotalPerBoleCCF' },
      { Header: 'Total Per GT', accessor: 'TotalPerGT' }
    ],
    []
  );

  const results = React.useMemo(() => props.results, []);
  return (
    <div>
      <h3>Clusters</h3>
      <ReactTable columns={columns} data={results} />
    </div>
  );
};
