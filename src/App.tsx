import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { MapContainer } from './components/Map/MapContainer';
import { ResultsContainer } from './components/Results/ResultsContainer';
import {
  TechnoeconomicAssessmentInputs,
  TechnoeconomicModels,
  TechnoeconomicAssessmentOutputs,
  FrcsInputs,
  FrcsClusterOutput,
  Outputs
} from './models/Types';
import 'isomorphic-fetch';
import { OutputModGPO } from './models/TechnoeconomicOutputs';
import { GenericPowerOnlyInputMod } from './models/TechnoeconomicInputs';

const App = () => {
  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);

  const [teaInputs, setTeaInputs] = useState<TechnoeconomicAssessmentInputs>(
    technoeconomicInputsExample
  );

  const [outputs, setOutputs] = useState<Outputs>();

  const submitInputs = async (lat: number, lng: number) => {
    console.log('frcs output....');
    console.log(
      'lat: ' + lat + ' lng: ' + lng + ' radius: ' + frcsInputs.radius
    );
    const reqBody = JSON.stringify({
      lat: lat,
      lng: lng,
      radius: frcsInputs.radius,
      system: frcsInputs.system,
      teaInputs: teaInputs.genericPowerOnly
    });
    console.log(reqBody);
    const outputs: Outputs = await fetch('http://localhost:3000/process', {
      mode: 'cors',
      method: 'POST',
      body: reqBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    console.log(outputs);

    setOutputs(outputs);
  };

  return (
    <div className='App'>
      <Route
        exact
        path='/'
        render={() => (
          <MapContainer
            frcsInputs={frcsInputs}
            setFrcsInputs={setFrcsInputs}
            teaInputs={teaInputs}
            setTeaInputs={setTeaInputs}
            submitInputs={submitInputs}
          />
        )}
      />
      <Route
        path='/results'
        render={() =>
          outputs ? (
            <ResultsContainer
              frcsInputs={frcsInputs}
              teaInputs={teaInputs}
              outputs={outputs}
            />
          ) : (
            <div>ERROR</div>
          )
        }
      />
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

const frcsInputsExample: FrcsInputs = {
  system: 'Ground-Based Mech WT',
  radius: 50,
  treatment: 'clearcut'
};
