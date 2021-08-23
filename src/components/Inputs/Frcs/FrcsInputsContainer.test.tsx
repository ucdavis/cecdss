import React from 'react';
import ReactDOM from 'react-dom';
import { FrcsInputs } from '../../../models/Types';
import { FrcsInputsContainer } from './FrcsInputsContainer';

const frcsInputsExample: FrcsInputs = {
  system: 'Ground-Based Mech WT',
  treatmentid: 1,
  dieselFuelPrice: 3.251
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
