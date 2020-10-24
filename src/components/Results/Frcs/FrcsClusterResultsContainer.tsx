import React, { useState } from 'react';
import { YearlyResult, ClusterResult } from '../../../models/Types';
import { Button } from 'reactstrap';
import { ReactTable } from '../../Shared/ReactTable';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { Cell } from 'react-table';
import { FrcsSkippedClusterResultsContainer } from './FrcsSkippedClusterResultsContainer';

interface Props {
  results: YearlyResult;
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
        Header: 'Combined Cost ($)',
        accessor: 'combinedCost',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatCurrency(row.original.combinedCost),
        Footer: (info: any) => {
          const total = info.rows.reduce(
            (sum: number, row: any) => row.original.combinedCost + sum,
            0
          );
          return <>Total Combined Cost: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Residue Cost ($)',
        accessor: 'residueCost',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatCurrency(row.original.residueCost),
        Footer: (info: any) => {
          const total = info.rows.reduce(
            (sum: number, row: any) => row.original.residueCost + sum,
            0
          );
          return <>Total Residue Cost: {formatCurrency(total)}</>;
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
        Header: 'Total Cost Per Acre',
        accessor: 'frcsResult.Total.CostPerAcre',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Total.CostPerAcre)
      },
      {
        Header: 'Total Cost Per Bole CCF',
        accessor: 'frcsResult.Total.CostPerBoleCCF',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Total.CostPerBoleCCF)
      },
      {
        Header: 'Total Cost Per GT',
        accessor: 'frcsResult.Total.CostPerGT',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Total.CostPerGT)
      },
      {
        Header: 'Residue Cost Per Acre',
        accessor: 'frcsResult.Residue.CostPerAcre',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Residue.CostPerAcre)
      },
      {
        Header: 'Residue Cost Per Bole CCF',
        accessor: 'frcsResult.Residue.CostPerBoleCCF',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Residue.CostPerBoleCCF)
      },
      {
        Header: 'Residue Cost Per GT',
        accessor: 'frcsResult.Residue.CostPerGT',
        Cell: ({ row }: Cell<ClusterResult>) =>
          formatNumber(row.original.frcsResult.Residue.CostPerGT)
      }
    ],
    [props.results]
  );

  // const results = React.useMemo(() => props.results.clusters, []);
  return (
    <div>
      <h3>Clusters</h3>
      {/* <ReactTable columns={columns} data={results} /> */}
      {/* {props.results.skippedClusters && (
        <FrcsSkippedClusterResultsContainer
          results={props.results.skippedClusters}
        />
      )} */}
    </div>
  );
};
