import { ClusterResult } from '../../models/Types';
import { Feature, FeatureCollection } from 'geojson';

export const formatNumber = (num: number, digits?: number) => {
  if (!num) {
    return '0';
  } else if (num < 0.01 && !digits) {
    digits = 0;
  } else if (num < 1 && !digits) {
    digits = 2;
  } else if (num > 999 && !digits) {
    digits = 0;
  } else if (!digits) {
    digits = 2;
  }
  const options = {
    minimumFractionDigits: !!digits ? digits : 0,
    maximumFractionDigits: !!digits ? digits : 0
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
  //   currency: 'USD',
  //   maximumFractionDigits: num >= 1000 ? 0 : 2
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
        coordinates: [cluster.center_lng, cluster.center_lat]
      }
    };
    return feature;
  });
  return features;
};

export const convertLandingSiteGeoJSON = (clusters: ClusterResult[]) => {
  const features: Feature[] = clusters.map(cluster => {
    const feature: Feature = {
      type: 'Feature',
      properties: {
        cluster_no: cluster.cluster_no
      },
      geometry: {
        type: 'Point',
        coordinates: [cluster.landing_lng, cluster.landing_lat]
      }
    };
    return feature;
  });
  return features;
};
