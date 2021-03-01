import React, { createRef, useState, useEffect } from 'react';
import { Map, TileLayer, Marker, GeoJSON } from 'react-leaflet';
import 'esri-leaflet-renderers'; // allows rendering feature layers using their defined renderers
import { DynamicMapLayer, FeatureLayer } from 'react-esri-leaflet/v2';
import EsriLeafletGeoSearch from 'react-esri-leaflet/v2/plugins/EsriLeafletGeoSearch';
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
import { HeatmapLayers } from './HeatmapLayers';
import { PaginationItem, PaginationLink, Button, Pagination } from 'reactstrap';
import { ResultsContainer } from '../Results/ResultsContainer';
import { GeoJsonLayers } from './GeoJsonLayers';
import {
  calculateConstantLAC,
  calculateCurrentLAC,
  calculateSensitivity
} from '@ucdavis/tea';
import { OutputModSensitivity } from '@ucdavis/tea/out/models/output.model';
import { ErrorGeoJsonLayers } from './ErrorGeoJsonLayers';
import { ExternalLayerSelection } from './ExternalLayerSelection';
import { serviceUrl } from '../Shared/config';

export const MapContainer = () => {
  const [loading, toggleLoading] = useState<boolean>(false);
  const [allYearResults, setAllYearResults] = useState<AllYearsResults>();
  const [yearlyResults, setYearlyResults] = useState<YearlyResult[]>([]);
  const [
    sensitvityResults,
    setSensitivityResults
  ] = useState<OutputModSensitivity>();
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(-1);
  const [showResults, toggleShowResults] = useState<boolean>(false);
  const [expandedResults, toggleExpandedResults] = useState<boolean>(false);
  const [geoJsonResults, setGeoJsonResults] = useState<FeatureCollection[]>([]);
  const [geoJsonShapeResults, setGeoJsonShapeResults] = useState<
    FeatureCollection[]
  >([]);
  const [errorGeoJsonShapeResults, setErrorGeoJsonShapeResults] = useState<
    FeatureCollection[]
  >([]);

  const [showGeoJson, toggleGeoJson] = useState<boolean>(true);
  const [showErrorGeoJson, toggleErrorGeoJson] = useState<boolean>(false);

  // external layers
  const [externalLayers, setExternalLayers] = useState<string[]>([]);

  const frcsInputsExample: FrcsInputs = {
    system: 'Ground-Based Mech WT',
    treatmentid: 1,
    dieselFuelPrice: 3.251
  };
  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);
  const years: number[] = [];
  for (let index = 0; index < 20; index++) {
    years.push(2020 + index);
  }
  console.log();

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
    lat: 38.77228705439114,
    lng: -120.36827087402345
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
      serviceUrl + 'initialProcessing',
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
    setTeaInputs(allYearResults.teaInputs);
    setSelectedYearIndex(years.length);

    // combine input values with default bounds for a the sensitivity analysis
    const sensitivityInputs: InputModSensitivity = {
      model: teaModel,
      input: teaInputs,
      CapitalCost: {
        high: 200000000,
        low: 0
      },
      BiomassFuelCost: {
        high: 100,
        low: 0
      },
      DebtRatio: {
        high: 100,
        low: 0
      },
      DebtInterestRate: {
        high: 15,
        low: 1
      },
      CostOfEquity: {
        high: 50,
        low: 1
      },
      NetStationEfficiency: {
        high: 50,
        low: 5
      },
      CapacityFactor: {
        high: 100,
        low: 40
      }
    };

    // the sensitivity calculation modifies the passed params, which isn't good so we deep copy them first
    const deepSensitivityInputs = JSON.parse(JSON.stringify(sensitivityInputs));
    const sensitivity = calculateSensitivity(deepSensitivityInputs);
    setSensitivityResults(sensitivity.output);

    console.log(sensitivityInputs);
    console.log(sensitivity);

    let radius = 0;
    let clusterIds: string[] = [];
    let errorIds: string[] = [];
    let energyRevenueRequiredPresentYears: number[] = [];
    let cashFlows: any[] = [];
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
        moistureContent:
          allYearResults.teaInputs.ElectricalFuelBaseYear.MoistureContent,
        cashFlow: allYearResults.teaResults.AnnualCashFlows[index],
        costOfEquity: allYearResults.teaInputs.Financing.CostOfEquity
      };
      console.log(JSON.stringify(reqBody));
      const yearResult: YearlyResult = await fetch(serviceUrl + 'process', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
      radius = yearResult.radius;
      clusterIds.push(...yearResult.clusterNumbers);
      errorIds.push(...yearResult.errorClusterNumbers);
      cashFlows.push(yearResult.cashFlow);
      energyRevenueRequiredPresentYears.push(
        yearResult.energyRevenueRequiredPW
      );
      const geoJsonClusters: Feature[] = convertGeoJSON(yearResult.clusters);
      setGeoJsonResults(results => [
        ...results,
        {
          type: 'FeatureCollection',
          features: geoJsonClusters
        }
      ]);
      setGeoJsonShapeResults(results => [...results, yearResult.geoJson]);
      setErrorGeoJsonShapeResults(results => [
        ...results,
        yearResult.errorGeoJson
      ]);

      setYearlyResults(results => [...results, yearResult]);
      toggleLoading(false);
      toggleShowResults(true);
      // TODO: update each year cashflow as it is done
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
    const allYearResultsCopy = { ...allYearResults };
    allYearResultsCopy.teaResults.AnnualCashFlows = cashFlows;
    allYearResultsCopy.teaResults.CurrentLAC.CurrentLACofEnergy = currentLAC;
    allYearResultsCopy.teaResults.CurrentLAC.TotalPresentWorth = totalPresentWorth;
    allYearResultsCopy.teaResults.CurrentLAC.PresentWorth = energyRevenueRequiredPresentYears;

    const constantLAC = calculateConstantLAC(
      allYearInputs.teaInputs.Financing.CostOfEquity,
      allYearInputs.teaInputs.EscalationInflation.GeneralInflation,
      allYearInputs.teaInputs.Financing.EconomicLife,
      totalPresentWorth,
      allYearResultsCopy.annualGeneration
    );
    allYearResultsCopy.teaResults.ConstantLAC.ConstantLACofEnergy = constantLAC;
    setAllYearResults(allYearResultsCopy);
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
      {(yearlyResults.length > 0 || loading) && (
        <div className='toggles'>
          <div className='toggle-cluster'>
            <Button
              onClick={() => toggleGeoJson(!showGeoJson)}
              outline={!showGeoJson}
              active={showGeoJson}
              color='success'
            >
              Show Cluster Shapes
            </Button>
            <Button
              onClick={() => toggleErrorGeoJson(!showErrorGeoJson)}
              outline={!showErrorGeoJson}
              active={showErrorGeoJson}
              color='info'
            >
              Show Error Clusters
            </Button>
          </div>
          <div className='toggle-input-result'>
            <Pagination aria-label='Page navigation example' size='lg'>
              <PaginationItem active={!showResults}>
                <PaginationLink
                  key='inputs'
                  onClick={() => toggleShowResults(false)}
                >
                  Inputs
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active={showResults}>
                <PaginationLink
                  key='finalResults'
                  onClick={() => toggleShowResults(true)}
                >
                  Results
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
          <button
            className='toggle-expand'
            onClick={() => toggleExpandedResults(!expandedResults)}
          >
            button to expand
          </button>
        </div>
      )}
      <div
        className={expandedResults ? 'expanded-results' : 'sidebar'}
        id='sidebar'
      >
        <ExternalLayerSelection onChange={setExternalLayers} />
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
            toggleShowResults={toggleShowResults}
            showResults={showResults}
            loading={loading}
            allYearResults={allYearResults}
            yearlyResults={yearlyResults}
            years={years}
            selectedYearIndex={selectedYearIndex}
            setSelectedYearIndex={setSelectedYearIndex}
            showGeoJson={showGeoJson}
            toggleGeoJson={toggleGeoJson}
            showErrorGeoJson={showErrorGeoJson}
            toggleErrorGeoJson={toggleErrorGeoJson}
            teaInputs={teaInputs}
            teaModel={teaModel}
            frcsInputs={frcsInputs}
            sensitivityResults={sensitvityResults}
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
        <EsriLeafletGeoSearch
          useMapBounds={false}
          position='topleft'
          eventHandlers={{
            results: (r: any) => {
              r.results.length > 0 && setMapState(r.results[0].latlng);
            }
          }}
        />
        {externalLayers.includes('transmission') && (
          <FeatureLayer
            url={
              'https://services3.arcgis.com/bWPjFyq029ChCGur/ArcGIS/rest/services/Transmission_Line/FeatureServer/0'
            }
          />
        )}
        {externalLayers.includes('substation') && (
          <FeatureLayer
            url={
              'https://services3.arcgis.com/bWPjFyq029ChCGur/ArcGIS/rest/services/Substation/FeatureServer/0'
            }
          />
        )}
        {externalLayers.includes('plant') && (
          <FeatureLayer
            url={
              'https://services3.arcgis.com/bWPjFyq029ChCGur/ArcGIS/rest/services/Power_Plant/FeatureServer/0'
            }
          />
        )}
        {externalLayers.includes('fire') && (
          <DynamicMapLayer
            url={
              'https://egis.fire.ca.gov/arcgis/rest/services/FRAP/FHSZ/MapServer'
            }
            opacity={0.7}
          />
        )}
        <HeatmapLayers
          years={years}
          yearlyGeoJson={geoJsonResults}
          selectedYearIndex={selectedYearIndex}
        />
        {yearlyResults.length > 0 && (
          <>
            {showGeoJson && (
              <GeoJsonLayers
                years={years}
                yearlyGeoJson={geoJsonShapeResults}
                selectedYearIndex={selectedYearIndex}
              />
            )}
            {showErrorGeoJson && (
              <ErrorGeoJsonLayers
                years={years}
                yearlyGeoJson={errorGeoJsonShapeResults}
                selectedYearIndex={selectedYearIndex}
              />
            )}
          </>
        )}
        <Marker position={position} />
      </Map>
    </div>
  );
};
