import { faBook, faBookOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { URL_LANDING_PAGE, URL_MODEL_PAGE, USER_GUIDE_LINK } from '../../../Resources/Constants';
import map from '../../../Resources/Images/map.png';
import { MapCoordinates } from '../../Model/models/Types';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Title from '../Shared/Title';
import AppFeatures from './Sections/AppFeatures';
import ModelFeatures from './Sections/ModelFeatures';
import Publications from './Sections/Publications';

const TitleOverlay: React.FC = () => {
  return (
    <div className="title-overlay">
  <div className="title">
    Fuel Reduction Cost Simulator | Techno-Economic Assessment | Transportation
  </div>
  <div className="subtitle">
    Forest Resource and Renewable Energy Decision Support System
  </div>
  <div className="button-group">
    <a className="button shadow-md" href={URL_MODEL_PAGE} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faPlus} className="mr-2" />
      Run New Model
    </a>
    <a className="button shadow-md" href={USER_GUIDE_LINK} target="_blank" rel="noopener noreferrer" download="User_Guide_FREDDSS.pdf">
      <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
      User Guide
    </a>
    <a className="button shadow-md" href={`${URL_LANDING_PAGE}#publications`}>
      <FontAwesomeIcon icon={faBook} className="mr-2" />
      Publications
    </a>
  </div>
</div>
  );
};

const Home = () => {

  return (
    <>
        <Navbar />
        <div className="flex flex-col items-center justify-center overflow-x-hidden gap-y-24">
          <div
            className='w-screen h-screen relative flex flex-col items-center justify-center'
          >
              <div className='w-full h-full mt-10 rounded-b'>
                <img src={map} alt="" className='object-fill rounded-xl shadow w-full h-full rounded-b' />
              </div>
              <TitleOverlay />
          </div>
          <div className="max-w-1028p flex items-center justify-center flex-col mb-10">
            <div className='w-full'>
              <Title title={'Model Features'} />
            </div>
            <div className='mt-10'>
              <ModelFeatures />
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col bg-brand px-4 pt-4 pb-16">
            <div className="max-w-1028p  flex items-center justify-center flex-col" id='publications'>
              <div className='w-full'>
                <Title title={'Publications'} light />
              </div>
              <div>
                <Publications />
              </div>
            </div>
          </div>
          <div className="max-w-1028p flex items-center justify-center flex-col">
            <div className='w-full'>
              <Title title={'App Features'} />
            </div>
            <div className='mt-1'>
              <AppFeatures />
            </div>
          </div>
          <div className='w-full'>
            <Footer />
          </div>
        </div>
    </>
  )
}

export default Home