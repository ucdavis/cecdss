import React, { useState } from 'react';
import { FrcsOutputs } from '../../models/Types';
import { Button } from 'reactstrap';


interface Props {
  results: FrcsOutputs;
}

interface State { 
    viewClusters: boolean;
}

export const FrcsResultsContainer = (props: Props) => {
    const [inputs, setInputs] = useState<State>({
        viewClusters: false
      });
    
  return (
    <div>
        <h2>Fuel Reduction Cost Simulator Results</h2>
        <table>
            <tbody>
                <tr>
                    <td>Total Biomass Available</td>
                    <td>{props.results.totalBiomass}</td>
                </tr>
                <tr>
                    <td>Total Cost</td>
                    <td>{props.results.totalCost}</td>
                </tr>
                <tr>
                    <td>Total Area</td>
                    <td>{props.results.totalArea}</td>
                </tr>
            </tbody>
        </table>
        <Button onClick={() => {setInputs({viewClusters: !inputs.viewClusters})}}></Button>
        {inputs.viewClusters && <div>
            <h3>Clusters</h3>
            <table>
                <thead>
                    <tr>
                        <th>Cluster No</th>
                        <th>Biomass</th>
                        <th>Cost</th>
                        <th>Area</th>
                        <th>Distance</th>
                        <th>Total Per Acre</th>
                        <th>Total Per Bole CCF</th>
                        <th>Total Per GT</th>
                    </tr>
                </thead>
                <tbody>
                {props.results.clusters.map(cluster => {
                    return(
                    <tr key={cluster.cluster_no}>
                        <td>{cluster.cluster_no}</td>
                        <td>{cluster.biomass}</td>
                        <td>{cluster.cost}</td>
                        <td>{cluster.area}</td>
                        <td>{cluster.distance}</td>
                        <td>{cluster.frcsResult.TotalPerAcre}</td>
                        <td>{cluster.frcsResult.TotalPerBoleCCF}</td>
                        <td>{cluster.frcsResult.TotalPerGT}</td>
                    </tr>);
                })}
                </tbody>
            </table>
        </div>}
    </div>
  );
};
