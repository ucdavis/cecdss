import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-screen h-screen bg-brand flex items-center justify-center'>
        <FontAwesomeIcon icon={faRobot} />
    </div>
  )
}

export default NotFound