import React from 'react';
import {
  AllYearsResults,
  FrcsInputs,
  TechnoeconomicModels,
  YearlyResult
} from '../../models/Types';
import {
  PaginationItem,
  PaginationLink,
  Spinner,
  Button,
  Pagination
} from 'reactstrap';
import { YearlyResultsContainer } from './YearlyResultsContainer';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { ResultsCharts } from './ResultsCharts';
import { InputModCHPClass } from '../../models/CHPClasses';
import { InputModGPClass } from '../../models/GPClasses';
import { InputModGPOClass } from '../../models/GPOClasses';
import { GPResults } from './Technoeconomic/GasificationPower/GPResults';
import { CHPResults } from './Technoeconomic/GenericCombinedHeatPower/CHPResults';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import { ResultsTable } from './ResultsTables';

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

export const ResultsContainer = (props: Props) => {
  const pages = props.years.map((year, i) => (
    <PaginationItem>
      <PaginationLink
        key={year}
        disabled={!props.yearlyResults[i]}
        onClick={() => props.setSelectedYearIndex(i)}
      >
        {year}
        {!props.yearlyResults[i] && <Spinner color='primary' size='sm' />}
      </PaginationLink>
    </PaginationItem>
  ));
  const teaResults: any = props.allYearResults.teaResults;

  return (
    <>
      <h2>Results</h2>
      <h5>Toggle Results Map View</h5>
      <Button
        disabled={props.mapOverlayType === 'heatmap'}
        onClick={() => props.setMapOverlayType('heatmap')}
      >
        Heatmap
      </Button>
      <Button
        disabled={props.mapOverlayType === 'hexbin'}
        onClick={() => props.setMapOverlayType('hexbin')}
      >
        Hexbin
      </Button>
      <Pagination aria-label='Page navigation example' size='lg'>
        {pages}
      </Pagination>
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
      {props.yearlyResults.length === props.years.length && (
        <ResultsTable
          yearlyResults={props.yearlyResults}
          allYearResults={props.allYearResults}
          frcsInputs={props.frcsInputs}
          teaInputs={props.teaInputs}
          teaModel={props.teaModel}
        />
      )}
      <ResultsCharts results={props.yearlyResults} />
      {props.selectedYearIndex > -1 && (
        <YearlyResultsContainer
          results={props.yearlyResults[props.selectedYearIndex]}
          teaInputs={props.teaInputs}
          teaModel={props.teaModel}
          biomassTarget={props.allYearResults.biomassTarget}
        />
      )}
    </>
  );
};
