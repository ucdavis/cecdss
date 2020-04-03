import React from 'react';
import {
  TechnoeconomicModels,
  TechnoeconomicAssessmentOutputs,
  Results,
  FrcsInputs,
  TechnoeconomicAssessmentInputs
} from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { FrcsResultsContainer } from './Frcs/FrcsResultsContainer';

interface Props {
  frcsInputs: FrcsInputs;
  frcsOutputs: Results;
  teaInputs: TechnoeconomicAssessmentInputs;
  teaOutputs: TechnoeconomicAssessmentOutputs;
}

export const ResultsContainer = (props: Props) => {
  return (
    <div>
      <h1>Results</h1>
      <FrcsResultsContainer results={props.frcsOutputs} />

      <div>
        {props.teaInputs.model === TechnoeconomicModels.genericPowerOnly &&
          !!props.teaOutputs.genericPowerOnly &&
          !!props.teaInputs.genericPowerOnly && (
            <GPOResults
              inputs={props.teaInputs.genericPowerOnly}
              results={props.teaOutputs.genericPowerOnly}
            />
          )}
      </div>
    </div>
  );
};
