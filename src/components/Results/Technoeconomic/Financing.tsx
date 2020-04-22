import React from 'react';
import { formatNumber, formatCurrency } from '../../Shared/util';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { FinancingMod } from '@ucdavis/tea/out/models/output.model';

interface Props {
  inputs: InputModGPO | InputModCHP | InputModGP;
  results: FinancingMod;
}

export const Financing = (props: Props) => {
  return (
    <div>
      <h3>Financing</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Debt Ratio (%)</td>
            <td>{formatNumber(props.inputs.DebtRatio)}</td>
          </tr>
          <tr>
            <td>Equity Ratio (%)</td>
            <td>{formatNumber(props.results.EquityRatio)}</td>
          </tr>
          <tr>
            <td>Interest Rate on Debt (%/y)</td>
            <td>{formatNumber(props.inputs.InterestRateOnDebt)}</td>
          </tr>
          <tr>
            <td>Economic Life (y)</td>
            <td>{formatNumber(props.inputs.EconomicLife)}</td>
          </tr>
          <tr>
            <td>Cost of Equity (%/y)</td>
            <td>{formatNumber(props.inputs.CostOfEquity)}</td>
          </tr>
          <tr>
            <td>Cost of Money (%/y)</td>
            <td>{formatNumber(props.results.CostOfMoney)}</td>
          </tr>
          <tr>
            <td>Total Cost of Plant ($)</td>
            <td>{formatCurrency(props.results.TotalCostOfPlant)}</td>
          </tr>
          <tr>
            <td>Total Equity Cost ($)</td>
            <td>{formatCurrency(props.results.TotalEquityCost)}</td>
          </tr>
          <tr>
            <td>Total Debt Cost ($)</td>
            <td>{formatCurrency(props.results.TotalDebtCost)}</td>
          </tr>
          <tr>
            <td>Capital Recovery Factor (Equity)</td>
            <td>{formatNumber(props.results.CapitalRecoveryFactorEquity)}</td>
          </tr>
          <tr>
            <td>Capital Recovery Factor (Debt)</td>
            <td>{formatNumber(props.results.CapitalRecoveryFactorDebt)}</td>
          </tr>
          <tr>
            <td>Annual Equity Recovery ($/y)</td>
            <td>{formatNumber(props.results.AnnualEquityRecovery)}</td>
          </tr>
          <tr>
            <td>Annual Debt Payment ($/y)</td>
            <td>{formatNumber(props.results.AnnualDebtPayment)}</td>
          </tr>
          <tr>
            <td>Debt Reserve ($)</td>
            <td>{formatCurrency(props.results.DebtReserve)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
