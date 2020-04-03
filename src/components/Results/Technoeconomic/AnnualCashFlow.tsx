import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { CashFlowGPO } from '../../../models/TechnoeconomicOutputs';
import { ReactTable } from '../../Shared/ReactTable';
import { Cell } from 'react-table';
import { formatCurrency } from '../../Shared/util';

interface Props {
  annualCashFlows: CashFlowGPO[];
}

export const AnnualCashFlow = (props: Props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Year', accessor: 'Shared.Year' },
      {
        Header: 'Equity Recovery',
        accessor: 'Shared.EquityRecovery',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.EquityRecovery),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.EquityRecovery + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Equity Interest',
        accessor: 'Shared.EquityInterest',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.EquityInterest),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.EquityInterest + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Equity Principal Paid',
        accessor: 'Shared.EquityPrincipalPaid',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.EquityPrincipalPaid),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.EquityPrincipalPaid + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Equity Principal Remaining',
        accessor: 'Shared.EquityPrincipalRemaining',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.EquityPrincipalRemaining),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.EquityPrincipalRemaining + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Recovery',
        accessor: 'Shared.DebtRecovery',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.DebtRecovery),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.DebtRecovery + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Interest',
        accessor: 'Shared.DebtInterest',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.DebtInterest),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.DebtInterest + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'DebtPrincipalPaid',
        accessor: 'Shared.DebtPrincipalPaid',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.DebtPrincipalPaid),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.DebtPrincipalPaid + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Principal Remaining',
        accessor: 'Shared.DebtPrincipalRemaining',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.DebtPrincipalRemaining),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.DebtPrincipalRemaining + sum,
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
        Cell: ({ row }: Cell<CashFlowGPO>) =>
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
        accessor: 'Shared.NonFuelExpenses',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.NonFuelExpenses),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.NonFuelExpenses + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Debt Reserve',
        accessor: 'Shared.DebtReserve',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.DebtReserve),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.DebtReserve + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Depreciation',
        accessor: 'Shared.Depreciation',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.Depreciation),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.Depreciation + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'IncomeCapacity',
        accessor: 'Shared.IncomeCapacity',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.IncomeCapacity),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.IncomeCapacity + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Interest On Debt Reserve',
        accessor: 'Shared.InterestOnDebtReserve',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.InterestOnDebtReserve),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.InterestOnDebtReserve + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Taxes Without Credit',
        accessor: 'Shared.TaxesWoCredit',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.TaxesWoCredit),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.TaxesWoCredit + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Tax Credit',
        accessor: 'Shared.TaxCredit',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.TaxCredit),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.Shared.TaxCredit + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Taxes',
        accessor: 'Shared.Taxes',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.Taxes),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => row.original.Shared.Taxes + sum,
                0
              ),
            [info.rows]
          );
          return <>Total: {formatCurrency(total)}</>;
        }
      },
      {
        Header: 'Energy Revenue Required',
        accessor: 'Shared.EnergyRevenueRequired',
        Cell: ({ row }: Cell<CashFlowGPO>) =>
          formatCurrency(row.original.Shared.EnergyRevenueRequired),
        Footer: (info: any) => {
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) =>
                  row.original.Shared.EnergyRevenueRequired + sum,
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
      <h2>Annual Cash Flow</h2>
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
              <td>{flow.Shared.EquityRecovery}</td>
            ))}
            <td>
              {props.annualCashFlows.reduce(
                (a, b) => a + b.Shared.EquityRecovery,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
