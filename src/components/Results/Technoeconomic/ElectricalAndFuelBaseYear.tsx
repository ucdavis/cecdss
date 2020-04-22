import React from 'react';
import { formatNumber } from '../../Shared/util';
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';
import {
  ElectricalFuelBaseYearMod,
  ElectricalFuelBaseYearModCHP
} from '@ucdavis/tea/out/models/output.model';
import {
  InputModCHPClass,
  ElectricalFuelBaseYearModCHPClass
} from '../../../models/CHPClasses';

interface Props {
  results: ElectricalFuelBaseYearMod | ElectricalFuelBaseYearModCHP;
  inputs: InputModGPO | InputModCHP;
}

export const ElectricalAndFuelBaseYear = (props: Props) => {
  return (
    <div>
      <h3>Electrical And Fuel Base Year</h3>
      <table className='table'>
        <tbody>
          {props.inputs instanceof InputModCHPClass && (
            <tr>
              <td>Gross Electrical Capacity (kWe)</td>
              <td>{formatNumber(props.inputs.GrossElectricalCapacity)}</td>
            </tr>
          )}
          <tr>
            <td>Net Plant Capacity (kW)</td>
            <td>{formatNumber(props.inputs.NetElectricalCapacity)}</td>
          </tr>
          {props.results instanceof ElectricalFuelBaseYearModCHPClass && (
            <tr>
              <td>Parasitic Load (kWe)</td>
              <td>{formatNumber(props.results.ParasiticLoad)}</td>
            </tr>
          )}
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
          {props.results instanceof ElectricalFuelBaseYearModCHPClass && (
            <>
              <tr>
                <td>Fuel Power (kW)</td>
                <td>{formatNumber(props.results.FuelPower)}</td>
              </tr>
              <tr>
                <td>Gross Station Electrical Efficiency (%)</td>
                <td>
                  {formatNumber(props.results.GrossStationElectricalEfficiency)}
                </td>
              </tr>
            </>
          )}
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
