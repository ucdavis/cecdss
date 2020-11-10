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
  Alert,
  Progress
} from 'reactstrap';
import { YearlyResultsContainer } from './YearlyResultsContainer';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { AllResultsContainer } from './AllResultsContainer';
import { OutputModSensitivity } from '@ucdavis/tea/out/models/output.model';

interface Props {
  years: number[];
  selectedYearIndex: number;
  setSelectedYearIndex: (index: number) => void;
  showGeoJson: boolean;
  toggleGeoJson: (toggle: boolean) => void;
  showErrorGeoJson: boolean;
  toggleErrorGeoJson: (toggle: boolean) => void;
  allYearResults: AllYearsResults;
  yearlyResults: YearlyResult[];
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
  frcsInputs: FrcsInputs;
  sensitivityResults?: OutputModSensitivity;
}

export const ResultsContainer = (props: Props) => {
  const pages = props.years.map((year, i) => (
    <PaginationItem active={props.selectedYearIndex === i}>
      <PaginationLink
        className='years-page'
        key={year}
        disabled={!props.yearlyResults[i]}
        onClick={() => props.setSelectedYearIndex(i)}
      >
        {year}
        {!props.yearlyResults[i] && <Spinner color='primary' size='sm' />}
      </PaginationLink>
    </PaginationItem>
  ));

  return (
    <>
      <h2>Results</h2>
      <Button
        onClick={() => props.toggleGeoJson(!props.showGeoJson)}
        outline={!props.showGeoJson}
        active={props.showGeoJson}
        color='primary'
      >
        Show Cluster Shapes
      </Button>
      <Button
        onClick={() => props.toggleErrorGeoJson(!props.showErrorGeoJson)}
        outline={!props.showErrorGeoJson}
        active={props.showErrorGeoJson}
        color='danger'
      >
        Show Cluster Shapes
      </Button>
      <div className='years-pagination'>
        <Pagination aria-label='Year navigation' size='lg'>
          <PaginationItem
            className='years-page'
            active={props.years.length === props.selectedYearIndex}
          >
            <PaginationLink
              key={'all'}
              onClick={() => props.setSelectedYearIndex(props.years.length)}
            >
              All Results
            </PaginationLink>
          </PaginationItem>
          {pages}
        </Pagination>
      </div>
      <Progress
        value={(props.yearlyResults.length / props.years.length) * 100}
      />
      <Alert>Note: all results in tons refer to green short tons</Alert>
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
