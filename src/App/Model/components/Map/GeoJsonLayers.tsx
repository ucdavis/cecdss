import React from 'react';
import { GeoJSON, Popup } from 'react-leaflet';
import { FeatureCollection } from 'geojson';
import { ClusterFeature } from '../../models/Types';
import { GeoJsonLayerPopup } from './GeoJsonLayerPopup';

interface Props {
  years: number[];
  yearlyGeoJson: FeatureCollection[];
  selectedYearIndex: number;
}

export const GeoJsonLayers = (props: Props) => {
  if (!props.yearlyGeoJson || props.yearlyGeoJson.length < 1) {
    return null;
  }

  const dataLayers = props.yearlyGeoJson.map((geojsonData, i) => {
    if (
      i === props.selectedYearIndex ||
      props.selectedYearIndex === props.years.length
    ) {
      return (
        <div key={`div-year-${i}`}>
          {(geojsonData as any).map((cluster: ClusterFeature) => (
            <GeoJSON key={`geoData-${cluster.id}`} data={cluster.geometry}>
              <Popup>
                <GeoJsonLayerPopup feature={cluster} />
              </Popup>
            </GeoJSON>
          ))}
        </div>
      );
    } else {
      return <div key={`geoData-${i}`}></div>;
    }
  });
  return <>{dataLayers}</>;
};
