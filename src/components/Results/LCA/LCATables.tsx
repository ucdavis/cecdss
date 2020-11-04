import React from 'react';
import { formatNumber, formatCurrency } from '../../Shared/util';
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
            Environmental Analysis (1 MWh electricity generation)
          </th>
          <td rowSpan={2}>Unit</td>
          <td rowSpan={2}>Total</td>
          <td colSpan={props.yearlyResults.length}>Year</td>
        </tr>
        <tr>
          {props.yearlyResults.map((x, i) => (
            <td>{i + 1}</td>
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
          <td>gal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.diesel,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.inputs.diesel)}</td>
          ))}
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>gal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.gasoline,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.inputs.gasoline)}</td>
          ))}
        </tr>
        <tr>
          <td>Jet Fuel</td>
          <td>gal</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.jetfuel,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.inputs.jetfuel)}</td>
          ))}
        </tr>
        <tr>
          <td>Transport Distance</td>
          <td>km</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.inputs.distance,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.inputs.distance)}</td>
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
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.CO2)}</td>
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
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.CH4)}</td>
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
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.N2O)}</td>
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
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.CO2e)}</td>
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
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.CO)}</td>
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
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.NOx)}</td>
          ))}
        </tr>
        <tr>
          <td>
            NH<sub>3</sub>
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.NH3,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.NH3)}</td>
          ))}
        </tr>
        <tr>
          <td>
            PM<sub>10</sub>
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.PM10,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.PM10)}</td>
          ))}
        </tr>
        <tr>
          <td>
            PM<sub>25</sub>
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.PM25,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.PM25)}</td>
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
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.SO2)}</td>
          ))}
        </tr>
        <tr>
          <td>
            SO<sub>x</sub>
          </td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.SOx,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.SOx)}</td>
          ))}
        </tr>
        <tr>
          <td>VOCs</td>
          <td>g</td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.VOCs,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.VOCs)}</td>
          ))}
        </tr>
        <tr>
          <td>Carbon Intensity</td>
          <td>
            gCO<sub>2</sub>e
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciResults.CI,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciResults.CI)}</td>
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
          {props.yearlyResults.map(result => (
            <td>
              {formatNumber(result.lcaResults.lciaResults.global_warming_air)}
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
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatNumber(result.lcaResults.lciaResults.acidification_air)}
            </td>
          ))}
        </tr>
        <tr>
          <td>HH Particulate Air</td>
          <td>
            PM<sub>25</sub> eq
          </td>
          <td>
            {formatNumber(
              props.yearlyResults.reduce(
                (sum, x) => sum + x.lcaResults.lciaResults.hh_particulate_air,
                0
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatNumber(result.lcaResults.lciaResults.hh_particulate_air)}
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
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatNumber(result.lcaResults.lciaResults.eutrophication_air)}
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
              )
            )}
          </td>
          {props.yearlyResults.map(result => (
            <td>
              {formatNumber(result.lcaResults.lciaResults.eutrophication_water)}
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
          {props.yearlyResults.map(result => (
            <td>{formatNumber(result.lcaResults.lciaResults.smog_air)}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};
