import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryStack,
  VictoryBar,
  VictoryScatter,
  VictoryGroup
} from 'victory';
import { FrcsOutputs, FrcsClusterOutput } from '../../../models/Types';

interface Props {
  outputs: FrcsClusterOutput[];
}

export const FrcsClusterCharts = (props: Props) => {
  if (!props.outputs || props.outputs.length < 1) {
    return null;
  }
  console.log('0: ---------');
  console.log(props.outputs[0]);
  console.log('1: ---------');
  console.log(props.outputs[1]);
  console.log('2: ---------');
  console.log(props.outputs[2]);
  return (
    <div className='chart-container'>
      <div className='chart'>
        <VictoryChart
          animate={{
            duration: 2000,
            onLoad: { duration: 500 }
          }}
        >
          <VictoryScatter
            width={150}
            height={150}
            data={props.outputs}
            x={(d: FrcsClusterOutput) => d.biomass}
            y={(d: FrcsClusterOutput) => d.cost}
          />
        </VictoryChart>
      </div>
      {/* <div className='chart'>
        <VictoryChart>
          <VictoryScatter
            width={150}
            height={150}
            data={props.outputs}
            x={(d: FrcsClusterOutput) => d.}
            y={(d: FrcsClusterOutput) => d.cost}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
          />
        </VictoryChart>
      </div> */}
      <div className='chart'>
        <VictoryChart
          animate={{
            duration: 2000,
            onLoad: { duration: 500 }
          }}
        >
          <VictoryGroup offset={20} colorScale={'qualitative'}>
            <VictoryBar
              data={[
                {
                  y: props.outputs[0].frcsResult.TotalPerBoleCCF
                },
                {
                  y: props.outputs[1].frcsResult.TotalPerBoleCCF
                },
                {
                  y: props.outputs[2].frcsResult.TotalPerBoleCCF
                }
              ]}
            />
            <VictoryBar
              data={[
                {
                  y: props.outputs[0].frcsResult.TotalPerGT
                },
                {
                  y: props.outputs[1].frcsResult.TotalPerGT
                },
                {
                  y: props.outputs[2].frcsResult.TotalPerGT
                }
              ]}
            />
            <VictoryBar
              data={[
                {
                  y: props.outputs[0].frcsResult.TotalPerAcre
                },
                {
                  y: props.outputs[1].frcsResult.TotalPerAcre
                },
                {
                  y: props.outputs[2].frcsResult.TotalPerAcre
                }
              ]}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    </div>
  );
};
