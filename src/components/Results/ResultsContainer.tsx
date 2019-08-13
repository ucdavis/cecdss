import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryPie,
  VictoryStack,
  VictoryArea,
  VictoryBar
} from 'victory';

export const ResultsContainer = (results: any) => {
  console.log('RESULTS');
  console.log(results);
  return (
    <div>
      <h1>Results</h1>
      <div>
        <h3>Costs</h3>
        <p>
          <label>Total installed cost:</label> $25,000
        </p>
        <p>
          <label>LCOE</label> $195/MWh
        </p>
      </div>
      <div>
        <h3>Biomass availability</h3>
        <p>
          <label>Total biomass availability in area</label> 100,000 BDT/y
        </p>
        <p>
          <label>Total biomass required per yer</label> 40,000 BDT/y
        </p>
      </div>
      <div className='chart-container'>
        <div className='chart'>
          <VictoryChart height={400} width={400}>
            <VictoryLine
              data={[{ x: 1 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]}
              y={d => Math.exp(d.x)}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              interpolation='natural'
            />
          </VictoryChart>
        </div>
        <div className='chart'>
          <VictoryPie
            data={[
              { x: 1, y: 2, label: 'one' },
              { x: 2, y: 3, label: 'two' },
              { x: 3, y: 5, label: 'three' }
            ]}
            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            animate={{
              duration: 2000
            }}
          />
        </div>
        <div className='chart'>
          <VictoryStack
            colorScale={['tomato', 'orange', 'gold']}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
          >
            <VictoryBar
              data={[{ x: 'a', y: 2 }, { x: 'b', y: 3 }, { x: 'c', y: 5 }]}
            />
            <VictoryBar
              data={[{ x: 'a', y: 1 }, { x: 'b', y: 4 }, { x: 'c', y: 5 }]}
            />
            <VictoryBar
              data={[{ x: 'a', y: 3 }, { x: 'b', y: 2 }, { x: 'c', y: 6 }]}
            />
          </VictoryStack>
        </div>
      </div>
    </div>
  );
};
