import React from 'react';

import {
  TechnoeconomicModels,
  TechnoeconomicAssessmentOutputs,
  Inputs
} from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';

interface Props {
  inputs: Inputs;
  technoeconomicModel: string;
  technoeconomicOutputs: TechnoeconomicAssessmentOutputs;
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
    </div>
  );
};
