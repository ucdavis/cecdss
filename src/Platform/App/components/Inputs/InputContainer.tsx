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
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'milled', label: 'Milled' },
      { value: 'densified', label: 'Densified' }
    ],
    shells: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      { value: 'milled', label: 'Milled' },
      { value: 'densified', label: 'Densified' }
    ],
    sticks: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      { value: 'shredded', label: 'Shredded' }
    ],
    treeRemovals: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      { value: 'shredded', label: 'Shredded' }
    ]
  },
  pistachios: {
    hulls: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'milled', label: 'Milled' },
      { value: 'densified', label: 'Densified' }
    ],
    shells: [
      { value: 'unprocessed', label: 'Unprocessed' },
      { value: 'chipped', label: 'Chipped' },
      { value: 'milled', label: 'Milled' },
      { value: 'densified', label: 'Densified' }
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
  const { externalLayers, setExternalLayers, setMapLayerLoading } =
      useExternalLayerContext();
  const [selectedCrops, setSelectedCrops] = useState<string[]>(externalLayers);


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
      <Button
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
      </Button>
      <br />
    </div>
  );

  return (
    <>
      <div className='cardheader flex flex-col justify-between items-start'>
        <div className='text-white text-12p mb-1'>Resnick Proposal App</div>
        <div className='flex items-center justify-between gap-x-2 w-full mt-2'>
          <div className='text-white text-24p'>Select Inputs</div>
          <div className='flex items-center justify-center gap-x-2'>
            {props.loading && (
              <Spinner size='sm' color='light' className='mr-2'>
                {''}
              </Spinner>
            )}
            <HomeButton
              loading={props.loading}
              tooltipText='Go To Home'
              tooltipTarget='goToHomeButton'
            />
          </div>
        </div>
      </div>
      <div className='cardcontents flex items-center flex-col justify-around w-full'>
        <h4 className='font-bold mb-2'>Coordinates</h4>
        <Form className='w-full'>
          <FormGroup>
            <InputGroup>
              <InputGroupText>lat</InputGroupText>
              <Input
                type='number'
                value={props.facilityCoordinates.lat.toString()}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lat: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupText>lng</InputGroupText>
              <Input
                type='number'
                value={props.facilityCoordinates.lng.toString()}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lng: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
            </InputGroup>
          </FormGroup>
          <div
            className='font-bold mb-2 w-full text-center'
            style={{ margin: '1em 0 2em 0' }}
          >
            Types of Crop
          </div>
          <div className='flex items-center justify-center gap-x-4'>
            <FormGroup inline check>
              <Input
                type='checkbox'
                value={'almondsCA'}
                checked={selectedCrops.includes('almondsCA')}
                onChange={() => handleCropChange('almondsCA')}
              />
              <Label check>Almonds</Label>
            </FormGroup>
            <FormGroup inline check>
              <Input
                type='checkbox'
                value={'pistachiosCA'}
                checked={selectedCrops.includes('pistachiosCA')}
                onChange={() => handleCropChange('pistachiosCA')}
              />
              <Label check>Pistachios</Label>
            </FormGroup>
          </div>
          <div className='flex items-center justify-center gap-x-4 mt-2'>
            <FormGroup inline check>
              <Input
                type='checkbox'
                value={'pomegranatesCA'}
                checked={selectedCrops.includes('pomegranatesCA')}
                onChange={() => handleCropChange('pomegranatesCA')}
              />
              <Label check>Pomegranates</Label>
            </FormGroup>
            {/* <FormGroup inline check>
              <Input
                type='checkbox'
                value={'grapesCA'}
                checked={selectedCrops.includes('grapesCA')}
                onChange={() => handleCropChange('grapesCA')}
              />
              <Label check>Grapes</Label>
            </FormGroup> */}
          </div>
          {selectedCrops.includes('almondsCA') && (
            <div className='flex flex-col items-center justify-center w-full mt-4 mb-2'>
              <div
                className='font-bold text-16p text-black mb-2 py-2 w-full text-center'
                style={{ borderTop: '1px solid gray' }}
              >
                Almond Byproduct Quantity
              </div>
              <AlmondByproduct props={props} />
            </div>
          )}
          {selectedCrops.includes('pistachiosCA') && (
            <div className='flex flex-col items-center justify-center w-full mt-4 mb-2'>
              <div
                className='font-bold text-16p text-black mb-2 py-2 w-full text-center'
                style={{ borderTop: '1px solid gray' }}
              >
                Pistachio Byproduct Quantity
              </div>
              <PistachioByproduct props={props} />
            </div>
          )}
          {selectedCrops.includes('pomegranatesCA') && (
            <div className='flex flex-col items-center justify-center w-full mt-4 mb-2'>
              <div
                className='font-bold text-16p text-black mb-2 py-2 w-full text-center'
                style={{ borderTop: '1px solid gray' }}
              >
                Pomegranate Byproduct Quantity
              </div>
              <PomegranateByproduct props={props} />
            </div>
          )}
          <div
            className='mb-2 mt-4 w-full'
            style={{ borderTop: '1px solid gray' }}
          ></div>
          <h4 className='flex items-center justify-center font-bold mt-4 mb-2'>
            Byproduct Quantity
          </h4>
          <FormGroup>
            <InputGroup className='flex gap-x-2'>
              <Input
                type='number'
                value={12450}
                min={0}
                onChange={e => console.log(e.target.value)}
                disabled={props.disabled}
                className='rounded'
              />
              <Input
                type='select'
                // value={inputs[category].unit}
                // onChange={e =>
                //   handleInputChange('almonds', 'unit', e.target.value)
                // }
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
          </FormGroup>
          <h4 className='flex items-center justify-center font-bold mt-4 mb-2'>
            Shipping Coordinates
          </h4>
          <FormGroup>
            <InputGroup>
              <InputGroupText>lat</InputGroupText>
              <Input
                type='number'
                value={props.facilityCoordinates.lat.toString()}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lat: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupText>lng</InputGroupText>
              <Input
                type='number'
                value={props.facilityCoordinates.lng.toString()}
                onChange={e =>
                  props.setFacilityCoordinates({
                    ...props.facilityCoordinates,
                    lng: parseFloat(e.target.value) || 0
                  })
                }
                disabled={props.disabled}
              />
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
      {button} {/* Uncomment the button */}
    </>
  );
};