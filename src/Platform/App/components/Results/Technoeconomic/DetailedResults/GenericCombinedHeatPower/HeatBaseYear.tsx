import React from 'react';
import { formatNumber } from '../../../../Utils/util';
import {
  InputModCHP,
  InputModGP,
  HeatBaseYearInputMod
} from '@ucdavis/tea/input.model';
import { HeatBaseYearMod } from '@ucdavis/tea/output.model';

interface Props {
  results: HeatBaseYearMod;
  inputs: HeatBaseYearInputMod;
}

export const HeatBaseYear = (props: Props) => {
  return (
    <div>
      <h3>Heat Base Year</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Total Heat Production Rate (kWth)</td>
            <td>{formatNumber(props.results.TotalHeatProductionRate)}</td>
          </tr>
          <tr>
            <td>Aggregate fraction of heat recovered (%)</td>
            <td>
              {formatNumber(props.inputs.AggregateFractionOfHeatRecovered)}
            </td>
          </tr>
          <tr>
            <td>Recovered heat (kWth)</td>
            <td>{formatNumber(props.results.RecoveredHeat)}</td>
          </tr>
          <tr>
            <td>Annual heat sales (kWh/y)</td>
            <td>{formatNumber(props.results.AnnualHeatSales)}</td>
          </tr>
          <tr>
            <td>Aggregate sales price for heat ($/kWh)</td>
            <td>{formatNumber(props.inputs.AggregateSalesPriceForHeat)}</td>
          </tr>
          <tr>
            <td>Total income from heat sales ($/y)</td>
            <td>{formatNumber(props.results.TotalIncomeFromHeatSales)}</td>
          </tr>
          <tr>
            <td>Heat income per unit net electrical energy ($/kWh-net)</td>
            <td>{formatNumber(props.results.HeatIncomePerUnitNEE)}</td>
          </tr>
          <tr>
            <td>Overall CHP Efficiency--Gross (%)</td>
            <td>{formatNumber(props.results.OverallCHPefficiencyGross)}</td>
          </tr>
          <tr>
            <td>Overall CHP Efficiency--Net (%)</td>
            <td>{formatNumber(props.results.OverallCHPefficiencyNet)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
