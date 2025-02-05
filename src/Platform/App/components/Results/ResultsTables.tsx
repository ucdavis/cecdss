import React from 'react';
import { formatCurrency, formatNumber } from '../Utils/util';
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
  expansionFactor: number;
}

export const ResultsTable = (props: Props) => {
  const treatmentIndex = Treatments.findIndex(
    x => x.id === props.frcsInputs.treatmentid
  );
  const treatmentName = Treatments[treatmentIndex].name;

  const renderTechnicalPerformanceTable = () => {
    return (
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>Technical Performance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project Prescription</td>
            <td>{treatmentName}</td>
          </tr>
          <tr>
            <td>Harvesting System</td>
            <td>{props.frcsInputs.system}</td>
          </tr>
          <tr>
            <td>Facility Type</td>
            <td>{props.teaModel}</td>
          </tr>
          <tr>
            <td>Capital Cost ($)</td>
            <td>
              {formatCurrency(props.allYearResults.teaInputs.CapitalCost)}
            </td>
          </tr>
          <tr>
            <td>Net Electrical Capacity (kWe)</td>
            <td>
              {formatNumber(
                props.teaInputs.ElectricalFuelBaseYear.NetElectricalCapacity
              )}
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
            <td>Annual Generation (kWh)</td>
            <td>
              {formatNumber(props.allYearResults.annualGeneration)}
            </td>
          </tr>
          <tr>
            <td>Capacity Factor (%)</td>
            <td>{props.teaInputs.ElectricalFuelBaseYear.CapacityFactor}</td>
          </tr>
          <tr>
            <td>Economic Life (y)</td>
            <td>{props.teaInputs.Financing.EconomicLife}</td>
          </tr>
          <tr>
            <td>Facility Coordinates</td>
            <td>
              {props.allYearResults.facilityCoordinates.lat},{' '}
              {props.allYearResults.facilityCoordinates.lng}
            </td>
          </tr>
          <tr>
            <td>Biomass Coordinates</td>
            <td>
              {props.allYearResults.biomassCoordinates.lat},{' '}
              {props.allYearResults.biomassCoordinates.lng}
            </td>
          </tr>
          <tr>
            <td>Expansion Factor</td>
            <td>{props.expansionFactor}</td>
          </tr>
          <tr>
            <td>Proximity to Substation (km)</td>
            <td>{props.allYearResults.distanceToNearestSubstation}</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <div className='results-table'>{renderTechnicalPerformanceTable()}</div>
      <div className='results-table'>
        <FrcsTables yearlyResults={props.yearlyResults} />
      </div>
      <div className='results-table'>
        <LCATables
          yearlyResults={props.yearlyResults}
          allYearResults={props.allYearResults}
        />
      </div>
      <div className='results-table'>
        <TechnoeconomicTables
          yearlyResults={props.yearlyResults}
          cashFlows={props.allYearResults.teaResults.AnnualCashFlows.slice(
            0,
            props.yearlyResults.length
          )}
          system={props.frcsInputs.system}
          teaModel={props.teaModel}
        />
      </div>
    </>
  );
};
