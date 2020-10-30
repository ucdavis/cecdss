import React from 'react';
import { ReactTable } from '../../Shared/ReactTable';
import { Cell } from 'react-table';
import { formatCurrency } from '../../Shared/util';
import {
  CashFlow,
  CashFlowCHP,
  CashFlowGP
} from '@ucdavis/tea/out/models/output.model';

interface Props {
  annualCashFlows: CashFlow[] | CashFlowCHP[] | CashFlowGP[];
}

export const TeaResultsTable = (props: Props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Technoeconomic Analysis ($)', accessor: 'Year' },
      {
        Header: 'Equity Recovery',
        accessor: 'EquityRecovery',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.EquityRecovery),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.EquityRecovery + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Equity Interest',
        accessor: 'EquityInterest',
        Cell: ({ row }: Cell<CashFlow | CashFlow>) =>
          formatCurrency(row.original.EquityInterest),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.EquityInterest + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Equity Principal Paid',
        accessor: 'EquityPrincipalPaid',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.EquityPrincipalPaid),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.EquityPrincipalPaid + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Equity Principal Remaining',
        accessor: 'EquityPrincipalRemaining',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.EquityPrincipalRemaining),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.EquityPrincipalRemaining + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Recovery',
        accessor: 'DebtRecovery',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.DebtRecovery),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.DebtRecovery + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Interest',
        accessor: 'DebtInterest',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.DebtInterest),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.DebtInterest + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'DebtPrincipalPaid',
        accessor: 'DebtPrincipalPaid',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.DebtPrincipalPaid),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.DebtPrincipalPaid + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Principal Remaining',
        accessor: 'DebtPrincipalRemaining',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.DebtPrincipalRemaining),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.DebtPrincipalRemaining + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Fuel Cost',
        accessor: 'BiomassFuelCost',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.BiomassFuelCost),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.BiomassFuelCost + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'NonFuelExpenses',
        accessor: 'NonFuelExpenses',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.NonFuelExpenses),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.NonFuelExpenses + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Reserve',
        accessor: 'DebtReserve',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.DebtReserve),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.DebtReserve + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Depreciation',
        accessor: 'Depreciation',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.Depreciation),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.Depreciation + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'IncomeCapacity',
        accessor: 'IncomeCapacity',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.IncomeCapacity),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.IncomeCapacity + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Interest On Debt Reserve',
        accessor: 'InterestOnDebtReserve',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.InterestOnDebtReserve),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.InterestOnDebtReserve + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Taxes Without Credit',
        accessor: 'TaxesWoCredit',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.TaxesWoCredit),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.TaxesWoCredit + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Tax Credit',
        accessor: 'TaxCredit',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.TaxCredit),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.TaxCredit + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Taxes',
        accessor: 'Taxes',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.Taxes),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.Taxes + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Energy Revenue Required',
        accessor: 'EnergyRevenueRequired',
        Cell: ({ row }: Cell<CashFlow | CashFlowCHP>) =>
          formatCurrency(row.original.EnergyRevenueRequired),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.EnergyRevenueRequired + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      }
    ],
    [props.annualCashFlows]
  );
  const data = React.useMemo(() => props.annualCashFlows, []);

  return (
    <div>
      <h3>Annual Cash Flow</h3>
      <ReactTable columns={columns} data={data} />
    </div>
  );
};
