import React, { createRef, useState, useEffect } from 'react';
import { Map, TileLayer, Marker, GeoJSON } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { FeatureCollection, Feature } from 'geojson';
import { InputContainer } from '../Inputs/InputContainer';
import {
  FrcsInputs,
  TechnoeconomicModels,
  YearlyResult,
  RequestParams,
  MapCoordinates,
  RequestParamsAllYears,
  AllYearsResults
} from '../../models/Types';
import {
  InputModGPO,
  InputModCHP,
  InputModGP,
  InputModSensitivity
} from '@ucdavis/tea/out/models/input.model';
import { InputModGPOClass } from '../../models/GPOClasses';
import { InputModCHPClass } from '../../models/CHPClasses';
import { InputModGPClass } from '../../models/GPClasses';
import { convertGeoJSON, convertLandingSiteGeoJSON } from '../Shared/util';
import { HexLayers } from './HexLayers';
import { HeatmapLayers } from './HeatmapLayers';
import { PaginationItem, PaginationLink, Pagination } from 'reactstrap';
import { ResultsContainer } from '../Results/ResultsContainer';
import { GeoJsonLayers } from './GeoJsonLayers';
import {
  calculateConstantLAC,
  calculateCurrentLAC,
  calculateEnergyRevenueRequiredPW,
  calculateSensitivity
} from '@ucdavis/tea';
import { OutputModSensitivity } from '@ucdavis/tea/out/models/output.model';

export const MapContainer = () => {
  const [loading, toggleLoading] = useState<boolean>(false);
  const [allYearResults, setAllYearResults] = useState<AllYearsResults>();
  const [yearlyResults, setYearlyResults] = useState<YearlyResult[]>([]);
  const [sensitvityResults, setSensitivityResults] = useState<
    OutputModSensitivity
  >();
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(-1);
  const [showResults, toggleShowResults] = useState<boolean>(false);
  const [geoJsonResults, setGeoJsonResults] = useState<FeatureCollection[]>([]);
  const [geoJsonShapeResults, setGeoJsonShapeResults] = useState<
    FeatureCollection[]
  >([]);

  const [mapOverlayType, setMapOverlayType] = useState<string>('heatmap');

  const frcsInputsExample: FrcsInputs = {
    system: 'Ground-Based Mech WT',
    treatmentid: 1,
    dieselFuelPrice: 3.251
  };
  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);
  const years = [2020, 2021, 2022, 2023, 2024, 2025];

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

  const [mapState, setMapState] = useState<MapCoordinates>({
    lat: 39.644308,
    lng: -121.553971
  });
  let mapRef: any = createRef<Map>();

  const submitInputs = async () => {
    toggleLoading(true);
    // first do initial processing to get TEA and substation results
    const lat = mapState.lat;
    const lng = mapState.lng;
    // TODO: fill out obj
    const allYearInputs: RequestParamsAllYears = {
      facilityLat: lat,
      facilityLng: lng,
      transmission: {
        VoltageClass: '230 kV Single Circuit',
        ConductorType: 'ACSS',
        Structure: 'Lattice',
        LengthCategory: '> 10 miles',
        NewOrReconductor: 'New',
        AverageTerrainMultiplier: 1,
        Miles: {
          Forested: 0,
          Flat: 0,
          Wetland: 0,
          Farmland: 0,
          Desert: 0,
          Urban: 0,
          Hills: 0,
          Mountain: 0,
          Zone1: 0,
          Zone2: 0,
          Zone3: 1,
          Zone4: 0,
          Zone5: 0,
          Zone6: 0,
          Zone7: 0,
          Zone8: 0,
          Zone9: 0,
          Zone10: 0,
          Zone11: 0,
          Zone12: 0
        }
      },
      teaModel: teaModel,
      teaInputs: teaInputs,
      includeUnloadingCost: true,
      unloadingCost: 10000 // default to 10,000
    };
    const allYearResults: AllYearsResults = await fetch(
      // 'http://localhost:3000/initialProcessing',
      'https://cecdss-backend.azurewebsites.net/initialProcessing',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(allYearInputs),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json());
    setAllYearResults(allYearResults);
    setSelectedYearIndex(years.length);

    let radius = 0;
    let clusterIds: string[] = [];
    let errorIds: string[] = [];
    let energyRevenueRequiredPresentYears: number[] = [];
    for (let index = 0; index < years.length; index++) {
      console.log(
        `year: ${years[index]}, # of clusters: ${clusterIds.length}, # of error clusters: ${errorIds.length}`
      );
      const reqBody: RequestParams = {
        lat,
        lng,
        system: frcsInputs.system,
        treatmentid: frcsInputs.treatmentid,
        dieselFuelPrice: frcsInputs.dieselFuelPrice,
        biomassTarget: allYearResults.biomassTarget,
        year: years[index],
        clusterIds,
        errorIds,
        radius,
        teaModel: teaModel,
        annualGeneration: allYearResults.annualGeneration,
        moistureContent: 0, // TODO: link with state
        cashFlow: allYearResults.teaResults.AnnualCashFlows[index]
      };
      console.log(JSON.stringify(reqBody));
      const yearResult: YearlyResult = await fetch(
        // 'http://localhost:3000/process',
        'https://cecdss-backend.azurewebsites.net/process',
        {
          mode: 'cors',
          method: 'POST',
          body: JSON.stringify(reqBody),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => res.json());
      radius = yearResult.radius;
      clusterIds.push(...yearResult.clusterNumbers);
      errorIds.push(...yearResult.errorClusterNumbers);
      // TODO: clean up TEA output models
      const cashFlow: any = allYearResults.teaResults.AnnualCashFlows[index];
      if (teaModel === 'GP') {
        cashFlow.BiomassFuelCost = yearResult.fuelCost;
      } else {
        cashFlow.FuelCost = yearResult.fuelCost;
      }
      cashFlow.EnergyRevenueRequired = yearResult.energyRevenueRequired;
      const energyRevenueRequiredPresent = calculateEnergyRevenueRequiredPW(
        index + 1,
        allYearInputs.teaInputs.Financing.CostOfEquity,
        yearResult.energyRevenueRequired
      );
      energyRevenueRequiredPresentYears.push(energyRevenueRequiredPresent);
      const geoJsonClusters: Feature[] = convertGeoJSON(yearResult.clusters);
      setGeoJsonResults(results => [
        ...results,
        {
          type: 'FeatureCollection',
          features: geoJsonClusters
        }
      ]);
      setGeoJsonShapeResults(results => [...results, yearResult.geoJson]);

      setYearlyResults(results => [...results, yearResult]);
      toggleLoading(false);
      toggleShowResults(true);
    }
    // get current LAC
    const totalPresentWorth = energyRevenueRequiredPresentYears.reduce(
      (a, b) => a + b,
      0
    );
    const currentLAC = calculateCurrentLAC(
      allYearInputs.teaInputs.Financing.CostOfEquity,
      allYearInputs.teaInputs.Financing.EconomicLife,
      totalPresentWorth,
      allYearResults.annualGeneration
    );
    allYearResults.teaResults.CurrentLAC.CurrentLACofEnergy = currentLAC;
    allYearResults.teaResults.CurrentLAC.TotalPresentWorth = totalPresentWorth;
    allYearResults.teaResults.CurrentLAC.PresentWorth = energyRevenueRequiredPresentYears;

    const constantLAC = calculateConstantLAC(
      allYearInputs.teaInputs.Financing.CostOfEquity,
      allYearInputs.teaInputs.EscalationInflation.GeneralInflation,
      allYearInputs.teaInputs.Financing.EconomicLife,
      totalPresentWorth,
      allYearResults.annualGeneration
    );
    allYearResults.teaResults.ConstantLAC.ConstantLACofEnergy = constantLAC;

    const sensitivityInputs: InputModSensitivity = {
      model: teaModel,
      input: teaInputs,
      CapitalCost: {
        base: 70000000,
        high: 200000000,
        low: 0
      },
      BiomassFuelCost: {
        base: 22.05,
        high: 100,
        low: 0
      },
      DebtRatio: {
        base: 75,
        high: 100,
        low: 0
      },
      DebtInterestRate: {
        base: 5,
        high: 15,
        low: 1
      },
      CostOfEquity: {
        base: 15,
        high: 50,
        low: 1
      },
      NetStationEfficiency: {
        base: 20,
        high: 50,
        low: 5
      },
      CapacityFactor: {
        base: 85,
        high: 100,
        low: 40
      }
    };
    const sensitivity = calculateSensitivity(sensitivityInputs);
    setSensitivityResults(sensitivity.output);
  };

  const accessToken =
    'pk.eyJ1IjoibGF1cmFob2xzdGVnZSIsImEiOiJjazZnc3U3c3gybWw5M25xamc2M2RnNTl2In0.Zcg_-cmP110dT_JzIN3QdA';
  const mapboxTiles =
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' +
    accessToken;
  const attribution =
    '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  const style = {
    height: window.innerHeight
  };
  const position: LatLngExpression = mapState;
  const bounds: LatLngBoundsExpression = [
    [40.1, -122.5],
    [39.2, -120]
  ];
  return (
    <div style={style}>
      <div
        id={yearlyResults.length > 0 || loading ? 'results-sidebar' : 'sidebar'}
      >
        {(yearlyResults.length > 0 || loading) && (
          <>
            <Pagination aria-label='Page navigation example' size='lg'>
              <PaginationItem>
                <PaginationLink
                  key='inputs'
                  onClick={() => toggleShowResults(false)}
                >
                  Inputs
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  key='finalResults'
                  onClick={() => toggleShowResults(true)}
                >
                  Results
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </>
        )}
        {!showResults && (
          <InputContainer
            mapInputs={mapState}
            setMapInputs={setMapState}
            frcsInputs={frcsInputs}
            setFrcsInputs={setFrcsInputs}
            teaInputs={teaInputs}
            setTeaInputs={setTeaInputs}
            teaModel={teaModel}
            setTeaModel={setTeaModel}
            submitInputs={() => submitInputs()}
            loading={loading}
            disabled={yearlyResults.length > 0 || loading}
          />
        )}
        {showResults && !!allYearResults && (
          <ResultsContainer
            allYearResults={allYearResults}
            yearlyResults={yearlyResults}
            years={years}
            selectedYearIndex={selectedYearIndex}
            setSelectedYearIndex={setSelectedYearIndex}
            mapOverlayType={mapOverlayType}
            setMapOverlayType={setMapOverlayType}
            teaInputs={teaInputs}
            teaModel={teaModel}
            frcsInputs={frcsInputs}
          />
        )}
      </div>
      <Map
        ref={mapRef}
        onClick={(e: any) => {
          !loading && yearlyResults.length === 0 && setMapState(e.latlng);
        }}
        bounds={bounds}
      >
        <TileLayer attribution={attribution} url={mapboxTiles} />
        {geoJsonResults.length > 0 && mapOverlayType === 'hexbin' && (
          <HexLayers
            yearlyGeoJson={geoJsonResults}
            selectedYearIndex={selectedYearIndex}
          />
        )}
        {geoJsonResults.length > 0 && mapOverlayType === 'heatmap' && (
          <HeatmapLayers
            years={years}
            yearlyGeoJson={geoJsonResults}
            selectedYearIndex={selectedYearIndex}
          />
        )}
        {yearlyResults.length > 0 && (
          <>
            <GeoJsonLayers
              years={years}
              yearlyGeoJson={geoJsonShapeResults}
              selectedYearIndex={selectedYearIndex}
            />
          </>
        )}
        <Marker position={position} />
      </Map>
    </div>
  );
};
