import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';

interface CaliforniaBoundaryProps {
  setGeometry: (geometry: any) => void;
}

export const CaliforniaBoundary: React.FC<CaliforniaBoundaryProps> = ({ setGeometry }) => {
  const [californiaGeoJson, setCaliforniaGeoJson] = useState<any>(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/JaggeryArray/50ad17645a290ee4445e1113609de5e4/raw/california.geojson')
      .then(response => response.json())
      .then(data => {
        setCaliforniaGeoJson(data);
        setGeometry(data); // Pass to parent for validation
      })
      .catch(error => console.error('Error loading CA boundary:', error));
  }, [setGeometry]);

  if (!californiaGeoJson) return null;

  return (
    <GeoJSON
      data={californiaGeoJson}
      style={{
        color: '#ef4444',
        weight: 2,
        fillOpacity: 0,
        dashArray: '8, 4'
      }}
    />
  );
};