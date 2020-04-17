import React from 'react';
import { formatNumber } from '../../Shared/util';
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';

interface Props {
  inputs: InputModGPO | InputModCHP;
}

export const EscalationInflation = (props: Props) => {
  return (
    <div>
      <h3>Escalation/Inflation</h3>
      <table className='table'>
        <tbody>
          <tr>
            <td>General Inflation (%/y)</td>
            <td>{formatNumber(props.inputs.GeneralInflation)}</td>
          </tr>
          <tr>
            <td>Esclation--Fuel (%/y)</td>
            <td>{formatNumber(props.inputs.EscalationFuel)}</td>
          </tr>
          <tr>
            <td>Escalation for Production Tax Credit</td>
            <td>{formatNumber(props.inputs.EscalationProductionTaxCredit)}</td>
          </tr>
          <tr>
            <td>Escalation--Other (%/y)</td>
            <td>{formatNumber(props.inputs.EscalationOther)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};