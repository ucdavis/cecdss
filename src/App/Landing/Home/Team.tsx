import React from 'react'
import { team } from './data'
import { TeamCard } from './Card'


const Team = () => {
  return (
    <div className="flex flex-wrap justify-center mt-4 gap-8 w-full">
        {team.length > 0 && team.map(({ name, designation, image }, index) => (
            <TeamCard 
            key={index}
            name={name}
            designation={designation}
            image={image}
            />
        ))}
      </div>
  )
}

export default Team