import React from 'react';
import { OutputModGPO } from '../../../models/TechnoeconomicOutputs';
import { formatNumber } from '../../Shared/util';
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  inputs: GenericPowerOnlyInputMod;
  results: OutputModGPO;
}

export const Taxes = (props: Props) => {
  return (
    <div>
      <h3>Taxes</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Federal Tax Rate (%)</td>
            <td>{formatNumber(props.inputs.FederalTaxRate)}</td>
          </tr>
          <tr>
            <td>State Tax Rate (%)</td>
            <td>{formatNumber(props.inputs.StateTaxRate)}</td>
          </tr>
          <tr>
            <td>Production Tax Credit ($/kWh)</td>
            <td>{formatNumber(props.inputs.ProductionTaxCredit)}</td>
          </tr>
          <tr>
            <td>Combined Tax Rate (%)</td>
            <td>{formatNumber(props.results.Shared.CombinedTaxRate)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
