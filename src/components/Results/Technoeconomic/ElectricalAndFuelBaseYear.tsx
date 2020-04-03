import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { ElectricalFuelBaseYearMod } from '../../../models/TechnoeconomicOutputs';
import { formatNumber } from '../../Shared/util';

interface Props {
  data: ElectricalFuelBaseYearMod;
}

export const ElectricalAndFuelBaseYear = (props: Props) => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <td colSpan={2}>Electrical And Fuel Base Year</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Annual Ash Disposal (dry metric tons/year)</td>
            <td>{formatNumber(props.data.AnnualAshDisposal)}</td>
          </tr>
          <tr>
            <td>Annual Fuel Consumption (dry metric tons/year)</td>
            <td>{formatNumber(props.data.AnnualFuelConsumption)}</td>
          </tr>
          <tr>
            <td>Annual Generation (kWh)</td>
            <td>{formatNumber(props.data.AnnualGeneration)}</td>
          </tr>
          <tr>
            <td>Annual Hours</td>
            <td>{formatNumber(props.data.AnnualHours)}</td>
          </tr>
          <tr>
            <td>Capital Cost NEC ($/kWe)</td>
            <td>{formatNumber(props.data.CapitalCostNEC)}</td>
          </tr>
          <tr>
            <td>Fuel Consumption Rate (dry metric tons/hour)</td>
            <td>{formatNumber(props.data.FuelConsumptionRate)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
