import React from 'react';
import { formatCurrency, formatNumber } from '../../Shared/util';
import { YearlyResult } from '../../../models/Types';
import { Table } from 'reactstrap';
import { CashFlow } from '@ucdavis/tea/output.model';

interface Props {
  yearlyResults: YearlyResult[];
  cashFlows: CashFlow[];
  system: String;
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
            <td key={`year-${i}`}>{i + 1}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Harvest Cost</td>
          <td>$/BDMT</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.harvestCostPerDryTon,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`totalHarvestCost-${i}`}>
              {formatCurrency(result.harvestCostPerDryTon)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Transport Cost</td>
          <td>$/BDMT</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.transportationCostPerDryTon,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`totalTransportationCost-${i}`}>
              {formatCurrency(result.transportationCostPerDryTon)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Move-in Cost</td>
          <td>$/BDMT</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.moveInCostPerDryTon,
                0
              ) / props.yearlyResults.length,
              3
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`totalMoveInCost-${i}`}>
              {formatCurrency(result.moveInCostPerDryTon, 3)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Feedstock Cost</td>
          <td>$/BDMT</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.feedstockCostPerTon,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`fuelCost-${i}`}>
              {formatCurrency(result.feedstockCostPerTon)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`equityRecovery-${i}`}>
              {formatCurrency(result.EquityRecovery)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`equityInterest-${i}`}>
              {formatCurrency(result.EquityInterest)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`equityPrincipalPaid-${i}`}>
              {formatCurrency(result.EquityPrincipalPaid)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`equityPrincipalRemaining-${i}`}>
              {formatCurrency(result.EquityPrincipalRemaining)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`debtRecovery-${i}`}>
              {formatCurrency(result.DebtRecovery)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`debtInterest-${i}`}>
              {formatCurrency(result.DebtInterest)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`debtPrinciaplPaid-${i}`}>
              {formatCurrency(result.DebtPrincipalPaid)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`debtPrincipalRemaining-${i}`}>
              {formatCurrency(result.DebtPrincipalRemaining)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Feedstock Cost</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.cashFlow.BiomassFuelCost,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`biomassFuelCost-${i}`}>
              {formatCurrency(result.cashFlow.BiomassFuelCost)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`nonFuelExpenses-${i}`}>
              {formatCurrency(result.NonFuelExpenses)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`debtReserve-${i}`}>
              {formatCurrency(result.DebtReserve)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`depreciation-${i}`}>
              {formatCurrency(result.Depreciation)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`incomeCapacity-${i}`}>
              {formatCurrency(result.IncomeCapacity)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`interestOnDebtReserve-${i}`}>
              {formatCurrency(result.InterestOnDebtReserve)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`incomeCapacity-${i}`}>
              {formatCurrency(result.IncomeCapacity)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`interestonDebtReserve-${i}`}>
              {formatCurrency(result.InterestOnDebtReserve)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`texesWOCredit-${i}`}>
              {formatCurrency(result.TaxesWoCredit)}
            </td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`taxCredit-${i}`}>{formatCurrency(result.TaxCredit)}</td>
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
          {props.cashFlows.map((result, i) => (
            <td key={`taxes-${i}`}>{formatCurrency(result.Taxes)}</td>
          ))}
        </tr>
        <tr>
          <td>Energy Revenue Required</td>
          <td>$</td>
          <td>
            {formatCurrency(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.cashFlow.EnergyRevenueRequired,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`energyRevenueRequired-${i}`}>
              {formatCurrency(result.cashFlow.EnergyRevenueRequired)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Current LCOE</td>
          <td>$/MWh</td>
          <td>
            {formatCurrency(
              (props.yearlyResults.reduce((sum, x) => sum + x.currentLCOE, 0) /
                props.yearlyResults.length) *
                1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`currentLCOE-${i}`}>
              {formatCurrency(result.currentLCOE * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Constant LCOE</td>
          <td>$/MWh</td>
          <td>
            {formatCurrency(
              (props.yearlyResults.reduce((sum, x) => sum + x.constantLCOE, 0) /
                props.yearlyResults.length) *
                1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`constantLCOE-${i}`}>
              {formatCurrency(result.constantLCOE * 1000)}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
