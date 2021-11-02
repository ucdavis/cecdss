import React from 'react';
import { ClusterFeature } from '../../models/Types';
import { formatNumber } from '../Shared/util';

interface IProps {
  feature: ClusterFeature;
}

export const GeoJsonLayerPopup = (props: IProps) => {
  const cluster = props.feature.properties;

  return (
    <div>
      <b>Cluster: {cluster.cluster_no}</b>
      <hr />
      <b>area:</b> {formatNumber(cluster.area)}
      <br />
      <b>biomass:</b> {formatNumber(cluster.biomass)}
      <br />
      <b>distance:</b> {formatNumber(cluster.distance)}
      <br />
      <b>combinedCost:</b> ${formatNumber(cluster.combinedCost)}
      <br />
      <b>residueCost:</b> ${formatNumber(cluster.residueCost)}
      <br />
      <b>transportationCost:</b> ${formatNumber(cluster.transportationCost)}
      <br />
      {/* <b>county:</b> {cluster.county}
      <br /> */}
      <b>land_use:</b> {cluster.land_use}
      <br />
      <b>haz_class:</b> {cluster.haz_class}
      <br />
      <b>forest_type:</b> {cluster.forest_type}
      <br />
      <b>site_class:</b> {cluster.site_class}
      <br />
    </div>
  );
};
