import React from 'react';
import { YearlyResult } from '../../models/Types';
import {
  VictoryChart,
  VictoryPortal,
  VictoryLine,
  VictoryStack,
  VictoryArea,
  VictoryLabel,
  VictoryLegend
} from 'victory';

interface Props {
  results: YearlyResult[];
}

export const ResultsCharts = (props: Props) => {
  const harvestCosts = props.results.map(result => {
    return {
      x: result.year.toString(),
      y: result.totalFeedstockCost / result.totalFeedstock
    };
  });
  const transportationCosts = props.results.map(result => {
    return {
      x: result.year.toString(),
      y: result.totalTransportationCost / result.totalFeedstock
    };
  });
  const moveInCosts = props.results.map(result => {
    if (result.totalMoveInCost === 0) {
      return null;
    }
    return {
      x: result.year.toString(),
      y: result.totalMoveInCost / result.totalFeedstock
    };
  });
  const fuelCosts = props.results.map(result => {
    return { x: result.year.toString(), y: result.fuelCost };
  });
  const maxDomain = Math.max(...fuelCosts.map(cost => cost.y)) + 20;
  return (
    <>
      <VictoryChart domain={{ y: [0, maxDomain] }}>
        <VictoryLegend
          centerTitle
          orientation='horizontal'
          x={50}
          y={50}
          data={[
            { name: 'Harvest', symbol: { fill: 'tomato' } },
            { name: 'Transportation', symbol: { fill: 'orange' } },
            { name: 'Move In', symbol: { fill: 'gold' } },
            { name: 'Fuel', symbol: { fill: 'black' } }
          ]}
        />
        <VictoryStack colorScale={['tomato', 'orange', 'gold']}>
          <VictoryArea data={harvestCosts} label='harvest cost' />
          <VictoryArea data={transportationCosts} />
          {moveInCosts && (
            <VictoryArea data={moveInCosts} label='moveInCosts' />
          )}
        </VictoryStack>
        <VictoryLine
          style={{
            parent: { border: '1px solid #ccc' }
          }}
          data={fuelCosts}
        />
      </VictoryChart>
    </>
  );
};

function CustomLabelComponent(props: any) {
  const text = `${Math.round(props.datum.y)}%`;
  return (
    <g>
      <VictoryLabel
        {...props}
        textAnchor='middle'
        verticalAnchor='middle'
        text={text}
        angle={0}
        dy={0}
        dx={-10}
        style={{
          fontSize: 5,
          fill: 'white'
        }}
        renderInPortal={true}
      />
    </g>
  );
}
