import { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Button } from 'reactstrap';
import { MapCoordinates } from '../../Model/models/Types';
import Navbar from '../Shared/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faCheck, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ATTRIBUTION, MAP_BOX_TILES, URL_MODEL_PAGE, USER_GUIDE_LINK } from '../../../Resources/Constants';
import CopyToClipboard from 'react-copy-to-clipboard';

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
        >
            <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
            User Guide
        </Button>
        <Button
            style={{
            background:'#395442'
            }}
        >
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Publications
        </Button>
      </div>
      <div className="flex justify-content-center mt-4">
            
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
        <div
            style={{ height: '100vh', width: '100%', position: 'relative' }}
        >
            <MapContainer 
                center={center} 
                zoom={9} 
                className="fullscreen-map" 
                style={{ width: '100%', height: '100%', zIndex: 1 }}
                scrollWheelZoom={false}
                dragging={false} 
                doubleClickZoom={false}
                boxZoom={false}    
                keyboard={false}  
            >
            <TileLayer attribution={ATTRIBUTION} url={MAP_BOX_TILES} />
            </MapContainer>
            <TitleOverlay />
        </div>
    </>
  )
}

export default Home