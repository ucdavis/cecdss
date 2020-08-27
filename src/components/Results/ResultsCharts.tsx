import React from 'react';
import { YearlyResult } from '../../models/Types';
import {
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryStack,
  VictoryArea
} from 'victory';

interface Props {
  results: YearlyResult[];
}

export const ResultsCharts = (props: Props) => {
  const harvestCosts = props.results.map(result => {
    return {
      x: result.year.toString(),
      y: result.totalResidueCost / result.totalBiomass
    };
  });
  const transportationCosts = props.results.map(result => {
    return {
      x: result.year.toString(),
      y: result.totalTransportationCost / result.totalBiomass
    };
  });
  const moveInCosts = props.results.map(result => {
    return {
      x: result.year.toString(),
      y: result.totalMoveInCost / result.totalBiomass
    };
  });
  const fuelCosts = props.results.map(result => {
    return { x: result.year.toString(), y: result.fuelCost };
  });
  const currentLAC = props.results.map(result => {
    return {
      x: result.year.toString(),
      y: result.teaResults.CurrentLAC.CurrentLACofEnergy
    };
  });
  return (
    <>
      <VictoryChart>
        <VictoryLine
          style={{
            parent: { border: '1px solid #ccc' }
          }}
          data={currentLAC}
        />
      </VictoryChart>
      <VictoryChart>
        <VictoryStack colorScale={['tomato', 'orange', 'gold']}>
          <VictoryArea data={harvestCosts} />
          <VictoryArea data={transportationCosts} />
          <VictoryArea data={moveInCosts} />
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
