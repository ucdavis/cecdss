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
      <table className='table'>
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
          {/* <tr>
            <td>Nearest Substation</td>
            <td>{props.allYearResults.nearestSubstation}</td>
          </tr> */}
          <tr>
            <td>Proximity to Substation (km)</td>
            <td>{props.allYearResults.distanceToNearestSubstation}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderResourceSupplyTable = () => {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th rowSpan={2}>Resource Supply (ton)</th>
            <td rowSpan={2}>Total</td>
            <td colSpan={props.yearlyResults.length}>Year</td>
            <td rowSpan={2}>Unit</td>
          </tr>
          <tr>
            {props.yearlyResults.map((x, i) => (
              <td>{i + 1}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Feedstock</td>
            <td>
              {formatNumber(
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalFeedstock,
                  0
                )
              )}
            </td>
            {props.yearlyResults.map(result => (
              <td>{formatNumber(result.totalFeedstock)}</td>
            ))}
            <td>t</td>
          </tr>
          <tr>
            <td>Coproduct</td>
            <td>
              {formatNumber(
                props.yearlyResults.reduce(
                  (sum, x) => sum + x.totalCoproduct,
                  0
                )
              )}
            </td>
            {props.yearlyResults.map(result => (
              <td>{formatNumber(result.totalCoproduct)}</td>
            ))}
            <td>t</td>
          </tr>
        </tbody>
      </table>
    );
  };
  return (
    <>
      {renderTechnicalPerformanceTable()}
      {renderResourceSupplyTable()}
      <LCATables yearlyResults={props.yearlyResults} />
      <TechnoeconomicTables yearlyResults={props.yearlyResults} />
    </>
  );
};
