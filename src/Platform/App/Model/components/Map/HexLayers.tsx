// import React from 'react';
// import { FeatureCollection } from 'geojson';
// import { HexbinLayer } from 'react-leaflet-d3';

// interface Props {
//   yearlyGeoJson: FeatureCollection[];
//   selectedYearIndex: number;
// }

// export const HexLayers = (props: Props) => {
//   if (!props.yearlyGeoJson || props.yearlyGeoJson.length <= 0) {
//     return null;
//   }

//   const options = {
//     colorScaleExtent: [1, undefined],
//     radiusScaleExtent: [1, undefined],
//     colorRange: ['#f7fbff', '#ff0000'],
//     radiusRange: [5, 12]
//   };

//   const dataLayers = props.yearlyGeoJson.map((data, i) =>
//     i === props.selectedYearIndex ? (
//       <HexbinLayer key={`hexbin-${i}`} data={data} {...options} />
//     ) : null
//   );

//   return <>{dataLayers}</>;
// };

export {}