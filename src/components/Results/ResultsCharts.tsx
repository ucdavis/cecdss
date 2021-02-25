import React from 'react';
import { YearlyResult } from '../../models/Types';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Label,
  Legend,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from 'recharts';
import { VictoryLabel } from 'victory';
import { formatNumber } from '../Shared/util';
import { OutputModSensitivity } from '@ucdavis/tea/out/models/output.model';

interface Props {
  results: YearlyResult[];
  sensitivityResults?: OutputModSensitivity;
}

export const ResultsCharts = (props: Props) => {
  const renderCostCharts = () => {
    const data = props.results.map(result => {
      return {
        name: result.year,
        harvestCosts: formatNumber(
          result.totalFeedstockCost / result.totalFeedstock
        ),
        transportationCosts: formatNumber(
          result.totalTransportationCost / result.totalFeedstock
        ),
        moveInCosts: formatNumber(
          result.totalMoveInCost / result.totalFeedstock
        ),
        total: formatNumber(result.fuelCost)
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
            stackId='1'
            stroke='#8884d8'
            fill='#8884d8'
            unit='$/green ton'
          />
          <Area
            type='monotone'
            dataKey='transportationCosts'
            stackId='1'
            stroke='#82ca9d'
            fill='#82ca9d'
            unit='$/green ton'
          />
          <Area
            type='monotone'
            dataKey='moveInCosts'
            stackId='1'
            stroke='#ffc658'
            fill='#ffc658'
            unit='$/green ton'
          />
          <Line
            type='monotone'
            dataKey='total'
            stroke='#ff7300'
            unit='$/green ton'
          />
        </ComposedChart>
        {props.sensitivityResults && <></>}
      </>
    );
  };

  const renderSensitivityCharts = () => {
    if (!props.sensitivityResults) {
      return null;
    }
    const capitalCost = [];
    const fuelCost = [];
    const debtRatio = [];
    const debtInterestRate = [];
    const costOfEquity = [];
    const netEfficiency = [];
    const capacityFactor = [];
    for (
      let index = 0;
      index < props.sensitivityResults.CapitalCost.relativeChangeCOE.length;
      index++
    ) {
      capitalCost.push({
        coe: formatNumber(
          props.sensitivityResults.CapitalCost.relativeChangeCOE[index]
        ),
        relativeChange: formatNumber(
          props.sensitivityResults.CapitalCost.relativeChange[index]
        )
      });
      fuelCost.push({
        coe: formatNumber(
          props.sensitivityResults.BiomassFuelCost.relativeChangeCOE[index]
        ),
        relativeChange: formatNumber(
          props.sensitivityResults.BiomassFuelCost.relativeChange[index]
        )
      });
      debtRatio.push({
        coe: formatNumber(
          props.sensitivityResults.DebtRatio.relativeChangeCOE[index]
        ),
        relativeChange: formatNumber(
          props.sensitivityResults.DebtRatio.relativeChange[index]
        )
      });
      debtInterestRate.push({
        coe: formatNumber(
          props.sensitivityResults.DebtInterestRate.relativeChangeCOE[index]
        ),
        relativeChange: formatNumber(
          props.sensitivityResults.DebtInterestRate.relativeChange[index]
        )
      });
      costOfEquity.push({
        coe: formatNumber(
          props.sensitivityResults.CostOfEquity.relativeChangeCOE[index]
        ),
        relativeChange: formatNumber(
          props.sensitivityResults.CostOfEquity.relativeChange[index]
        )
      });
      netEfficiency.push({
        coe: formatNumber(
          props.sensitivityResults.NetStationEfficiency.relativeChangeCOE[index]
        ),
        relativeChange: formatNumber(
          props.sensitivityResults.NetStationEfficiency.relativeChange[index]
        )
      });
      capacityFactor.push({
        coe: formatNumber(
          props.sensitivityResults.CapacityFactor.relativeChangeCOE[index]
        ),
        relativeChange: formatNumber(
          props.sensitivityResults.CapacityFactor.relativeChange[index]
        )
      });
    }

    const xRange = [-200,400];
    const yRange = [-100,250];
    return (
      <>
        <h3>Sensitivity Analysis</h3>
        <ScatterChart
          width={700}
          height={600}
          margin={{
            top: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey='relativeChange' domain={[xRange[0], xRange[1]]}>
            <Label value="% Relative Change" position="insideBottom" className="sensitivity-x-label" />
          </XAxis>
          <YAxis type="number" dataKey='coe' domain={[yRange[0], yRange[1]]}>
            <Label value="Relative Change in COE (%)" angle={-90} position="insideLeft" className="sensitivity-y-label" />
          </YAxis>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
          <Legend />
          <Scatter
            name='Capital Cost'
            data={capitalCost}
            fill='#4B0082'
            dataKey='coe'
            line
          />
          <Scatter
            name='Fuel Cost'
            data={fuelCost}
            fill='#8B008B'
            dataKey='coe'
            line
          />
          <Scatter
            name='Debt Ratio'
            data={debtRatio}
            fill='#FFD700'
            dataKey='coe'
            line
          />
          <Scatter
            name='Debt Interest Rate'
            data={debtInterestRate}
            fill='#CD5C5C'
            dataKey='coe'
            line
          />
          <Scatter
            name='Cost Of Equity'
            data={costOfEquity}
            fill='#800000'
            dataKey='coe'
            line
          />
          <Scatter
            name='Net Efficiency'
            data={netEfficiency}
            fill='#008B8B'
            dataKey='coe'
            line
          />
          <Scatter
            name='Capacity Factor'
            data={capacityFactor}
            fill='#00008B'
            dataKey='coe'
            line
          />
        </ScatterChart>
      </>
    );
  };

  return (
    <>
      {renderCostCharts()}
      {renderSensitivityCharts()}
    </>
  );
};
