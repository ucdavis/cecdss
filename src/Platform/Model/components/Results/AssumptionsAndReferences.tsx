import React from 'react';
import { AllYearsResults, FrcsInputs, YearlyResult } from '../../Models/Types';
import { Alert, Table } from 'reactstrap';

export const AssumptionsAndReferences = () => {
  const renderAssumptionsTable = () => {
    return (
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Assumptions</th>
            <td>Unit</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Log length</td>
            <td>feet</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Load weight (logs)</td>
            <td>green tons</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Load weight (chips)</td>
            <td>green tons</td>
            <td>25</td>
          </tr>
          <tr>
            <td>CTL trail spacing</td>
            <td>feet</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Hardwood cost premium, fraction</td>
            <td></td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Hardwood fraction of chip trees</td>
            <td></td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Hardwood fraction of small log trees</td>
            <td></td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Hardwood fraction of large log trees</td>
            <td></td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Truck oil cost</td>
            <td>$/mile</td>
            <td>0.35</td>
          </tr>
          <tr>
            <td>Truck driver benefits and overhead</td>
            <td></td>
            <td>67%</td>
          </tr>
          <tr>
            <td>Truck fuel consumption rate</td>
            <td>miles/gallon</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Truck driver wage (2020)</td>
            <td>$/hour</td>
            <td>22.66</td>
          </tr>
          <tr>
            <td>Truck payload capacity</td>
            <td>green tons</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  const renderKeyReferencesTable = () => {
    return (
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Key References</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fuel Reduction Cost Simulator</td>
          </tr>
          <tr>
            <td>Advanced Hardwood Biofuels Northwest</td>
          </tr>
          <tr>
            <td>California Biomass Collaborative</td>
          </tr>
          <tr>
            <td>
              Emissions and Generation Resource Integrated Database (eGRID)
            </td>
          </tr>
          <tr>
            <td>
              The Greenhouse gases, Regulated Emissions, and Energy use in
              Technologies Model (GREET 2021)
            </td>
          </tr>
          <tr>
            <td>CA-GREET3.0 Model</td>
          </tr>
          <tr>
            <td>California Air Resources Board Emission Factor (EMFAC 2021)</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <div className='results-table'>{renderAssumptionsTable()}</div>
      <div className='results-table'>{renderKeyReferencesTable()}</div>
      <Alert color='secondary'>
        Results are estimates only and no guarantees are made that actual
        project performance will match, and they do not necessarily reflect the
        views and policies of the California Energy Commission.
      </Alert>
    </>
  );
};
