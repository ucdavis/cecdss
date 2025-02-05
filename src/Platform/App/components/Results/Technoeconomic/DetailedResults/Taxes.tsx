import React from 'react';
import { formatNumber } from '../../../Utils/util';
import {
  TaxesInputMod
} from '@ucdavis/tea/input.model';
import {
  OutputModGPO,
  OutputModCHP,
  OutputModGP
} from '@ucdavis/tea/output.model';

interface Props {
  inputs: TaxesInputMod;
  results: OutputModGPO | OutputModCHP | OutputModGP;
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
