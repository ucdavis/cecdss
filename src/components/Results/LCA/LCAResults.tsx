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
            <td>{props.results.lciResults.CO2}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>CH4</td>
            <td>{props.results.lciResults.CH4}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>N20</td>
            <td>{props.results.lciResults.N2O}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>CO2e</td>
            <td>{props.results.lciResults.CO2e}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>CO</td>
            <td>{props.results.lciResults.CO}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>NOx</td>
            <td>{props.results.lciResults.NOx}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>NMVOC</td>
            <td>{props.results.lciResults.NMVOC}</td>
            <td>g</td>
          </tr>
          <tr>
            <td>PM 2.5</td>
            <td>{props.results.lciResults.Particulates}</td>
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
            <td>{props.results.lciaResults.global_warming_air}</td>
          </tr>
          <tr>
            <td>Acidification Air (kg SO2 eq / kg substance)</td>
            <td>{props.results.lciaResults.acidification_air}</td>
          </tr>
          <tr>
            <td>HH Particulate Air (PM2.5 eq / kg substance)</td>
            <td>{props.results.lciaResults.hh_particulate_air}</td>
          </tr>
          <tr>
            <td>Eutrophication Air (kg N eq / kg substance)</td>
            <td>{props.results.lciaResults.eutrophication_air}</td>
          </tr>
          <tr>
            <td>Eutrophication Water (kg N eq / kg substance)</td>
            <td>{props.results.lciaResults.eutrophication_water}</td>
          </tr>
          <tr>
            <td>Ozone Depletion Air (kg CFC-11 eq / kg substance)</td>
            <td>{props.results.lciaResults.ozone_depletion_air}</td>
          </tr>
          <tr>
            <td>Smog Air (kg O3 eq / kg substance)</td>
            <td>{props.results.lciaResults.smog_air}</td>
          </tr>
          <tr>
            <td>Ecotox. CF [CTUeco/kg], Em.airU, freshwater</td>
            <td>{props.results.lciaResults.ecotox_airu_fresh_water}</td>
          </tr>
          <tr>
            <td>Ecotox. CF [CTUeco/kg], Em.airC, freshwater</td>
            <td>{props.results.lciaResults.ecotox_airc_fresh_water}</td>
          </tr>
          <tr>
            <td>Ecotox. CF [CTUeco/kg], Em.fr.waterC, freshwater</td>
            <td>{props.results.lciaResults.ecotox_waterc_fresh_water}</td>
          </tr>
          <tr>
            <td>Ecotox. CF [CTUeco/kg], Em.sea waterC, freshwater</td>
            <td>{props.results.lciaResults.ecotox_seawaterc_fresh_water}</td>
          </tr>
          <tr>
            <td>Ecotox. CF [CTUeco/kg], Em.nat.soilC, freshwater</td>
            <td>{props.results.lciaResults.ecotox_natsoilc_fresh_water}</td>
          </tr>
          <tr>
            <td>Ecotox. CF [CTUeco/kg], Em.agr.soilC, freshwater</td>
            <td>{props.results.lciaResults.ecotox_agrsoilc_fresh_water}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUcancer/kg], Emission to urban air, cancer
            </td>
            <td>{props.results.lciaResults.hh_urban_air_cancer}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUnoncancer/kg], Emission to urban air,
              non-canc.
            </td>
            <td>{props.results.lciaResults.hh_urban_air_noncanc}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUcancer/kg], Emission to cont. rural air,
              cancer
            </td>
            <td>{props.results.lciaResults.hh_rural_air_cancer}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUnoncancer/kg], Emission to cont. rural air,
              non-canc.
            </td>
            <td>{props.results.lciaResults.hh_rural_air_noncanc}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUcancer/kg], Emission to cont. freshwater,
              cancer
            </td>
            <td>{props.results.lciaResults.hh_fresh_water_cancer}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUnoncancer/kg], Emission to cont. freshwater,
              non-canc.
            </td>
            <td>{props.results.lciaResults.hh_fresh_water_noncanc}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUcancer/kg], Emission to cont. sea water,
              cancer
            </td>
            <td>{props.results.lciaResults.hh_sea_water_cancer}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUnoncancer/kg], Emission to cont. sea water,
              non-canc.
            </td>
            <td>{props.results.lciaResults.hh_sea_water_noncanc}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUcancer/kg], Emission to cont. natural soil,
              cancer
            </td>
            <td>{props.results.lciaResults.hh_natural_soil_cancer}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUnoncancer/kg], Emission to cont. natural soil,
              non-canc.
            </td>
            <td>{props.results.lciaResults.hh_natural_soil_noncanc}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUcancer/kg], Emission to cont. agric. Soil,
              cancer
            </td>
            <td>{props.results.lciaResults.hh_agric_soil_cancer}</td>
          </tr>
          <tr>
            <td>
              Human health CF [CTUnoncancer/kg], Emission to cont. agric. Soil,
              non-canc.
            </td>
            <td>{props.results.lciaResults.hh_agric_soil_noncanc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
