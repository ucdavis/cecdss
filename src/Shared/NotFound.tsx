import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { URL_REROUTE_PAGE } from '../Resources/Constants'

const NotFound = () => {
  return (
    <>
      <div className='w-screen h-screen bg-brand flex flex-col items-center justify-center gap-y-10'>
      <FontAwesomeIcon icon={faRobot} className="text-8xl 2xl:text-10xl xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-white" />
      <div className='font-bold text-8xl 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-white'>
        404
      </div>
      <div className='text-6xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-white'>
        Page Not Found
      </div>
      <Link to={URL_REROUTE_PAGE} className="focus:outline-none text-brand bg-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-brand font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
        Go Back
      </Link>
    </div>
    </>
  )
}

export default NotFound