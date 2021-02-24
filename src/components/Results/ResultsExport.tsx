import React from 'react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

import { AllYearsResults, YearlyResult } from '../../models/Types';
import { Button } from 'reactstrap';

interface Props {
  allYearResults: AllYearsResults;
  yearlyResults: YearlyResult[];
  sensitivityChart: React.MutableRefObject<any>;
}

export const ResultsExport = (props: Props) => {
  // TODO: for now we allow showing results once you have projected at least 5 years
  if (!props.yearlyResults || props.yearlyResults.length < 5) {
    return <></>; // only show after we get all results back
  }
  const makeExcel = async () => {
    // https://github.com/exceljs/exceljs#interface
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('ExcelJS sheet');

    // const row = worksheet.getRow(5);
    // row.getCell(1).value = 5; // A5's value set to 5
    // row.getCell("C").value = new Date(); // C5's value set to now

    const yearlyHeaders = [];

    for (let i = 0; i < 30; i++) {
      yearlyHeaders.push({ name: 'Y' + (new Date().getFullYear() + i) });
    }

    // This part increases the width of a chosen column
    const nameCol = worksheet.getColumn('B');
    nameCol.width = 38;

    worksheet.addTable({
      name: 'TechPerf',
      ref: 'B2',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'Technical Performance' }, { name: ' ' }],
      rows: [
        ['Project Prescription', data.Technical.ProjectPrescription.About],
        ['Facility Type', data.Technical.FacilityType.About],
        ['Capital Cost ($)', data.Technical.CapitalCost.About],
        ['Net Electrical Capacity (kWe)', data.Technical.NetElectrical.About],
        ['Net Station Efficiency (%)', data.Technical.NetStattion.About],
        ['Economic Life (y)', data.Technical.EconomicLife.About],
        ['Location', data.Technical.Location.About],
        ['Proximity to substation (km)', data.Technical.Proximity.About]
      ]
    });

    worksheet.addTable({
      name: 'supply',
      ref: 'B13',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'Resource Supply (ton)' },
        { name: 'Total' },
        ...props.yearlyResults.map(r => ({ name: 'Y' + r.year }))
      ],
      rows: [
        [
          'Feedstock ',
          props.yearlyResults.reduce((sum, x) => sum + x.totalFeedstock, 0),
          ...props.yearlyResults.map(r => r.totalFeedstock)
        ],
        [
          'Coproduct',
          props.yearlyResults.reduce((sum, x) => sum + x.totalCoproduct, 0),
          ...props.yearlyResults.map(r => r.totalCoproduct)
        ]
      ]
    });

    worksheet.addTable({
      name: 'analysis',
      ref: 'B17',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'Environmental Analysis' },
        { name: 'Unit' },
        { name: 'Total' },
        ...yearlyHeaders
      ],
      rows: [
        [
          'Diesel',
          data.Environemntal.Diesel.Unit,
          data.Environemntal.Diesel.Total,
          ...data.Environemntal.Diesel.Yearly
        ],
        [
          'Gasoline',
          data.Environemntal.Gasoline.Unit,
          data.Environemntal.Gasoline.Total,
          ...data.Environemntal.Gasoline.Yearly
        ],
        [
          'Jet Fuel',
          data.Environemntal.JetFuel.Unit,
          data.Environemntal.JetFuel.Total,
          ...data.Environemntal.JetFuel.Yearly
        ],
        [
          'Transport Distance',
          data.Environemntal.TransportDistance.Unit,
          data.Environemntal.TransportDistance.Total,
          ...data.Environemntal.TransportDistance.Yearly
        ]
      ]
    });

    worksheet.addTable({
      name: 'lci',
      ref: 'B23',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'LCI Results' },
        { name: 'Unit' },
        { name: 'Total' },
        ...yearlyHeaders
      ],
      rows: [
        ['CO2', data.LCI.CO2.Unit, data.LCI.CO2.Total, ...data.LCI.CO2.Yearly],
        ['CH4', data.LCI.CH4.Unit, data.LCI.CH4.Total, ...data.LCI.CH4.Yearly],
        ['N2O', data.LCI.N2O.Unit, data.LCI.N2O.Total, ...data.LCI.N2O.Yearly],
        [
          'CO2e',
          data.LCI.CO2e.Unit,
          data.LCI.CO2e.Total,
          ...data.LCI.CO2e.Yearly
        ],
        ['CO', data.LCI.CO.Unit, data.LCI.CO.Total, ...data.LCI.CO.Yearly],
        ['NOx', data.LCI.NOx.Unit, data.LCI.NOx.Total, ...data.LCI.NOx.Yearly],
        ['NH3', data.LCI.NH3.Unit, data.LCI.NH3.Total, ...data.LCI.NH3.Yearly],
        ['PM10', data.LCI.CO2.Unit, data.LCI.CO2.Total, ...data.LCI.CO2.Yearly],
        [
          'PM2.5',
          data.LCI.PM25.Unit,
          data.LCI.PM25.Total,
          ...data.LCI.PM25.Yearly
        ],
        ['SO2', data.LCI.SO2.Unit, data.LCI.SO2.Total, ...data.LCI.SO2.Yearly],
        ['SOx', data.LCI.SOx.Unit, data.LCI.SOx.Total, ...data.LCI.SOx.Yearly],
        [
          'VOCs',
          data.LCI.VOCs.Unit,
          data.LCI.VOCs.Total,
          ...data.LCI.VOCs.Yearly
        ],
        [
          'Carbon Intensity',
          data.LCI.CarbonIntensity.Unit,
          data.LCI.CarbonIntensity.Total,
          ...data.LCI.CarbonIntensity.Yearly
        ]
      ]
    });

    worksheet.addTable({
      name: 'lcia',
      ref: 'B38',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'LCIA Results' },
        { name: 'Unit' },
        { name: 'Total' },
        ...yearlyHeaders
      ],
      rows: [
        [
          'Global Warming Air',
          data.LCIA.GlobalWarmingAir.Unit,
          data.LCIA.GlobalWarmingAir.Total,
          ...data.LCIA.GlobalWarmingAir.Yearly
        ],
        [
          'Acidification Air',
          data.LCIA.AcidificationAir.Unit,
          data.LCIA.AcidificationAir.Total,
          ...data.LCIA.AcidificationAir.Yearly
        ],
        [
          'HH Particulate Air',
          data.LCIA.HHParticulateAir.Unit,
          data.LCIA.HHParticulateAir.Total,
          ...data.LCIA.HHParticulateAir.Yearly
        ],
        [
          'Euthrophication Air',
          data.LCIA.EuthrophicationAir.Unit,
          data.LCIA.EuthrophicationAir.Total,
          ...data.LCIA.EuthrophicationAir.Yearly
        ],
        [
          'Euthrophication Water',
          data.LCIA.EuthrophicationWater.Unit,
          data.LCIA.EuthrophicationWater.Total,
          ...data.LCIA.EuthrophicationWater.Yearly
        ],
        [
          'Smog Air',
          data.LCIA.SmogAir.Unit,
          data.LCIA.SmogAir.Total,
          ...data.LCIA.SmogAir.Yearly
        ]
      ]
    });

    worksheet.addTable({
      name: 'technoeconomic',
      ref: 'B46',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'Technoeconomic Analysis' },
        { name: 'Unit' },
        { name: 'Total' },
        ...yearlyHeaders
      ],
      rows: [
        [
          'Harvest Cost',
          data.TechnoeconomicAnalysis.HarvestCost.Unit,
          data.TechnoeconomicAnalysis.HarvestCost.Total,
          ...data.TechnoeconomicAnalysis.HarvestCost.Yearly
        ],
        [
          'Transport Cost',
          data.TechnoeconomicAnalysis.TransportCost.Unit,
          data.TechnoeconomicAnalysis.TransportCost.Total,
          ...data.TechnoeconomicAnalysis.TransportCost.Yearly
        ],
        [
          'Move-in Cost',
          data.TechnoeconomicAnalysis.MoveInCost.Unit,
          data.TechnoeconomicAnalysis.MoveInCost.Total,
          ...data.TechnoeconomicAnalysis.MoveInCost.Yearly
        ],
        [
          'Feedstock Cost',
          data.TechnoeconomicAnalysis.FeedstockCost.Unit,
          data.TechnoeconomicAnalysis.FeedstockCost.Total,
          ...data.TechnoeconomicAnalysis.FeedstockCost.Yearly
        ],
        [
          'Equity Recovery',
          data.TechnoeconomicAnalysis.EquityRecovery.Unit,
          data.TechnoeconomicAnalysis.EquityRecovery.Total,
          ...data.TechnoeconomicAnalysis.EquityRecovery.Yearly
        ],
        [
          'Equity Interest',
          data.TechnoeconomicAnalysis.EquityInterest.Unit,
          data.TechnoeconomicAnalysis.EquityInterest.Total,
          ...data.TechnoeconomicAnalysis.EquityInterest.Yearly
        ],
        [
          'Equity Principal Paid',
          data.TechnoeconomicAnalysis.EquityPrincipalPaid.Unit,
          data.TechnoeconomicAnalysis.EquityPrincipalPaid.Total,
          ...data.TechnoeconomicAnalysis.EquityPrincipalPaid.Yearly
        ],
        [
          'Equity Principal Remaining',
          data.TechnoeconomicAnalysis.EquityPrincipalRemaining.Unit,
          data.TechnoeconomicAnalysis.EquityPrincipalRemaining.Total,
          ...data.TechnoeconomicAnalysis.EquityPrincipalRemaining.Yearly
        ],
        [
          'Debt Recovery',
          data.TechnoeconomicAnalysis.DebtRecovery.Unit,
          data.TechnoeconomicAnalysis.DebtRecovery.Total,
          ...data.TechnoeconomicAnalysis.DebtRecovery.Yearly
        ],
        [
          'Debt Interest',
          data.TechnoeconomicAnalysis.DebtInterest.Unit,
          data.TechnoeconomicAnalysis.DebtInterest.Total,
          ...data.TechnoeconomicAnalysis.DebtInterest.Yearly
        ],
        [
          'Debt Principal Paid',
          data.TechnoeconomicAnalysis.DebtPrincipalPaid.Unit,
          data.TechnoeconomicAnalysis.DebtPrincipalPaid.Total,
          ...data.TechnoeconomicAnalysis.DebtPrincipalPaid.Yearly
        ],
        [
          'Debt Principal Remaining',
          data.TechnoeconomicAnalysis.DebtPrincipalRemaining.Unit,
          data.TechnoeconomicAnalysis.DebtPrincipalRemaining.Total,
          ...data.TechnoeconomicAnalysis.DebtPrincipalRemaining.Yearly
        ],
        [
          'Non-fuel Expenses',
          data.TechnoeconomicAnalysis.NonFuelExpenses.Unit,
          data.TechnoeconomicAnalysis.NonFuelExpenses.Total,
          ...data.TechnoeconomicAnalysis.NonFuelExpenses.Yearly
        ],
        [
          'Debt Reserve',
          data.TechnoeconomicAnalysis.DebtReserve.Unit,
          data.TechnoeconomicAnalysis.DebtReserve.Total,
          ...data.TechnoeconomicAnalysis.DebtReserve.Yearly
        ],
        [
          'Deprecation',
          data.TechnoeconomicAnalysis.Deprecation.Unit,
          data.TechnoeconomicAnalysis.Deprecation.Total,
          ...data.TechnoeconomicAnalysis.Deprecation.Yearly
        ],
        [
          'Income--Capacity',
          data.TechnoeconomicAnalysis.IncomeCapacity.Unit,
          data.TechnoeconomicAnalysis.IncomeCapacity.Total,
          ...data.TechnoeconomicAnalysis.IncomeCapacity.Yearly
        ],
        [
          'Interest on Debt Reserve',
          data.TechnoeconomicAnalysis.InterestDebtReserve.Unit,
          data.TechnoeconomicAnalysis.InterestDebtReserve.Total,
          ...data.TechnoeconomicAnalysis.InterestDebtReserve.Yearly
        ],
        [
          'Taxes w/o credit',
          data.TechnoeconomicAnalysis.TaxesWithoutCredit.Unit,
          data.TechnoeconomicAnalysis.TaxesWithoutCredit.Total,
          ...data.TechnoeconomicAnalysis.TaxesWithoutCredit.Yearly
        ],
        [
          'Tax Credit',
          data.TechnoeconomicAnalysis.TaxCredit.Unit,
          data.TechnoeconomicAnalysis.TaxCredit.Total,
          ...data.TechnoeconomicAnalysis.TaxCredit.Yearly
        ],
        [
          'Taxes',
          data.TechnoeconomicAnalysis.Taxes.Unit,
          data.TechnoeconomicAnalysis.Taxes.Total,
          ...data.TechnoeconomicAnalysis.Taxes.Yearly
        ],
        [
          'Energy Revenue Required',
          data.TechnoeconomicAnalysis.EnergyRevenueRequired.Unit,
          data.TechnoeconomicAnalysis.EnergyRevenueRequired.Total,
          ...data.TechnoeconomicAnalysis.EnergyRevenueRequired.Yearly
        ],
        [
          'Energy Revenue Required (PW)',
          data.TechnoeconomicAnalysis.EnergyRevenueRequiredPW.Unit,
          data.TechnoeconomicAnalysis.EnergyRevenueRequiredPW.Total,
          ...data.TechnoeconomicAnalysis.EnergyRevenueRequiredPW.Yearly
        ],
        [
          'Current $ LCOE',
          data.TechnoeconomicAnalysis.Current$LCOE.Unit,
          data.TechnoeconomicAnalysis.Current$LCOE.Total,
          ...data.TechnoeconomicAnalysis.Current$LCOE.Yearly
        ],
        [
          'Constant $ LCOE',
          data.TechnoeconomicAnalysis.Constant$LCOE.Unit,
          data.TechnoeconomicAnalysis.Constant$LCOE.Total,
          ...data.TechnoeconomicAnalysis.Constant$LCOE.Yearly
        ]
      ]
    });

    worksheet.addTable({
      name: 'assumptions',
      ref: 'B103',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'Assumptions' }, { name: 'Total' }],
      rows: [
        ['LogLength, ft', data.Assumptions.LogLength.Total],
        [
          'LoadWeight, green tons (logs)',
          data.Assumptions.LoadWeightLogs.Total
        ],
        [
          'LoadWeight, green tons (chips)',
          data.Assumptions.LoadWeightChips.Total
        ],
        ['CTLTrailSpacing, ft', data.Assumptions.CTLTrailSpacing.Total],
        [
          'HardwoodCostPremium, fraction',
          data.Assumptions.HardwoodCostPremium.Total
        ],
        [
          'ResidueRecoveryFraction for WT systems',
          data.Assumptions.ResidueRecoveryFractionWT.Total
        ],
        [
          'ResidueRecoveryFraction for CTL',
          data.Assumptions.ResidueRecoveryFractionCTL.Total
        ],
        ['HardwoodFractionCT', data.Assumptions.HardwoodFractionCT.Total],
        ['HardwoodFractionSLT', data.Assumptions.HardwoodFractionSLT.Total],
        ['HardwoodFractionLLT', data.Assumptions.HardwoodFractionLLT.Total],
        ['Feller/Bucker wage (2019)', data.Assumptions.Feller.Total],
        ['All Others wage (2019)', data.Assumptions.OtherWages.Total],
        ['Benefits and other payroll costs', data.Assumptions.Benefits.Total],
        ['OIL_ETC_COST ($/mile)', data.Assumptions.OIL_ETC_COST.Total],
        ['DRIVERS_PER_TRUCK', data.Assumptions.DRIVERS_PER_TRUCK.Total],
        ['MILES_PER_GALLON', data.Assumptions.MILES_PER_GALLON.Total],
        ['FUEL_COST ($/gallon)', data.Assumptions.FUEL_COST.Total],
        ['TRUCK_LABOR ($/hr)', data.Assumptions.TRUCK_LABOR.Total]
      ]
    });

    worksheet.addTable({
      name: 'keyReferences',
      ref: 'B123',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'Key References' }, { name: 'Total' }],
      rows: [
        [
          'Fuel Reduction Cost Simulator',
          data.KeyRefrences.FuelReduction.Total
        ],
        [
          'Advanced Hardwood Biofuels Northwest',
          data.KeyRefrences.AdvancedHardwood.Total
        ],
        [
          'California Biomass Collaborative',
          data.KeyRefrences.CaliforniaBiomass.Total
        ],
        ['EPA eGrid', data.KeyRefrences.EPA.Total],
        ['GREET model', data.KeyRefrences.GREET.Total],
        [
          'Literature for emission factors',
          data.KeyRefrences.LiteratureEmission.Total
        ]
      ]
    });

    // turn the chart into an image and embed it
    if (props.sensitivityChart) {
      // we should always have the chart but if it's null for some reason skip it instead of breaking
      const chartSvg = props.sensitivityChart.current.container.children[0];

      // TODO: legend isn't in SVG so it currently isn't included
      const pngData = await svgToPng(chartSvg, 700, 600);

      // add image to workbook by base64
      const chartImageId2 = workbook.addImage({
        base64: pngData,
        extension: 'png'
      });

      // insert an image over B2:D6
      worksheet.addImage(chartImageId2, 'B72:J100');
    }

    const workbookBuffer = await workbook.xlsx.writeBuffer();

    // send file to client
    saveAs(
      new Blob([workbookBuffer], { type: 'application/octet-stream' }),
      `cecdata.xlsx`
    );
  };

  return <Button onClick={makeExcel}>Export fake result to Excel</Button>;
};

const fakeYearlyData = () =>
  Array.from({ length: 30 }, () => Math.floor(Math.random() * 40));

const data = {
  Technical: {
    ProjectPrescription: {
      About: 'Treatment'
    },
    FacilityType: {
      About: 'Technology'
    },
    CapitalCost: {
      About: '$1231'
    },
    NetElectrical: {
      About: 43
    },
    NetStattion: {
      About: 12
    },
    EconomicLife: {
      About: 4
    },
    Location: {
      About: '23.123131231313123, 11.31231313'
    },
    Proximity: {
      About: '121'
    }
  },
  Resources: {
    Feedstock: {
      Total: 123,
      Yearly: fakeYearlyData()
    },
    Coproduct: {
      Total: 321,
      Yearly: fakeYearlyData()
    }
  },
  Environemntal: {
    Diesel: {
      Unit: 'gal',
      Total: 123,
      Yearly: fakeYearlyData()
    },
    Gasoline: {
      Unit: 'gal',
      Total: 456,
      Yearly: fakeYearlyData()
    },
    JetFuel: {
      Unit: 'gal',
      Total: 789,
      Yearly: fakeYearlyData()
    },
    TransportDistance: {
      Unit: 'km',
      Total: 101112,
      Yearly: fakeYearlyData()
    }
  },
  LCI: {
    CO2: {
      Unit: 'kg',
      Total: 123,
      Yearly: fakeYearlyData()
    },
    CH4: {
      Unit: 'g',
      Total: 235,
      Yearly: fakeYearlyData()
    },
    N2O: {
      Unit: 'g',
      Total: 364,
      Yearly: fakeYearlyData()
    },
    CO2e: {
      Unit: 'kg',
      Total: 785,
      Yearly: fakeYearlyData()
    },
    CO: {
      Unit: 'kg',
      Total: 918,
      Yearly: fakeYearlyData()
    },
    NOx: {
      Unit: 'g',
      Total: 534,
      Yearly: fakeYearlyData()
    },
    NH3: {
      Unit: 'g',
      Total: 123,
      Yearly: fakeYearlyData()
    },
    PM10: {
      Unit: 'g',
      Total: 324,
      Yearly: fakeYearlyData()
    },
    PM25: {
      Unit: 'g',
      Total: 123,
      Yearly: fakeYearlyData()
    },
    SO2: {
      Unit: 'g',
      Total: 903,
      Yearly: fakeYearlyData()
    },
    SOx: {
      Unit: 'g',
      Total: 234,
      Yearly: fakeYearlyData()
    },
    VOCs: {
      Unit: 'g',
      Total: 535,
      Yearly: fakeYearlyData()
    },
    CarbonIntensity: {
      Unit: 'g',
      Total: 234,
      Yearly: fakeYearlyData()
    }
  },
  LCIA: {
    GlobalWarmingAir: {
      Unit: 'kg CO2 eq',
      Total: 234,
      Yearly: fakeYearlyData()
    },
    AcidificationAir: {
      Unit: 'kg SO2 eq',
      Total: 234,
      Yearly: fakeYearlyData()
    },
    HHParticulateAir: {
      Unit: 'PM2.5 eq',
      Total: 234,
      Yearly: fakeYearlyData()
    },
    EuthrophicationAir: {
      Unit: 'kg N eq',
      Total: 234,
      Yearly: fakeYearlyData()
    },
    EuthrophicationWater: {
      Unit: 'kg N eq',
      Total: 234,
      Yearly: fakeYearlyData()
    },
    SmogAir: {
      Unit: 'kg O3 eq',
      Total: 234,
      Yearly: fakeYearlyData()
    }
  },
  TechnoeconomicAnalysis: {
    HarvestCost: {
      Unit: '$/ton',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    TransportCost: {
      Unit: '$/ton',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    MoveInCost: {
      Unit: '$/ton',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    FeedstockCost: {
      Unit: '$/ton',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    EquityRecovery: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    EquityInterest: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    EquityPrincipalPaid: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    EquityPrincipalRemaining: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    DebtRecovery: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    DebtInterest: {
      Unit: '$/ton',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    DebtPrincipalPaid: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    DebtPrincipalRemaining: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    NonFuelExpenses: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    DebtReserve: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    Deprecation: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    IncomeCapacity: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    InterestDebtReserve: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    TaxesWithoutCredit: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    TaxCredit: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    Taxes: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    EnergyRevenueRequired: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    EnergyRevenueRequiredPW: {
      Unit: '$',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    Current$LCOE: {
      Unit: '$/kWh',
      Total: 146,
      Yearly: fakeYearlyData()
    },
    Constant$LCOE: {
      Unit: '$/kWh',
      Total: 146,
      Yearly: fakeYearlyData()
    }
  },
  Assumptions: {
    LogLength: {
      Total: 43
    },
    LoadWeightLogs: {
      Total: 23
    },
    LoadWeightChips: {
      Total: 65
    },
    CTLTrailSpacing: {
      Total: 23
    },
    HardwoodCostPremium: {
      Total: 0.5
    },
    ResidueRecoveryFractionWT: {
      Total: 0.8
    },
    ResidueRecoveryFractionCTL: {
      Total: 0.35
    },
    HardwoodFractionCT: {
      Total: 0.452
    },
    HardwoodFractionSLT: {
      Total: 0.73
    },
    HardwoodFractionLLT: {
      Total: 0.21
    },
    Feller: {
      Total: 23.53
    },
    OtherWages: {
      Total: 22.32
    },
    Benefits: {
      Total: '42%'
    },
    OIL_ETC_COST: {
      Total: 0.35
    },
    DRIVERS_PER_TRUCK: {
      Total: 1.67
    },
    MILES_PER_GALLON: {
      Total: 6
    },
    FUEL_COST: {
      Total: 3.562
    },
    TRUCK_LABOR: {
      Total: 22.1
    }
  },
  KeyRefrences: {
    FuelReduction: {
      Total: 9718
    },
    AdvancedHardwood: {
      Total: 2341
    },
    CaliforniaBiomass: {
      Total: 123
    },
    EPA: {
      Total: 214
    },
    GREET: {
      Total: 112
    },
    LiteratureEmission: {
      Total: 1242
    }
  }
};

// some fake data to make the line chart look decent
const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const svgToPng = (svg: any, width: number, height: number) => {
  return new Promise<string>((resolve, reject) => {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw Error('No canvas context found');

    // Set background to white
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    let xml = new XMLSerializer().serializeToString(svg);
    let dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(xml);
    let img = new Image(width, height);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      let imageData = canvas.toDataURL('image/png', 1.0);
      resolve(imageData);
    };

    img.onerror = () => reject();

    img.src = dataUrl;
  });
};

export default ResultsExport;
