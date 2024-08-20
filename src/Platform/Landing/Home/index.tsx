import { faBook, faBookOpen, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Button } from 'reactstrap';
import { ATTRIBUTION, MAP_BOX_TILES, URL_MODEL_PAGE, USER_GUIDE_LINK } from '../../../Resources/Constants';
import { MapCoordinates } from '../../App/Model/models/Types';
import Navbar from '../Shared/Navbar';
import { publications } from './data';
import Publications from './Sections/Publications';
import map from '../../../Resources/Images/map.png'
import Title from '../Shared/Title';
import Footer from '../Shared/Footer';
import ModelFeatures from './Sections/ModelFeatures';
import AppFeatures from './Sections/AppFeatures';
import Team from './Sections/Team';

const TitleOverlay: React.FC = () => {
  return (
    <div className="title-overlay text-white">
      <h5 className="subtitle mb-2" style={{ color: '#395442' }}>
        Fuel Reduction Cost Simulator | Techno-Economic Assessment | Transportation
      </h5>
      <h1 className="main-title mb-5" style={{ color: '#395442' }}>
        Forest Resource and Renewable Energy Decision Support System
      </h1>
      <div className="button-group d-flex justify-content-center" style={{ columnGap: '1em'}}>
        <Button
            style={{
            background:'#395442'
            }}
            href={URL_MODEL_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            size='lg'
        >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            Run New Model
        </Button>
        <Button
            style={{
            background:'#395442'
            }}
            href={USER_GUIDE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            download="User_Guide_FREDDSS.pdf"
            size='lg'
        >
            <FontAwesomeIcon icon={faBookOpen} className="mr-1" />
            User Guide
        </Button>
        <Button
            style={{
            background:'#395442'
            }}
            size='lg'
        >
            <FontAwesomeIcon icon={faBook} className="mr-1" />
            Publications
        </Button>
      </div>
    </div>
  );
};

const Home = () => {

    const [bounds, setBounds] = useState<LatLngBoundsExpression>([
    [40.1, -122.5],
    [39.2, -120]
    ]);

    const [center, setCenter] = useState<MapCoordinates>({
        lat: 37.87439641742907,
        lng: -120.47592259245009
    });

  const [linkCopied, setLinkCopied] = useState<boolean>(false);
  const handleCopy = () => {
    setLinkCopied(true)
  };

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
            <div className='mt-10'>
              <AppFeatures />
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col bg-brand px-4 pt-4 pb-16">
            <div className="max-w-1028p flex items-center justify-center flex-col">
              <div className='w-full'>
                <Title title={'Our Team'} light />
              </div>
              <div className='w-full' id='team'>
                <Team />
              </div>
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