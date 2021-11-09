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
      <b>Cluster no.{cluster.cluster_no}</b>
      <hr />
      <b>Area (acre):</b> {formatNumber(cluster.area)}
      <br />
      <b>Feedstock (green tons):</b> {formatNumber(cluster.biomass)}
      <br />
      <b>One-way transport distance (km):</b> {formatNumber(cluster.distance)}
      <br />
      <b>Harvest cost:</b> ${formatNumber(cluster.residueCost)}
      <br />
      <b>Transportation cost:</b> ${formatNumber(cluster.transportationCost)}
      <br />
      {/* <b>County:</b> {cluster.county}
      <br /> */}
      <b>Land use:</b> {cluster.land_use}
      <br />
      <b>Fire hazard class:</b> {cluster.haz_class}
      <br />
      <b>Forest type:</b> {cluster.forest_type}
      <br />
      <b>Site class:</b> {cluster.site_class}
      <br />
    </div>
  );
};
