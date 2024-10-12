import React from 'react';
import { formatNumber } from '../../Shared/util';
import { AllYearsResults, YearlyResult } from '../../../models/Types';
import { Table } from 'reactstrap';

interface Props {
  yearlyResults: YearlyResult[];
  allYearResults: AllYearsResults;
}

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
          <td>L</td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) =>
                  sum +
                  (x.lcaResults.inputs.harvestDiesel +
                    x.lcaResults.inputs.unloadDiesel),
                0
              ) /
                props.yearlyResults.length) *
                1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`diesel-${i}`}>
              {formatNumber(
                (result.lcaResults.inputs.harvestDiesel +
                  result.lcaResults.inputs.unloadDiesel) *
                  1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>L</td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.gasoline,
                0
              ) /
                props.yearlyResults.length) *
                1000
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
          <td>L</td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.jetfuel,
                0
              ) /
                props.yearlyResults.length) *
                1000
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
          <td>km</td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.distance,
                0
              ) /
                props.yearlyResults.length) *
                1000
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`distance-${i}`}>
              {formatNumber(result.lcaResults.inputs.distance * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Move-in Distance</td>
          <td>m</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalMoveInDistance,
                0
              ) /
                ((props.allYearResults.annualGeneration / 1000) *
                  props.yearlyResults.length)
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`distance-${i}`}>
              {formatNumber(
                result.totalMoveInDistance /
                  (props.allYearResults.annualGeneration / 1000)
              )}
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
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.CO2 * 1000,
                0
              ) / props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.CO2 * 1000, 2)}
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
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.CH4,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CH4-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.CH4)}
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
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.N2O,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`N2O-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.N2O)}
            </td>
          ))}
        </tr>
        <tr>
          <td>CO</td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.CO,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.CO)}
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
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.NOx,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`NOx-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.NOx)}
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
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.PM10,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`PM10-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.PM10)}
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
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.PM25,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`PM25-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.PM25)}
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
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.SOx,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`SOx-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.SOx)}
            </td>
          ))}
        </tr>
        <tr>
          <td>VOC</td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.VOC,
                0
              ) / props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`VOC-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.VOC)}
            </td>
          ))}
        </tr>
        {/* <tr>
          <td>Carbon Intensity</td>
          <td>
            kg CO<sub>2</sub>e
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeCycleEmissions.CI * 1000,
                0
              ) / props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CI-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleEmissions.CI * 1000, 2)}
            </td>
          ))}
        </tr> */}
        <tr>
          <td>
            Harvest(CO<sub>2</sub>)
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageCO2.harvest * 1000,
                0
              ) / props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(result.lcaResults.lifeStageCO2.harvest * 1000, 2)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            Transport(CO<sub>2</sub>)
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageCO2.transport * 1000,
                0
              ) / props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(result.lcaResults.lifeStageCO2.transport * 1000, 2)}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            Conversion(CO<sub>2</sub>)
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageCO2.conversion * 1000,
                0
              ) / props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(
                result.lcaResults.lifeStageCO2.conversion * 1000,
                2
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            Construction(CO<sub>2</sub>)
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageCO2.construction * 1000,
                0
              ) / props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(
                result.lcaResults.lifeStageCO2.construction * 1000,
                2
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>
            Equipment(CO<sub>2</sub>)
          </td>
          <td>kg</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageCO2.equipment * 1000,
                0
              ) / props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`CO2-${i}`}>
              {formatNumber(result.lcaResults.lifeStageCO2.equipment * 1000, 2)}
            </td>
          ))}
        </tr>
        <tr>
          <th colSpan={3 + props.yearlyResults.length}>LCIA Results</th>
        </tr>
        <tr>
          <td>Global Warming</td>
          <td>
            kg CO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) =>
                  sum + x.lcaResults.lifeCycleImpacts.global_warming_air,
                0
              ) *
                1000) /
                props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(
                result.lcaResults.lifeCycleImpacts.global_warming_air * 1000,
                2
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Acidification</td>
          <td>
            kg SO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) =>
                  sum + x.lcaResults.lifeCycleImpacts.acidification_air,
                0
              ) *
                1000) /
                props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`acidificationAir-${i}`}>
              {formatNumber(
                result.lcaResults.lifeCycleImpacts.acidification_air * 1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Human Health Particulate</td>
          <td>
            kg PM<sub>2.5</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) =>
                  sum + x.lcaResults.lifeCycleImpacts.hh_particulate_air,
                0
              ) *
                1000) /
                props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`hhParticulateAir-${i}`}>
              {formatNumber(
                result.lcaResults.lifeCycleImpacts.hh_particulate_air * 1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Eutrophication</td>
          <td>kg N eq</td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) =>
                  sum + x.lcaResults.lifeCycleImpacts.eutrophication_air,
                0
              ) *
                1000) /
                props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`eutrophicationAir-${i}`}>
              {formatNumber(
                result.lcaResults.lifeCycleImpacts.eutrophication_air * 1000
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Smog Formation</td>
          <td>
            kg O<sub>3</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeCycleImpacts.smog_air,
                0
              ) *
                1000) /
                props.yearlyResults.length
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`smogAir-${i}`}>
              {formatNumber(result.lcaResults.lifeCycleImpacts.smog_air * 1000)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Harvest(GWP)</td>
          <td>
            kg CO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageGWP.harvest,
                0
              ) *
                1000) /
                props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(result.lcaResults.lifeStageGWP.harvest * 1000, 2)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Transport(GWP)</td>
          <td>
            kg CO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageGWP.transport,
                0
              ) *
                1000) /
                props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(result.lcaResults.lifeStageGWP.transport * 1000, 2)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Conversion(GWP)</td>
          <td>
            kg CO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageGWP.conversion,
                0
              ) *
                1000) /
                props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(
                result.lcaResults.lifeStageGWP.conversion * 1000,
                2
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Construction(GWP)</td>
          <td>
            kg CO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageGWP.construction,
                0
              ) *
                1000) /
                props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(
                result.lcaResults.lifeStageGWP.construction * 1000,
                2
              )}
            </td>
          ))}
        </tr>
        <tr>
          <td>Equipment(GWP)</td>
          <td>
            kg CO<sub>2</sub> eq
          </td>
          <td>
            {formatNumber(
              (props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lifeStageGWP.equipment,
                0
              ) *
                1000) /
                props.yearlyResults.length,
              2
            )}
          </td>
          {props.yearlyResults.map((result, i) => (
            <td key={`globalWarmingAir-${i}`}>
              {formatNumber(result.lcaResults.lifeStageGWP.equipment * 1000, 2)}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
