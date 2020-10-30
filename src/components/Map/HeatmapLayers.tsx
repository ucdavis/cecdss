import React from 'react';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { FeatureCollection, Feature, Point } from 'geojson';
import { ClusterFeature } from '../../models/Types';

interface Props {
  yearlyGeoJson: FeatureCollection[];
  selectedYearIndex: number;
  years: number[];
}

export const HeatmapLayers = (props: Props) => {
  if (!props.yearlyGeoJson || props.yearlyGeoJson.length <= 0) {
    return null;
  }

  const dataLayers = props.yearlyGeoJson.map((result, i) =>
    i === props.selectedYearIndex ||
    props.selectedYearIndex === props.years.length ? (
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
      />
    ) : (
      <></>
    )
  );

  return <>{dataLayers}</>;
};
