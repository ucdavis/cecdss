import React from 'react';
import { YearlyResult } from '../../models/Types';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis} from 'recharts';
import { formatNumber } from '../Shared/util';
import { OutputModSensitivity } from '@ucdavis/tea/output.model';

interface Props {
  results: YearlyResult[];
  sensitivityResults?: OutputModSensitivity;
  sensitivityChartRef: React.MutableRefObject<any>;
  system: String;
}

export const ResultsCharts = (props: Props) => {
  const renderCostCharts = () => {
    const data = props.results.map(result => {
      return {
        name: result.year,
        harvestCosts: formatNumber(result.harvestCostPerDryTon),
        transportationCosts: formatNumber(result.transportationCostPerDryTon),
        moveInCosts: formatNumber(result.moveInCostPerDryTon),
        total: formatNumber(result.feedstockCostPerTon)
      };
    });
    return (
      <>
        <h3>Delivered Cost of Feedstock</h3>
        <ComposedChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 20,
            bottom: 20
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey='harvestCosts'
            name='Harvest Cost'
            stackId='1'
            stroke='#8884d8'
            fill='#8884d8'
            unit='$/BDMT'
          />
          <Area
            type='monotone'
            dataKey='transportationCosts'
            name='Transport Cost'
            stackId='1'
            stroke='#82ca9d'
            fill='#82ca9d'
            unit='$/BDMT'
          />
          {props.system === 'Ground-Based CTL' && (
          <Area
            type='monotone'
            dataKey='moveInCosts'
            name='Move-in Cost'
            stackId='1'
            stroke='#ffc658'
            fill='#ffc658'
            unit='$/BDMT'
          />
          )}
          <Line
            type='monotone'
            dataKey='total'
            name='Feedstock Cost'
            stroke='#ff7300'
            unit='$/BDMT'
          />
        </ComposedChart>
        {props.sensitivityResults && <></>}
      </>
    );
  };

  return (
    <>
      {renderCostCharts()}
    </>
  );
};
