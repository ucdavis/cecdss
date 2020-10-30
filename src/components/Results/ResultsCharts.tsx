import React from 'react';
import { YearlyResult } from '../../models/Types';
import {
  VictoryChart,
  VictoryPortal,
  VictoryLine,
  VictoryStack,
  VictoryArea,
  VictoryLabel
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
  return (
    <>
      <VictoryChart>
        <VictoryStack
          colorScale={['tomato', 'orange', 'gold']}
          // labels={['harvest costs', 'fuel costs']}
          // labelComponent={
          //   <VictoryPortal>
          //     <CustomLabelComponent />
          //   </VictoryPortal>
          // }
        >
          <VictoryArea
            data={harvestCosts}
            label='harvest cost'
            labelComponent={
              <VictoryPortal>
                <VictoryLabel />
              </VictoryPortal>
            }
          />
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
