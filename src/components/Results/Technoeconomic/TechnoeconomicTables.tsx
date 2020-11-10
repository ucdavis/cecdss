import React from 'react';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { AllYearsResults, YearlyResult } from '../../../models/Types';
import { Table } from 'reactstrap';
import { CashFlow } from '@ucdavis/tea/out/models/output.model';

interface Props {
  yearlyResults: YearlyResult[];
  cashFlows: CashFlow[];
  presentWorth: number[];
}

export const TechnoeconomicTables = (props: Props) => {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th rowSpan={2}>Technoeconomic Analysis</th>
          <td rowSpan={2}>Unit</td>
          <td rowSpan={2}>Total</td>
          <td colSpan={props.yearlyResults.length}>Year</td>
        </tr>
        <tr>
          {props.yearlyResults.map((x, i) => (
            <td>{i + 1}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Harvest cost</td>
          <td>$/ton</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalFeedstockCost,
                0
              ) /
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalFeedstock,
                  0
                )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatCurrency(
                result.totalFeedstockCost / result.totalFeedstock
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Transport cost</td>
          <td>$/ton</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalTransportationCost,
                0
              ) /
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalFeedstock,
                  0
                )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatCurrency(
                result.totalTransportationCost / result.totalFeedstock
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Move-in cost</td>
          <td>$/ton</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalMoveInCost,
                0
              ) /
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalFeedstock,
                  0
                )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatCurrency(result.totalMoveInCost / result.totalFeedstock)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Feedstock cost</td>
          <td>$/ton</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce((sum, x) => sum + x.fuelCost, 0) /
                props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatCurrency(result.fuelCost)}</td>
          ))}
        </tr>
        <tr>
          <td>Equity Recovery</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.EquityRecovery,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.EquityRecovery)}</td>
          ))}
        </tr>
        <tr>
          <td>Equity Interest</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.EquityInterest,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.EquityInterest)}</td>
          ))}
        </tr>
        <tr>
          <td>Equity Principal Paid</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.EquityPrincipalPaid,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.EquityPrincipalPaid)}</td>
          ))}
        </tr>
        <tr>
          <td>Equity Principal Remaining</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.EquityPrincipalRemaining,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.EquityPrincipalRemaining)}</td>
          ))}
        </tr>
        <tr>
          <td>Debt Recovery</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.DebtRecovery,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.DebtRecovery)}</td>
          ))}
        </tr>
        <tr>
          <td>Debt Interest</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.DebtInterest,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.DebtInterest)}</td>
          ))}
        </tr>
        <tr>
          <td>Debt Principal Paid</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.DebtPrincipalPaid,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.DebtPrincipalPaid)}</td>
          ))}
        </tr>
        <tr>
          <td>Debt Principal Remaining</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.DebtPrincipalRemaining,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.DebtPrincipalRemaining)}</td>
          ))}
        </tr>
        <tr>
          <td>Feedstock Cost</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.BiomassFuelCost,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.BiomassFuelCost)}</td>
          ))}
        </tr>
        <tr>
          <td>Non-fuel Expenses</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.NonFuelExpenses,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.NonFuelExpenses)}</td>
          ))}
        </tr>
        <tr>
          <td>Debt Reserve</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.DebtReserve,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.DebtReserve)}</td>
          ))}
        </tr>
        <tr>
          <td>Depreciation</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.Depreciation,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.Depreciation)}</td>
          ))}
        </tr>
        <tr>
          <td>Income Capacity</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.IncomeCapacity,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.IncomeCapacity)}</td>
          ))}
        </tr>
        <tr>
          <td>Interest On Debt Reserve</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.InterestOnDebtReserve,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.InterestOnDebtReserve)}</td>
          ))}
        </tr>
        <tr>
          <td>Income -- Capacity</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.IncomeCapacity,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.IncomeCapacity)}</td>
          ))}
        </tr>
        <tr>
          <td>Interest On Debt Reserve</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.InterestOnDebtReserve,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.InterestOnDebtReserve)}</td>
          ))}
        </tr>
        <tr>
          <td>Taxes w/o Credit</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.TaxesWoCredit,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.TaxesWoCredit)}</td>
          ))}
        </tr>
        <tr>
          <td>Tax Credit</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.TaxCredit,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.TaxCredit)}</td>
          ))}
        </tr>
        <tr>
          <td>Taxes</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.Taxes,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.Taxes)}</td>
          ))}
        </tr>
        <tr>
          <td>Energy Revenue Required</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.cashFlows.reduce(
                (sum: number, x: CashFlow) => sum + x.EnergyRevenueRequired,
                0
              )
            )}
          </td>
          {props.cashFlows.map(result => (
            <td>{formatCurrency(result.EnergyRevenueRequired)}</td>
          ))}
        </tr>
        <tr>
          <td>Present Worth</td>
          <td>$</td>
          <td>
            {formatCurrency(props.presentWorth.reduce((sum, x) => sum + x, 0))}
          </td>
          {props.presentWorth.map(result => (
            <td>{formatCurrency(result)}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
