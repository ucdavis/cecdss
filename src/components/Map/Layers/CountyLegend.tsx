import React from 'react';

export const CountyLegend = () => (
  <div id='legend-main' widgetid='legend-main' style={{ position: 'relative' }}>
    <div
      id='legend-main_California_County_Boundaries_2639'
      className='esriLegendService'
      style={{ display: 'block' }}
    >
      <table width='95%'>
        <tbody>
          <tr>
            <td align='left'>
              <span className='esriLegendServiceLabel'>
                California County Boundaries
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        id='legend-main_California_County_Boundaries_2639_0'
        className=''
        style={{ display: 'block' }}
      >
        <table width='95%' className='esriLegendLayerLabel'>
          <tbody>
            <tr>
              <td align='left'></td>
            </tr>
          </tbody>
        </table>
        <table
          cellPadding={0}
          cellSpacing={0}
          width='95%'
          className='esriLegendLayer'
        >
          <tbody>
            <tr>
              <td width='35' align='center'>
                <div style={{ width: '30px', height: '30px' }}>
                  <svg
                    overflow='hidden'
                    width={30}
                    height={30}
                    style={{ touchAction: 'none' }}
                  >
                    <defs></defs>
                    <path
                      fill='rgb(130, 130, 130)'
                      fill-opacity={0}
                      stroke='rgb(130, 130, 130)'
                      stroke-opacity={1}
                      stroke-width='1.3333333333333333'
                      stroke-linecap='butt'
                      stroke-linejoin='miter'
                      stroke-miterlimit={4}
                      path='M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z'
                      d='M-10-10L 10 0L 10 10L-10 10L-10-10Z'
                      fill-rule='evenodd'
                      stroke-dasharray='none'
                      dojoGfxStrokeStyle='solid'
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
    </div>
    <div
      id='legend-main_msg'
      className='esriLegendMsg'
      style={{ display: 'none' }}
    >
      No legend
    </div>
  </div>
);
