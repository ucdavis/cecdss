import React from 'react';

export const BiomassBoundaryLegend = () => (
  <div className='esri-legend__service' tabIndex={0}>
    <h3
      className='esri-widget__heading esri-legend__service-label'
      style={{ fontSize: '1rem' }}
    >
      Biomass Data Locations
    </h3>
    <table
      cellPadding={0}
      cellSpacing={0}
      width='95%'
      className='esriLegendLayer'
    >
      <tbody>
        <tr>
          <td width='35' align='center'>
            <div style={{ width: '30px', height: '30px;' }}>
              <svg overflow='hidden' width='30' height='30'>
                <defs></defs>
                <path
                  fill='rgb(76, 129, 205)'
                  fill-opacity='0.7490196078431373'
                  stroke='rgb(0, 0, 0)'
                  stroke-opacity='1'
                  stroke-width='1'
                  stroke-linecap='butt'
                  stroke-linejoin='miter'
                  stroke-miterlimit='4'
                  path='M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z'
                  d='M-10-10L 10 0L 10 10L-10 10L-10-10Z'
                  fill-rule='evenodd'
                  stroke-dasharray='none'
                  transform='matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)'
                ></path>
              </svg>
            </div>
          </td>
          <td>
            <table width='95%'>
              <tbody>
                <tr>
                  <td align='left'></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
