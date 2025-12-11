import React, { useState } from 'react';
import { Circle, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';

interface CursorFollowerProps {
  facilityCoordinates: { lat: number; lng: number };
  setFacilityCoordinates: (coords: { lat: number; lng: number }) => void;
  californiaGeometry: any;
  mode: 'explore' | 'detailed';
  radius: number; // in km
}

// Red marker for facility
const facilityIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Ghost marker - semi-transparent red marker
const ghostIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const CursorFollower: React.FC<CursorFollowerProps> = ({
  facilityCoordinates,
  setFacilityCoordinates,
  californiaGeometry,
  mode,
  radius
}) => {
  const [cursorPos, setCursorPos] = useState<[number, number] | null>(null);
  const map = useMap();

  // Validate if point is in California
  const isInCalifornia = (lat: number, lng: number) => {
    if (!californiaGeometry) {
      // Fallback to bounding box if geometry not loaded yet
      return lat >= 32.5 && lat <= 42.0 && lng >= -124.5 && lng <= -114.0;
    }

    try {
      const point = turf.point([lng, lat]);
      const caFeature = californiaGeometry.type === 'FeatureCollection' 
        ? californiaGeometry.features[0] 
        : californiaGeometry;
      
      return turf.booleanPointInPolygon(point, caFeature);
    } catch (error) {
      console.error('Point validation failed:', error);
      return lat >= 32.5 && lat <= 42.0 && lng >= -124.5 && lng <= -114.0;
    }
  };

  useMapEvents({
    mousemove(e) {
      // ONLY in explore mode
      if (mode !== 'explore') return;
      
      // Show ghost when no facility placed
      if (facilityCoordinates.lat === 0) {
        const { lat, lng } = e.latlng;
        
        if (isInCalifornia(lat, lng)) {
          setCursorPos([lat, lng]);
        } else {
          setCursorPos(null);
        }
      } else {
        setCursorPos(null);
      }
    },
    
    mouseout() {
      if (mode !== 'explore') return;
      setCursorPos(null);
    },
    
    click(e) {
      if (mode !== 'explore') return;
      
      const { lat, lng } = e.latlng;
      
      if (isInCalifornia(lat, lng)) {
        setFacilityCoordinates({ lat, lng });
        setCursorPos(null);
        
        map.flyTo([lat, lng], 10, {
          duration: 1 
        });
      } else {
        alert('Please select a location within California boundaries');
      }
    }
  });

  const hasFacility = facilityCoordinates.lat !== 0 && facilityCoordinates.lng !== 0;

  // ONLY render in explore mode
  if (mode !== 'explore') return null;

  return (
    <>
      {/* Ghost cursor marker - semi-transparent icon */}
      {!hasFacility && cursorPos && (
        <Marker 
          position={cursorPos}
          icon={ghostIcon}
          opacity={0.5}
        />
      )}

      {/* Actual facility marker with radius circle */}
      {hasFacility && (
        <>
          <Marker 
            position={[facilityCoordinates.lat, facilityCoordinates.lng]}
            icon={facilityIcon}
          />
          <Circle
            center={[facilityCoordinates.lat, facilityCoordinates.lng]}
            radius={radius * 1000} // Convert km to meters
            pathOptions={{
              fillColor: '#fbbf24',
              fillOpacity: 0.2,
              color: '#fbbf24',
              weight: 2
            }}
          />
        </>
      )}
    </>
  );
};