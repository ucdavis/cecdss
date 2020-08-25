import React from 'react';
import { formatNumber } from '../../Shared/util';
import {
  ExpensesBaseYearModGPO,
  ExpensesBaseYearModGP
} from '@ucdavis/tea/out/models/output.model';
import {
  ExpensesBaseYearInputModGPO,
  ExpensesBaseYearInputModGP
} from '@ucdavis/tea/out/models/input.model';
import {
  ExpensesBaseYearModGPOClass,
  ExpensesBaseYearInputModGPOClass
} from '../../../models/GPOClasses';
import {
  ExpensesBaseYearModGPClass,
  ExpensesBaseYearInputModGPClass
} from '../../../models/GPClasses';

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
            <td>{formatNumber(props.inputs.BiomassFuelCost, 4)}</td>
            {props.results instanceof ExpensesBaseYearModGPOClass && (
              <td>{formatNumber(props.results.FuelCostKwh)}</td>
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
                  <td>{formatNumber(props.inputs.BiomassFuelCost, 4)}</td>
                  <td>{formatNumber(props.results.BiomassFuelCostKwh, 4)}</td>
                </tr>
                <tr>
                  <td>Dual Fuel Cost ($/L)</td>
                  <td>{formatNumber(props.inputs.DualFuelCost, 4)}</td>
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
            <td>{formatNumber(props.results.MaintenanceCostKwh)}</td>
          </tr>
          {props.inputs instanceof ExpensesBaseYearInputModGPClass &&
            props.results instanceof ExpensesBaseYearModGPClass && (
              <>
                <tr>
                  <td>
                    Waste Treatment/Disposal ($/y)--for char/ash, see below
                  </td>
                  <td>{formatNumber(props.inputs.WasteTreatment)}</td>
                  <td>{formatNumber(props.results.WasteTreatmentKwh)}</td>
                </tr>
              </>
            )}
          <tr>
            <td>Insurance/Property Tax ($/year)</td>
            <td>{formatNumber(props.inputs.InsurancePropertyTax)}</td>
            <td>{formatNumber(props.results.InsurancePropertyTaxKwh)}</td>
          </tr>
          <tr>
            <td>Utilities ($/year)</td>
            <td>{formatNumber(props.inputs.Utilities)}</td>
            <td>{formatNumber(props.results.UtilitiesKwh)}</td>
          </tr>
          {props.inputs instanceof ExpensesBaseYearInputModGPOClass &&
            props.results instanceof ExpensesBaseYearModGPOClass && (
              <tr>
                <td>Ash Disposal ($/year)</td>
                <td>{formatNumber(props.inputs.AshDisposal)}</td>
                <td>{formatNumber(props.results.AshDisposalKwh)}</td>
              </tr>
            )}
          <tr>
            <td>Management/Administration ($/year)</td>
            <td>{formatNumber(props.inputs.Management)}</td>
            <td>{formatNumber(props.results.ManagementKwh)}</td>
          </tr>
          <tr>
            <td>Other Operating Expenses ($/year)</td>
            <td>{formatNumber(props.inputs.OtherOperatingExpenses)}</td>
            <td>{formatNumber(props.results.OtherOperatingExpensesKwh)}</td>
          </tr>
          <tr>
            <td>Total Non-Fuel Expenses ($/kWh)</td>
            <td>{formatNumber(props.results.TotalNonFuelExpenses)}</td>
            <td>{formatNumber(props.results.TotalNonFuelExpensesKwh)}</td>
          </tr>
          <tr>
            <td>Total Expenses Including Fuel ($/year)</td>
            <td>{formatNumber(props.results.TotalExpensesIncludingFuel)}</td>
            <td>{formatNumber(props.results.TotalExpensesIncludingFuelKwh)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
