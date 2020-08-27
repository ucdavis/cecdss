import React from 'react';
import { YearlyResult } from '../../models/Types';
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

interface Props {
  years: number[];
  selectedYearIndex: number;
  setSelectedYearIndex: (index: number) => void;
  mapOverlayType: string;
  setMapOverlayType: (type: string) => void;
  results: YearlyResult[];
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
}

export const ResultsContainer = (props: Props) => {
  const pages = props.years.map((year, i) => (
    <PaginationItem>
      <PaginationLink
        key={year}
        disabled={!props.results[i]}
        onClick={() => props.setSelectedYearIndex(i)}
      >
        {year}
        {!props.results[i] && <Spinner color='primary' size='sm' />}
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
        {pages}
      </Pagination>
      <ResultsCharts results={props.results} />
      {props.selectedYearIndex > -1 && (
        <YearlyResultsContainer
          results={props.results[props.selectedYearIndex]}
          teaInputs={props.teaInputs}
          teaModel={props.teaModel}
        />
      )}
    </>
  );
};
