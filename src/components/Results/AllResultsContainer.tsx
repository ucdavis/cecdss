import React from 'react';
import {
  AllYearsResults,
  FrcsInputs,
  TechnoeconomicModels,
  YearlyResult
} from '../../models/Types';
import { ResultsCharts } from './ResultsCharts';
import { InputModCHPClass } from '../../models/CHPClasses';
import { InputModGPClass } from '../../models/GPClasses';
import { InputModGPOClass } from '../../models/GPOClasses';
import { GPResults } from './Technoeconomic/DetailedResults/GasificationPower/GPResults';
import { CHPResults } from './Technoeconomic/DetailedResults/GenericCombinedHeatPower/CHPResults';
import { GPOResults } from './Technoeconomic/DetailedResults/GenericPowerOnly/GPOResults';
import { ResultsTable } from './ResultsTables';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';

interface Props {
  years: number[];
  selectedYearIndex: number;
  setSelectedYearIndex: (index: number) => void;
  mapOverlayType: string;
  setMapOverlayType: (type: string) => void;
  allYearResults: AllYearsResults;
  yearlyResults: YearlyResult[];
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
  frcsInputs: FrcsInputs;
}

export const AllResultsContainer = (props: Props) => {
  const teaResults: any = props.allYearResults.teaResults;

  return (
    <>
      <ResultsTable
        yearlyResults={props.yearlyResults}
        allYearResults={props.allYearResults}
        frcsInputs={props.frcsInputs}
        teaInputs={props.teaInputs}
        teaModel={props.teaModel}
      />
      <ResultsCharts results={props.yearlyResults} />
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
    </>
  );
};
