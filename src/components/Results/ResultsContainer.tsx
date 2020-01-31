import React from 'react';

import {
  TechnoeconomicModels,
  TechnoeconomicAssessmentOutputs,
  Inputs,
  FrcsOutputs
} from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { FrcsResultsContainer } from './FrcsResultsContainer';

interface Props {
  inputs: Inputs;
  technoeconomicModel: string;
  technoeconomicOutputs: TechnoeconomicAssessmentOutputs;
  frcsOutputs: FrcsOutputs;
}

export const ResultsContainer = (props: Props) => {
  return (
    <div>
      <h1>Results</h1>
      <div>
        {props.technoeconomicModel === TechnoeconomicModels.genericPowerOnly &&
          !!props.technoeconomicOutputs.genericPowerOnly &&
          !!props.inputs.TechnoeconomicAssessmentInputs.genericPowerOnly && (
            <GPOResults
              inputs={
                props.inputs.TechnoeconomicAssessmentInputs.genericPowerOnly
              }
              results={props.technoeconomicOutputs.genericPowerOnly}
            />
          )}
      </div>
      <FrcsResultsContainer results={props.frcsOutputs}/>
    </div>
  );
};
