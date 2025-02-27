import { Feature, FeatureCollection, MultiPolygon } from 'geojson';
import { useEffect, useState } from 'react';
import { GeoJSON, Popup } from 'react-leaflet';

interface GrapesLayerProps {
  mapLayerHandler: {
    loading: () => void;
    load: () => void;
  };
}

export const GrapesLayer = ({ mapLayerHandler }: GrapesLayerProps) => {
  const [data, setData] = useState<FeatureCollection | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        mapLayerHandler.loading();
        const url =
          'https://raw.githubusercontent.com/aunshx/wesad-ml/main/grapes_ca.geojson';
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        mapLayerHandler.load();
      } catch (err) {
        console.error('Error loading data:', err);
        mapLayerHandler.load();
      }
    };

    loadData();
  }, [mapLayerHandler]);

  if (!data) return null;

  // Style for the GeoJSON layer
  const geoJsonStyle = {
    color: 'purple',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.7
  };

  return (
    <>
      {/* Render the GeoJSON layer */}
      <GeoJSON
        data={data}
        style={geoJsonStyle}
        onEachFeature={(feature, layer) => {
          // Add a popup for each feature
          if (feature.properties) {
            const popupContent = Object.entries(feature.properties)
              .map(
                ([key, value]) => `<strong>${key}:</strong> ${String(value)}`
              )
              .join('<br />');
            layer.bindPopup(popupContent);
          }
        }}
      />
    </>
  );
};
