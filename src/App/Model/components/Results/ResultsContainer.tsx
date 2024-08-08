import React, { useState } from 'react';
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
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDownload } from '@fortawesome/free-solid-svg-icons';

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
  saveUrl: string | '';
}

export const ResultsContainer = (props: Props) => {
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

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

  const handleCopy = () => {
    setLinkCopied(true)
  };

  return (
    <>
      <div className='cardheader flex flex-col justify-between items-start'>
          <h4>
            Forest Resource and Renewable Energy Decision Support System
            (FRREDSS)
          </h4>
          <div className="flex items-center justify-between w-full">
            <h2>Results</h2>
            <div className="flex items-center justify-center gap-x-4">
              <CopyToClipboard text={props.saveUrl} onCopy={handleCopy}>
                <button className="bg-white hover:bg-gray-400 text-gray-800 text-14p font-bold py-2 px-2 rounded-lg inline-flex items-center border-white border-2p w-200p">
                  {!linkCopied ? (
                    <div className="flex items-center justify-center gap-x-2">
                      <FontAwesomeIcon icon={faDownload} />
                      <span>Save Model Link</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-x-2">
                      <FontAwesomeIcon icon={faCheck} style={{ color: '#069e39' }} />
                      <span className='text-green-100'>Link Copied to Clipboard!</span>
                    </div>
                  )}
                </button>
              </CopyToClipboard>
            </div>
          </div>
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
