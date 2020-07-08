import React, { useState } from 'react';
import { TechnoeconomicModels, YearlyResult } from '../../models/Types';
import { GPOResults } from './Technoeconomic/GenericPowerOnly/GPOResults';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { PaginationLink, Pagination, PaginationItem } from 'reactstrap';
import { YearlyResultsContainer } from './YearlyResultsContainer';

interface Props {
  results: YearlyResult[];
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
}

export const ResultsContainer = (props: Props) => {
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(0);

  const pages = props.results.map((result, i) => (
    <PaginationItem>
      <PaginationLink id={i.toString()} onClick={() => setSelectedYearIndex(i)}>
        {result.year}
      </PaginationLink>
    </PaginationItem>
  ));
  return (
    <div>
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
      <YearlyResultsContainer
        results={props.results[selectedYearIndex]}
        teaInputs={props.teaInputs}
        teaModel={props.teaModel}
      />
    </div>
  );
};
