import React, { useEffect, useState } from 'react';
import { MapCoordinates } from '../../models/Types';

interface ExplorePanelProps {
  facilityCoordinates: MapCoordinates;
  setFacilityCoordinates: (coords: MapCoordinates) => void;
  radius: number;
  setRadius: (radius: number) => void;
  selectedClusters: any[];
  onSearch: () => void;
  loading: boolean;
  onClearFacility?: () => void 
}

export const ExplorePanel: React.FC<ExplorePanelProps> = ({
  facilityCoordinates,
  setFacilityCoordinates,
  radius,
  setRadius,
  selectedClusters,
  onSearch,
  loading,
  onClearFacility
}) => {
  const [county, setCounty] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [locationLoading, setLocationLoading] = useState<boolean>(false);

  useEffect(() => {
    if (facilityCoordinates.lat !== 0 && facilityCoordinates.lng !== 0) {
      setLocationLoading(true)
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${facilityCoordinates.lat}&lon=${facilityCoordinates.lng}`)
        .then(res => res.json())
        .then(data => {
          if (data.address) {
            setCounty(data.address.county || '');
            setState(data.address.state || 'California');
          }
        })
        .catch(err => console.error('Geocoding error:', err))
        .finally(() => setLocationLoading(false));
    } else {
      setCounty('');
      setState('');
      setLocationLoading(false);
    }
  }, [facilityCoordinates]);

  const handleLatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lat = parseFloat(e.target.value);
    if (!isNaN(lat)) {
      setFacilityCoordinates({ ...facilityCoordinates, lat });
    }
  };

  const handleLngChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lng = parseFloat(e.target.value);
    if (!isNaN(lng)) {
      setFacilityCoordinates({ ...facilityCoordinates, lng });
    }
  };

  const handleClearFacility = () => {
    onClearFacility?.()
    setFacilityCoordinates({ lat: 0, lng: 0 });
    setCounty('');
    setState('');
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="px-4 py-2 border-b bg-white">
        <h3 className="text-base font-bold text-gray-900 mb-3">Select Location</h3>
        <div className="space-y-3 mb-1">
          <div>
            <label className="block text-xs text-gray-700 mb-1">
              Latitude
            </label>
            <input
              type="number"
              step="0.0001"
              value={facilityCoordinates.lat || ''}
              onChange={handleLatChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-700 mb-1">
              Longitude
            </label>
            <input
              type="number"
              step="0.0001"
              value={facilityCoordinates.lng || ''}
              onChange={handleLngChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

            <div className="bg-blue-50 rounded p-2 space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-700">County: <strong>{locationLoading ? 'Loading...' : county}</strong></span>
              </div>
            </div>
        </div>
      </div>

      <div className="py-2 px-4 border-b bg-white">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Search Radius: {radius} km</h3>

        <input
          type="range"
          min="5"
          max="50"
          step="1"
          value={radius}
          onChange={(e) => setRadius(parseInt(e.target.value))}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />

        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>5 km</span>
          <span>50 km</span>
        </div>
      </div>

      <div className="p-4 space-y-2 border-b bg-white text-gray-900">
        <button
          onClick={onSearch}
          disabled={loading || facilityCoordinates.lat === 0}
          className={`
            w-full px-4 py-2 rounded font-medium text-sm transition-all
            ${loading || facilityCoordinates.lat === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-brand text-white hover:bg-blue-700'
            }
          `}
        >
          {loading ? 'Analyzing...' : 'Analyze Location'}
        </button>

        {facilityCoordinates.lat !== 0 && (
          <button
            onClick={handleClearFacility}
            className="w-full px-4 py-2 bg-red-500 text-white rounded font-medium text-sm hover:bg-red-600 transition-colors"
          >
            Clear Location
          </button>
        )}
      </div>

      {/* Tip */}
      <div className="p-4">
        <p className="text-xs text-gray-600">
          💡 Tip: Click on the map to place a facility marker, or enter coordinates manually.
        </p>
      </div>
    </div>
  );
};