import ReactGA from 'react-ga4';
import { createRef, useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
  useMapEvents,
} from 'react-leaflet';
import 'esri-leaflet-renderers';
import { DynamicMapLayer, FeatureLayer } from 'react-esri-leaflet';
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
  AllYearsResults,
  Geometry,
  TransportInputs
} from '../../models/Types';
import {
  InputModGPO,
  InputModCHP,
  InputModGP,
  InputModSensitivity
} from '@ucdavis/tea/input.model';
import { InputModGPOClass } from '../../models/GPOClasses';
import { InputModCHPClass } from '../../models/CHPClasses';
import { InputModGPClass } from '../../models/GPClasses';
import { convertGeoJSON } from '../Shared/util';
// import { HeatmapLayers } from './HeatmapLayers';
import { PaginationItem, PaginationLink, Button, Pagination } from 'reactstrap';
import { ResultsContainer } from '../Results/ResultsContainer';
import { GeoJsonLayers } from './GeoJsonLayers';
import {
  computeConstantLAC,
  computeCurrentLAC,
  computeEnergyRevenueRequiredPW,
  transmission
} from '@ucdavis/tea/utility';
import { runSensitivityAnalysis } from '@ucdavis/tea/sensitivity';
import { OutputModSensitivity } from '@ucdavis/tea/output.model';
import { ErrorGeoJsonLayers } from './ErrorGeoJsonLayers';
import { ExternalLayerSelection } from './ExternalLayerSelection';
import { serviceUrl } from '../Shared/config';
import { ExternalLayerLegend } from './ExternalLayerLegend';

import {
  faExpandArrowsAlt,
  faMinusSquare,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrintControl } from './PrintControl';
import { checkFrcsValidity, checkTeaValidity } from '../Inputs/validation';
import { CustomMarker } from './CustomMarker';
import { ClusterTransportationRoutesLayer } from './ClusterTransportationRoutesLayer';
import { ClusterTransportationMoveInLayer } from './ClusterTransportationMoveInLayer';
import { ATTRIBUTION, BE_APP_URL, DEFAULT_TRANSMISSION_VAL, MAP_BOX_TILES, MAP_BOX_TILES_SATELLITE } from '../../../../Resources/Constants';
import { useLocation, useParams } from 'react-router-dom';
import Loader from '../../../../Shared/Loader';
import triangle from '../../../../Resources/Images/triangle.svg'
import triangleTree from '../../../../Resources/Images/triangleTreeCrop.svg'
import NominatimSearchControl from './NominatimSearchControl';

export interface RequestParamsAllYearsNoTransmission {
  facilityLat: number;
  facilityLng: number;
  teaModel: string;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
}

type HandleUrlLoadingChangeType = (value: boolean) => void;

interface MapContainerComponentProps {
  urlLoading: boolean;
  handleUrlLoadingChange: HandleUrlLoadingChangeType;
}

const { BaseLayer } = LayersControl;

const MapClickHandler = ({ setBiomassCoordinates, setFacilityCoordinates, selectBiomassCoordinates, loading, yearlyResults }: any) => {
  useMapEvents({
    click(e: any) {
      if (!loading && yearlyResults.length === 0) {
        setBiomassCoordinates(e.latlng);

        if (selectBiomassCoordinates === false) {
          setFacilityCoordinates(e.latlng);
        }
      }
    }
  });

  return null;
};

const processDieselFuelPrice = (price: string | number): number => {
  if (typeof price === 'string') {
    const parsedValue = parseFloat(price.replace(/,/g, ''));
    if (!isNaN(parsedValue)) {
      return parsedValue;
    } else {
      console.error('Invalid diesel fuel price');
      return 0; 
    }
  }
  return price;
};

const createQueryStr = (object: any) => {
  const { transmission, ...rest } = object;
  const queryParams = new URLSearchParams();

  const flattenObject = (obj:any, parentKey = '') => {
    Object.keys(obj).forEach(key => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], fullKey);
      } else {
        queryParams.append(fullKey, JSON.stringify(obj[key]));
      }
    });
  };

  flattenObject(rest);
  return `${queryParams.toString()}`;
};

function parseQueryString(queryString:string) {
  const params = new URLSearchParams(queryString);
  const result = {};

  params.forEach((value, key) => {
    const keys = key.split('.');
    keys.reduce((acc:any, k, i) => {
      if (i === keys.length - 1) {
        try {
          acc[k] = JSON.parse(value);
        } catch (e) {
          acc[k] = value;
        }
      } else {
        if (!acc[k]) acc[k] = {};
        return acc[k];
      }
    }, result);
  });

  return result;
}

const getShortUrlData = async (modelID:string) => {
  const serviceUrl = `${BE_APP_URL}/saved-model/`;

  const originalUrl = await fetch(serviceUrl + modelID, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => (res.ok ? res.json() : ('')))

  if (!originalUrl) {
    throw new Error('Failed to retrieve original URL');
  }

  return originalUrl;
};

const MapContainerComponent = ({ handleUrlLoadingChange }: MapContainerComponentProps) => {
  const { modelID } = useParams();
  const [mapReady, setMapReady] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [saveUrl, setSaveUrl] = useState<string>('');
  const [isClusterZone, setIsClusterZone] = useState(true);
  const [isErrorZone, setIsErrorZone] = useState(true);
  const [loading, toggleLoading] = useState<boolean>(false);
  const [hasProcessingError, setHasProcessingError] = useState<boolean>(false);
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
  const [tripGeometries, setTripGeometries] = useState<Geometry[]>([]);

  const [showGeoJson, toggleGeoJson] = useState<boolean>(true);
  const [showHeatmap, toggleHeatmap] = useState<boolean>(false);
  const [showErrorGeoJson, toggleErrorGeoJson] = useState<boolean>(false);
  const [showMoveInGeoJson, toggleMoveInGeoJson] = useState<boolean>(false);
  const [
    showTransportationGeoJson,
    toggleTransportationGeoJson
  ] = useState<boolean>(false);

  const [zoom, setZoom] = useState<number>(9);
  const [center, setCenter] = useState<MapCoordinates>({
    lat: 37.87439641742907,
    lng: -120.47592259245009
  });
  const [bounds, setBounds] = useState<LatLngBoundsExpression>([
    [40.1, -122.5],
    [39.2, -120]
  ]);
  const [inputErrors, setInputError] = useState<string[]>([]);

  // external layers
  const [externalLayers, setExternalLayers] = useState<string[]>([]);

  const frcsInputsExample: FrcsInputs = {
    system: 'Ground-Based Mech WT',
    treatmentid: 3,
    dieselFuelPrice: 2.24,
    wageFaller: 35.13, // CA FallBuckWage May 2020
    wageOther: 22.07, // CA AllOthersWage May 2020
    laborBenefits: 35, // Assume a nationwide average of 35% for benefits and other payroll costs
    ppiCurrent: 284.7, // Oct 2021
    residueRecovFracWT: 80, // FRCS default 80%
    residueRecovFracCTL: 50 // FRCS default 50%
  };

  const transportInputsExample: TransportInputs = {
    wageTruckDriver: 24.71, // Hourly mean wage for tractor-trailer truck drivers May 2020
    driverBenefits: 67,
    oilCost: 0.35,
    fullyLoadedRate: 0,
  };

  const [teaInputs, setTeaInputs] = useState<
    InputModGPO | InputModCHP | InputModGP
  >(new InputModGPOClass());
  const [teaModel, setTeaModel] = useState(
    TechnoeconomicModels.genericPowerOnly
  );

  const [frcsInputs, setFrcsInputs] = useState<FrcsInputs>(frcsInputsExample);

  const [transportInputs, setTransportInputs] = useState<TransportInputs>(
    transportInputsExample
  );

  const years: number[] = [];
  for (let index = 0; index < teaInputs.Financing.EconomicLife; index++) {
    years.push(2016 + index); // Note that the hardcoded 2016 is the first year
  }

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
  }, [teaModel, inputErrors]);

  const [
    facilityCoordinates,
    setFacilityCoordinates
  ] = useState<MapCoordinates>({
    lat: 37.87439641742907,
    lng: -120.47592259245009
  });
  const [biomassCoordinates, setBiomassCoordinates] = useState<MapCoordinates>({
    lat: 37.87439641742907,
    lng: -120.47592259245009
  });

  const [
    selectBiomassCoordinates,
    setSelectBiomassCoordinates
  ] = useState<boolean>(false);

  const [expansionFactor, setExpansionFactor] = useState<number>(1);

  useEffect(() => {
    if (!selectBiomassCoordinates) {
      setBiomassCoordinates({ ...facilityCoordinates });
    }
  }, [selectBiomassCoordinates, facilityCoordinates]);

  let mapRef: any = createRef<typeof MapContainer>();

  const cleanTeaInput = (inputs: any) => {
    for (var key in inputs) {
      if (typeof inputs[key] === 'string') {
        inputs[key] = parseFloat(inputs[key].toString().replace(/\,/g, ''));

        if (isNaN(inputs[key])) {
          inputs[key] = inputs[key].toString();
        }
      } else if (typeof inputs[key] === 'object') {
        inputs[key] = cleanTeaInput(inputs[key]);
      }
    }

    return inputs;
  };

  const submitInputs = async () => {
    toggleLoading(true);

    ReactGA.event({
      category: 'Model Run',
      action: 'Click',
      label: 'FRREDSS App',
    });

    frcsInputs.dieselFuelPrice = processDieselFuelPrice(frcsInputs.dieselFuelPrice)

    let teaInputsClone = { ...teaInputs };
    const cleanedInput = cleanTeaInput(teaInputsClone);
    setTeaInputs(cleanedInput);

    // validate frcs inputs
    const frcsErrors = await checkFrcsValidity(frcsInputs);

    if (frcsErrors.length > 0) {
      setInputError(frcsErrors);
      toggleLoading(false);
      return;
    }

    const teaErrors = await checkTeaValidity(teaModel, teaInputs);

    if (teaErrors.length > 0) {
      setInputError(teaErrors);
      toggleLoading(false);
      return;
    }

    setIsExpanded(!isExpanded);
    toggleExpandedResults(!expandedResults);
    setCenter(facilityCoordinates);
    setZoom(8);
    setBounds([
      [facilityCoordinates.lat + 1, facilityCoordinates.lng + 4],
      [facilityCoordinates.lat - 1, facilityCoordinates.lng + 1]
    ]);
    setInputError([]);

    // first do initial processing to get TEA and substation results
    const allYearInputs: RequestParamsAllYears = {
      facilityLat: facilityCoordinates.lat,
      facilityLng: facilityCoordinates.lng,
      transmission: DEFAULT_TRANSMISSION_VAL,
      teaModel: teaModel,
      teaInputs: teaInputs
    };

    let continueProcessing = true;

    const allYearInputsStr = createQueryStr(allYearInputs);
    const biomassCoordinatesStr = createQueryStr(biomassCoordinates);
    const frcsInputsStr = createQueryStr(frcsInputs);
    const transportInputsStr = createQueryStr(transportInputs);

    const shortenUrl = await fetch(
      `${BE_APP_URL}/shorten-url`,
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({allYearInputsStr, biomassCoordinatesStr, frcsInputsStr, transportInputsStr}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => (res.ok ? res.json() : ''))
    .catch(error => {
        console.error('Error:', error);
        return null;
    });

    if (shortenUrl && shortenUrl.shortUrl) {
        setSaveUrl(shortenUrl.shortUrl)
    } else {
        console.error('shortUrl is undefined or request failed');
    }

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
    ).then(res => (res.ok ? res.json() : (continueProcessing = false)));

    if (!continueProcessing) {
      setHasProcessingError(true);
      return;
    }

    allYearResults.facilityCoordinates = {
      lat: facilityCoordinates.lat,
      lng: facilityCoordinates.lng
    };

    allYearResults.biomassCoordinates = {
      lat: biomassCoordinates.lat,
      lng: biomassCoordinates.lng
    };

    setAllYearResults(allYearResults);
    setTeaInputs({ ...teaInputs });
    setSelectedYearIndex(years.length);

    let radius = 0;
    let clusterIds: string[] = [];
    let errorIds: string[] = [];
    let energyRevenueRequiredPresentYears: number[] = [];
    let cashFlows: any[] = [];
    let currentLAC = 0;
    let constantLAC = 0;
    let totalPresentWorth = 0;
    const generalInflation = teaInputs.EscalationInflation.GeneralInflation;
    for (let index = 0; index < years.length; index++) {
      let continueProcessingYear = true;
      const reqBody: RequestParams = {
        facilityLat: facilityCoordinates.lat,
        facilityLng: facilityCoordinates.lng,
        lat: biomassCoordinates.lat,
        lng: biomassCoordinates.lng,
        system: frcsInputs.system,
        treatmentid: frcsInputs.treatmentid,
        dieselFuelPrice:
          frcsInputs.dieselFuelPrice * (1 + generalInflation / 100) ** index,
        biomassTarget: allYearResults.biomassTarget, // green metric tons per year
        firstYear: years[0],
        year: years[index],
        clusterIds,
        errorIds,
        radius,
        teaModel: teaModel,
        annualGeneration: allYearResults.annualGeneration, // kWh
        moistureContent:
          allYearResults.teaInputs.ElectricalFuelBaseYear.MoistureContent,
        cashFlow: allYearResults.teaResults.AnnualCashFlows[index],
        costOfEquity: allYearResults.teaInputs.Financing.CostOfEquity,
        generalInflation: generalInflation,
        carbonCreditPrice: teaInputs.CarbonCredit.CreditPrice,
        energyEconomyRatio: teaInputs.CarbonCredit.EnergyEconomyRatio,
        includeCarbonCredit: teaInputs.IncludeCarbonCredit,
        wageFaller:
          frcsInputs.wageFaller * (1 + generalInflation / 100) ** index,
        wageOther: frcsInputs.wageOther * (1 + generalInflation / 100) ** index,
        laborBenefits: frcsInputs.laborBenefits,
        ppiCurrent:
          frcsInputs.ppiCurrent * (1 + generalInflation / 100) ** index,
        residueRecovFracWT: frcsInputs.residueRecovFracWT,
        residueRecovFracCTL: frcsInputs.residueRecovFracCTL,
        expansionFactor: expansionFactor,
        wageTruckDriver:
          transportInputs.wageTruckDriver *
          (1 + generalInflation / 100) ** index,
        driverBenefits: transportInputs.driverBenefits,
        oilCost:
          transportInputs.oilCost * (1 + generalInflation / 100) ** index,
        capitalCost: allYearResults.teaInputs.CapitalCost
      };
      const yearResult: YearlyResult = await fetch(serviceUrl + 'process', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => (res.ok ? res.json() : (continueProcessingYear = false)));

      if (!continueProcessingYear) {
        setHasProcessingError(true);
        return;
      }

      const energyRevenueRequiredPW = computeEnergyRevenueRequiredPW(
        index + 1,
        teaInputs.Financing.CostOfEquity,
        yearResult.cashFlow.EnergyRevenueRequired
      );
      totalPresentWorth += energyRevenueRequiredPW;
      currentLAC = computeCurrentLAC(
        allYearInputs.teaInputs.Financing.CostOfEquity,
        index + 1, // number of years
        totalPresentWorth,
        allYearResults.annualGeneration
      );
      yearResult.currentLCOE = currentLAC;
      constantLAC = computeConstantLAC(
        allYearInputs.teaInputs.Financing.CostOfEquity,
        allYearInputs.teaInputs.EscalationInflation.GeneralInflation,
        index + 1, // number of years
        totalPresentWorth,
        allYearResults.annualGeneration
      );
      yearResult.constantLCOE = constantLAC;

      radius = yearResult.radius;
      const uniqueClusters = yearResult.clusterNumbers.filter(
        (item, index) => yearResult.clusterNumbers.indexOf(item) === index
      );
      const uniqueErrors = yearResult.errorClusterNumbers.filter(
        (item, index) => yearResult.errorClusterNumbers.indexOf(item) === index
      );
      clusterIds.push(...uniqueClusters);
      errorIds.push(...uniqueErrors);
      cashFlows.push(yearResult.cashFlow);
      energyRevenueRequiredPresentYears.push(energyRevenueRequiredPW);
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
      setTripGeometries(results => [
        ...results,
        yearResult.tripGeometries[0] // for now we are assuming only one trip route per year
      ]);

      setYearlyResults(results => [...results, yearResult]);
      toggleLoading(false);
      toggleShowResults(true);
      // TODO: update each year cashflow as it is done
    }
    allYearResults.teaResults.AnnualCashFlows = cashFlows;
    allYearResults.teaResults.CurrentLAC.CurrentLACofEnergy = currentLAC;
    allYearResults.teaResults.CurrentLAC.TotalPresentWorth = totalPresentWorth;
    allYearResults.teaResults.CurrentLAC.PresentWorth = energyRevenueRequiredPresentYears;
    allYearResults.teaResults.ConstantLAC.ConstantLACofEnergy = constantLAC;
    setAllYearResults(allYearResults);
  };

  const style = {
    height: window.innerHeight
  };

  const allResultsSelected = selectedYearIndex === years.length;

  useEffect(() => {
    handleUrlLoadingChange(true)
    if (modelID) {
      const fetchOriginalUrl = async () => {
        try {
          const result = await getShortUrlData(modelID);
          const allYearInputsObj = parseQueryString(result.allYearInputs) as RequestParamsAllYearsNoTransmission
          const biomassCoordinatesObj = parseQueryString(result.biomassCoordinates) as MapCoordinates
          const frcsInputsObj = parseQueryString(result.frcsInputs) as FrcsInputs
          const transportInputsObj = parseQueryString(result.transportInputs) as TransportInputs

          setTeaModel(allYearInputsObj.teaModel)
          setTeaInputs(allYearInputsObj.teaInputs)
          setFacilityCoordinates({
            lat: allYearInputsObj.facilityLat,
            lng: allYearInputsObj.facilityLng
          })
          setBiomassCoordinates({
            lat: biomassCoordinatesObj.lat,
            lng: biomassCoordinatesObj.lng
          })
          setFrcsInputs(frcsInputsObj)
          setTransportInputs(transportInputsObj)
        } catch (error) {
          console.error('Error fetching original URL:', error);
        }
      };
      fetchOriginalUrl();
    }
    handleUrlLoadingChange(false)
  }, [modelID]);

  useEffect(() => {
    setMapReady(true);
  }, []); 

  return (
    <div style={style}>
      {(yearlyResults.length > 0 || loading) && (
        <div className='toggle-buttons flex flex-col items-center justify-center gap-y-6'>
          <Button
            onClick={() => {
              toggleMoveInGeoJson(h => !h);
            }}
            active={showMoveInGeoJson}
            disabled={allResultsSelected}
            title='Show Move-In Geometry in selected year'
            color='primary'
            className='flex items-center justify-between gap-x-2 w-full px-2'
          >
            <span>{!showMoveInGeoJson ? 'Show Move In' : 'Hide Move In'}</span>
            <FontAwesomeIcon icon={showMoveInGeoJson ? faEye : faEyeSlash} />
          </Button>
          <Button
            onClick={() => {
              toggleTransportationGeoJson(h => !h);
            }}
            active={showTransportationGeoJson}
            disabled={allResultsSelected}
            title='Show Transportation Geometry in selected year'
            color='primary'
            className='flex items-center justify-between gap-x-2 w-full px-2'
          >
            <span>
              {!showTransportationGeoJson
                ? 'Show Transportation'
                : 'Hide Transportation'}
            </span>
            <FontAwesomeIcon
              icon={showTransportationGeoJson ? faEye : faEyeSlash}
            />
          </Button>
          <Button
            onClick={() => {
              setIsErrorZone(!isErrorZone);
              toggleErrorGeoJson(!showErrorGeoJson);
            }}
            active={showErrorGeoJson}
            title='Cluster zones which cannot be used for biomass'
            color='primary'
            className='flex items-center justify-between gap-x-2 w-full px-2'
          >
            <span>{isErrorZone ? 'Show Unusable Zones' : 'Hide Unusable Zones'}</span>
            <FontAwesomeIcon icon={isErrorZone ? faEye : faEyeSlash} />
          </Button>
          <Button
            onClick={() => {
              setIsClusterZone(!isClusterZone);
              toggleGeoJson(!showGeoJson);
            }}
            active={showGeoJson}
            color='primary'
            className='flex items-center justify-between gap-x-2 w-full px-2'
          >
            <span>
              {isClusterZone ? 'Hide Cluster Zones' : 'Show Cluster Zones'}
            </span>
            <FontAwesomeIcon icon={isClusterZone ? faEyeSlash : faEye} />
          </Button>
          <Button
            className='flex items-center justify-between gap-x-2 w-full px-2'
            color='primary'
            onClick={() => {
              setIsExpanded(!isExpanded);
              toggleExpandedResults(!expandedResults);
            }}
          >
            <span>{isExpanded ? 'Expand Results' : 'Minimize Results'} </span>
            <FontAwesomeIcon
              icon={isExpanded ? faExpandArrowsAlt : faMinusSquare}
            />
          </Button>
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
        </div>
      )}
      <div className='layers-container'>
        <ExternalLayerSelection onChange={setExternalLayers} />
        <ExternalLayerLegend layers={externalLayers} />
      </div>
      <div
        className={expandedResults ? 'expanded-results' : 'sidebar'}
        id='sidebar'
      >
        {hasProcessingError && (
          <div className='alert alert-danger'>
            There was a problem processing your results. This is most likely due
            to an inability to find enough biomass to satisfy your requirements
            within a reasonable radius, but could also be due to API performance
            or availability issues. Please refresh the page and try again.
          </div>
        )}
        {!showResults && (
          <InputContainer
            facilityCoordinates={facilityCoordinates}
            setFacilityCoordinates={setFacilityCoordinates}
            biomassCoordinates={biomassCoordinates}
            setBiomassCoordinates={setBiomassCoordinates}
            selectBiomassCoordinates={selectBiomassCoordinates}
            setSelectBiomassCoordinates={setSelectBiomassCoordinates}
            expansionFactor={expansionFactor}
            setExpansionFactor={setExpansionFactor}
            frcsInputs={frcsInputs}
            setFrcsInputs={setFrcsInputs}
            teaInputs={teaInputs}
            setTransportInputs={setTransportInputs}
            transportInputs={transportInputs}
            setTeaInputs={setTeaInputs}
            teaModel={teaModel}
            setTeaModel={setTeaModel}
            submitInputs={() => submitInputs()}
            loading={loading}
            disabled={yearlyResults.length > 0 || loading}
            errors={inputErrors}
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
            expansionFactor={expansionFactor}
            saveUrl={saveUrl}
          />
        )}
      </div>
      <MapContainer
        ref={mapRef}
        bounds={bounds}
        zoom={zoom}
        center={center}
        style={{ height: '100%', width: '100%' }}
      >
        <MapClickHandler
          setBiomassCoordinates={setBiomassCoordinates}
          setFacilityCoordinates={setFacilityCoordinates}
          selectBiomassCoordinates={selectBiomassCoordinates}
          loading={loading}
          yearlyResults={yearlyResults}
        />
        <ScaleControl />
        <LayersControl position='bottomleft'>
          <BaseLayer checked name='Outdoors'>
            <TileLayer attribution={ATTRIBUTION} url={MAP_BOX_TILES} />
          </BaseLayer>
          <BaseLayer name='Satellite'>
            <TileLayer attribution={ATTRIBUTION} url={MAP_BOX_TILES_SATELLITE} />
          </BaseLayer>
        </LayersControl>
        <TileLayer attribution={ATTRIBUTION} url={MAP_BOX_TILES} />
        <NominatimSearchControl setFacilityCoordinates={setFacilityCoordinates} />
        <PrintControl />
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
            ignoreRenderer={true}
          />
        )}
        {externalLayers.includes('county') && (
          <FeatureLayer
            url={
              'https://services1.arcgis.com/jUJYIo9tSA7EHvfZ/arcgis/rest/services/California_County_Boundaries/FeatureServer/0'
            }
          />
        )}
        {externalLayers.includes('urbanCities') && (
          <FeatureLayer
            url={
              'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_Urban_Areas/FeatureServer/3'
            }
          />
        )}
        {externalLayers.includes('airDistricts') && (
          <FeatureLayer
            url={
              'https://services.arcgis.com/jDGuO8tYggdCCnUJ/ArcGIS/rest/services/California_Air_Districts/FeatureServer/0'
            }
          />
        )}
        {externalLayers.includes('ownership') && (
          <DynamicMapLayer
            url={
              'https://egis.fire.ca.gov/arcgis/rest/services/FRAP/ownership/MapServer'
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
        {externalLayers.includes('dataBoundary') && (
          <FeatureLayer
            url={
              'https://services9.arcgis.com/mt4kvYhNXSa5AqLG/ArcGIS/rest/services/FL_Sierra/FeatureServer/0'
            }
          />
        )}
        {externalLayers.includes('feedstockBiomassCompetition') && (
          <FeatureLayer
            url={
              'https://services9.arcgis.com/mt4kvYhNXSa5AqLG/arcgis/rest/services/Task_5_Basic_Feedstock_Competition/FeatureServer/1'
            }
          />
        )}
        {externalLayers.includes('feedstockWoodProcessingCompetition') && (
          <FeatureLayer
            url={
              'https://services9.arcgis.com/mt4kvYhNXSa5AqLG/arcgis/rest/services/Task_5_Basic_Feedstock_Competition/FeatureServer/0'
            }
          />
        )}
        {yearlyResults.length > 0 && (
          <>
            {showMoveInGeoJson && (
              <ClusterTransportationMoveInLayer
                facilityCoordinates={facilityCoordinates}
                years={years}
                yearlyResults={yearlyResults}
                selectedYearIndex={selectedYearIndex}
              />
            )}
            {/* {showHeatmap && (
              <HeatmapLayers
                years={years}
                yearlyGeoJson={geoJsonResults}
                selectedYearIndex={selectedYearIndex}
              />
            )} */}
            {showGeoJson && (
              <GeoJsonLayers
                years={years}
                yearlyGeoJson={geoJsonShapeResults}
                selectedYearIndex={selectedYearIndex}
              />
            )}
            {showTransportationGeoJson && (
              <ClusterTransportationRoutesLayer
                facilityCoordinates={facilityCoordinates}
                years={years}
                yearlyResults={yearlyResults}
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

        <CustomMarker icon='facility' position={facilityCoordinates} />
        {selectBiomassCoordinates &&
          biomassCoordinates.lat !== facilityCoordinates.lat &&
          biomassCoordinates.lng !== facilityCoordinates.lng && (
            <CustomMarker icon='biomass' position={biomassCoordinates} />
          )}
      </MapContainer>
    </div>
  );
};

export const MapContainerWrapper = () => {
  const [urlLoading, setUrlLoading] = useState<boolean>(false);

  const handleUrlLoadingChange = (value: boolean) => setUrlLoading(value)


  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: '/pages/model', title: 'Model Page' });
  }, []);

  return (
    <>
      {urlLoading ? (
        <div className="h-screen w-screen flex items-center justify-center relative">
          <Loader />
          <div className='absolute bottom-0' style={{ left: '-8%' }}>
            <img src={triangle} alt="FREDDS Logo" className='h-full' />
          </div>
          <div className='absolute top-0 h-full right-0'>
            <img src={triangleTree} alt="FREDDS Logo" className='h-full' />
          </div>
        </div>
      ) : (
        <MapContainerComponent 
          urlLoading={urlLoading} 
          handleUrlLoadingChange={handleUrlLoadingChange} 
        />
      )}
    </>
  )
};  
