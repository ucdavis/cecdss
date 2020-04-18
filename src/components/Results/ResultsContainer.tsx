import React from 'react';
import {
  TechnoeconomicModels,
  Results,
  FrcsInputs,
  InputModCHPClass
} from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { FrcsResultsContainer } from './Frcs/FrcsResultsContainer';
import {
  OutputModGPO,
  OutputModCHP
} from '@ucdavis/tea/out/models/output.model';
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';
import { CHPResults } from './Technoeconomic/GenericCombinedHeatPower/CHPResults';

interface Props {
  frcsInputs: FrcsInputs;
  frcsOutputs: Results;
  teaInputs: InputModGPO | InputModCHP;
  teaModel: string;
  teaOutputs: any; // OutputModGPO | OutputModCHP;
}

export const ResultsContainer = (props: Props) => {
  return (
    <div>
      <h1>Results</h1>
      <FrcsResultsContainer results={props.frcsOutputs} />

      <div>
        {props.teaModel === TechnoeconomicModels.genericPowerOnly && (
          <GPOResults inputs={props.teaInputs} results={props.teaOutputs} />
        )}
        {props.teaModel === TechnoeconomicModels.genericCombinedHeatAndPower &&
          props.teaInputs instanceof InputModCHPClass && (
            <CHPResults inputs={props.teaInputs} results={props.teaOutputs} />
          )}
      </div>
    </div>
  );
};
