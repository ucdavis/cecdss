import React from 'react';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { FeatureCollection, Feature, Point } from 'geojson';
import { ClusterFeature } from '../../models/Types';
import { ESRCH } from 'constants';

interface Props {
  yearlyGeoJson: FeatureCollection[];
  selectedYearIndex: number;
  years: number[];
}

export const HeatmapLayers = (props: Props) => {
  if (!props.yearlyGeoJson || props.yearlyGeoJson.length <= 0) {
    return <></>;
  }
  if (
    props.selectedYearIndex >= 0 &&
    props.selectedYearIndex < props.years.length
  ) {
    const dataLayers: any = props.yearlyGeoJson.map((result, i) => {
      if (i === props.selectedYearIndex) {
        return (
          <HeatmapLayer
            points={result.features}
            longitudeExtractor={(feature: Feature<Point>) =>
              feature.geometry.coordinates[0]
            }
            latitudeExtractor={(feature: Feature<Point>) =>
              feature.geometry.coordinates[1]
            }
            intensityExtractor={(feature: ClusterFeature) =>
              feature.properties.biomass
            }
            radius={100}
          />
        );
      } else {
        return <></>;
      }
    });
    return <>{dataLayers}</>;
  } else if (props.selectedYearIndex === props.years.length) {
    const result = props.yearlyGeoJson.reduce((res, cur) => {
      return { ...res, features: [...res.features, ...cur.features] };
    });

    return (
      <HeatmapLayer
        points={result.features}
        longitudeExtractor={(feature: Feature<Point>) =>
          feature.geometry.coordinates[0]
        }
        latitudeExtractor={(feature: Feature<Point>) =>
          feature.geometry.coordinates[1]
        }
        intensityExtractor={(feature: ClusterFeature) =>
          feature.properties.biomass
        }
        blur={10}
      />
    );
  } else {
    return <></>;
  }
};
