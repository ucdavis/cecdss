import React from 'react';
import { YearlyResult } from '../../models/Types';
import { YearlyResultsTable } from './YearlyResultsTables';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { LCAResults } from './LCA/LCAResults';

interface Props {
  results: YearlyResult;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  teaModel: string;
  biomassTarget: number;
}

export const YearlyResultsContainer = (props: Props) => {
  if (!props.results) {
    return null;
  }
  return (
    <div>
      <h1>Results For {props.results.year}</h1>
      <YearlyResultsTable
        results={props.results}
        biomassTarget={props.biomassTarget}
      />
      <LCAResults results={props.results.lcaResults} />
    </div>
  );
};
