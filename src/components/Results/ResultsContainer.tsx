import React, { useState } from 'react';
import { TechnoeconomicModels, YearlyResult } from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import {
  PaginationLink,
  Pagination,
  PaginationItem,
  Spinner,
  Button
} from 'reactstrap';
import { YearlyResultsContainer } from './YearlyResultsContainer';

interface Props {
  selectedYearIndex: number;
  setSelectedYearIndex: (year: number) => void;
  years: number[];
  results: YearlyResult[];
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
  mapOverlayType: string;
  setMapOverlayType: (type: string) => void;
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

  const toggleMapOverlayType = (
    <div>
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
    </div>
  );
  return (
    <div id='results-sidebar'>
      <Pagination aria-label='Page navigation example' size='lg'>
        <PaginationItem>
          <PaginationLink first href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href='#' />
        </PaginationItem>
        {pages}
        <PaginationItem>
          <PaginationLink next href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href='#' />
        </PaginationItem>
      </Pagination>
      {toggleMapOverlayType}
      <YearlyResultsContainer
        results={props.results[props.selectedYearIndex]}
        teaInputs={props.teaInputs}
        teaModel={props.teaModel}
      />
    </div>
  );
};
