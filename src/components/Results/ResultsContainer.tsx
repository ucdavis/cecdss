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
  Pagination,
  Alert
} from 'reactstrap';
import { YearlyResultsContainer } from './YearlyResultsContainer';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { AllResultsContainer } from './AllResultsContainer';

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
        selected={props.selectedYearIndex === i}
      >
        {year}
        {!props.yearlyResults[i] && <Spinner color='primary' size='sm' />}
      </PaginationLink>
    </PaginationItem>
  ));

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
        <PaginationItem>
          <PaginationLink
            key={'all'}
            onClick={() => props.setSelectedYearIndex(props.years.length)}
            selected={props.years.length === props.selectedYearIndex}
          >
            All Results
          </PaginationLink>
        </PaginationItem>
        {pages}
      </Pagination>
      <Alert color='secondary'>
        Note: all results in tons refer to green short tons
      </Alert>
      {props.selectedYearIndex === props.years.length && (
        <AllResultsContainer {...props} />
      )}
      {props.selectedYearIndex > -1 &&
        props.selectedYearIndex < props.years.length && (
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
