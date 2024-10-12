import React from 'react';
import ReactDOM from 'react-dom';
import { FrcsInputs } from '../../../Models/Types';
import { FrcsInputsContainer } from './FrcsInputsContainer';

const frcsInputsExample: FrcsInputs = {
  system: 'Ground-Based Mech WT',
  treatmentid: 1,
  dieselFuelPrice: 2.24,
  wageFaller: 35.13, // CA FallBuckWage May 2020
  wageOther: 22.07, // CA AllOthersWage May 2020
  laborBenefits: 35, // Assume a nationwide average of 35% for benefits and other payroll costs
  ppiCurrent: 284.7, // Oct 2021
  residueRecovFracWT: 80, // FRCS default 80%
  residueRecovFracCTL: 50, // FRCS default 50%
};

describe('FrcsInputsContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(
      <FrcsInputsContainer
        inputs={frcsInputsExample}
        setInputs={() => {}}
        disabled={false}
      />,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
