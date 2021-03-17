import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { FeatureCollection, Feature } from 'geojson';
import { ClusterFeature } from '../../models/Types';
import { formatNumber } from '../Shared/util';

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
        <GeoJSON
          key={`geoData-${i}`}
          data={geojsonData}
          onEachFeature={(feature: ClusterFeature, layer: any) => {
            if (feature && feature.properties) {
              const cluster = feature.properties;
              const customPopup = `<b>Cluster: ${cluster.cluster_no}</b><hr />
          <b>area:</b> ${formatNumber(cluster.area)}<br/>
          <b>biomass:</b> ${formatNumber(cluster.biomass)}<br/>
          <b>distance:</b> ${formatNumber(cluster.distance)}<br/>
          <b>combinedCost:</b> ${formatNumber(cluster.combinedCost)}<br/>
          <b>residueCost:</b> ${formatNumber(cluster.residueCost)}<br/>
          <b>transportationCost:</b> ${formatNumber(
            cluster.transportationCost
          )}<br/>
          <b>county:</b> ${cluster.county}<br/>
          <b>land_use:</b> ${cluster.land_use}<br/>
          <b>haz_class:</b> ${cluster.haz_class}<br/>
          <b>forest_type:</b> ${cluster.forest_type}<br/>
          <b>site_class:</b> ${cluster.site_class}<br/>
          `;
              layer.bindPopup(customPopup);
            }
          }}
        />
      );
    } else {
      return <div key={`geoData-${i}`}></div>;
    }
  });
  return <>{dataLayers}</>;
};
