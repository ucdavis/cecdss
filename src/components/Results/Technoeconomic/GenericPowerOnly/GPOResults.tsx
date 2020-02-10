import React from 'react';
import { OutputModGPO } from '../../../../models/TechnoeconomicOutputs';
import { ElectricalAndFuelBaseYear } from '../ElectricalAndFuelBaseYear';
import { GPOCharts } from './GPOCharts';
import { GenericPowerOnlyInputMod } from '../../../../models/TechnoeconomicInputs';

interface Props {
  inputs: GenericPowerOnlyInputMod;
  results: OutputModGPO;
}

export const GPOResults = (props: Props) => {
  return (
    <div>
      <h2>Generic Power Only Results</h2>
      <ElectricalAndFuelBaseYear
        data={props.results.ElectricalAndFuelBaseYear}
      />
      {/* <GPOCharts inputs={props.inputs} results={props.results} /> */}
    </div>
  );
};
