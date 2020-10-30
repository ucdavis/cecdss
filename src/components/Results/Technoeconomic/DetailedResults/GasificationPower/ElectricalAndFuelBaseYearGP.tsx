import React from 'react';
import { formatNumber } from '../../../../Shared/util';
import { ElectricalFuelBaseYearModGP } from '@ucdavis/tea/out/models/output.model';
import { ElectricalFuelBaseYearInputModGP } from '@ucdavis/tea/out/models/input.model';

interface Props {
  results: ElectricalFuelBaseYearModGP;
  inputs: ElectricalFuelBaseYearInputModGP;
}

export const ElectricalAndFuelBaseYearGP = (props: Props) => {
  return (
    <div>
      <h3>Electrical And Fuel Base Year</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Gross Electrical Capacity (kWe)</td>
            <td>{formatNumber(props.inputs.GrossElectricalCapacity)}</td>
          </tr>
          <tr>
            <td>Net Electrical Capacity (kWe)</td>
            <td>{formatNumber(props.inputs.NetElectricalCapacity)}</td>
          </tr>
          <tr>
            <td>Parasitic Load (kWe)</td>
            <td>{formatNumber(props.results.ParasiticLoad)}</td>
          </tr>
          <tr>
            <td>Capacity Factor (%)</td>
            <td>{formatNumber(props.inputs.CapacityFactor)}</td>
          </tr>
          <tr>
            <td>Annual Hours</td>
            <td>{formatNumber(props.results.AnnualHours)}</td>
          </tr>
          <tr>
            <td>Annual Net Electricity Generation (kWh)</td>
            <td>{formatNumber(props.results.AnnualGeneration)}</td>
          </tr>
          <tr>
            <td>
              HHV Efficiency of Gasification System--Biomass to Clean Gas (%)
            </td>
            <td>{formatNumber(props.inputs.HHVEfficiency)}</td>
          </tr>
          <tr>
            <td>Net HHV Efficiency of Power Generation incl. Dual Fuel (%)</td>
            <td>{formatNumber(props.inputs.NetHHVEfficiency)}</td>
          </tr>
          <tr>
            <td>Overall Net System Efficiency (%)</td>
            <td>{formatNumber(props.results.OverallNetSystemEfficiency)}</td>
          </tr>
          <tr>
            <td>Dual Fuel: Fraction of Input Energy (%)</td>
            <td>{formatNumber(props.inputs.FractionOfInputEnergy)}</td>
          </tr>
          <tr>
            <td>CO</td>
            <td>{formatNumber(props.inputs.CO)}</td>
          </tr>
          <tr>
            <td>H2</td>
            <td>{formatNumber(props.inputs.H2)}</td>
          </tr>
          <tr>
            <td>Hydrocarbons (as CH4)</td>
            <td>{formatNumber(props.inputs.Hydrocarbons)}</td>
          </tr>
          <tr>
            <td>CO2</td>
            <td>{formatNumber(props.inputs.CO2)}</td>
          </tr>
          <tr>
            <td>O2</td>
            <td>{formatNumber(props.inputs.O2)}</td>
          </tr>
          <tr>
            <td>N2</td>
            <td>{formatNumber(props.results.NitrogenGas)}</td>
          </tr>
          <tr>
            <td>Clean Gas Molecular Mass (kg/kmol)</td>
            <td>{formatNumber(props.results.CleanGasMolecularMass)}</td>
          </tr>
          <tr>
            <td>Clean Gas Density 298K, 1 atm (kg/m3)</td>
            <td>{formatNumber(props.results.CleanGasDensity)}</td>
          </tr>
          <tr>
            <td>Clean Gas Higher Heating Value (kJ/m3)</td>
            <td>{formatNumber(props.results.CleanGasHigherHeatingValue)}</td>
          </tr>
          <tr>
            <td>Clean Gas Lower Heating Value (MJ/m3)</td>
            <td>{formatNumber(props.results.CleanGasLowerHeatingValue)}</td>
          </tr>
          <tr>
            <td>Total Fuel Power Input (kW)</td>
            <td>{formatNumber(props.results.TotalFuelPowerInput)}</td>
          </tr>
          <tr>
            <td>Clean Gas Power Input (kW)</td>
            <td>{formatNumber(props.results.CleanGasPowerInput)}</td>
          </tr>
          <tr>
            <td>Dual Fuel Power Input (kW)</td>
            <td>{formatNumber(props.results.DualFuelPowerInput)}</td>
          </tr>
          <tr>
            <td>Clean Gas Flow Rate (m3/h)</td>
            <td>{formatNumber(props.results.CleanGasFlowRateVolume)}</td>
          </tr>
          <tr>
            <td>Clean Gas Flow Rate (kg/h)</td>
            <td>{formatNumber(props.results.CleanGasFlowRateMass)}</td>
          </tr>
          <tr>
            <td>Annual Clean Gas Consumption (t/y)</td>
            <td>{formatNumber(props.results.AnnualCleanGasConsumption)}</td>
          </tr>
          <tr>
            <td>Dual Fuel Flow Rate (L/h)</td>
            <td>{formatNumber(props.results.DualFuelFlowRate)}</td>
          </tr>
          <tr>
            <td>Annual Dual Fuel Consumption (L/y)</td>
            <td>{formatNumber(props.results.AnnualDualFuelConsumption)}</td>
          </tr>
          <tr>
            <td>
              Higher Heating Value of Biomass Feedstock to Gasifier (kJ/kg)
            </td>
            <td>{formatNumber(props.inputs.HHV)}</td>
          </tr>
          <tr>
            <td>
              Moisture Content of Biomass Feedstock to Gasifier (% wet basis)
            </td>
            <td>{formatNumber(props.inputs.MoistureContent)}</td>
          </tr>
          <tr>
            <td>Biomass Feed Rate (kg/h)--dry basis</td>
            <td>{formatNumber(props.results.BiomassFeedRate)}</td>
          </tr>
          <tr>
            <td>Annual Biomass Consumption (t/y)--dry basis</td>
            <td>
              {formatNumber(props.results.AnnualBiomassConsumptionDryMass)}
            </td>
          </tr>
          <tr>
            <td>Annual Biomass Consumption (t/y)--wet basis</td>
            <td>
              {formatNumber(props.results.AnnualBiomassConsumptionWetMass)}
            </td>
          </tr>
          <tr>
            <td>Ash Content of Biomass (% dry matter)</td>
            <td>{formatNumber(props.inputs.AshContent)}</td>
          </tr>
          <tr>
            <td>Carbon Concentration of Char (% dry basis)</td>
            <td>{formatNumber(props.inputs.CarbonConcentration)}</td>
          </tr>
          <tr>
            <td>Char Production Rate (kg/h)--dry</td>
            <td>{formatNumber(props.results.CharProductionRate)}</td>
          </tr>
          <tr>
            <td>Annual Char Production (t/y)--dry</td>
            <td>{formatNumber(props.results.AnnualCharProduction)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
