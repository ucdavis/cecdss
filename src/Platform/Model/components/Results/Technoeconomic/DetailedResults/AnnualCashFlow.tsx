import React from 'react';
import { formatNumber, formatCurrency } from '../../../Shared/util';
import {
  CashFlow,
  CashFlowCHP,
  CashFlowGP
} from '@ucdavis/tea/output.model';

interface Props {
  teaModel: string;
  annualCashFlow: CashFlow | CashFlowCHP | CashFlowGP;
}

export const AnnualCashFlow = (props: Props) => {
  return (
    <div>
      <h3>Cash Flow</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Equity Recovery</td>
            <td>{formatCurrency(props.annualCashFlow.EquityRecovery)}</td>
          </tr>
          <tr>
            <td>Equity Interest</td>
            <td>{formatCurrency(props.annualCashFlow.EquityInterest)}</td>
          </tr>
          <tr>
            <td>Equity Principal Paid</td>
            <td>{formatCurrency(props.annualCashFlow.EquityPrincipalPaid)}</td>
          </tr>
          <tr>
            <td>Equity Principal Remaining</td>
            <td>
              {formatCurrency(props.annualCashFlow.EquityPrincipalRemaining)}
            </td>
          </tr>
          <tr>
            <td>Debt Recovery</td>
            <td>{formatCurrency(props.annualCashFlow.DebtRecovery)}</td>
          </tr>
          <tr>
            <td>Debt Interest</td>
            <td>{formatCurrency(props.annualCashFlow.DebtInterest)}</td>
          </tr>
          <tr>
            <td>Debt Principal Paid</td>
            <td>{formatCurrency(props.annualCashFlow.DebtPrincipalPaid)}</td>
          </tr>
          <tr>
            <td>Debt Principal Remaining</td>
            <td>
              {formatCurrency(props.annualCashFlow.DebtPrincipalRemaining)}
            </td>
          </tr>
          {renderCashFlowTeaModel(props.teaModel, props.annualCashFlow)}
          <tr>
            <td>Non Fuel Expenses</td>
            <td>{formatCurrency(props.annualCashFlow.NonFuelExpenses)}</td>
          </tr>
          <tr>
            <td>Debt Reserve</td>
            <td>{formatCurrency(props.annualCashFlow.DebtReserve)}</td>
          </tr>
          <tr>
            <td>Depreciation</td>
            <td>{formatCurrency(props.annualCashFlow.Depreciation)}</td>
          </tr>
          <tr>
            <td>Income Capacity</td>
            <td>{formatCurrency(props.annualCashFlow.IncomeCapacity)}</td>
          </tr>
          <tr>
            <td>Interest On Debt Reserve</td>
            <td>
              {formatCurrency(props.annualCashFlow.InterestOnDebtReserve)}
            </td>
          </tr>
          <tr>
            <td>Taxes Without Credit</td>
            <td>{formatCurrency(props.annualCashFlow.TaxesWoCredit)}</td>
          </tr>
          <tr>
            <td>Tax Credit</td>
            <td>{formatCurrency(props.annualCashFlow.TaxCredit)}</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td>{formatCurrency(props.annualCashFlow.Taxes)}</td>
          </tr>
          <tr>
            <td>Energy Revenue Required</td>
            <td>
              {formatCurrency(props.annualCashFlow.EnergyRevenueRequired)}
            </td>
          </tr>
          <tr>
            <td>EnergyRevenueRequired</td>
            <td>
              {formatCurrency(props.annualCashFlow.EnergyRevenueRequired)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const renderCashFlowTeaModel = (teaModel: string, cashflow: any) => {
  if (teaModel === 'GPO') {
    return (
      <tr>
        <td>FuelCost</td>
        <td>{formatCurrency(cashflow.FuelCost)}</td>
      </tr>
    );
  }

  if (teaModel === 'CHP') {
    return (
      <>
        <tr>
          <td>Fuel Cost</td>
          <td>{formatCurrency(cashflow.FuelCost)}</td>
        </tr>
        <tr>
          <td>Income Heat</td>
          <td>{formatCurrency(cashflow.IncomeHeat)}</td>
        </tr>
      </>
    );
  }

  if (teaModel === 'GP') {
    return (
      <>
        <tr>
          <td>Biomass Fuel Cost</td>
          <td>{formatCurrency(cashflow.BiomassFuelCost)}</td>
        </tr>
        <tr>
          <td>Dual Fuel Cost</td>
          <td>{formatCurrency(cashflow.DualFuelCost)}</td>
        </tr>
        <tr>
          <td>Income Heat</td>
          <td>{formatCurrency(cashflow.IncomeHeat)}</td>
        </tr>
        <tr>
          <td>Income Char</td>
          <td>{formatCurrency(cashflow.IncomeChar)}</td>
        </tr>
      </>
    );
  }
};
