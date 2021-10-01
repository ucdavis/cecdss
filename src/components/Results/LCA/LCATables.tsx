import React from 'react';
import { formatNumber } from '../../Shared/util';
import { YearlyResult } from '../../../models/Types';
import { Table } from 'reactstrap';

interface Props {
  yearlyResults: YearlyResult[];
}

const MILE_TO_KM = 1.60934;

export const LCATables = (props: Props) => {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th rowSpan={2}>
            Environmental Analysis (1 MWh electricity generation)
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
          <td>Gal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.diesel,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`diesel-${i}`}>
              {formatNumber(result.lcaResults.inputs.diesel)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>Gal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.gasoline,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`gasoline-${i}`}>
              {formatNumber(result.lcaResults.inputs.gasoline)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Jet Fuel</td>
          <td>Gal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.jetfuel,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`jetfuel-${i}`}>
              {formatNumber(result.lcaResults.inputs.jetfuel)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Transport Distance</td>
          <td> km</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.distance,
                0
              ) * MILE_TO_KM / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`distance-${i}`}>
              {formatNumber(result.lcaResults.inputs.distance * MILE_TO_KM)}
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
                (sum, x) => sum + x.lcaResults.lciResults.CO2 * 1000,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CO2 * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            CH<sub>4</sub>
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CH4,
                0
              ) / props.yearlyResults.length
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
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.N2O,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`N2O-${i}`}>
              {formatNumber(result.lcaResults.lciResults.N2O)}
            </td>
          ))}
        </tr>
        <tr>
          <td>CO</td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CO,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CO)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            NO<sub>x</sub>
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.NOx,
                0
              ) / props.yearlyResults.length
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
            PM<sub>10</sub>
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.PM10,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`PM10-${i}`}>
              {formatNumber(result.lcaResults.lciResults.PM10)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            PM<sub>2.5</sub>
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.PM25,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`PM25-${i}`}>
              {formatNumber(result.lcaResults.lciResults.PM25)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            SO<sub>x</sub>
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.SOx,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`SOx-${i}`}>
              {formatNumber(result.lcaResults.lciResults.SOx)}
            </td>
          ))}
        </tr>
        <tr>
          <td>VOC</td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.VOC,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`VOC-${i}`}>
              {formatNumber(result.lcaResults.lciResults.VOC)}
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
                (sum, x) => sum + x.lcaResults.lciResults.CI * 1000,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CI-${i}`}>
              {formatNumber(result.lcaResults.lciResults.CI * 1000)}
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
              ) * 1000 / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(result.lcaResults.lciaResults.global_warming_air * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Acidification Air</td>
          <td>
            kg SO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.acidification_air,
                0
              ) * 1000 / props.yearlyResults.length
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
            kg PM<sub>2.5</sub> eq
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.hh_particulate_air,
                0
              ) * 1000 / props.yearlyResults.length
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
          <td>kg N eq</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.eutrophication_air,
                0
              ) * 1000 / props.yearlyResults.length
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
          <td>kg N eq</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.eutrophication_water,
                0
              ) * 1000 / props.yearlyResults.length
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
              ) * 1000 / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`smogAir-${i}`}>
              {formatNumber(result.lcaResults.lciaResults.smog_air * 1000)}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
