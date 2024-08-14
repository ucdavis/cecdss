import { faDollarSign, faHockeyPuck, faOilCan, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AppFeatures = () => {
  return (
    <>
        <div className='flex items-start justify-between gap-x-16'>
        <div className='flex flex-col'>
            <div>
                <FontAwesomeIcon icon={faDollarSign} fontSize={40} />
            </div>
            <div className='text-28p font-bold'>
                Techno-Economic Sim
            </div>
            <div className='text-18p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
            </div>
        </div>
        <div className='flex flex-col'>
            <div>
                <FontAwesomeIcon icon={faOilCan} fontSize={40}  />
            </div>
            <div className='text-28p font-bold'>
                Fuel Cost Simulator
            </div>
            <div className='text-18p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
            </div>
        </div>
        <div className='flex flex-col'>
            <div>
                <FontAwesomeIcon icon={faTruck} fontSize={40} />
            </div>
            <div className='text-30p font-bold'>
                Transportation
            </div>
            <div className='text-18p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
            </div>
        </div>
    </div>
    <div className='flex items-start justify-between gap-x-16 mt-16'>
        <div className='flex flex-col'>
            <div>
                <FontAwesomeIcon icon={faDollarSign} fontSize={40} />
            </div>
            <div className='text-28p font-bold'>
                Techno-Economic Sim
            </div>
            <div className='text-18p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
            </div>
        </div>
        <div className='flex flex-col'>
            <div>
                <FontAwesomeIcon icon={faOilCan} fontSize={40}  />
            </div>
            <div className='text-28p font-bold'>
                Fuel Cost Simulator
            </div>
            <div className='text-18p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
            </div>
        </div>
        <div className='flex flex-col'>
            <div>
                <FontAwesomeIcon icon={faTruck} fontSize={40} />
            </div>
            <div className='text-30p font-bold'>
                Transportation
            </div>
            <div className='text-18p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus reprehenderit.
            </div>
        </div>
    </div>
    </>
  )
}

export default AppFeatures