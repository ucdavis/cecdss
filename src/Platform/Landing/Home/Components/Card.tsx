import React from 'react'

import defaultImage from '../../../../Resources/Images/default.jpg'

import { Button } from 'reactstrap';

interface PublicationCardProps {
    title: string;
    description: string[];
    link: string;
    image?: string;
}

interface TeamCardProps {
    name: string;
    designation: string;
    image?: string;
}

export const PublicationCard = ({ title, description, link, image }: PublicationCardProps) => {
  return (
    <div className="publication-card">
      <div className='publication-card-content'>
        <div className="publication-card-title">{title}</div>
        <ul className='publication-card-description'>
          {description.length > 0 && description.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
        <a href={link} target={'_blank'} rel='noreferrer nofollow' className='cursor-pointer'>
            <Button color="success">
                Read More
            </Button>
        </a>
      </div>
    </div>
  );
};


export const TeamCard = ({ name, designation, image }: TeamCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 w-220p">
        <div className='rounded-xl'>
            <img src={image ?? defaultImage} alt="" className='h-150p w-full object-cover rounded-xl'/>
        </div>
        <div className='flex flex-col px-4 py-4'>
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h6>
            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{designation}</div>
        </div>
    </div>
  )
}

