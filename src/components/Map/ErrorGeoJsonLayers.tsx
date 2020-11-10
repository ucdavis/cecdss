import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { FeatureCollection, Feature } from 'geojson';
import { ClusterFeature, ErrorClusterFeature } from '../../models/Types';
import { formatNumber } from '../Shared/util';

interface Props {
  years: number[];
  yearlyGeoJson: FeatureCollection[];
  selectedYearIndex: number;
}

export const ErrorGeoJsonLayers = (props: Props) => {
  if (!props.yearlyGeoJson || props.yearlyGeoJson.length < 1) {
    return null;
  }

  const dataLayers = props.yearlyGeoJson.map((geojsonData, i) => {
    if (
      i === props.selectedYearIndex ||
      props.selectedYearIndex === props.years.length
    ) {
      const errorStyle = {
        color: '#d9534f'
      };
      return (
        <GeoJSON
          key={i}
          style={errorStyle}
          data={geojsonData}
          onEachFeature={(feature: ErrorClusterFeature, layer: any) => {
            if (feature && feature.properties) {
              const cluster = feature.properties;
              const customPopup = `<b>Cluster: ${cluster.cluster_no}</b><hr />
          <b>area:</b> ${formatNumber(cluster.area)}<br/>
          <b>slope:</b> ${formatNumber(cluster.slope)}<br/>
          <b>error:</b> ${cluster.error}
          `;
              layer.bindPopup(customPopup);
            }
          }}
        />
      );
    } else {
      return <></>;
    }
  });
  return <>{dataLayers}</>;
};
