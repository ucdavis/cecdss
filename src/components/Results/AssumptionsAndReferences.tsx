import React from 'react';
import { AllYearsResults, FrcsInputs, YearlyResult } from '../../models/Types';
import { Alert, Table } from 'reactstrap';

export const AssumptionsAndReferences = () => {
  const renderAssumptionsTable = () => {
    return (
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>Assumptions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Log Length, ft</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Loa dWeight, green tons (logs)</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Load Weight, green tons (chips)</td>
            <td>25</td>
          </tr>
          <tr>
            <td>CTL Trail Spacing, ft</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Hardwood Cost Premium, fraction</td>
            <td>0.2</td>
          </tr>
          <tr>
            <td>Residue Recovery Fraction for WT systems</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td>Residue Recovery Fraction for CTL</td>
            <td>0.5</td>
          </tr>
          <tr>
            <td>Hardwood Fraction CT</td>
            <td>0.2</td>
          </tr>
          <tr>
            <td>Hardwood Fraction SLT</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Hardwood Fraction LLT</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Feller/Bucker wage (2019)</td>
            <td>30.96</td>
          </tr>
          <tr>
            <td>All Others wage (2019)</td>
            <td>22.26</td>
          </tr>
          <tr>
            <td>Benefits and other payroll costsT</td>
            <td>35%</td>
          </tr>
          <tr>
            <td>OIL_ETC_COST ($/mile)</td>
            <td>0.35</td>
          </tr>
          <tr>
            <td>DRIVERS_PER_TRUCK </td>
            <td>1.67</td>
          </tr>
          <tr>
            <td>MILES_PER_GALLON</td>
            <td>6</td>
          </tr>
          <tr>
            <td>FUEL_COST ($/gallon)</td>
            <td>3.251</td>
          </tr>
          <tr>
            <td>TRUCK_LABOR ($/hr)</td>
            <td>23.29</td>
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
            <td>EPA eGrid</td>
          </tr>
          <tr>
            <td>GREET model </td>
          </tr>
          <tr>
            <td>Literature for emission factors</td>
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
