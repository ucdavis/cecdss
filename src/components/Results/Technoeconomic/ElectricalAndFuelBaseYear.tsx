import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import {
  ElectricalFuelBaseYearMod,
  OutputModGPO
} from '../../../models/TechnoeconomicOutputs';
import { formatNumber } from '../../Shared/util';
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  results: ElectricalFuelBaseYearMod;
  inputs: GenericPowerOnlyInputMod;
}

export const ElectricalAndFuelBaseYear = (props: Props) => {
  return (
    <div>
      <h3>Electrical And Fuel Base Year</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Net Plant Capacity (kW)</td>
            <td>{formatNumber(props.inputs.NetElectricalCapacity)}</td>
          </tr>
          <tr>
            <td>Capacity Factor</td>
            <td>{formatNumber(props.inputs.CapacityFactor)}</td>
          </tr>
          <tr>
            <td>Annual Hours</td>
            <td>{formatNumber(props.results.AnnualHours)}</td>
          </tr>
          <tr>
            <td>Net Station Efficiency (%)</td>
            <td>{formatNumber(props.inputs.NetStationEfficiency)}</td>
          </tr>
          <tr>
            <td>Fuel Heating Value</td>
            <td>{formatNumber(props.inputs.FuelHeatingValue)}</td>
          </tr>
          <tr>
            <td>Fuel Consumption Rate (dry metric tons/hour)</td>
            <td>{formatNumber(props.results.FuelConsumptionRate)}</td>
          </tr>
          <tr>
            <td>Fuel Ash Concetration (%)</td>
            <td>{formatNumber(props.inputs.FuelAshConcentration)}</td>
          </tr>
          <tr>
            <td>Annual Generation (kWh)</td>
            <td>{formatNumber(props.results.AnnualGeneration)}</td>
          </tr>
          <tr>
            <td>Capital Cost per Net Electrical Capacity ($/kWe)</td>
            <td>{formatNumber(props.results.CapitalCostNEC)}</td>
          </tr>
          <tr>
            <td>Annual Fuel Consumption (dry metric tons/year)</td>
            <td>{formatNumber(props.results.AnnualFuelConsumption)}</td>
          </tr>
          <tr>
            <td>Annual Ash Disposal (dry metric tons/year)</td>
            <td>{formatNumber(props.results.AnnualAshDisposal)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
