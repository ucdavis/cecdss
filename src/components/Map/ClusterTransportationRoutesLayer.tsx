import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { FeatureCollection } from 'geojson';
import { MapCoordinates, YearlyResult } from '../../models/Types';
import { serviceUrl } from '../Shared/config';

interface Props {
  facilityCoordinates: MapCoordinates;
  years: number[];
  yearlyResults: YearlyResult[];
  selectedYearIndex: number;
}

export const ClusterTransportationRoutesLayer = (props: Props) => {
  const [currentComputedYear, setCurrentComputedYear] = useState<number>(
    props.selectedYearIndex
  );
  const [geoJson, setGeoJson] = useState<FeatureCollection>();

  useEffect(() => {
    const yearResult = props.yearlyResults[props.selectedYearIndex];

    if (!yearResult) {
      setGeoJson(undefined);
      setCurrentComputedYear(-1);
      return;
    }
    const clusters = yearResult.clusters;

    const body = {
      facilityLat: props.facilityCoordinates.lat,
      facilityLng: props.facilityCoordinates.lng,
      clusters
    };

    const fetchRoutes = async () => {
      const routeResults = await fetch(serviceUrl + 'processRoutes', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());

      setGeoJson(routeResults);
      setCurrentComputedYear(props.selectedYearIndex);
    };

    fetchRoutes();
  }, [
    props.facilityCoordinates.lat,
    props.facilityCoordinates.lng,
    props.selectedYearIndex,
    props.yearlyResults
  ]);

  if (geoJson) {
    return <GeoJSON color="orange" key={`geoyear-${currentComputedYear}`} data={geoJson} />;
  } else {
    return <></>;
  }
};
