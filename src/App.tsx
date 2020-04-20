import React, { Component, useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { MapContainer } from './components/Map/MapContainer';
import { ResultsContainer } from './components/Results/ResultsContainer';
import {
  TechnoeconomicModels,
  FrcsInputs,
  Results,
  InputModGPOClass,
  InputModCHPClass
} from './models/Types';
import 'isomorphic-fetch';
import {
  OutputModGPO,
  OutputModCHP
} from '@ucdavis/tea/out/models/output.model';
import { InputModGPO, InputModCHP } from '@ucdavis/tea/out/models/input.model';

const App = () => {
  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);

  const [teaInputs, setTeaInputs] = useState<InputModGPO | InputModCHP>(
    new InputModGPOClass()
  );
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
  }, [teaModel]);

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
      teaModel: teaModel,
      teaInputs: teaInputs
    });
    console.log(reqBody);
    const results: Results = await fetch(
      // 'http://localhost:3000/process',
      'https://cecdss-backend.azurewebsites.net/process',
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
            teaModel={teaModel}
            setTeaModel={setTeaModel}
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
              teaModel={teaModel}
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

const frcsInputsExample: FrcsInputs = {
  system: 'Ground-Based Mech WT',
  radius: 5,
  treatment: 'clearcut'
};
