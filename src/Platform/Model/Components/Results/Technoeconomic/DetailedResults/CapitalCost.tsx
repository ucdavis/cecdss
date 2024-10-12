import React from 'react';
import { formatNumber, formatCurrency } from '../../../Shared/util';
import { InputModGPO, InputModCHP, InputModGP } from '@ucdavis/tea/input.model';

interface Props {
  inputs: InputModGPO | InputModCHP | InputModGP;
}

export const CapitalCost = (props: Props) => {
  return (
    <div>
      <h3>Capital Cost</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>Capital Cost ($) </td>
            <td>{formatCurrency(props.inputs.CapitalCost)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
