import React from 'react';
import {
  TechnoeconomicModels,
  Results,
  FrcsInputs,
  TechnoeconomicAssessmentInputs
} from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { FrcsResultsContainer } from './Frcs/FrcsResultsContainer';
import {
  OutputModGPO,
  OutputModCHP
} from '@ucdavis/tea/out/models/output.model';

interface Props {
  frcsInputs: FrcsInputs;
  frcsOutputs: Results;
  teaInputs: TechnoeconomicAssessmentInputs;
  teaOutputs: OutputModGPO | OutputModCHP;
}

export const ResultsContainer = (props: Props) => {
  return (
    <div>
      <h1>Results</h1>
      <FrcsResultsContainer results={props.frcsOutputs} />

      <div>
        {props.teaInputs.model === TechnoeconomicModels.genericPowerOnly && (
          <GPOResults
            inputs={props.teaInputs.inputs}
            results={props.teaOutputs}
          />
        )}
      </div>
    </div>
  );
};
