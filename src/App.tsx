import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { MapContainer } from './components/Map/MapContainer';
import { ResultsContainer } from './components/Results/ResultsContainer';
import {
  Inputs,
  TechnoeconomicAssessmentInputs,
  TechnoeconomicModels,
  TechnoeconomicAssessmentOutputs
} from './models/Types';
import 'isomorphic-fetch';
import { OutputModGPO } from './models/TechnoeconomicOutputs';
import { GenericPowerOnlyInputMod } from './models/TechnoeconomicInputs';

const App = () => {
  const [inputs, setInputs] = useState<Inputs>({
    TechnoeconomicAssessmentInputs: technoeconomicInputsExample,
    ExampleParameters: otherInputsExample
  });

  const [technoeconomicOutputs, setTechnoeconomicOutputs] = useState<
    TechnoeconomicAssessmentOutputs
  >();

  const submitInputs = async () => {
    let url = 'https://technoeconomic-assessment.azurewebsites.net/';
    let body = null;
    if (
      inputs.TechnoeconomicAssessmentInputs.model ===
      TechnoeconomicModels.genericPowerOnly
    ) {
      url += TechnoeconomicModels.genericPowerOnly;
      body = inputs.TechnoeconomicAssessmentInputs.genericPowerOnly || null;
      console.log(url);
      console.log(JSON.stringify(body));
    }
    if (!url || !body) {
      console.log('ERROR');
      return;
    }
    const technoOutput: OutputModGPO = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    console.log('OUTPUT');
    console.log(technoOutput);
    setTechnoeconomicOutputs({
      [inputs.TechnoeconomicAssessmentInputs.model]: technoOutput
    });
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
      {!technoeconomicOutputs && (
        <MapContainer
          inputs={inputs}
          setInputs={setInputs}
          submitInputs={submitInputs}
        />
      )}
      {technoeconomicOutputs && (
        <ResultsContainer
          inputs={inputs}
          technoeconomicModel={inputs.TechnoeconomicAssessmentInputs.model}
          technoeconomicOutputs={technoeconomicOutputs}
        />
      )}
    </div>
  );
};

export default App;

const defaultValue: GenericPowerOnlyInputMod = {
  CapitalCost: 70000000,
  NetElectricalCapacity: 25000,
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
  EscalationProductionTaxCredit: 2.1,
  EscalationOther: 2.1,
  TaxCreditFrac: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

const technoeconomicInputsExample: TechnoeconomicAssessmentInputs = {
  model: 'genericPowerOnly',
  genericPowerOnly: defaultValue
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
