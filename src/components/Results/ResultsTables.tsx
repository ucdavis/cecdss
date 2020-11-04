import React from 'react';
import { formatCurrency, formatNumber } from '../Shared/util';
import {
  AllYearsResults,
  FrcsInputs,
  Treatments,
  YearlyResult
} from '../../models/Types';
import { LCATables } from './LCA/LCATables';
import { TechnoeconomicTables } from './Technoeconomic/TechnoeconomicTables';
import { FrcsTables } from './Frcs/FrcsTables';
import { Table } from 'reactstrap';

interface Props {
  frcsInputs: FrcsInputs;
  teaModel: string;
  teaInputs: any;
  // todo: location
  allYearResults: AllYearsResults;
  yearlyResults: YearlyResult[];
}

export const ResultsTable = (props: Props) => {
  const renderTechnicalPerformanceTable = () => {
    return (
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Technical Performance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project Prescription</td>
            <td>{Treatments[props.frcsInputs.treatmentid].name}</td>
          </tr>
          <tr>
            <td>Facility Type</td>
            <td>{props.teaModel}</td>
          </tr>
          <tr>
            <td>Capital Cost ($)</td>
            <td>
              {formatCurrency(
                props.teaModel === 'GP'
                  ? props.teaInputs.CapitalCost.GasifierSystemCapitalCost
                  : props.teaInputs.CapitalCost
              )}
            </td>
          </tr>
          <tr>
            <td>Net Electrical Capacity (kWe)</td>
            <td>
              {props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity}
            </td>
          </tr>
          {props.teaModel === 'GPO' && (
            <tr>
              <td>Net Station Efficiency (%)</td>
              <td>
                {props.teaInputs.ElectricalFuelBaseYear.NetStationEfficiency}
              </td>
            </tr>
          )}
          <tr>
            <td>Economic Life (y)</td>
            <td>{props.teaInputs.Financing.EconomicLife}</td>
          </tr>
          <tr>
            <td>Proximity to Substation (km)</td>
            <td>{props.allYearResults.distanceToNearestSubstation}</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  const renderLCOETable = () => {
    return (
      <Table responsive bordered hover>
        <tbody>
          <tr>
            <td>Current $ LCOE ($/kWh)</td>
            <td>
              {props.allYearResults.teaResults.CurrentLAC.CurrentLACofEnergy}
            </td>
          </tr>
          <tr>
            <td>Constant $ LCOE ($/kWh)</td>
            <td>
              {props.allYearResults.teaResults.ConstantLAC.ConstantLACofEnergy}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  };

  return (
    <>
      {renderTechnicalPerformanceTable()}
      <FrcsTables yearlyResults={props.yearlyResults} />
      <LCATables yearlyResults={props.yearlyResults} />
      <TechnoeconomicTables
        yearlyResults={props.yearlyResults}
        cashFlows={props.allYearResults.teaResults.AnnualCashFlows.slice(
          0,
          props.yearlyResults.length
        )}
        presentWorth={props.allYearResults.teaResults.CurrentLAC.PresentWorth.slice(
          0,
          props.yearlyResults.length
        )}
      />
    </>
  );
};
