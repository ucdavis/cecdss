import { InputModCHP, InputModGP, InputModGPO } from '@ucdavis/tea/input.model';
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Spinner,
} from 'reactstrap';
import { useSaveModel } from '../../../Context/saveModel';
import { trackEvent } from '../../../Utils/gaAnalytics';
import { FrcsInputs, MapCoordinates, TransportInputs } from '../../models/Types';
import { HomeButton } from '../Shared/Button';
import { FrcsInputsContainer } from './Frcs/FrcsInputsContainer';
import { TechnoeconomicInputs } from './Technoeconomic/TechnoeconomicInputs';
import { TransportInputsContainer } from './Transportation/TransportationInputs';
import { useState } from 'react';
import { useExternalLayerContext } from '../../../Context/ExternalLayerContext';
import { BIOMASS_FACILITIES, BiomassFaciltiesData, ReadyMixCompanies } from '../Resnick/Layers/BiomassFaciltiesLayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faWarehouse } from '@fortawesome/free-solid-svg-icons';

interface ByproductProps {
  props: Props;
  type?: keyof MaterialFormsConfig;
}

interface ByproductInput {
  quantity: number;
  unit: string;
  moistureContent: string;
  customMoisturePercent?: number;
  materialForm: string;
}

interface ByproductState {
  [key: string]: ByproductInput;
}
interface Props {
  facilityCoordinates: MapCoordinates;
  setFacilityCoordinates: (coordinates: MapCoordinates) => void;
  biomassCoordinates: MapCoordinates;
  setBiomassCoordinates: (coordinates: MapCoordinates) => void;
  selectBiomassCoordinates: boolean;
  setSelectBiomassCoordinates: (val: boolean) => void;
  expansionFactor: number;
  setExpansionFactor: (val: number) => void;
  frcsInputs: FrcsInputs;
  setFrcsInputs: (inputs: FrcsInputs) => void;
  transportInputs: TransportInputs;
  setTransportInputs: (inputs: TransportInputs) => void;
  teaInputs: InputModGPO | InputModCHP | InputModGP;
  setTeaInputs: (inputs: InputModGPO | InputModCHP | InputModGP) => void;
  teaModel: string;
  setTeaModel: (model: string) => void;
  submitInputs: () => void;
  loading: boolean;
  disabled: boolean;
  errors: string[];
  onChangeLayer: (
    layers: string[],
    setExternalLayers: (layers: string[]) => void,
    setMapLayerLoading: (isLoading: boolean) => void
  ) => void;
  setExternalLayers: (layers: string[]) => void;
  setMapLayerLoading: (isLoading: boolean) => void;
}

interface MaterialFormOption {
  value: string;
  label: string;
}
interface AlmondByproducts {
  hulls: MaterialFormOption[];
  shells: MaterialFormOption[];
  sticks: MaterialFormOption[];
  treeRemovals: MaterialFormOption[];
}

interface PistachioByproducts {
  hulls: MaterialFormOption[];
  shells: MaterialFormOption[];
  woodyBiomass: MaterialFormOption[];
}

interface PomegranateByproducts {
  rind: MaterialFormOption[];
  seed: MaterialFormOption[];
  prunings: MaterialFormOption[];
}

// Define the complete config type
interface MaterialFormsConfig {
  almonds: AlmondByproducts;
  pistachios: PistachioByproducts;
  pomegranates: PomegranateByproducts;
}

const UNITS = [
  { value: 'pounds', label: 'Pounds (lbs)' },
  { value: 'tons', label: 'Short Tons' },
  { value: 'mt', label: 'Metric Tonnes' }
];

const MOISTURE_OPTIONS = [
  { value: 'dry', label: 'Dry Basis' },
  { value: 'wet', label: 'Wet Basis' },
];

const MATERIAL_FORMS_CONFIG: MaterialFormsConfig = {
  almonds: {
    hulls: [
      { value: 'unprocessed', label: 'Unprocessed' }
      // { value: 'milled', label: 'Milled' },
      // { value: 'densified', label: 'Densified' }
    ],
    shells: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      // { value: 'milled', label: 'Milled' },
      // { value: 'densified', label: 'Densified' }
    ],
    sticks: [
      { value: 'unprocessed', label: 'Unprocessed' }
      // { value: 'chipped', label: 'Chipped' },
      // { value: 'shredded', label: 'Shredded' }
    ],
    treeRemovals: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      { value: 'shredded', label: 'Shredded' },
      { value: 'milled', label: 'Milled' },
      { value: 'densified', label: 'Densified' }
    ]
  },
  pistachios: {
    hulls: [
      { value: 'unprocessed', label: 'Unprocessed' },
      // { value: 'milled', label: 'Milled' },
      // { value: 'densified', label: 'Densified' }
    ],
    shells: [
      { value: 'unprocessed', label: 'Unprocessed' },
      // { value: 'chipped', label: 'Chipped' },
      // { value: 'milled', label: 'Milled' },
      // { value: 'densified', label: 'Densified' }
    ],
    woodyBiomass: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      { value: 'shredded', label: 'Shredded' }
    ]
  },
  pomegranates: {
    rind: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'milled', label: 'Milled' },
      { value: 'densified', label: 'Densified' }
    ],
    seed: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'milled', label: 'Milled' }
    ],
    prunings: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      { value: 'shredded', label: 'Shredded' }
    ]
  }
};

const renderByproductInput = (
  category: string,
  label: string,
  inputs: ByproductState,
  props: Props,
  type: keyof MaterialFormsConfig,
  handleInputChange: (val: string, val2: string, val3: string | number) => void
) => {

  const materialForms = MATERIAL_FORMS_CONFIG[type][
    category as keyof (typeof MATERIAL_FORMS_CONFIG)[typeof type]
  ] as MaterialFormOption[];

  return (
    <FormGroup>
      <Label className='flex items-center justify-center font-bold text-gray-400'>{label}</Label>
      <div className='space-y-2'>
        {/* Quantity and Unit */}
        <InputGroup className='flex gap-x-2'>
          <Input
            type='number'
            value={inputs[category].quantity}
            min={0}
            onChange={e =>
              handleInputChange(
                category,
                'quantity',
                parseFloat(e.target.value) || 0
              )
            }
            disabled={props.disabled}
            className='rounded'
          />
          <Input
            type='select'
            value={inputs[category].unit}
            onChange={e => handleInputChange(category, 'unit', e.target.value)}
            disabled={props.disabled}
            className='rounded border-1p border-solid border-gray-300'
          >
            {UNITS.map(unit => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </Input>
        </InputGroup>

        <div className='flex gap-x-2 w-full'>
          <InputGroup>
            <Input
              type='select'
              value={inputs[category].moistureContent}
              onChange={e =>
                handleInputChange(category, 'moistureContent', e.target.value)
              }
              disabled={props.disabled}
              className='rounded border-1p border-solid border-gray-300 py-1 w-full'
            >
              {MOISTURE_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Input>
          </InputGroup>
          <InputGroup>
            <Input
              type='select'
              value={inputs[category].materialForm}
              onChange={e =>
                handleInputChange(category, 'materialForm', e.target.value)
              }
              disabled={props.disabled}
              className='rounded border-1p border-solid border-gray-300 py-1 w-full'
            >
              {materialForms.map((form: MaterialFormOption) => (
                <option key={form.value} value={form.value}>
                  {form.label}
                </option>
              ))}
            </Input>
          </InputGroup>
        </div>

        {inputs[category].moistureContent === 'wet' && (
          <InputGroup>
            <Input
              type='number'
              placeholder='Enter moisture percentage'
              value={inputs[category].customMoisturePercent}
              min={0}
              max={100}
              onChange={e =>
                handleInputChange(
                  category,
                  'customMoisturePercent',
                  parseFloat(e.target.value) || 0
                )
              }
              disabled={props.disabled}
              className='rounded'
            />
            <InputGroupText>%</InputGroupText>
          </InputGroup>
        )}
      </div>
    </FormGroup>
  );
};

const AlmondByproduct = ({ props }: ByproductProps) => {
  const [inputs, setInputs] = useState<ByproductState>({
    hulls: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      customMoisturePercent: undefined,
      materialForm: 'unprocessed'
    },
    shells: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      customMoisturePercent: undefined,
      materialForm: 'unprocessed'
    },
    sticks: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      customMoisturePercent: undefined,
      materialForm: 'unprocessed'
    },
    treeRemovals: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      customMoisturePercent: undefined,
      materialForm: 'unprocessed'
    }
  });

  const handleInputChange = (
    category: string,
    field: string,
    value: string | number
  ) => {
    setInputs(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  return (
    <Form className='w-full'>
      {renderByproductInput(
        'hulls',
        'Hulls',
        inputs,
        props,
        'almonds',
        handleInputChange
      )}
      {renderByproductInput(
        'shells',
        'Shells',
        inputs,
        props,
        'almonds',
        handleInputChange
      )}
      {renderByproductInput(
        'sticks',
        'Sticks',
        inputs,
        props,
        'almonds',
        handleInputChange
      )}
      {renderByproductInput(
        'treeRemovals',
        'Tree Removals',
        inputs,
        props,
        'almonds',
        handleInputChange
      )}
    </Form>
  );
};


const PistachioByproduct = ({ props }: ByproductProps) => {
  const [inputs, setInputs] = useState<ByproductState>({
    hulls: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      customMoisturePercent: undefined,
      materialForm: 'unprocessed'
    },
    shells: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      customMoisturePercent: undefined,
      materialForm: 'unprocessed'
    },
    woodyBiomass: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      customMoisturePercent: undefined,
      materialForm: 'unprocessed'
    }
  });

  const handleInputChange = (
      category: string,
      field: string,
      value: string | number
    ) => {
      setInputs(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: value
        }
      }));
    };

  return (
    <Form className='w-full'>
      {renderByproductInput(
        'hulls',
        'Hulls',
        inputs,
        props,
        'pistachios',
        handleInputChange
      )}
      {renderByproductInput(
        'shells',
        'Shells',
        inputs,
        props,
        'pistachios',
        handleInputChange
      )}
      {renderByproductInput(
        'woodyBiomass',
        'Woody Biomass',
        inputs,
        props,
        'pistachios',
        handleInputChange
      )}
    </Form>
  );
};


const PomegranateByproduct = ({ props }: ByproductProps) => {

  const [inputs, setInputs] = useState<ByproductState>({
    rind: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      materialForm: 'unprocessed'
    },
    seed: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      materialForm: 'unprocessed'
    },
    prunings: {
      quantity: 0,
      unit: 'mt',
      moistureContent: 'dry',
      materialForm: 'unprocessed'
    }
  });

  const handleInputChange = (
    category: string,
    field: string,
    value: string | number
  ) => {
    setInputs(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  return (
    <Form className='w-full'>
      {renderByproductInput(
        'rind',
        'Rind',
        inputs,
        props,
        'pomegranates',
        handleInputChange
      )}
      {renderByproductInput(
        'seed',
        'Seed',
        inputs,
        props,
        'pomegranates',
        handleInputChange
      )}
      {renderByproductInput(
        'prunings',
        'Prunings',
        inputs,
        props,
        'pomegranates',
        handleInputChange
      )}
    </Form>
  );
};

export const InputContainer = (props: Props) => {
  const { updateLinkCopied } = useSaveModel();
  const { externalLayers, setExternalLayers, setMapLayerLoading, selectedFacilityIndex, setSelectedFacilityIndex, hoveredFacilityIndex, setHoveredFacilityIndex } =
      useExternalLayerContext();
  const [selectedCrops, setSelectedCrops] = useState<string[]>(externalLayers);

  const selectedFacility = selectedFacilityIndex !== null ? BIOMASS_FACILITIES[selectedFacilityIndex] : null;


  const handleCropChange = (cropValue: string) => {
    setSelectedCrops(prevSelectedCrops =>
      prevSelectedCrops.includes(cropValue)
        ? prevSelectedCrops.filter(crop => crop !== cropValue)
        : [...prevSelectedCrops, cropValue]
    );

    // Update external layers based on crop selection
    const newLayers = externalLayers.includes(cropValue)
      ? externalLayers.filter(layer => layer !== cropValue)
      : [...externalLayers, cropValue];

    setExternalLayers(newLayers);
    console.log(newLayers)
    // setMapLayerLoading(true);
  };

  const handleClick = () => {
    trackEvent('Model Run', 'Click', 'Run Model');
    updateLinkCopied(false);
    // props.submitInputs();

    // Log all inputs
    console.log('Facility Coordinates:', props.facilityCoordinates);
    console.log('Biomass Coordinates:', props.biomassCoordinates);
    console.log('Expansion Factor:', props.expansionFactor);
    console.log('FRCS Inputs:', props.frcsInputs);
    console.log('Transport Inputs:', props.transportInputs);
    console.log('TEA Inputs:', props.teaInputs);
    console.log('Selected Crops:', selectedCrops);
  };

  const button = (!props.disabled || props.loading) && (
    <div className='cardcontents'>
      <ul>
        {props.errors.map((error, i) => {
          return (
            <li style={{ color: 'red' }} key={`error-${i}`}>
              {error}
            </li>
          );
        })}
      </ul>
      {/* <Button
        className='btn-block'
        color='primary'
        onClick={handleClick}
        disabled={props.loading}
      >
        {props.loading ? (
          <>
            Running Model
            <Spinner size='sm' color='light' className='ml-2'>
              {''}
            </Spinner>
          </>
        ) : (
          <>Run Model</>
        )}
      </Button> */}
      <br />
    </div>
  );

  return (
    <>
      <div className='cardheader flex flex-col justify-between items-center'>
        <div className='text-white text-18p mb-1'>Demo</div>
      </div>
      <div className='cardcontents flex items-center flex-col justify-start w-full' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {!selectedFacility ? (
          <>
            <h4 className='font-bold mb-3 mt-2 text-gray-700'>
              <FontAwesomeIcon icon={faWarehouse} className='mr-2 text-green-600' />
              <span>Biomass Facilities</span>
            </h4>
            <div className='flex flex-col w-full gap-y-2'>
              {BIOMASS_FACILITIES.map((facility, index) => (
                <div
                  key={index}
                  className='p-3 border rounded-xl cursor-pointer bg-white transition-colors'
                  style={{ 
                    border: '1px solid #ddd',
                  }}
                  onClick={() => setSelectedFacilityIndex(index)}
                  onMouseEnter={() => setHoveredFacilityIndex(index)}
                  onMouseLeave={() => setHoveredFacilityIndex(null)}
                >
                  <div className='font-bold text-base mb-1 text-gray-700'>{facility.name}</div>
                  <div className='text-sm text-gray-600'>
                    📍 {facility.location}
                  </div>
                  <div className='text-xs text-gray-500 mt-1'>
                    {facility.nearbyCementCompanies?.length || 0} ready-mix {facility.nearbyCementCompanies?.length === 1 ? 'company' : 'companies'}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='w-full mb-3'>
              <Button
                size='sm'
                color='secondary'
                onClick={() => setSelectedFacilityIndex(null)}
                className='mb-2 text-gray-700'
              >
                ← Back to list
              </Button>
            </div>
            
            <h4 className='font-bold mb-2 text-gray-700'>Selected Facility</h4>
            <div className='w-full p-3 border rounded mb-4' style={{ border: '1px solid #ddd', backgroundColor: 'white' }}>
              <div className='font-bold text-lg mb-2 text-gray-700'>{selectedFacility.name}</div>
              <div className='text-sm text-gray-700 mb-1'>
                <strong>Location:</strong> {selectedFacility.location}
              </div>
              <div className='text-sm text-gray-700'>
                <strong>Coordinates:</strong> {selectedFacility.lat.toFixed(6)}, {selectedFacility.lng.toFixed(6)}
              </div>
            </div>

            <h4 className='font-bold mb-2 text-gray-700'>
              <FontAwesomeIcon icon={faIndustry} className='mr-2 text-red-600' />
              <span>Nearby Ready-Mix Companies</span>
            </h4>
            {selectedFacility.nearbyCementCompanies && selectedFacility.nearbyCementCompanies.length > 0 ? (
              <div className='flex flex-col w-full gap-y-2'>
                {selectedFacility.nearbyCementCompanies.map((company, idx) => (
                  <div
                    key={idx}
                    className='p-3 border rounded'
                    style={{ 
                      border: '1px solid #ddd',
                      backgroundColor: '#f8f9fa'
                    }}
                  >
                    <div className='font-bold text-base mb-1 text-gray-700'>{company.nearbyCementCompanies.name}</div>
                    <div className='text-sm text-gray-700 mb-1'>
                      📍 {company.nearbyCementCompanies.location}
                    </div>
                    <div className='text-xs text-gray-600'>
                      Distance: {company.distance} miles
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-sm text-gray-500'>No nearby ready-mix companies</div>
            )}
          </>
        )}
      </div>
      {button}
    </>
  );
};