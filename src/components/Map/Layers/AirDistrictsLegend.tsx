import React from 'react';

export const AirDistrictsLegend = () => (
  <div className='esri-legend__service' tabIndex={0}>
    <h3 className='esri-widget__heading esri-legend__service-label' style={{ fontSize: '1rem' }}>
      CA Air Districts - California Air Districts
    </h3>
    <div className='esri-legend__layer'>
      <div className='esri-legend__layer-table esri-legend__layer-table--size-ramp'>
        <div className='esri-legend__layer-body'>
          <div className='esri-legend__layer-row'>
            <div className='esri-legend__layer-cell esri-legend__layer-cell--symbols'>
              <div className='esri-legend__symbol'>
                <div style={{ opacity: 1 }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                  >
                    <defs></defs>
                    <g transform='matrix(1.125,0,0,1.125,12,12)'>
                      <path
                        fill='rgba(0, 0, 0, 0)'
                        fill-rule='evenodd'
                        stroke='rgba(0, 0, 0, 1)'
                        stroke-width='1.3333333333333333'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-dasharray='none'
                        stroke-miterlimit='4'
                        d='M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z'
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className='esri-legend__layer-cell esri-legend__layer-cell--info'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
