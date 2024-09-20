import { faBook, faBookOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
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
import frredssLandingPage from '../../../Resources/Images/frredssLandingPage.mp4'


const TitleOverlay: React.FC = () => {
  return (
    <div className="title-overlay">
      <div className="title">
        <TypeAnimation
          sequence={[
            'Fuel Reduction Cost Simulator',
            1000,
            'Techno-Economic Assessment',
            1000,
            'Transportation',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.2em', display: 'inline-block' }}
          repeat={Infinity}
        />
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

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
        <Navbar />
        <div className="flex flex-col items-center justify-center overflow-x-hidden gap-y-24">
          <div
            className='w-screen h-screen relative flex flex-col items-center justify-center'
          >
              <div className='w-full h-full mt-10 rounded-b relative'>
                <img 
                  src={map} 
                  alt="Map background" 
                  className='object-fill rounded-xl shadow w-full h-full rounded-b absolute top-0 left-0'
                  style={{ display: isVideoLoaded ? 'none' : 'block' }}
                />
                <video 
                  src={frredssLandingPage} 
                  className='object-fill rounded-xl shadow w-full h-full rounded-b'
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  style={{ display: isVideoLoaded ? 'block' : 'none' }}
                >
                  Your browser does not support the video tag.
                </video>
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