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

export const ResultsContainer = (props: Props) => {
  const harvestCosts = props.results.map(result => {
    return { x: result.year, y: result.totalResidueCost / result.totalBiomass };
  });
  const transportationCosts = props.results.map(result => {
    return {
      x: result.year,
      y: result.totalTransportationCost / result.totalBiomass
    };
  });
  const fuelCosts = props.results.map(result => {
    return { x: result.year, y: result.fuelCost };
  });
  const currentLAC = props.results.map(result => {
    return {
      x: result.year,
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
          data={harvestCosts}
        />
      </VictoryChart>
      <VictoryChart>
        <VictoryLine
          style={{
            parent: { border: '1px solid #ccc' }
          }}
          data={transportationCosts}
        />
      </VictoryChart>
      <VictoryChart>
        <VictoryLine
          style={{
            parent: { border: '1px solid #ccc' }
          }}
          data={fuelCosts}
        />
      </VictoryChart>
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
