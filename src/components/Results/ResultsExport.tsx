import React from 'react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

import { AllYearsResults, YearlyResult } from '../../models/Types';
import { Button } from 'reactstrap';
import { formatCurrency, formatNumber } from '../Shared/util';

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
    console.log(props.yearlyResults);
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
        ...props.yearlyResults.map(r => ({ name: 'Y' + r.year }))
      ],
      rows: [
        [
          'Diesel',
          'mGal',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.inputs.diesel,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.lcaResults.inputs.diesel * 1000)
          )
        ],
        [
          'Gasoline',
          'mGal',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.inputs.gasoline,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.lcaResults.inputs.gasoline * 1000)
          )
        ],
        [
          'Jet Fuel',
          'mGal',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.inputs.jetfuel,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.lcaResults.inputs.jetfuel * 1000)
          )
        ],
        [
          'Transport Distance',
          'm',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.inputs.distance,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.lcaResults.inputs.distance * 1000)
          )
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
        ...props.yearlyResults.map(r => ({ name: 'Y' + r.year }))
      ],
      rows: [
        [
          'CO2',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.CO2,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.CO2)
          )
        ],
        [
          'CH4',
          'g',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.CH4,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.CH4)
          )
        ],
        [
          'N2O',
          'g',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.N2O,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.N2O)
          )
        ],
        [
          'CO2e',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.CO2e,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.CO2e)
          )
        ],
        [
          'CO',
          'g',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.CO,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.CO * 1000)
          )
        ],
        [
          'NOx',
          'g',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.NOx,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.NOx)
          )
        ],
        [
          'NH3',
          'mg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.NH3,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.NH3 * 1000)
          )
        ],
        [
          'PM10',
          'mg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.PM10,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.PM10 * 1000)
          )
        ],
        [
          'PM2.5',
          'mg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.PM25,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.PM25 * 1000)
          )
        ],
        [
          'SO2',
          'g',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.SO2,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.SO2)
          )
        ],
        [
          'SOx',
          'mg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.SOx,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.SOx * 1000)
          )
        ],
        [
          'VOCs',
          'mg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.VOCs,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.VOCs * 1000)
          )
        ],
        [
          'Carbon Intensity',
          'kg CO2e',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciResults.CO2e,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciResults.CO2e)
          )
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
          'kg CO2 eq',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lciaResults.global_warming_air,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciaResults.global_warming_air)
          )
        ],
        [
          'Acidification Air',
          'g SO2 eq',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lciaResults.acidification_air,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciaResults.acidification_air * 1000)
          )
        ],
        [
          'HH Particulate Air',
          'g PM2.5 eq',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lciaResults.hh_particulate_air,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciaResults.hh_particulate_air * 1000)
          )
        ],
        [
          'Euthrophication Air',
          'g N eq',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lciaResults.eutrophication_air,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciaResults.eutrophication_air * 1000)
          )
        ],
        [
          'Euthrophication Water',
          'g N eq',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lciaResults.eutrophication_water,
              0
            ) * 1000
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciaResults.eutrophication_water * 1000)
          )
        ],
        [
          'Smog Air',
          'kg O3 eq',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lciaResults.smog_air,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lciaResults.smog_air)
          )
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
          '$/ton',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.totalFeedstockCost,
              0
            ) /
              props.yearlyResults.reduce(
                (sum, year) => sum + year.totalFeedstock,
                0
              )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.totalFeedstockCost / r.totalFeedstock)
          )
        ],
        [
          'Transport Cost',
          '$/ton',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.totalTransportationCost,
              0
            ) /
              props.yearlyResults.reduce(
                (sum, year) => sum + year.totalFeedstock,
                0
              )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.totalTransportationCost / r.totalFeedstock)
          )
        ],
        [
          'Move-in Cost',
          '$/ton',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.totalMoveInCost,
              0
            ) /
              props.yearlyResults.reduce(
                (sum, year) => sum + year.totalFeedstock,
                0
              )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.totalMoveInCost / r.totalFeedstock)
          )
        ],
        [
          'Feedstock Cost',
          '$/ton',
          formatCurrency(
            props.yearlyResults.reduce((sum, year) => sum + year.fuelCost, 0) /
              props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r => formatCurrency(r.fuelCost))
        ],
        [
          'Equity Recovery',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.EquityRecovery,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.EquityRecovery)
          )
        ],
        [
          'Equity Interest',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.EquityInterest,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.EquityInterest)
          )
        ],
        [
          'Equity Principal Paid',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.EquityPrincipalPaid,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.EquityPrincipalPaid)
          )
        ],
        [
          'Equity Principal Remaining',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.EquityPrincipalRemaining,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.EquityPrincipalRemaining)
          )
        ],
        [
          'Debt Recovery',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.DebtRecovery,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.DebtRecovery)
          )
        ],
        [
          'Debt Interest',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.DebtInterest,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.DebtInterest)
          )
        ],
        [
          'Debt Principal Paid',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.DebtPrincipalPaid,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.DebtPrincipalPaid)
          )
        ],
        [
          'Debt Principal Remaining',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.DebtPrincipalRemaining,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.DebtPrincipalRemaining)
          )
        ],
        [
          'Non-fuel Expenses',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.NonFuelExpenses,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.NonFuelExpenses)
          )
        ],
        [
          'Debt Reserve',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.DebtReserve,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.DebtReserve)
          )
        ],
        [
          'Deprecation',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.Depreciation,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.Depreciation)
          )
        ],
        [
          'Income--Capacity',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.IncomeCapacity,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.IncomeCapacity)
          )
        ],
        [
          'Interest on Debt Reserve',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.InterestOnDebtReserve,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.InterestOnDebtReserve)
          )
        ],
        [
          'Taxes w/o credit',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.TaxesWoCredit,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.TaxesWoCredit)
          )
        ],
        [
          'Tax Credit',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.TaxCredit,
              0
            )
          ),
          ...props.yearlyResults.map(r => formatCurrency(r.cashFlow.TaxCredit))
        ],
        [
          'Taxes',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.Taxes,
              0
            )
          ),
          ...props.yearlyResults.map(r => formatCurrency(r.cashFlow.Taxes))
        ],
        [
          'Energy Revenue Required',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.EnergyRevenueRequired,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.EnergyRevenueRequired)
          )
        ],
        [
          'Energy Revenue Required (PW)',
          '$',
          formatCurrency(
            props.allYearResults.teaResults.CurrentLAC.PresentWorth.reduce(
              (sum, x) => sum + x,
              0
            )
          ),
          ...props.allYearResults.teaResults.CurrentLAC.PresentWorth.map(r =>
            formatCurrency(r)
          )
        ]
      ]
    });

    worksheet.addTable({
      name: 'lcoe',
      ref: 'B70',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'LCOE' }, { name: 'Result' }],
      rows: [
        [
          'Current $ LCOE',
          formatNumber(
            props.allYearResults.teaResults.CurrentLAC.CurrentLACofEnergy,
            4
          )
        ],
        [
          'Constant $ LCOE',
          formatNumber(
            props.allYearResults.teaResults.ConstantLAC.ConstantLACofEnergy,
            4
          )
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
        ['LogLength, ft', 32],
        ['LoadWeight, green tons (logs)', 25],
        ['LoadWeight, green tons (chips)', 25],
        ['CTLTrailSpacing, ft', 50],
        ['HardwoodCostPremium, fraction', 0.2],
        ['ResidueRecoveryFraction for WT systems', 0.8],
        ['ResidueRecoveryFraction for CTL', 0.5],
        ['HardwoodFractionCT', 0.2],
        ['HardwoodFractionSLT', 0],
        ['HardwoodFractionLLT', 0],
        ['Feller/Bucker wage (2019)', 30.96],
        ['All Others wage (2019)', 22.26],
        ['Benefits and other payroll costs', '35%'],
        ['OIL_ETC_COST ($/mile)', 0.35],
        ['DRIVERS_PER_TRUCK', 1.67],
        ['MILES_PER_GALLON', 6],
        ['FUEL_COST ($/gallon)', 3.251],
        ['TRUCK_LABOR ($/hr)', 23.29]
      ]
    });

    worksheet.addTable({
      name: 'keyReferences',
      ref: 'B123',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'Key References' }],
      rows: [
        ['Fuel Reduction Cost Simulator'],
        ['Advanced Hardwood Biofuels Northwest'],
        ['California Biomass Collaborative'],
        ['EPA eGrid'],
        ['GREET model'],
        ['Literature for emission factors']
      ]
    });

    worksheet.addTable({
      name: 'disclaimer',
      ref: 'B131',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'Disclaimer' }],
      rows: [
        [
          'Results are estimates only and no guarantees are made that actual project performance will match, and they do not necessarily reflect the views and policies of the California Energy Commission.'
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
      worksheet.addImage(chartImageId2, 'B75:J100');
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
