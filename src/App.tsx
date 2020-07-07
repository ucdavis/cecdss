import React, { Component, useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { MapContainer } from './components/Map/MapContainer';
import { ResultsContainer } from './components/Results/ResultsContainer';
import { TechnoeconomicModels, FrcsInputs, Results } from './models/Types';
import 'isomorphic-fetch';
import {
  OutputModGPO,
  OutputModCHP,
  OutputModGP
} from '@ucdavis/tea/out/models/output.model';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { InputModGPOClass } from './models/GPOClasses';
import { InputModCHPClass } from './models/CHPClasses';
import { InputModGPClass } from './models/GPClasses';

const App = () => {
  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);

  const [teaInputs, setTeaInputs] = useState<
    InputModGPO | InputModCHP | InputModGP
  >(new InputModGPOClass());
  const [teaModel, setTeaModel] = useState(
    TechnoeconomicModels.genericPowerOnly
  );
  useEffect(() => {
    // when teaModel changes, change default values
    if (teaModel === TechnoeconomicModels.genericPowerOnly) {
      setTeaInputs(new InputModGPOClass());
    }
    if (teaModel === TechnoeconomicModels.genericCombinedHeatAndPower) {
      setTeaInputs(new InputModCHPClass());
    }
    if (teaModel === TechnoeconomicModels.gasificationPower) {
      setTeaInputs(new InputModGPClass());
    }
  }, [teaModel]);

  const [results, setResults] = useState<Results>();

  const submitInputs = async (lat: number, lng: number) => {
    const reqBody = JSON.stringify({
      lat: lat,
      lng: lng,
      radius: frcsInputs.radius,
      system: frcsInputs.system,
      treatmentid: frcsInputs.treatmentid,
      teaModel: teaModel,
      teaInputs: teaInputs
    });
    console.log(reqBody);
    const results: Results = await fetch(
      'http://localhost:3000/process',
      // 'https://cecdss-backend.azurewebsites.net/process',
      {
        mode: 'cors',
        method: 'POST',
        body: reqBody,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json());
    setResults(results);
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
            teaModel={teaModel}
            setTeaModel={setTeaModel}
            submitInputs={submitInputs}
          />
        )}
      />
      <Route
        path='/results'
        render={() =>
          !!results ? (
            <ResultsContainer
              teaInputs={teaInputs}
              teaModel={teaModel}
              results={results}
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

const frcsInputsExample: FrcsInputs = {
  system: 'Ground-Based Mech WT',
  radius: 5,
  treatmentid: 1
};
