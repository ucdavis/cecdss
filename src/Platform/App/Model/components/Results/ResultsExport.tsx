import React from 'react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

import {
  AllYearsResults,
  FrcsInputs,
  Treatments,
  YearlyResult
} from '../../models/Types';
import { Button } from 'reactstrap';
import { formatCurrency, formatNumber } from '../Shared/util';
import { myBase64Image } from '../Shared/myBase64Image';

interface Props {
  allYearResults: AllYearsResults;
  yearlyResults: YearlyResult[];
  sensitivityChart: React.MutableRefObject<any>;
  frcsInputs: FrcsInputs;
  teaInputs: any;
  teaModel: string;
  expansionFactor: number;
}

export const ResultsExport = (props: Props) => {
  // don't show export until all years are done running
  if (
    !props.yearlyResults ||
    props.yearlyResults.length < props.teaInputs.Financing.EconomicLife
  ) {
    return <></>;
  }

  const treatmentIndex = Treatments.findIndex(
    x => x.id === props.frcsInputs.treatmentid
  );
  const treatmentName = Treatments[treatmentIndex].name;

  const capitalCost = formatCurrency(
    props.allYearResults.teaInputs.CapitalCost
  );

  const makeExcel = async () => {
    // https://github.com/exceljs/exceljs#interface
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('ExcelJS sheet');

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
        ['Project Prescription', treatmentName],
        ['Harvesting System', props.frcsInputs.system],
        ['Facility Type', props.teaModel],
        ['Capital Cost ($)', capitalCost],
        [
          'Net Electrical Capacity (kWe)',
          props.allYearResults.teaInputs.ElectricalFuelBaseYear
            .NetElectricalCapacity
        ],
        [
          'Net Station Efficiency (%)',
          formatNumber(
            props.teaInputs.ElectricalFuelBaseYear.NetStationEfficiency
          )
        ],
        [
          'Annual Generation (kWh)',
          formatNumber(props.allYearResults.annualGeneration)
        ],
        [
          'Capacity Factor (%)',
          formatNumber(props.teaInputs.ElectricalFuelBaseYear.CapacityFactor)
        ],
        [
          'Economic Life (y)',
          props.allYearResults.teaInputs.Financing.EconomicLife
        ],
        [
          'Facility Coordinates',
          `${props.allYearResults.facilityCoordinates.lat}, ${props.allYearResults.facilityCoordinates.lng}`
        ],
        [
          'Biomass Coordinates',
          `${props.allYearResults.biomassCoordinates.lat}, ${props.allYearResults.biomassCoordinates.lng}`
        ],
        ['Expansion Factor', props.expansionFactor],
        [
          'Proximity to substation (km)',
          props.allYearResults.distanceToNearestSubstation
        ]
      ]
    });

    worksheet.addTable({
      name: 'supply',
      ref: 'B16',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'Resource Supply' },
        { name: 'Unit' },
        { name: 'Total' },
        ...props.yearlyResults.map(r => ({ name: 'Y' + r.year }))
      ],
      rows: [
        [
          'Feedstock',
          'BDMT',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.totalDryFeedstock,
              0
            )
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.totalDryFeedstock)
          )
        ],
        [
          'Coproduct',
          'BDMT',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.totalDryCoproduct,
              0
            )
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.totalDryCoproduct)
          )
        ]
      ]
    });

    worksheet.addTable({
      name: 'analysis',
      ref: 'B20',
      headerRow: true,
      totalsRow: false,
      columns: [
        {
          name:
            'Fuel Consumption & Feedstock Transport (1 MWh electricity generated)'
        },
        { name: 'Unit' },
        { name: 'Total' },
        ...props.yearlyResults.map(r => ({ name: 'Y' + r.year }))
      ],
      rows: [
        [
          'Diesel',
          'L',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) =>
                sum +
                (year.lcaResults.inputs.harvestDiesel +
                  year.lcaResults.inputs.unloadDiesel),
              0
            ) /
              props.yearlyResults.length) *
              1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(
              (year.lcaResults.inputs.harvestDiesel +
                year.lcaResults.inputs.unloadDiesel) *
                1000
            )
          )
        ],
        [
          'Gasoline',
          'L',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.inputs.gasoline,
              0
            ) /
              props.yearlyResults.length) *
              1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.lcaResults.inputs.gasoline * 1000)
          )
        ],
        [
          'Jet Fuel',
          'L',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.inputs.jetfuel,
              0
            ) /
              props.yearlyResults.length) *
              1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.lcaResults.inputs.jetfuel * 1000)
          )
        ],
        [
          'Transport Distance',
          'km',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.inputs.distance,
              0
            ) /
              props.yearlyResults.length) *
              1000
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(year.lcaResults.inputs.distance * 1000)
          )
        ],
        [
          'Move-in Distance',
          'm',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.totalMoveInDistance,
              0
            ) /
              ((props.allYearResults.annualGeneration / 1000) *
                props.yearlyResults.length)
          ),
          ...props.yearlyResults.map(year =>
            formatNumber(
              year.totalMoveInDistance /
                (props.allYearResults.annualGeneration / 1000)
            )
          )
        ]
      ]
    });

    worksheet.addTable({
      name: 'lci',
      ref: 'B27',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'LCI Results (1 MWh electricity generated)' },
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
              (sum, year) =>
                sum + year.lcaResults.lifeCycleEmissions.CO2 * 1000,
              0
            ) / props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.CO2 * 1000, 2)
          )
        ],
        [
          'CH4',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.CH4,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.CH4)
          )
        ],
        [
          'N2O',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.N2O,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.N2O)
          )
        ],
        [
          'CO',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.CO,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.CO)
          )
        ],
        [
          'NOx',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.NOx,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.NOx)
          )
        ],
        [
          'PM10',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.PM10,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.PM10)
          )
        ],
        [
          'PM2.5',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.PM25,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.PM25)
          )
        ],
        [
          'SOx',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.SOx,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.SOx)
          )
        ],
        [
          'VOC',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleEmissions.VOC,
              0
            ) / props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleEmissions.VOC)
          )
        ],
        // [
        //   'Carbon Intensity',
        //   'kg CO2e',
        //   formatNumber(
        //     (props.yearlyResults.reduce(
        //       (sum, year) => sum + year.lcaResults.lifeCycleEmissions.CI,
        //       0
        //     ) *
        //       1000) /
        //       props.yearlyResults.length,
        //     2
        //   ),
        //   ...props.yearlyResults.map(r =>
        //     formatNumber(r.lcaResults.lifeCycleEmissions.CI * 1000, 2)
        //   )
        // ]
        [
          'Harvest(CO2)',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeStageCO2.harvest * 1000,
              0
            ) / props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageCO2.harvest * 1000, 2)
          )
        ],
        [
          'Transport(CO2)',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeStageCO2.transport * 1000,
              0
            ) / props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageCO2.transport * 1000, 2)
          )
        ],
        [
          'Conversion(CO2)',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeStageCO2.conversion * 1000,
              0
            ) / props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageCO2.conversion * 1000, 2)
          )
        ],
        [
          'Construction(CO2)',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeStageCO2.construction * 1000,
              0
            ) / props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageCO2.construction * 1000, 2)
          )
        ],
        [
          'Equipment(CO2)',
          'kg',
          formatNumber(
            props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeStageCO2.equipment * 1000,
              0
            ) / props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageCO2.equipment * 1000, 2)
          )
        ]
      ]
    });

    worksheet.addTable({
      name: 'lcia',
      ref: 'B43',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'LCIA Results (1 MWh electricity generated)' },
        { name: 'Unit' },
        { name: 'Total' },
        ...props.yearlyResults.map(r => ({ name: 'Y' + r.year }))
      ],
      rows: [
        [
          'Global Warming',
          'kg CO2 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeCycleImpacts.global_warming_air,
              0
            ) *
              1000) /
              props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(
              r.lcaResults.lifeCycleImpacts.global_warming_air * 1000,
              2
            )
          )
        ],
        [
          'Acidification',
          'kg SO2 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeCycleImpacts.acidification_air,
              0
            ) *
              1000) /
              props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleImpacts.acidification_air * 1000)
          )
        ],
        [
          'Human Health Particulate',
          'kg PM2.5 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeCycleImpacts.hh_particulate_air,
              0
            ) *
              1000) /
              props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(
              r.lcaResults.lifeCycleImpacts.hh_particulate_air * 1000
            )
          )
        ],
        [
          'Euthrophication',
          'kg N eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) =>
                sum + year.lcaResults.lifeCycleImpacts.eutrophication_air,
              0
            ) *
              1000) /
              props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(
              r.lcaResults.lifeCycleImpacts.eutrophication_air * 1000
            )
          )
        ],
        [
          'Smog Formation',
          'kg O3 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeCycleImpacts.smog_air,
              0
            ) *
              1000) /
              props.yearlyResults.length
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeCycleImpacts.smog_air * 1000)
          )
        ],
        [
          'Harvest(GWP)',
          'kg CO2 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeStageGWP.harvest,
              0
            ) *
              1000) /
              props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageGWP.harvest * 1000, 2)
          )
        ],
        [
          'Transport(GWP)',
          'kg CO2 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeStageGWP.transport,
              0
            ) *
              1000) /
              props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageGWP.transport * 1000, 2)
          )
        ],
        [
          'Conversion(GWP)',
          'kg CO2 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeStageGWP.conversion,
              0
            ) *
              1000) /
              props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageGWP.conversion * 1000, 2)
          )
        ],
        [
          'Construction(GWP)',
          'kg CO2 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeStageGWP.construction,
              0
            ) *
              1000) /
              props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageGWP.construction * 1000, 2)
          )
        ],
        [
          'Equipment(GWP)',
          'kg CO2 eq',
          formatNumber(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.lcaResults.lifeStageGWP.equipment,
              0
            ) *
              1000) /
              props.yearlyResults.length,
            2
          ),
          ...props.yearlyResults.map(r =>
            formatNumber(r.lcaResults.lifeStageGWP.equipment * 1000, 2)
          )
        ]
      ]
    });

    worksheet.addTable({
      name: 'technoeconomic',
      ref: 'B55',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'Technoeconomic Analysis' },
        { name: 'Unit' },
        { name: 'Total' },
        ...props.yearlyResults.map(r => ({ name: 'Y' + r.year }))
      ],
      rows: [
        [
          'Harvest Cost',
          '$/BDMT',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, x) => sum + x.harvestCostPerDryTon * x.totalDryFeedstock,
              0
            ) /
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalDryFeedstock,
                0
              )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.harvestCostPerDryTon)
          )
        ],
        [
          'Transport Cost',
          '$/BDMT',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, x) =>
                sum + x.transportationCostPerDryTon * x.totalDryFeedstock,
              0
            ) /
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalDryFeedstock,
                0
              )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.transportationCostPerDryTon)
          )
        ],
        [
          'Move-in Cost',
          '$/BDMT',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, x) => sum + x.moveInCostPerDryTon * x.totalDryFeedstock,
              0
            ) /
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalDryFeedstock,
                0
              ),
            3
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.moveInCostPerDryTon, 3)
          )
        ],
        [
          'Feedstock Cost',
          '$/BDMT',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, x) => sum + x.feedstockCostPerTon * x.totalDryFeedstock,
              0
            ) /
              props.yearlyResults.reduce(
                (sum, x) => sum + x.totalDryFeedstock,
                0
              )
          ),
          ...props.yearlyResults.map(r => formatCurrency(r.feedstockCostPerTon))
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
          'Feedstock Cost',
          '$',
          formatCurrency(
            props.yearlyResults.reduce(
              (sum, year) => sum + year.cashFlow.BiomassFuelCost,
              0
            )
          ),
          ...props.yearlyResults.map(r =>
            formatCurrency(r.cashFlow.BiomassFuelCost)
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
          'Current LCOE',
          '$/MWh',
          formatCurrency(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.currentLCOE,
              0
            ) /
              props.yearlyResults.length) *
              1000
          ),
          ...props.yearlyResults.map(r => formatCurrency(r.currentLCOE * 1000))
        ],
        [
          'Constant LCOE',
          '$/MWh',
          formatCurrency(
            (props.yearlyResults.reduce(
              (sum, year) => sum + year.constantLCOE,
              0
            ) /
              props.yearlyResults.length) *
              1000
          ),
          ...props.yearlyResults.map(r => formatCurrency(r.constantLCOE * 1000))
        ]
      ]
    });

    worksheet.addTable({
      name: 'assumptions',
      ref: 'B81',
      headerRow: true,
      totalsRow: false,
      columns: [
        { name: 'Assumptions' },
        { name: 'Unit' },
        { name: 'Quantity' }
      ],
      rows: [
        ['Log length', 'feet', 32],
        ['Load weight (logs)', 'green tons', 25],
        ['Load weight (chips)', 'green tons', 25],
        ['CTL trail spacing', 'feet', 50],
        ['Hardwood cost premium, fraction', '', '20%'],
        ['Hardwood fraction of chip trees', '', '20%'],
        ['Hardwood fraction of small log trees', '', '0%'],
        ['Hardwood fraction of large log trees', '', '0%'],
        ['Truck oil cost', '$/mile', 0.35],
        ['Truck driver benefits and overhead', '', '67%'],
        ['Truck fuel consumption rate', 'miles/gallon', 6],
        ['Truck driver wage (2020)', '$/hour', 22.66],
        ['Truck payload capacity', 'green tons', 25]
      ]
    });

    worksheet.addTable({
      name: 'keyReferences',
      ref: 'B96',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'Key References' }],
      rows: [
        ['Fuel Reduction Cost Simulator'],
        ['Advanced Hardwood Biofuels Northwest'],
        ['California Biomass Collaborative'],
        ['Emissions and Generation Resource Integrated Database (eGRID)'],
        [
          'The Greenhouse gases, Regulated Emissions, and Energy use in Technologies Model (GREET 2021)'
        ],
        ['CA-GREET3.0 Model'],
        ['California Air Resources Board Emission Factor (EMFAC 2021)']
      ]
    });

    worksheet.addTable({
      name: 'disclaimer',
      ref: 'B105',
      headerRow: true,
      totalsRow: false,
      columns: [{ name: 'Disclaimer' }],
      rows: [
        [
          'Results are estimates only and no guarantees are made that actual project performance will match, and they do not necessarily reflect the views and policies of the California Energy Commission.'
        ]
      ]
    });

    const workbookBuffer = await workbook.xlsx.writeBuffer();

    // send file to client
    saveAs(
      new Blob([workbookBuffer], { type: 'application/octet-stream' }),
      `${treatmentName}+${props.frcsInputs.system}+${props.teaModel}+ef${props.expansionFactor}.xlsx`
    );
  };

  return (
    <p>
      <Button color='primary' onClick={makeExcel}>
        Export results to Excel
      </Button>
    </p>
  );
};

export default ResultsExport;
