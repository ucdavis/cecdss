import React from 'react';
import { formatNumber } from '../../Shared/util';
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';
import {
  OutputModGPO,
  OutputModCHP
} from '@ucdavis/tea/out/models/output.model';

interface Props {
  inputs: InputModGPO | InputModCHP;
  results: OutputModGPO | OutputModCHP;
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
            <td>{formatNumber(props.results.CombinedTaxRate)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
