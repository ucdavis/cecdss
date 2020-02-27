import React from 'react';
import {
  TechnoeconomicModels,
  TechnoeconomicAssessmentOutputs,
  FrcsOutputs,
  FrcsInputs,
  TechnoeconomicAssessmentInputs
} from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { FrcsResultsContainer } from './Frcs/FrcsResultsContainer';

interface Props {
  frcsInputs: FrcsInputs;
  frcsOutputs: FrcsOutputs;
  teaInputs: TechnoeconomicAssessmentInputs;
  teaOutputs: TechnoeconomicAssessmentOutputs;
}

export const ResultsContainer = (props: Props) => {
  return (
    <div>
      <h1>Results</h1>
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
      <FrcsResultsContainer results={props.frcsOutputs} />
    </div>
  );
};
