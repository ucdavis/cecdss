import { Feature } from 'geojson';
import React, { useMemo } from 'react';
import { GeoJSON } from 'react-leaflet';
import { Geometry } from '../../models/Types';

interface Props {
  years: number[];
  yearlyGeoJson: Geometry[];
  selectedYearIndex: number;
}

export const TripLayers = (props: Props) => {
  // grab the currently selected year's geojson if availabe whenever the selected year changes
  const currentGeoJson = useMemo(() => {
    if (
      !props.yearlyGeoJson ||
      props.yearlyGeoJson.length < 1 ||
      props.selectedYearIndex === props.years.length // indicates no year has been selected
    ) {
      return null;
    }

    const currentGeometry = props.yearlyGeoJson[props.selectedYearIndex];

    if (!currentGeometry) {
      console.log(
        `geometry does not exist for year index ${props.selectedYearIndex}`
      );
      return null;
    }

    const feature: Feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',        
        coordinates: props.yearlyGeoJson[props.selectedYearIndex].coordinates
      }
    };
    return feature;
  }, [props.selectedYearIndex, props.yearlyGeoJson, props.years.length]);

  if (currentGeoJson) {
    return <GeoJSON color="green" key={`trip-${props.selectedYearIndex}`} data={currentGeoJson} />;
  }

  // in case we don't have any geojson, which shouldn't be possible unless there are no active trips for the selected year
  return null;
};
