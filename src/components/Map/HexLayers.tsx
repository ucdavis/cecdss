import React from 'react';
import { FeatureCollection } from 'geojson';
import { HexbinLayer } from 'react-leaflet-d3';
import { withLeaflet } from 'react-leaflet';

const WrappedHexbinLayer: any = withLeaflet(HexbinLayer);
interface Props {
  yearlyGeoJson: FeatureCollection[];
  selectedYearIndex: number;
}

export const HexLayers = (props: Props) => {
  if (!props.yearlyGeoJson || props.yearlyGeoJson.length <= 0) {
    return null;
  }
  const options = {
    colorScaleExtent: [1, undefined],
    radiusScaleExtent: [1, undefined],
    colorRange: ['#f7fbff', '#ff0000'],
    radiusRange: [5, 12]
  };

  const testData: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-121.653971, 39.744308] },
        properties: { prop0: 'value0' }
      }
    ]
  };
  const dataLayers = props.yearlyGeoJson.map((data, i) =>
    i === props.selectedYearIndex ? (
      <WrappedHexbinLayer data={data} {...options} />
    ) : (
      <></>
    )
  );

  return <>{dataLayers}</>;
};
