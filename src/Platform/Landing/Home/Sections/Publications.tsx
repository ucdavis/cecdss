import React from 'react';
import { publications } from '../data';
import { PublicationCard } from '../Components/Card';

const Publications = () => {
  return (
    <div className="publications-container">
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

export default Publications;
