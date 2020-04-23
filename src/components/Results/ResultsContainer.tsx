import React from 'react';
import { TechnoeconomicModels, Results, FrcsInputs } from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { FrcsResultsContainer } from './Frcs/FrcsResultsContainer';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { CHPResults } from './Technoeconomic/GenericCombinedHeatPower/CHPResults';
import { InputModCHPClass } from '../../models/CHPClasses';
import { InputModGPClass } from '../../models/GPClasses';
import { GPResults } from './Technoeconomic/GasificationPower/GPResults';
import { InputModGPOClass } from '../../models/GPOClasses';

interface Props {
  frcsInputs: FrcsInputs;
  frcsOutputs: Results;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
  teaOutputs: any; // OutputModGPO | OutputModCHP;
}

export const ResultsContainer = (props: Props) => {
  return (
    <div>
      <h1>Results</h1>
      <FrcsResultsContainer results={props.frcsOutputs} />

      <div>
        {props.teaModel === TechnoeconomicModels.genericPowerOnly &&
          props.teaInputs instanceof InputModGPOClass && (
            <GPOResults inputs={props.teaInputs} results={props.teaOutputs} />
          )}
        {props.teaModel === TechnoeconomicModels.genericCombinedHeatAndPower &&
          props.teaInputs instanceof InputModCHPClass && (
            <CHPResults inputs={props.teaInputs} results={props.teaOutputs} />
          )}
        {props.teaModel === TechnoeconomicModels.gasificationPower &&
          props.teaInputs instanceof InputModGPClass && (
            <GPResults inputs={props.teaInputs} results={props.teaOutputs} />
          )}
      </div>
    </div>
  );
};
