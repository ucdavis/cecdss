import React from 'react';
import { ExpensesBaseYearModGPO } from '../../../models/TechnoeconomicOutputs';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  results: ExpensesBaseYearModGPO;
  inputs: GenericPowerOnlyInputMod;
}

export const ExpensesBaseYear = (props: Props) => {
  return (
    <div>
      <h3>Expenses Base Year</h3>
      <table className='table'>
        <thead>
          <tr>
            <td colSpan={2}></td>
            <td>($/kWh-net electrical)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fuel Cost ($/dry metric tons</td>
            <td>{formatCurrency(props.inputs.FuelCost)}</td>
            <td>{formatNumber(props.results.FuelCostKwh)}</td>
          </tr>
          <tr>
            <td>Labor Cost ($/year)</td>
            <td>{formatCurrency(props.inputs.LaborCost)}</td>
            <td>{formatNumber(props.results.Shared.LaborCostKwh)}</td>
          </tr>
          <tr>
            <td>Maintenance Cost ($/year)</td>
            <td>{formatCurrency(props.inputs.MaintenanceCost)}</td>
            <td>{formatNumber(props.results.Shared.MaintenanceCostKwh)}</td>
          </tr>
          <tr>
            <td>Insurance/Property Tax ($/year)</td>
            <td>{formatCurrency(props.inputs.InsurancePropertyTax)}</td>
            <td>
              {formatNumber(props.results.Shared.InsurancePropertyTaxKwh)}
            </td>
          </tr>
          <tr>
            <td>Utilities ($/year)</td>
            <td>{formatCurrency(props.inputs.Utilities)}</td>
            <td>{formatNumber(props.results.Shared.UtilitiesKwh)}</td>
          </tr>
          <tr>
            <td>Ash Disposal ($/year)</td>
            <td>{formatCurrency(props.inputs.AshDisposal)}</td>
            <td>{formatNumber(props.results.AshDisposalKwh)}</td>
          </tr>
          <tr>
            <td>Management/Administration ($/year)</td>
            <td>{formatCurrency(props.inputs.Management)}</td>
            <td>{formatNumber(props.results.Shared.ManagementKwh)}</td>
          </tr>
          <tr>
            <td>Other Operating Expenses ($/year)</td>
            <td>{formatCurrency(props.inputs.OtherOperatingExpenses)}</td>
            <td>
              {formatNumber(props.results.Shared.OtherOperatingExpensesKwh)}
            </td>
          </tr>
          <tr>
            <td>Total Non-Fuel Expenses ($/kWh)</td>
            <td>{formatCurrency(props.results.Shared.TotalNonFuelExpenses)}</td>
            <td>
              {formatNumber(props.results.Shared.TotalNonFuelExpensesKwh)}
            </td>
          </tr>
          <tr>
            <td>Total Expenses Including Fuel ($/year)</td>
            <td>
              {formatCurrency(props.results.Shared.TotalExpensesIncludingFuel)}
            </td>
            <td>
              {formatNumber(props.results.Shared.TotalExpensesIncludingFuelKwh)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};