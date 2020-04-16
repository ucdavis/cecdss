import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { MapContainer } from './components/Map/MapContainer';
import { ResultsContainer } from './components/Results/ResultsContainer';
import {
  TechnoeconomicAssessmentInputs,
  TechnoeconomicModels,
  FrcsInputs,
  ClusterResult,
  Results
} from './models/Types';
import 'isomorphic-fetch';
import {
  OutputModGPO,
  OutputModCHP
} from '@ucdavis/tea/out/models/output.model';
import { InputModGPO } from '@ucdavis/tea/out/models/input.model';

const App = () => {
  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);

  const [teaInputs, setTeaInputs] = useState<TechnoeconomicAssessmentInputs>(
    technoeconomicInputsExample
  );

  const [technoeconomicOutputs, setTechnoeconomicOutputs] = useState<
    OutputModGPO | OutputModCHP
  >();

  const [frcsOutputs, setFrcsOutputs] = useState<Results>();

  const submitInputs = async (lat: number, lng: number) => {
    const reqBody = JSON.stringify({
      lat: lat,
      lng: lng,
      radius: frcsInputs.radius,
      system: frcsInputs.system,
      teaModel: teaInputs.model,
      teaInputs: teaInputs.inputs
    });
    console.log(reqBody);
    const results: Results = await fetch(
      'http://localhost:3000/process',
      //'https://cecdss-backend.azurewebsites.net/process',
      {
        mode: 'cors',
        method: 'POST',
        body: reqBody,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json());

    setTechnoeconomicOutputs(results.teaResults);
    setFrcsOutputs({ ...results });
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
          technoeconomicOutputs && frcsOutputs ? (
            <ResultsContainer
              frcsInputs={frcsInputs}
              teaInputs={teaInputs}
              teaOutputs={technoeconomicOutputs}
              frcsOutputs={frcsOutputs}
            />
          ) : (
            <div>Loading results....</div>
          )
        }
      />
    </div>
  );
};

export default App;

const defaultValue: InputModGPO = {
  CapitalCost: 70000000,
  NetElectricalCapacity: 25000,
  CapacityFactor: 85,
  NetStationEfficiency: 20,
  MoistureContent: 50,
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
  model: TechnoeconomicModels.genericPowerOnly,
  inputs: defaultValue
};

const frcsInputsExample: FrcsInputs = {
  system: 'Ground-Based Mech WT',
  radius: 5,
  treatment: 'clearcut'
};
