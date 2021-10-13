import React from 'react';
import { formatNumber } from '../../Shared/util';
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
      <h3>Environmental Analysis (1 MWh electricity generation)</h3>
      <table className='table'>
        <thead>
          <tr>
            <th colSpan={3}>LCI Results</th>
          </tr>
          <tr>
            <th>Pollutant</th>
            <th>Quantity</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              CO<sub>2</sub>
            </td>
            <td>{formatNumber(props.results.lciResults.CO2 * 1000)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              CH<sub>4</sub>
            </td>
            <td>{formatNumber(props.results.lciResults.CH4)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              N<sub>2</sub>O
            </td>
            <td>{formatNumber(props.results.lciResults.N2O)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>CO</td>
            <td>{formatNumber(props.results.lciResults.CO)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              NO<sub>x</sub>
            </td>
            <td>{formatNumber(props.results.lciResults.NOx)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              PM<sub>10</sub>
            </td>
            <td>{formatNumber(props.results.lciResults.PM10)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              PM<sub>2.5</sub>
            </td>
            <td>{formatNumber(props.results.lciResults.PM25)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              SO<sub>x</sub>
            </td>
            <td>{formatNumber(props.results.lciResults.SOx)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>VOC</td>
            <td>{formatNumber(props.results.lciResults.VOC)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>Carbon Intensity</td>
            <td>{formatNumber(props.results.lciResults.CI * 1000)}</td>
            <td>
              kg CO<sub>2</sub>e
            </td>
          </tr>
        </tbody>
      </table>
      <table className='table'>
        <thead>
          <tr>
            <th colSpan={3}>LCIA Results</th>
          </tr>
          <tr>
            <th>Impact Category</th>
            <th>Quantity</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Global Warming Air</td>
            <td>
              {formatNumber(
                props.results.lciaResults.global_warming_air * 1000
              )}
            </td>
            <td>
              kg CO<sub>2</sub>eq
            </td>
          </tr>
          <tr>
            <td>Acidification Air</td>
            <td>
              {formatNumber(props.results.lciaResults.acidification_air * 1000)}
            </td>
            <td>
              kg SO<sub>2</sub> eq
            </td>
          </tr>
          <tr>
            <td>HH Particulate Air</td>
            <td>
              {formatNumber(
                props.results.lciaResults.hh_particulate_air * 1000
              )}
            </td>
            <td>
              PM<sub>2.5</sub> eq
            </td>
          </tr>
          <tr>
            <td>Eutrophication Air</td>
            <td>
              {formatNumber(
                props.results.lciaResults.eutrophication_air * 1000
              )}
            </td>
            <td>kg N eq</td>
          </tr>
          <tr>
            <td>Eutrophication Water</td>
            <td>
              {formatNumber(
                props.results.lciaResults.eutrophication_water * 1000
              )}
            </td>
            <td>kg N eq</td>
          </tr>
          <tr>
            <td>Smog Air</td>
            <td>{formatNumber(props.results.lciaResults.smog_air * 1000)}</td>
            <td>
              kg O<sub>3</sub> eq
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
