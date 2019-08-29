import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { ElectricalFuelBaseYearMod } from '../../../models/TechnoeconomicOutputs';

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
            <td>Annual Ash Disposal</td>
            <td>{props.data.AnnualAshDisposal}</td>
          </tr>
          <tr>
            <td>Annual Fuel Consumption</td>
            <td>{props.data.AnnualFuelConsumption}</td>
          </tr>
          <tr>
            <td>Annual Generation</td>
            <td>{props.data.AnnualGeneration}</td>
          </tr>
          <tr>
            <td>Annual Hours</td>
            <td>{props.data.AnnualHours}</td>
          </tr>
          <tr>
            <td>Capital Cost NEC</td>
            <td>{props.data.CapitalCostNEC}</td>
          </tr>
          <tr>
            <td>Fuel Consumption Rate</td>
            <td>{props.data.FuelConsumptionRate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
