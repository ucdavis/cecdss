import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { MapContainer } from './components/Map/MapContainer';
import { ResultsContainer } from './components/Results/ResultsContainer';
import { Inputs, Outputs, TechnoEconomicAssessmentInputs } from './Types';
import 'isomorphic-fetch';

const App = () => {
  const [inputs, setInputs] = useState<Inputs>({
    TechnoEconomicAssessmentInputs: technoEconomicInputsExample,
    ExampleParameters: otherInputsExample
  });

  const [outputs, setOutputs] = useState<Outputs>();

  const submitInputs = async () => {
    console.log(JSON.stringify(inputs.TechnoEconomicAssessmentInputs));
    const technoOutput = await fetch(
      'https://technoeconomic-assessment.azurewebsites.net/tearun',
      {
        method: 'POST',
        body: JSON.stringify(inputs.TechnoEconomicAssessmentInputs),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json());
    console.log('OUTPUT');
    console.log(technoOutput);
    setOutputs({ TechnoEconomicAssessmentOutputs: technoOutput });
  };

  return (
    <div className='App'>
      {/* <Route
        exact
        path='/'
        render={() => (
          <MapContainer
            inputs={inputs}
            setInputs={setInputs}
            submitInputs={submitInputs}
          />
        )}
      />
      <Route
        path='/results'
        render={() =>
          outputs ? <ResultsContainer results={outputs} /> : <div>ERROR</div>
        }
      /> */}
      {!outputs && (
        <MapContainer
          inputs={inputs}
          setInputs={setInputs}
          submitInputs={submitInputs}
        />
      )}
      {outputs && <ResultsContainer results={outputs} />}
    </div>
  );
};

export default App;

const technoEconomicInputsExample: TechnoEconomicAssessmentInputs = {
  model: 'generic-power-only',
  CapitalCost: 70000000,
  NetPlantCapacity: 25000,
  CapacityFactor: 85,
  NetStationEfficiency: 20,
  FuelHeatingValue: 18608,
  FuelAshConcentration: 5,

  FuelCost: 22.05,
  LaborCost: 2000000,
  MaintenanceCost: 1500000,
  InsurancePropertyTax: 1400000,
  Utilities: 200000,
  AshDisposal: 100000,
  Management: 200000,
  OtherOperatingExpenses: 400000,

  FederalTaxRate: 34,
  StateTaxRate: 9.6,
  ProductionTaxCredit: 0.009,

  DebtRatio: 75,
  InterestRateOnDebt: 5,
  EconomicLife: 20,
  CostOfEquity: 15,

  CapacityPayment: 166,
  InterestRateonDebtReserve: 5,

  GeneralInflation: 2.1,
  EscalationFuel: 2.1,
  EscalationForProductionTaxCredit: 2.1,
  EscalationOther: 2.1,

  TaxCreditFrac: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

const otherInputsExample = {
  capacity: '5',
  radius: 0,
  treeManagement: 'Thin from below',
  conversion: 'Direct-combustion & steam turbine(3-50MW)',
  debtRatio: '2:1',
  interest: '12',
  debtTerm: '10',
  lifeOfProject: '25'
};
