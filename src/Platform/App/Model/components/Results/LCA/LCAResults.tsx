import React from 'react';
import { formatNumber } from '../../Shared/util';
import { LCAresults } from '../../../models/Types';

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
            <td>
              {formatNumber(props.results.lifeCycleEmissions.CO2 * 1000, 2)}
            </td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              CH<sub>4</sub>
            </td>
            <td>{formatNumber(props.results.lifeCycleEmissions.CH4)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              N<sub>2</sub>O
            </td>
            <td>{formatNumber(props.results.lifeCycleEmissions.N2O)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>CO</td>
            <td>{formatNumber(props.results.lifeCycleEmissions.CO)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              NO<sub>x</sub>
            </td>
            <td>{formatNumber(props.results.lifeCycleEmissions.NOx)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              PM<sub>10</sub>
            </td>
            <td>{formatNumber(props.results.lifeCycleEmissions.PM10)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              PM<sub>2.5</sub>
            </td>
            <td>{formatNumber(props.results.lifeCycleEmissions.PM25)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              SO<sub>x</sub>
            </td>
            <td>{formatNumber(props.results.lifeCycleEmissions.SOx)}</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>VOC</td>
            <td>{formatNumber(props.results.lifeCycleEmissions.VOC)}</td>
            <td>kg</td>
          </tr>
          {/* <tr>
            <td>Carbon Intensity</td>
            <td>
              {formatNumber(props.results.lifeCycleEmissions.CI * 1000, 2)}
            </td>
            <td>
              kg CO<sub>2</sub>e
            </td>
          </tr> */}
          <tr>
            <td>
              Harvest(CO<sub>2</sub>)
            </td>
            <td>
              {formatNumber(props.results.lifeStageCO2.harvest * 1000, 2)}
            </td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              Transport(CO<sub>2</sub>)
            </td>
            <td>
              {formatNumber(props.results.lifeStageCO2.transport * 1000, 2)}
            </td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              Conversion(CO<sub>2</sub>)
            </td>
            <td>
              {formatNumber(props.results.lifeStageCO2.conversion * 1000, 2)}
            </td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              Construction(CO<sub>2</sub>)
            </td>
            <td>
              {formatNumber(props.results.lifeStageCO2.construction * 1000, 2)}
            </td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              Equipment(CO<sub>2</sub>)
            </td>
            <td>
              {formatNumber(props.results.lifeStageCO2.equipment * 1000, 2)}
            </td>
            <td>kg</td>
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
                props.results.lifeCycleImpacts.global_warming_air * 1000,
                2
              )}
            </td>
            <td>
              kg CO<sub>2</sub>eq
            </td>
          </tr>
          <tr>
            <td>Acidification Air</td>
            <td>
              {formatNumber(
                props.results.lifeCycleImpacts.acidification_air * 1000
              )}
            </td>
            <td>
              kg SO<sub>2</sub> eq
            </td>
          </tr>
          <tr>
            <td>HH Particulate Air</td>
            <td>
              {formatNumber(
                props.results.lifeCycleImpacts.hh_particulate_air * 1000
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
                props.results.lifeCycleImpacts.eutrophication_air * 1000
              )}
            </td>
            <td>kg N eq</td>
          </tr>
          <tr>
            <td>Smog Air</td>
            <td>
              {formatNumber(props.results.lifeCycleImpacts.smog_air * 1000)}
            </td>
            <td>
              kg O<sub>3</sub> eq
            </td>
          </tr>
          <tr>
            <td>Harvest(GWP)</td>
            <td>
              {formatNumber(props.results.lifeStageGWP.harvest * 1000, 2)}
            </td>
            <td>
              kg CO<sub>2</sub>eq
            </td>
          </tr>
          <tr>
            <td>Transport(GWP)</td>
            <td>
              {formatNumber(props.results.lifeStageGWP.transport * 1000, 2)}
            </td>
            <td>
              kg CO<sub>2</sub>eq
            </td>
          </tr>
          <tr>
            <td>Conversion(GWP)</td>
            <td>
              {formatNumber(props.results.lifeStageGWP.conversion * 1000, 2)}
            </td>
            <td>
              kg CO<sub>2</sub>eq
            </td>
          </tr>
          <tr>
            <td>Construction(GWP)</td>
            <td>
              {formatNumber(props.results.lifeStageGWP.construction * 1000, 2)}
            </td>
            <td>
              kg CO<sub>2</sub>eq
            </td>
          </tr>
          <tr>
            <td>Equipment(GWP)</td>
            <td>
              {formatNumber(props.results.lifeStageGWP.equipment * 1000, 2)}
            </td>
            <td>
              kg CO<sub>2</sub>eq
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
