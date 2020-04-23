import React from 'react';
import { formatNumber, formatCurrency } from '../../../Shared/util';
import { InputModGP } from '@ucdavis/tea/out/models/input.model';
import { CapitalCostMod } from '@ucdavis/tea/out/models/output.model';

interface Props {
  inputs: InputModGP;
  results: CapitalCostMod;
}

export const CapitalCostGP = (props: Props) => {
  return (
    <div>
      <h3>Capital Cost</h3>
      <table className='table'>
        <thead>
          <tr>
            <td colSpan={2}></td>
            <td>($/kWe-net)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GasifierSystemCapitalCost</td>
            <td>{formatCurrency(props.inputs.GasifierSystemCapitalCost)}</td>
            <td>
              {formatNumber(props.results.GasifierSystemCapitalCostPerKwe)}
            </td>
          </tr>
          <tr>
            <td>GasCleaningSystemCapitalCost</td>
            <td>{formatCurrency(props.inputs.GasCleaningSystemCapitalCost)}</td>
            <td>
              {formatNumber(props.results.GasCleaningSystemCapitalCostPerKwe)}
            </td>
          </tr>
          <tr>
            <td>PowerGenerationCapitalCost</td>
            <td>{formatCurrency(props.inputs.PowerGenerationCapitalCost)}</td>
            <td>
              {formatNumber(props.results.PowerGenerationCapitalCostPerKwe)}
            </td>
          </tr>
          <tr>
            <td>EmissionControlSystemCapitalCost</td>
            <td>
              {formatCurrency(props.inputs.EmissionControlSystemCapitalCost)}
            </td>
            <td>
              {formatNumber(
                props.results.EmissionControlSystemCapitalCostPerKwe
              )}
            </td>
          </tr>
          <tr>
            <td>HeatRecoverySystemCapitalCost</td>
            <td>
              {formatCurrency(props.inputs.HeatRecoverySystemCapitalCost)}
            </td>
            <td>
              {formatNumber(props.results.HeatRecoverySystemCapitalCostPerKwe)}
            </td>
          </tr>
          <tr>
            <td>TotalFacilityCapitalCost</td>
            <td>
              {formatCurrency(
                props.inputs.GasifierSystemCapitalCost +
                  props.inputs.GasCleaningSystemCapitalCost +
                  props.inputs.PowerGenerationCapitalCost +
                  props.inputs.EmissionControlSystemCapitalCost +
                  props.inputs.HeatRecoverySystemCapitalCost
              )}
            </td>
            <td>
              {formatNumber(props.results.TotalFacilityCapitalCostPerKwe)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
