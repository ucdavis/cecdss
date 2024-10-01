import React from 'react';

const WaveBackground = ({ children }: any) => {
  return (
    <div className="wave-background w-full">
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      <div className="wave-content flex justify-center align-center px-4 pt-4 pb-8 z-2">
        {children}
      </div>
    </div>
  );
};

export default WaveBackground;