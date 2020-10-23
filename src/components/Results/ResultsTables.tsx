import React from 'react';
import { formatCurrency, formatNumber } from '../Shared/util';
import {
  AllYearsResults,
  FrcsInputs,
  Treatments,
  YearlyResult
} from '../../models/Types';

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
          <tr>
            <td>Nearest Substation</td>
            <td>{props.allYearResults.nearestSubstation}</td>
          </tr>{' '}
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
            <th rowSpan={2}>Resource Supply</th>
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
              {props.yearlyResults.reduce((sum, x) => sum + x.totalBiomass, 0)}
            </td>
            {props.yearlyResults.map(result => (
              <td>{result.totalBiomass}</td>
            ))}
            <td>t</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const renderEnvironmentalAnalysisTable = () => {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th rowSpan={2}>
              Environmental Analysis (1 kWh electricity generation)
            </th>
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
            <th colSpan={3 + props.yearlyResults.length}>LCI Results</th>
          </tr>
          <tr>
            <td>CO2</td>
            <td>
              {props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CO2,
                0
              )}
            </td>
            {props.yearlyResults.map(result => (
              <td>{result.lcaResults.lciResults.CO2}</td>
            ))}
            <td>kg</td>
          </tr>
          <tr>
            <td>CH4</td>
            <td>
              {props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CH4,
                0
              )}
            </td>
            {props.yearlyResults.map(result => (
              <td>{result.lcaResults.lciResults.CH4}</td>
            ))}
            <td>g</td>
          </tr>
          <tr>
            <td>N2O</td>
            <td>
              {props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.N2O,
                0
              )}
            </td>
            {props.yearlyResults.map(result => (
              <td>{result.lcaResults.lciResults.N2O}</td>
            ))}
            <td>g</td>
          </tr>
        </tbody>
      </table>
    );
  };
  return (
    <>
      {renderTechnicalPerformanceTable()}
      {renderResourceSupplyTable()}
      {renderEnvironmentalAnalysisTable()}
    </>
  );
};
