import React from 'react';
import { formatNumber } from '../../../Shared/util';
import {
  ExpensesBaseYearModGPO,
  ExpensesBaseYearModGP
} from '@ucdavis/tea/output.model';
import {
  ExpensesBaseYearInputModGPO,
  ExpensesBaseYearInputModGP
} from '@ucdavis/tea/input.model';
import {
  ExpensesBaseYearModGPOClass,
  ExpensesBaseYearInputModGPOClass
} from '../../../../Models/GPOClasses';
import {
  ExpensesBaseYearModGPClass,
  ExpensesBaseYearInputModGPClass
} from '../../../../Models/GPClasses';

interface Props {
  results: ExpensesBaseYearModGPO | ExpensesBaseYearModGP;
  inputs: ExpensesBaseYearInputModGPO | ExpensesBaseYearInputModGP;
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
            <td>{formatNumber(props.inputs.BiomassFuelCost)}</td>
            {props.results instanceof ExpensesBaseYearModGPOClass && (
              <td>{formatNumber(props.results.FuelCostKwh, 4)}</td>
            )}
            {props.results instanceof ExpensesBaseYearModGPClass && (
              <td>{formatNumber(props.results.BiomassFuelCostKwh, 4)}</td>
            )}
          </tr>
          {props.inputs instanceof ExpensesBaseYearInputModGPClass &&
            props.results instanceof ExpensesBaseYearModGPClass && (
              <>
                <tr>
                  <td>
                    Biomass Fuel Cost ($/t)--use negative value for tipping fee
                  </td>
                  <td>{formatNumber(props.inputs.BiomassFuelCost)}</td>
                  <td>{formatNumber(props.results.BiomassFuelCostKwh, 4)}</td>
                </tr>
                <tr>
                  <td>Dual Fuel Cost ($/L)</td>
                  <td>{formatNumber(props.inputs.DualFuelCost)}</td>
                  <td>{formatNumber(props.results.DualFuelCostKwh, 4)}</td>
                </tr>
              </>
            )}
          <tr>
            <td>Labor Cost ($/year)</td>
            <td>{formatNumber(props.inputs.LaborCost, 4)}</td>
            <td>{formatNumber(props.results.LaborCostKwh, 4)}</td>
          </tr>
          <tr>
            <td>Maintenance Cost ($/year)</td>
            <td>{formatNumber(props.inputs.MaintenanceCost)}</td>
            <td>{formatNumber(props.results.MaintenanceCostKwh, 4)}</td>
          </tr>
          {props.inputs instanceof ExpensesBaseYearInputModGPClass &&
            props.results instanceof ExpensesBaseYearModGPClass && (
              <>
                <tr>
                  <td>
                    Waste Treatment/Disposal ($/y)--for char/ash, see below
                  </td>
                  <td>{formatNumber(props.inputs.WasteTreatment)}</td>
                  <td>{formatNumber(props.results.WasteTreatmentKwh, 4)}</td>
                </tr>
              </>
            )}
          <tr>
            <td>Insurance/Property Tax ($/year)</td>
            <td>{formatNumber(props.inputs.InsurancePropertyTax)}</td>
            <td>{formatNumber(props.results.InsurancePropertyTaxKwh, 4)}</td>
          </tr>
          <tr>
            <td>Utilities ($/year)</td>
            <td>{formatNumber(props.inputs.Utilities)}</td>
            <td>{formatNumber(props.results.UtilitiesKwh, 4)}</td>
          </tr>
          {props.inputs instanceof ExpensesBaseYearInputModGPOClass &&
            props.results instanceof ExpensesBaseYearModGPOClass && (
              <tr>
                <td>Ash Disposal ($/year)</td>
                <td>{formatNumber(props.inputs.AshDisposal)}</td>
                <td>{formatNumber(props.results.AshDisposalKwh, 4)}</td>
              </tr>
            )}
          <tr>
            <td>Management/Administration ($/year)</td>
            <td>{formatNumber(props.inputs.Management)}</td>
            <td>{formatNumber(props.results.ManagementKwh, 4)}</td>
          </tr>
          <tr>
            <td>Other Operating Expenses ($/year)</td>
            <td>{formatNumber(props.inputs.OtherOperatingExpenses)}</td>
            <td>{formatNumber(props.results.OtherOperatingExpensesKwh, 4)}</td>
          </tr>
          <tr>
            <td>Total Non-Fuel Expenses ($/Kwh, 4)</td>
            <td>{formatNumber(props.results.TotalNonFuelExpenses)}</td>
            <td>{formatNumber(props.results.TotalNonFuelExpensesKwh, 4)}</td>
          </tr>
          <tr>
            <td>Total Expenses Including Fuel ($/year)</td>
            <td>{formatNumber(props.results.TotalExpensesIncludingFuel)}</td>
            <td>
              {formatNumber(props.results.TotalExpensesIncludingFuelKwh, 4)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
