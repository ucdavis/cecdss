import { ClusterResult } from '../../models/Types';
import { Feature, FeatureCollection } from 'geojson';

export const formatNumber = (num: number, digits?: number) => {
  if (!num) {
    return '0';
  }
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  return num.toLocaleString('en', options);
};

export const formatCurrency = (num: number) => {
  return `\$${formatNumber(num)}`;

  // if (!num) {
  //   return '';
  // }
  // const options = {
  //   style: 'currency',
  //   currency: 'USD'
  // };
  // return num.toLocaleString('en', options);
};

export const convertGeoJSON = (clusters: ClusterResult[]) => {
  const features: Feature[] = clusters.map(cluster => {
    const feature: Feature = {
      type: 'Feature',
      properties: {
        cluster_no: cluster.cluster_no,
        biomass: cluster.biomass
      },
      geometry: {
        type: 'Point',
        coordinates: [cluster.lng, cluster.lat]
      }
    };
    return feature;
  });
  return features;
};
