import React, { useRef } from 'react';
import { AllYearsResults, FrcsInputs, YearlyResult } from '../../models/Types';
import { ResultsCharts } from './ResultsCharts';
import { ResultsTable } from './ResultsTables';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/input.model';
import { OutputModSensitivity } from '@ucdavis/tea/output.model';
import { AssumptionsAndReferences } from './AssumptionsAndReferences';
import ResultsExport from './ResultsExport';

interface Props {
  years: number[];
  selectedYearIndex: number;
  setSelectedYearIndex: (index: number) => void;
  allYearResults: AllYearsResults;
  yearlyResults: YearlyResult[];
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
  frcsInputs: FrcsInputs;
  sensitivityResults?: OutputModSensitivity;
}

export const AllResultsContainer = (props: Props) => {
  const sensitivityChartRef = useRef<any>(null);
  const teaResults: any = props.allYearResults.teaResults;

  return (
    <>
      <ResultsExport
        allYearResults={props.allYearResults}
        yearlyResults={props.yearlyResults}
        sensitivityChart={sensitivityChartRef}
        frcsInputs={props.frcsInputs}
        teaModel={props.teaModel}
        teaInputs={props.teaInputs}
      />
      <ResultsTable
        yearlyResults={props.yearlyResults}
        allYearResults={props.allYearResults}
        frcsInputs={props.frcsInputs}
        teaInputs={props.teaInputs}
        teaModel={props.teaModel}
      />
      <ResultsCharts
        results={props.yearlyResults}
        sensitivityResults={props.sensitivityResults}
        sensitivityChartRef={sensitivityChartRef}
      />
      <AssumptionsAndReferences />
      {/* {props.teaModel === TechnoeconomicModels.genericPowerOnly &&
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
        )} */}
    </>
  );
};
