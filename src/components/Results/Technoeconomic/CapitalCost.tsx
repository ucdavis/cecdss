import React from 'react';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';

interface Props {
  inputs: InputModGPO | InputModCHP;
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
