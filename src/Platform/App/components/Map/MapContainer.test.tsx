import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MapContainerComponent } from './MapContainer';
import { fakeallYearResults, fakeYearlyResult } from '../Shared/mockData';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';

jest.mock('react-ga4', () => ({
  event: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    modelID: 'test-model-id',
  }),
}));

jest.mock('./GeoJsonLayers', () => ({
  GeoJsonLayers: () => <div data-testid='GeoJsonLayers'>GeoJsonLayers</div>
}));

jest.mock('./HeatmapLayers', () => ({
  HeatmapLayers: () => <div data-testid='HeatmapLayers'>HeatmapLayers</div>
}));

jest.mock('./TripLayers', () => ({
  TripLayers: () => <div data-testid='TripLayers'>TripLayers</div>
}));

jest.mock('./utils', () => ({
  getShortUrlData: jest.fn().mockResolvedValue({
    allYearInputs: 'facilityLat=39&facilityLng=-121&teaModel=genericPowerOnly&teaInputs.CapitalCost.TotalProjectCost=100000000',
    biomassCoordinates: 'lat=39&lng=-121',
    frcsInputs: 'system=Ground-Based%20Mech%20WT&treatmentid=3&dieselFuelPrice=2.24',
    transportInputs: 'wageTruckDriver=24.71&driverBenefits=67&oilCost=0.35',
  }),
}));

describe('MapContainer', () => {
  const allYearResultsResponse = {
    status: 200,
    ok: true,
    json: () => Promise.resolve(fakeallYearResults)
  };

  const yearlyResultResponse = {
    status: 200,
    ok: true,
    json: () => Promise.resolve(fakeYearlyResult)
  };

  beforeEach(() => {
    (global as any).fetch = jest.fn()
      .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
      .mockImplementation(() => Promise.resolve(yearlyResultResponse));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders initial lat and lng', async () => {
    render(<MapContainerComponent />);
    
    await waitFor(() => {
      const latInput = screen.getByLabelText('Latitude:') as HTMLInputElement;
      const lngInput = screen.getByLabelText('Longitude:') as HTMLInputElement;
      expect(latInput.value).toBe('39');
      expect(lngInput.value).toBe('-121');
    });
  });

  it('handles treatment id selection', async () => {
    render(<MapContainerComponent />);

    const dropdown = await screen.findByRole('combobox') as HTMLSelectElement;
    fireEvent.change(dropdown, { target: { value: '4' } });

    const modelButton = await screen.findByRole('button', { name: /run model/i });
    fireEvent.click(modelButton);

    await waitFor(() => {
      const resultBtn = screen.getAllByRole('button', { name: /results/i })[0];
      fireEvent.click(resultBtn);
    });

    await waitFor(() => {
      const treatmentRow = screen.getByText(/Timber Salvage/i);
      expect(treatmentRow).toBeInTheDocument();
    });
  });

  it('displays all results', async () => {
    render(<MapContainerComponent />);

    const dropdown = await screen.findByRole('combobox') as HTMLSelectElement;
    fireEvent.change(dropdown, { target: { value: '4' } });

    const modelButton = await screen.findByRole('button', { name: /run model/i });
    fireEvent.click(modelButton);

    await waitFor(() => {
      const resultBtn = screen.getAllByRole('button', { name: /results/i })[0];
      fireEvent.click(resultBtn);
    });

    await waitFor(() => {
      const capitolCost = screen.getByText('$96,256,611');
      const kWe = screen.getByText('25000');
      expect(capitolCost).toBeInTheDocument();
      expect(kWe).toBeInTheDocument();
    });
  });

  it('displays all years', async () => {
    render(<MapContainerComponent />);

    const dropdown = await screen.findByRole('combobox') as HTMLSelectElement;
    fireEvent.change(dropdown, { target: { value: '4' } });

    const modelButton = await screen.findByRole('button', { name: /run model/i });
    fireEvent.click(modelButton);

    await waitFor(() => {
      const resultBtn = screen.getAllByRole('button', { name: /results/i })[0];
      fireEvent.click(resultBtn);
    });

    await waitFor(() => {
      const yearButtons = screen.getAllByRole('button', { name: /20\d{2}/i });
      expect(yearButtons.length).toBe(21);
    });
  });

  it('handles year selection in results', async () => {
    render(<MapContainerComponent />);

    const dropdown = await screen.findByRole('combobox') as HTMLSelectElement;
    fireEvent.change(dropdown, { target: { value: '4' } });

    const modelButton = await screen.findByRole('button', { name: /run model/i });
    fireEvent.click(modelButton);

    await waitFor(() => {
      const resultBtn = screen.getAllByRole('button', { name: /results/i })[0];
      fireEvent.click(resultBtn);
    });

    await waitFor(() => {
      const yearButton = screen.getByRole('button', { name: '2017' });
      fireEvent.click(yearButton);
    });

    await waitFor(() => {
      const priceElement = screen.getByText('$25.94');
      const anotherPriceElement = screen.getByText('$29.56');
      expect(priceElement).toBeInTheDocument();
      expect(anotherPriceElement).toBeInTheDocument();
    });
  });
});