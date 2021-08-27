import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { MapContainer } from './MapContainer';
import { fakeallYearResults, fakeYearlyResult } from '../Shared/mockData';
import 'jest-canvas-mock';

jest.setTimeout(30000);
jest.mock('./HeatmapLayers', () => {
  return {
    HeatmapLayers: () => {
      return <div id='HeatmapLayers'>HeatmapLayers</div>;
    }
  };
});

jest.mock('./GeoJsonLayers', () => {
  return {
    GeoJsonLayers: () => {
      return <div id='GeoJsonLayers'>GeoJsonLayers</div>;
    }
  };
});

let container: Element;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

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

  it('Lat Lng render', () => {
    act(() => {
      render(<MapContainer />, container);
    });

    const coordinates = container.querySelectorAll('.input-group');
    const lat = coordinates[0].querySelector('input');
    const lng = coordinates[1].querySelector('input');

    expect(lat?.value).toBe('39.21204328248304');
    expect(lng?.value).toBe('-121.07163446489723');
  });

  it('Treatment Id', async () => {
    await act(async () => {
      (global as any).fetch = jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
        .mockImplementation(() => Promise.resolve(yearlyResultResponse));

      render(<MapContainer />, container);
    });

    const dropdown = document.querySelector('select') as Element;
    Simulate.change(dropdown, { target: { value: '4' } });

    await act(async () => {
      const modelButton = document.querySelector(
        '.btn-block.btn.btn-primary'
      ) as Element;
      Simulate.click(modelButton);
    });

    const resultBtn = container.querySelectorAll('.page-item .page-link')[1];
    Simulate.click(resultBtn);

    const treatment = container.querySelector('tbody tr');
    expect(treatment?.textContent).toContain('Timber Salvage');
  });
});