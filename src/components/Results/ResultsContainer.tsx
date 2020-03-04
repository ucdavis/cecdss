import React from 'react';
import {
  TechnoeconomicModels,
  TechnoeconomicAssessmentOutputs,
  Outputs,
  FrcsInputs,
  TechnoeconomicAssessmentInputs
} from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { FrcsResultsContainer } from './Frcs/FrcsResultsContainer';

interface Props {
  frcsInputs: FrcsInputs;
  outputs: Outputs;
  teaInputs: TechnoeconomicAssessmentInputs;
}

export const ResultsContainer = (props: Props) => {
  return (
    <div>
      <h1>Results</h1>
      <div>
        {props.teaInputs.model === TechnoeconomicModels.genericPowerOnly &&
          !!props.outputs.teaResults &&
          !!props.teaInputs.genericPowerOnly && (
            <GPOResults
              inputs={props.teaInputs.genericPowerOnly}
              results={props.outputs.teaResults}
            />
          )}
      </div>
      <FrcsResultsContainer results={props.outputs} />
    </div>
  );
};
