import React from 'react';
import { ReactTable } from '../../Shared/ReactTable';
import { Cell } from 'react-table';
import { formatCurrency } from '../../Shared/util';
import {
  CashFlowGPO,
  CashFlowCHP,
  CashFlowGP
} from '@ucdavis/tea/out/models/output.model';

interface Props {
  annualCashFlows: CashFlowGPO[] | CashFlowCHP[] | CashFlowGP[];
}

export const AnnualCashFlowTable = (props: Props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Year', accessor: 'Year' },
      {
        Header: 'Equity Recovery',
        accessor: 'EquityRecovery',
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowGPO>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        accessor: 'FuelCost',
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
          formatCurrency(row.original.FuelCost),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.FuelCost + sum,
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
        Cell: ({ row }: Cell<CashFlowGPO | CashFlowCHP>) =>
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
      {/* <table className='table'>
        <thead>
          <tr>
            <td>Year</td>
            {props.annualCashFlows.map((flow, index) => (
              <td>{index + 1}</td>
            ))}
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equity Recovery</td>
            {props.annualCashFlows.map(flow => (
              <td>{flow.EquityRecovery}</td>
            ))}
            <td>
              {props.annualCashFlows.reduce(
                (a, b) => a + b.EquityRecovery,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
