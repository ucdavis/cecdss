import React from 'react';
import { AllYearsResults, FrcsInputs, YearlyResult } from '../../models/Types';
import {
  PaginationItem,
  PaginationLink,
  Spinner,
  Pagination,
  Alert,
  Progress
} from 'reactstrap';
import { YearlyResultsContainer } from './YearlyResultsContainer';
import { InputModGPO, InputModCHP, InputModGP } from '@ucdavis/tea/input.model';
import { AllResultsContainer } from './AllResultsContainer';
import { OutputModSensitivity } from '@ucdavis/tea/output.model';

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
  loading: boolean;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
  toggleShowResults: (toggle: boolean) => void;
  showResults: boolean;
  frcsInputs: FrcsInputs;
  sensitivityResults?: OutputModSensitivity;
  expansionFactor: number;
}

export const ResultsContainer = (props: Props) => {
  const pages = props.years.map((year, i) => (
    <PaginationItem key={`year-${i}`} active={props.selectedYearIndex === i}>
      <PaginationLink
        className='years-page'
        disabled={!props.yearlyResults[i]}
        onClick={() => props.setSelectedYearIndex(i)}
      >
        {year}
        {!props.yearlyResults[i] && <Spinner size="sm" color='primary'>
              {''}
            </Spinner>}
      </PaginationLink>
    </PaginationItem>
  ));

  return (
    <>
      <div className='cardheader d-flex justify-content-between align-items-center'>
        <span>
          <h4>
            Forest Resource and Renewable Energy Decision Support System
            (FRREDSS)
          </h4>
          <h2>Results</h2>
        </span>
      </div>
      <div className='cardcontents'>
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
      </div>
    </>
  );
};
