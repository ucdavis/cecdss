export interface LCARunParams {
  technology: string;
  dieselPerKwhElectricity: number; // m3
  gasolinePerKwhElectricity: number; // m3
  jetFuelPerKwhElectricity: number; // m3
  transportationDistance: number; // km
}

export interface LCAresults {
  lciResults: lciResults;
  lciaResults: lciaResults;
}

// tslint:disable-next-line: class-name
export interface lciResults {
  CO2: number;
  CH4: number;
  N2O: number;
  CO2e: number;
  CO: number;
  NOx: number;
  VOCs: number;
  PM10: number;
  PM25: number;
}

// tslint:disable-next-line: class-name
export interface lciaResults {
  global_warming_air: number;
  acidification_air: number;
  hh_particulate_air: number;
  eutrophication_air: number;
  eutrophication_water: number;
  smog_air: number;
}
