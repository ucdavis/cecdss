import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { MapContainer } from './MapContainer';
import { fakeallYearResults, fakeYearlyResult } from '../Shared/mockData';
import 'jest-canvas-mock';

jest.setTimeout(30000);

jest.mock('./GeoJsonLayers', () => {
  return {
    GeoJsonLayers: () => {
      return <div id='GeoJsonLayers'>GeoJsonLayers</div>;
    }
  };
});

jest.mock('./HeatmapLayers', () => {
  return {
    HeatmapLayers: () => {
      return <div id='HeatmapLayers'>HeatmapLayers</div>;
    }
  };
});

jest.mock('./TripLayers', () => {
  return {
    TripLayers: () => {
      return <div id='TripLayers'>TripLayers</div>;
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

    // Queries for lat and lng input and checks the default
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

    // Click on a different treatment option
    await act(async () => {
      const modelButton = document.querySelector(
        '.btn-block.btn.btn-primary'
      ) as Element;
      Simulate.click(modelButton);
    });

    // Click on the result button and check if the treatment was 
    // selected correctly
    const resultBtn = container.querySelectorAll('.page-item .page-link')[1];
    Simulate.click(resultBtn);

    const treatment = container.querySelector('tbody tr');
    expect(treatment?.textContent).toContain('Timber Salvage');
  });

  it('All Results', async () => {
    await act(async () => {
      (global as any).fetch = jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
        .mockImplementation(() => Promise.resolve(yearlyResultResponse));

      render(<MapContainer />, container);
    });

    const dropdown = document.querySelector('select') as Element;
    Simulate.change(dropdown, { target: { value: '4' } });

    // Click on a different treatment option
    await act(async () => {
      const modelButton = document.querySelector(
        '.btn-block.btn.btn-primary'
      ) as Element;
      Simulate.click(modelButton);
    });

    // Click on the result button to display results page
    const resultBtn = container.querySelectorAll('.page-item .page-link')[1];
    Simulate.click(resultBtn);

    // Get the contents of the result page and check if they are correct
    const table = container.querySelector('table');
    const capitolCost = table?.querySelectorAll('td')[5];
    const kWe = table?.querySelectorAll('td')[7];

    expect(capitolCost?.textContent).toBe('$96,256,611');
    expect(kWe?.textContent).toBe('25000');
  });

  it('Results Year Click', async () => {
    await act(async () => {
      (global as any).fetch = jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
        .mockImplementation(() => Promise.resolve(yearlyResultResponse));

      render(<MapContainer />, container);
    });

    const dropdown = document.querySelector('select') as Element;
    Simulate.change(dropdown, { target: { value: '4' } });

    // Click on a different treatment option
    await act(async () => {
      const modelButton = document.querySelector(
        '.btn-block.btn.btn-primary'
      ) as Element;
      Simulate.click(modelButton);
    });

    // Click on the result button to display results page
    const resultBtn = container.querySelectorAll('.page-item .page-link')[1];
    Simulate.click(resultBtn);

    // Click on 2016 year button
    const yearBtns = container.querySelectorAll(".years-pagination .page-item button")[1];
    Simulate.click(yearBtns);

    // Grab table data and make sure it matches
    const tableData = container.querySelectorAll("table td");

    expect(tableData[3].textContent).toBe("$25.94");
    expect(tableData[7].textContent).toBe("$29.56");
  });
});
