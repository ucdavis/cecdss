import React from 'react';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { LCAresults } from '../../../models/LCAModels';

interface Props {
  results: LCAresults;
}

export const LCAResults = (props: Props) => {
  if (!props.results) {
    return null;
  }
  return (
    <div>
      <h3>Lifecycle Analysis Results</h3>
      <table className='table'>
        <thead>
          <tr>
            <th colSpan={3}>
              Life Cycle State (per <b>kWh</b> electricity)
            </th>
          </tr>
          <tr>
            <th>Environmental Flow/Impact</th>
            <th>Electricity generation utilizing forest residues</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CO2</td>
            <td>{formatNumber(props.results.lciResults.CO2)}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>CH4</td>
            <td>{formatNumber(props.results.lciResults.CH4)}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>N20</td>
            <td>{formatNumber(props.results.lciResults.N2O)}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>CO2e</td>
            <td>{formatNumber(props.results.lciResults.CO2e)}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>CO</td>
            <td>{formatNumber(props.results.lciResults.CO)}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>NOx</td>
            <td>{formatNumber(props.results.lciResults.NOx)}</td>
            <td>g</td>
          </tr>
        </tbody>
      </table>
      <table className='table'>
        <thead>
          <tr>
            <th colSpan={2}>LCIA Results Reporting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Global Warming Air (kg CO2 eq / kg substance)</td>
            <td>
              {formatNumber(props.results.lciaResults.global_warming_air)}
            </td>
          </tr>
          <tr>
            <td>Acidification Air (kg SO2 eq / kg substance)</td>
            <td>{formatNumber(props.results.lciaResults.acidification_air)}</td>
          </tr>
          <tr>
            <td>HH Particulate Air (PM2.5 eq / kg substance)</td>
            <td>
              {formatNumber(props.results.lciaResults.hh_particulate_air)}
            </td>
          </tr>
          <tr>
            <td>Eutrophication Air (kg N eq / kg substance)</td>
            <td>
              {formatNumber(props.results.lciaResults.eutrophication_air)}
            </td>
          </tr>
          <tr>
            <td>Eutrophication Water (kg N eq / kg substance)</td>
            <td>
              {formatNumber(props.results.lciaResults.eutrophication_water)}
            </td>
          </tr>
          <tr>
            <td>Smog Air (kg O3 eq / kg substance)</td>
            <td>{formatNumber(props.results.lciaResults.smog_air)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
