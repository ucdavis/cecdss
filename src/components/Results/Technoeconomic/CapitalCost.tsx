import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import {
  ElectricalFuelBaseYearMod,
  OutputModGPO
} from '../../../models/TechnoeconomicOutputs';
import { formatNumber, formatCurrency } from '../../Shared/util';
import { GenericPowerOnlyInputMod } from '../../../models/TechnoeconomicInputs';

interface Props {
  inputs: GenericPowerOnlyInputMod;
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
