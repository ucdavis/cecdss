export interface RunParams {
  technology: string;
  diesel: number; // m3
  gasoline: number; // m3
  jetfuel: number; // m3
  distance: number; // km
  biomass: number; // tons
}

export interface LCAresults {
  lciResults: lciResults;
  lciaResults: lciaResults;
}

export interface lciResults {
  CO2: number; // grams
  CH4: number;
  N2O: number;
  CO2e: number;
  CO: number;
  NOx: number;
  NMVOC: number;
  Particulates: number;
}

export interface lciaResults {
  global_warming_air: number;
  acidification_air: number;
  hh_particulate_air: number;
  eutrophication_air: number;
  eutrophication_water: number;
  ozone_depletion_air: number;
  smog_air: number;
  ecotox_airu_fresh_water: number;
  ecotox_airc_fresh_water: number;
  ecotox_waterc_fresh_water: number;
  ecotox_seawaterc_fresh_water: number;
  ecotox_natsoilc_fresh_water: number;
  ecotox_agrsoilc_fresh_water: number;
  hh_urban_air_cancer: number;
  hh_urban_air_noncanc: number;
  hh_rural_air_cancer: number;
  hh_rural_air_noncanc: number;
  hh_fresh_water_cancer: number;
  hh_fresh_water_noncanc: number;
  hh_sea_water_cancer: number;
  hh_sea_water_noncanc: number;
  hh_natural_soil_cancer: number;
  hh_natural_soil_noncanc: number;
  hh_agric_soil_cancer: number;
  hh_agric_soil_noncanc: number;
}
