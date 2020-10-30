import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { FeatureCollection, Feature } from 'geojson';
import { ClusterFeature } from '../../models/Types';

interface Props {
  years: number[];
  yearlyGeoJson: FeatureCollection[];
  selectedYearIndex: number;
}

export const GeoJsonLayers = (props: Props) => {
  if (!props.yearlyGeoJson || props.yearlyGeoJson.length < 1) {
    return null;
  }

  const dataLayers = props.yearlyGeoJson.map((geojsonData, i) =>
    i === props.selectedYearIndex ||
    props.selectedYearIndex === props.years.length ? (
      <GeoJSON
        key={i}
        data={geojsonData}
        onEachFeature={(feature: ClusterFeature, layer: any) => {
          if (feature && feature.properties) {
            layer.bindPopup(
              `${feature.properties.cluster_no}: ${feature.properties.biomass}`
            );
          }
        }}
      />
    ) : (
      <></>
    )
  );
  return <>{dataLayers}</>;
};
