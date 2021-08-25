import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MapContainer } from './MapContainer';

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
  it('Lat Lng render', () => {
    act(() => {
      render(<MapContainer />, container);
    });
    
    const coordinates = container.querySelectorAll(".input-group");
    const lat = coordinates[0].querySelector("input");
    const lng = coordinates[1].querySelector("input");

    expect(lat?.value).toBe("39.21204328248304");
    expect(lng?.value).toBe("-121.07163446489723");
  });
});
