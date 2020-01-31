import React from 'react';
import {
  OutputModGPO,
  CashFlowGPO
} from '../../../../models/TechnoeconomicOutputs';
import { ElectricalAndFuelBaseYear } from '../ElectricalAndFuelBaseYear';
import { GenericPowerOnlyInputMod } from '../../../../models/TechnoeconomicInputs';
import {
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryStack,
  VictoryBar
} from 'victory';

interface Props {
  inputs: GenericPowerOnlyInputMod;
  results: OutputModGPO;
}

export const GPOCharts = (props: Props) => {
  return (
    <div className='chart-container'>
      <div className='chart'>
        <VictoryChart height={400} width={400}>
          <VictoryLine
            data={props.results.AnnualCashFlows}
            x={(d: CashFlowGPO) => d.Shared.IncomeCapacity}
            y={(d: CashFlowGPO) => d.Shared.Year}
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
          standalone={false}
          width={150}
          height={150}
          data={[
            { x: 'Labor', y: props.inputs.LaborCost },
            { x: 'Maintenance', y: props.inputs.MaintenanceCost },
            { x: 'Management', y: props.inputs.Management },
            { x: 'Other', y: props.inputs.OtherOperatingExpenses },
            { x: 'Fuel', y: props.inputs.FuelCost }
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
  );
};
