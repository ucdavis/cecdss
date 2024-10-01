import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsentGiven');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsentGiven', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 border-t-2p border-solid border-brand" style={{ maxHeight: '250px' }}>
      <div className="flex items-center justify-between p-4 h-full">
        <div className="flex items-center gap-x-4 flex-grow">
          <FontAwesomeIcon icon={faCookieBite} style={{color: "#395442", fontSize: '24px'}} />
          <div>
            <h3 className="text-16p font-bold text-brand mb-2">Cookie Consent</h3>
            <p className="text-14p text-gray-700 pr-4">
              We use Google Analytics to improve your experience, collecting data on page views, scrolls, outbound clicks, site searches, form interactions, and file downloads.
            </p>
          </div>
        </div>
            <button 
            onClick={handleConsent}
            className="cookie-consent-button"
            >
            <span>OK</span>
            </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;