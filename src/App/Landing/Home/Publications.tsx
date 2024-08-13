import React from 'react'
import { publications } from './data'
import { PublicationCard } from './Card'

const Publications = () => {
  return (
    <div className="flex justify-content-center mt-4 gap-x-16">
        {publications.length > 0 && publications.map(({ title, description, link }, index) => (
            <PublicationCard 
            key={index}
            title={title}
            description={description}
            link={link}
            />
        ))}
      </div>
  )
}

export default Publications