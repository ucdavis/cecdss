import React from 'react';
import { formatNumber } from '../../Shared/util';
import { YearlyResult } from '../../../models/Types';
import { Table } from 'reactstrap';

interface Props {
  yearlyResults: YearlyResult[];
}

export const LCATables = (props: Props) => {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th rowSpan={2}>
            Environmental Analysis (1 kWh electricity generation)
          </th>
          <td rowSpan={2}>Unit</td>
          <td rowSpan={2}>Total</td>
          <td colSpan={props.yearlyResults.length}>Year</td>
        </tr>
        <tr>
          {props.yearlyResults.map((x, i) => (
            <td key={`year-${i}`}>{i + 1}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colSpan={3 + props.yearlyResults.length}>
            Fuel Consumption & Transportation
          </th>
        </tr>
        <tr>
          <td>Diesel</td>
          <td>mGal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.diesel,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`diesel-${i}`}>
              {formatNumber(result.lcaResults.inputs.diesel * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>mGal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.gasoline,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`gasoline-${i}`}>
              {formatNumber(result.lcaResults.inputs.gasoline * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Jet Fuel</td>
          <td>mGal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.jetfuel,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`jetfuel-${i}`}>
              {formatNumber(result.lcaResults.inputs.jetfuel * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Transport Distance</td>
          <td> m</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.distance,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`distance-${i}`}>
              {formatNumber(result.lcaResults.inputs.distance * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <th colSpan={3 + props.yearlyResults.length}>LCI Results</th>
        </tr>
        <tr>
          <td>
            CO<sub>2</sub>
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CO2,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CO2)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            CH<sub>4</sub>
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CH4,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CH4-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CH4)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            N<sub>2</sub>O
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.N2O,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`N2O-${i}`}>
              {formatNumber(result.lcaResults.lciResults.N2O)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            CO<sub>2</sub>e
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CO2e,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2e-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CO2e)}
            </td>
          ))}
        </tr>
        <tr>
          <td>CO</td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CO,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CO * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            NO<sub>x</sub>
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.NOx,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`NOx-${i}`}>
              {formatNumber(result.lcaResults.lciResults.NOx)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            NH<sub>3</sub>
          </td>
          <td>mg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.NH3,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`NH3-${i}`}>
              {formatNumber(result.lcaResults.lciResults.NH3 * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            PM<sub>10</sub>
          </td>
          <td>mg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.PM10,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`PM10-${i}`}>
              {formatNumber(result.lcaResults.lciResults.PM10 * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            PM<sub>25</sub>
          </td>
          <td>mg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.PM25,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`PM25-${i}`}>
              {formatNumber(result.lcaResults.lciResults.PM25 * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            SO<sub>2</sub>
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.SO2,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`SO2-${i}`}>
              {formatNumber(result.lcaResults.lciResults.SO2)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            SO<sub>x</sub>
          </td>
          <td>mg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.SOx,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`SOx-${i}`}>
              {formatNumber(result.lcaResults.lciResults.SOx * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>VOCs</td>
          <td>mg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.VOCs,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`VOCs-${i}`}>
              {formatNumber(result.lcaResults.lciResults.VOCs * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Carbon Intensity</td>
          <td>
            kg CO<sub>2</sub>e
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CI,
                0
              ) / 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CI-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CI / 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <th colSpan={3 + props.yearlyResults.length}>LCIA Results</th>
        </tr>
        <tr>
          <td>Global Warming Air</td>
          <td>
            kg CO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.global_warming_air,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(result.lcaResults.lciaResults.global_warming_air)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Acidification Air</td>
          <td>
            g SO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.acidification_air,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`acidificationAir-${i}`}>
              {formatNumber(
                result.lcaResults.lciaResults.acidification_air * 1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>HH Particulate Air</td>
          <td>
            g PM<sub>2.5</sub> eq
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.hh_particulate_air,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`hhParticulateAir-${i}`}>
              {formatNumber(
                result.lcaResults.lciaResults.hh_particulate_air * 1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Eutrophication Air</td>
          <td>g N eq</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.eutrophication_air,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`eutrophicationAir-${i}`}>
              {formatNumber(
                result.lcaResults.lciaResults.eutrophication_air * 1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Eutrophication Water</td>
          <td>g N eq</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.eutrophication_water,
                0
              ) * 1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`eutrophicationWater-${i}`}>
              {formatNumber(
                result.lcaResults.lciaResults.eutrophication_water * 1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Smog Air</td>
          <td>
            kg O<sub>3</sub> eq
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.smog_air,
                0
              )
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`smogAir-${i}`}>
              {formatNumber(result.lcaResults.lciaResults.smog_air)}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
