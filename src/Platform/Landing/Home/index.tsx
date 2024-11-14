import { faBook, faBookOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { URL_LANDING_PAGE, URL_MODEL_PAGE, USER_GUIDE_LINK } from '../../../Resources/Constants';
import frredssLandingPage from '../../../Resources/Images/frredssLandingPage.mp4';
import map from '../../../Resources/Images/map.png';
import { trackEvent } from '../../Utils/gaAnalytics';
import CookieConsentBanner from '../Shared/CookieConsent';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Title from '../Shared/Title';
import WaveBackground from './Components/WaveBackground';
import AppFeatures from './Sections/AppFeatures';
import ModelFeatures from './Sections/ModelFeatures';
import Publications from './Sections/Publications';

interface TitleOverlayProps {
  fontSize: number;
  subtitleFontSize: number;
  isMobile: boolean;
}

const TitleOverlay: React.FC<TitleOverlayProps> = ({ fontSize, subtitleFontSize, isMobile }) => {
  return (
    <div className="title-overlay mt-4">
      <div className="title" style={isMobile ? {} : { fontSize: `${fontSize}em` }}>
        <TypeAnimation
          sequence={[
            'Fuel Reduction Cost Simulator',
            800,
            'Technoeconomic Assessment',
            800,
            'Transportation',
            800,
            'Life Cycle Assessment',
            800
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
      <div className="subtitle" style={isMobile ? {} : { fontSize: `${subtitleFontSize}em` }}>
        Forest Resource and Renewable Energy Decision Support System
      </div>
      <div className="button-group">
        <a className="button shadow-md" href={URL_MODEL_PAGE} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('Main Page Links', 'Click', 'Go to New Model Run')}>
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Run New Model
        </a>
        <a className="button shadow-md" href={USER_GUIDE_LINK} target="_blank" rel="noopener noreferrer" download="User_Guide_FREDDSS.pdf" onClick={() => trackEvent('Main Page Links', 'Click', 'Go to User Guide')}>
          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
          User Guide
        </a>
        <a className="button shadow-md" href={`${URL_LANDING_PAGE}#publications`} onClick={() => trackEvent('Main Page Links', 'Click', 'Go to User Guide')}>
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          Publications
        </a>
      </div>
    </div>
  );
}

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [divHeight, setDivHeight] = useState(100); // 100vh
  const [isParallaxScrolled, setIsParallaxScrolled] = useState(false);
  const windowWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState(windowWidth < 1028 ? 0.2 : 0.4);
  const [subtitleFontSize, setSubtitleFontSize] = useState(windowWidth < 1028 ? 0.5 : 1.1);
  const location = useLocation();
  const fixedDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      if(windowWidth < 1028) {
        setIsMobile(true);
      } else setIsMobile(false);

        const scrollPosition = window.pageYOffset;
        const scrollPercentage = scrollPosition / windowHeight;
        
        const newHeight = Math.max(0, 100 - scrollPercentage * 100);
        const newFontSize = Math.max(0.4, 0.3 - scrollPercentage * 0.5);
        const newSubtitleFontSize = Math.max(0.5, 1.0 - scrollPercentage * 0.5);
        
        setDivHeight(newHeight);
        setFontSize(newFontSize);
        setSubtitleFontSize(newSubtitleFontSize);
        setIsParallaxScrolled(newHeight < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <>
      <Navbar isParallaxScrolled={isParallaxScrolled} isMobile={isMobile} />
      <CookieConsentBanner />
      <div className="relative">
        <div 
          ref={fixedDivRef}
          className="fixed top-0 left-0 w-screen overflow-hidden"
          style={{ height: `${divHeight}vh` }}
        >
          <div className='w-full h-full relative flex flex-col items-center justify-center'>
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
            <div className='absolute inset-0 flex items-center justify-center'>
              <TitleOverlay fontSize={fontSize} subtitleFontSize={subtitleFontSize} isMobile={isMobile} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: '100vh' }} className="flex flex-col items-center justify-center overflow-x-hidden gap-y-24">
          <div className="max-w-1028p flex items-center justify-center flex-col my-10">
            <div className='w-full'>
              <Title title={'Model Features'} />
            </div>
            <div className='mt-10'>
              <ModelFeatures />
            </div>
          </div>
          <div className='w-full bg-brand-grad-green flex items-center justify-center p-4'>
            <div className="max-w-1028p flex items-center justify-center flex-col" id='publications'>
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
          <WaveBackground>
            <Footer />
          </WaveBackground>
        </div>
      </div>
    </>
  )
}

const index = () => {
  return (
    <Home />
  )
};

export default index;