import React from 'react'

import defaultImage from '../../../Resources/Images/default.jpg'

import { Button } from 'reactstrap';

interface PublicationCardProps {
    title: string;
    description: string;
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
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105">
            <div className='rounded-xl'>
                <img src={image ?? defaultImage} alt="" className='h-180p w-full object-fit rounded-xl'/>
            </div>
            <div className='flex flex-col px-4 py-4'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <ul style={{ listStyleType: 'disc' }} className='px-2'>
                    <li><div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</div></li>
                    <li>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</div>
                    </li>
                </ul>
                <div className='flex items-end justify-between w-full'>
                    <div></div>
                    <a href={link} target={'_blank'} rel='noreferrer nofollow' className='cursor-pointer'>
                        <Button color="success">
                        Read More
                    </Button>
                </a>
                </div>
            </div>
        </div>
  )
}

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

