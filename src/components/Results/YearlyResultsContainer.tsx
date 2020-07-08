import React from 'react';
import { TechnoeconomicModels, YearlyResult } from '../../models/Types';
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
import { LCAResults } from './LCA/LCAResults';

interface Props {
  results: YearlyResult;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
}

export const YearlyResultsContainer = (props: Props) => {
  // TODO: make classes & typecheck below
  const teaResults: any = props.results.teaResults;
  return (
    <div>
      <h1>Results For {props.results.year}</h1>
      <FrcsResultsContainer results={props.results} />

      {props.teaModel === TechnoeconomicModels.genericPowerOnly &&
        props.teaInputs instanceof InputModGPOClass && (
          <GPOResults inputs={props.teaInputs} results={teaResults} />
        )}
      {props.teaModel === TechnoeconomicModels.genericCombinedHeatAndPower &&
        props.teaInputs instanceof InputModCHPClass && (
          <CHPResults inputs={props.teaInputs} results={teaResults} />
        )}
      {props.teaModel === TechnoeconomicModels.gasificationPower &&
        props.teaInputs instanceof InputModGPClass && (
          <GPResults inputs={props.teaInputs} results={teaResults} />
        )}
      <LCAResults results={props.results.lcaResults} />
    </div>
  );
};
