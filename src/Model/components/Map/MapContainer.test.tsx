// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MapContainerComponent } from './MapContainer';
// import { fakeallYearResults, fakeYearlyResult } from '../Shared/mockData';
// import 'jest-canvas-mock';

// jest.setTimeout(30000);

// jest.mock('./GeoJsonLayers', () => ({
//   GeoJsonLayers: () => <div id='GeoJsonLayers'>GeoJsonLayers</div>
// }));

// jest.mock('./HeatmapLayers', () => ({
//   HeatmapLayers: () => <div id='HeatmapLayers'>HeatmapLayers</div>
// }));

// jest.mock('./TripLayers', () => ({
//   TripLayers: () => <div id='TripLayers'>TripLayers</div>
// }));

// beforeEach(() => {
//   jest.clearAllMocks();
// });

// describe('MapContainer', () => {
//   const allYearResultsResponse = {
//     status: 200,
//     ok: true,
//     json: () => Promise.resolve(fakeallYearResults)
//   };

//   const yearlyResultResponse = {
//     status: 200,
//     ok: true,
//     json: () => Promise.resolve(fakeYearlyResult)
//   };

//   it('Lat Lng render', async () => {
//   render(<MapContainerComponent />);

//   const latInput = await screen.findByLabelText(/latitude/i) as HTMLInputElement;
//   const lngInput = await screen.findByLabelText(/longitude/i) as HTMLInputElement;

//   expect(latInput.value).toBe('39.21204328248304');
//   expect(lngInput.value).toBe('-121.07163446489723');
// });

//   it('Treatment Id', async () => {
//     global.fetch = jest.fn()
//       .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
//       .mockImplementation(() => Promise.resolve(yearlyResultResponse));

//     render(<MapContainerComponent />);

//     const dropdown = await screen.findByRole('combobox');
//     fireEvent.change(dropdown, { target: { value: '4' } });

//     const modelButton = await screen.findByRole('button', { name: /btn-block btn btn-primary/i });
//     fireEvent.click(modelButton);

//     const resultBtn = await screen.findAllByRole('button', { name: /page/i });
//     fireEvent.click(resultBtn[1]);

//     const treatment = await screen.findByText(/timber salvage/i);
//     expect(treatment).toBeInTheDocument();
//   });

//   it('All Results', async () => {
//     global.fetch = jest.fn()
//       .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
//       .mockImplementation(() => Promise.resolve(yearlyResultResponse));

//     render(<MapContainerComponent />);

//     const dropdown = await screen.findByRole('combobox');
//     fireEvent.change(dropdown, { target: { value: '4' } });

//     const modelButton = await screen.findByRole('button', { name: /btn-block btn btn-primary/i });
//     fireEvent.click(modelButton);

//     const resultBtn = await screen.findAllByRole('button', { name: /page/i });
//     fireEvent.click(resultBtn[1]);

//     const capitolCost = await screen.findByText('$96,256,611');
//     const kWe = await screen.findByText('25000');

//     expect(capitolCost).toBeInTheDocument();
//     expect(kWe).toBeInTheDocument();
//   });

//   it('All Years', async () => {
//     global.fetch = jest.fn()
//       .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
//       .mockImplementation(() => Promise.resolve(yearlyResultResponse));

//     render(<MapContainerComponent />);

//     const dropdown = await screen.findByRole('combobox');
//     fireEvent.change(dropdown, { target: { value: '4' } });

//     const modelButton = await screen.findByRole('button', { name: /btn-block btn btn-primary/i });
//     fireEvent.click(modelButton);

//     const resultBtn = await screen.findAllByRole('button', { name: /page/i });
//     fireEvent.click(resultBtn[1]);

//     const years = await screen.findAllByText(/year/i); // Adjust the selector based on your markup
//     expect(years.length).toBe(21);
//   });

//   it('Results Year Click', async () => {
//     global.fetch = jest.fn()
//       .mockImplementationOnce(() => Promise.resolve(allYearResultsResponse))
//       .mockImplementation(() => Promise.resolve(yearlyResultResponse));

//     render(<MapContainerComponent />);

//     const dropdown = await screen.findByRole('combobox');
//     fireEvent.change(dropdown, { target: { value: '4' } });

//     const modelButton = await screen.findByRole('button', { name: /btn-block btn btn-primary/i });
//     fireEvent.click(modelButton);

//     const resultBtn = await screen.findAllByRole('button', { name: /page/i });
//     fireEvent.click(resultBtn[1]);

//     const yearBtn = await screen.findByRole('button', { name: /2016/i });
//     fireEvent.click(yearBtn);

//     const tableData = await screen.findAllByRole('cell');
//     expect(tableData[3].textContent).toBe('$25.94');
//     expect(tableData[7].textContent).toBe('$29.56');
//   });
// });

export {}