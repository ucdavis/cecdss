import React, { useState } from 'react';
import { Results, ClusterResult } from '../../../models/Types';
import { Button } from 'reactstrap';
import { FrcsClusterCharts } from './FrcsClusterCharts';
import { ReactTable } from '../../Shared/ReactTable';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { Cell } from 'react-table';
import { FrcsSkippedClusterResultsContainer } from './FrcsSkippedClusterResultsContainer';

interface Props {
  results: Results;
}

export const FrcsClusterResultsContainer = (props: Props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Cluster No', accessor: 'cluster_no' },
      {
        Header: 'Biomass (US Tons)',
        accessor: 'biomass',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.biomass),
        Footer: (info: any) => {
          const total = info.rows.reduce(
            (sum: number, row: any) => row.original.biomass + sum,
            0
          );
          return <>Total Biomass: {formatNumber(total)}</>;
        }
      },
      {
        Header: 'Total Cost ($)',
        accessor: 'totalCost',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatCurrency(row.original.totalCost),
        Footer: (info: any) => {
          const total = info.rows.reduce(
            (sum: number, row: any) => row.original.totalCost + sum,
            0
          );
          return <>Total Cost: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Harvest Cost ($)',
        accessor: 'harvestCost',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatCurrency(row.original.harvestCost),
        Footer: (info: any) => {
          const total = info.rows.reduce(
            (sum: number, row: any) => row.original.harvestCost + sum,
            0
          );
          return <>Total Harvest Cost: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Transportation Cost ($)',
        accessor: 'transportationCost',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatCurrency(row.original.transportationCost),
        Footer: (info: any) => {
          const total = info.rows.reduce(
            (sum: number, row: any) => row.original.transportationCost + sum,
            0
          );
          return <>Total Transportation Cost: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Area (acres)',
        accessor: 'area',
        Cell: ({ row }: Cell<ClusterResult>) => formatNumber(row.original.area)
      },
      {
        Header: 'Distance (km)',
        accessor: 'distance',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.distance)
      },
      {
        Header: 'Total Per Acre',
        accessor: 'frcsResult.TotalPerAcre',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.TotalPerAcre)
      },
      {
        Header: 'Total Per Bole CCF',
        accessor: 'frcsResult.TotalPerBoleCCF',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.TotalPerBoleCCF)
      },
      {
        Header: 'Total Per GT',
        accessor: 'frcsResult.TotalPerGT',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.TotalPerGT)
      },
      {
        Header: 'ResiduePerAcre',
        accessor: 'frcsResult.Residue.ResiduePerAcre',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Residue.ResiduePerAcre)
      },
      {
        Header: 'Residue Wt',
        accessor: 'frcsResult.Residue.ResidueWt',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Residue.ResidueWt)
      },
      {
        Header: 'Residue Per GT',
        accessor: 'frcsResult.Residue.ResiduePerGT',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Residue.ResiduePerGT)
      }
    ],
    [props.results]
  );

  const results = React.useMemo(() => props.results.clusters, []);
  return (
    <div>
      <h3>Clusters</h3>
      <ReactTable columns={columns} data={results} />
      {/* {props.results.skippedClusters && (
        <FrcsSkippedClusterResultsContainer
          results={props.results.skippedClusters}
        />
      )} */}
    </div>
  );
};
