import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

import { faDownload, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Spinner } from 'reactstrap';
import {
  AllYearsResults,
  ClusterResult,
  FrcsInputs,
  Treatments,
  YearlyResult
} from '../../models/Types';
import { formatCurrency, formatNumber } from '../Shared/util';

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
  const [clusterExcelLoading, setClusterExcelLoading] = useState<boolean>(false);
  const [makeExcelLoading, setMakeExcelLoading] = useState<boolean>(false);
  // don't show export until all years are done running
  if (
    !props.yearlyResults ||
    props.yearlyResults.length < props.teaInputs.Financing.EconomicLife
  ) {
    return <></>;
  }

  const moistureContent = props.teaInputs.ElectricalFuelBaseYear.MoistureContent ? (props.teaInputs.ElectricalFuelBaseYear.MoistureContent/100) : 1;

  const treatmentIndex = Treatments.findIndex(
    x => x.id === props.frcsInputs.treatmentid
  );
  const treatmentName = Treatments[treatmentIndex].name;

  const capitalCost = formatCurrency(
    props.allYearResults.teaInputs.CapitalCost
  );

  const makeClusterExcel = async () => {
    setClusterExcelLoading(true);
    const workbook = new ExcelJS.Workbook();

    props.yearlyResults.forEach((data, index) => {
      const { year, clusters } = data;

      const worksheet = workbook.addWorksheet(String(year));

      worksheet.columns = [
        { header: 'Cluster No', key: 'cluster_no', width: 15 },
        { header: 'Area (acres)', key: 'area', width: 10 },
        { header: 'Biomass (BDMT)', key: 'biomass', width: 20 },
        { header: 'Center Lat', key: 'center_lat', width: 20 },
        { header: 'Center Lng', key: 'center_lng', width: 20 },
        { header: 'Combined Cost ($)', key: 'combinedCost', width: 30 },
        { header: 'County', key: 'county', width: 15 },
        { header: 'Distance (ft)', key: 'distance', width: 15 },
        { header: 'Forest Type', key: 'forest_type', width: 15 },
        { header: 'Haz Class', key: 'haz_class', width: 15 },
        { header: 'Land Use', key: 'land_use', width: 15 },
        { header: 'Landing Distance (ft)', key: 'landing_distance', width: 15 },
        { header: 'Landing Lat', key: 'landing_lat', width: 20 },
        { header: 'Landing Lng', key: 'landing_lng', width: 20 },
        { header: 'Residue Cost ($)', key: 'residueCost', width: 20 },
        { header: 'Site Class', key: 'site_class', width: 20 },
        { header: 'Transportation Cost ($)', key: 'transportationCost', width: 25 },

        { header: 'Yield Per Acre (Green Tons)', key: 'frcsResult_total_yieldPerAcre', width: 15 },
        { header: 'Cost Per Acre ($)', key: 'frcsResult_total_costPerAcre', width: 15 },
        { header: 'Cost Per Bole CCF ($)', key: 'frcsResult_total_costPerBoleCCF', width: 15 },
        { header: 'Cost Per GT ($)', key: 'frcsResult_total_costPerGT', width: 15 },
        { header: 'Diesel Per Acre (gal)', key: 'frcsResult_total_dieselPerAcre', width: 15 },
        { header: 'Diesel Per Bole CCF (gal)', key: 'frcsResult_total_dieselPerBoleCCF', width: 15 },
        { header: 'Gasoline Per Acre (gal)', key: 'frcsResult_total_gasolinePerAcre', width: 15 },
        { header: 'Gasoline Per Bole CCF (gal)', key: 'frcsResult_total_gasolinePerBoleCCF', width: 15 },
        { header: 'Jet Fuel Per Acre (gal)', key: 'frcsResult_total_jetFuelPerAcre', width: 15 },
        { header: 'Jet Fuel Per Bole CCF (gal)', key: 'frcsResult_total_jetFuelPerBoleCCF', width: 15 },

        { header: 'Yield Per Acre (Green Tons)', key: 'frcsResult_residual_yieldPerAcre', width: 15 },
        { header: 'Cost Per Acre ($)', key: 'frcsResult_residual_costPerAcre', width: 15 },
        { header: 'Cost Per Bole CCF ($)', key: 'frcsResult_residual_costPerBoleCCF', width: 15 },
        { header: 'Cost Per GT ($)', key: 'frcsResult_residual_costPerGT', width: 15 },
        { header: 'Diesel Per Acre (gal)', key: 'frcsResult_residual_dieselPerAcre', width: 15 },
        { header: 'Diesel Per Bole CCF (gal)', key: 'frcsResult_residual_dieselPerBoleCCF', width: 15 },
        { header: 'Gasoline Per Acre (gal)', key: 'frcsResult_residual_gasolinePerAcre', width: 15 },
        { header: 'Gasoline Per Bole CCF (gal)', key: 'frcsResult_residual_gasolinePerBoleCCF', width: 15 },
        { header: 'Jet Fuel Per Acre (gal)', key: 'frcsResult_residual_jetFuelPerAcre', width: 15 },
        { header: 'Jet Fuel Per Bole CCF (gal)', key: 'frcsResult_residual_jetFuelPerBoleCCF', width: 15 },
      ];


        worksheet.mergeCells('R1:AA1');
        worksheet.mergeCells('AB1:AK1');
        worksheet.getCell('R1').value = 'FRCS Result (Total)';
        worksheet.getCell('AB1').value = 'FRCS Result (Residual)';

        worksheet.getCell('R2').value = 'Yield Per Acre (Green Tons)';
        worksheet.getCell('S2').value = 'Cost Per Acre ($)';
        worksheet.getCell('T2').value = 'Cost Per Bole CCF ($)';
        worksheet.getCell('U2').value = 'Cost Per GT ($)';
        worksheet.getCell('V2').value = 'Diesel Per Acre (gal)';
        worksheet.getCell('W2').value = 'Diesel Per Bole CCF (gal)';
        worksheet.getCell('X2').value = 'Gasoline Per Acre (gal)';
        worksheet.getCell('Y2').value = 'Gasoline Per Bole CCF (gal)';
        worksheet.getCell('Z2').value = 'Jet Fuel Per Acre (gal)';
        worksheet.getCell('AA2').value = 'Jet Fuel Per Bole CCF (gal)';

        worksheet.getCell('AB2').value = 'Yield Per Acre (Green Tons)';
        worksheet.getCell('AC2').value = 'Cost Per Acre ($)';
        worksheet.getCell('AD2').value = 'Cost Per Bole CCF ($)';
        worksheet.getCell('AE2').value = 'Cost Per GT ($)';
        worksheet.getCell('AF2').value = 'Diesel Per Acre (gal)';
        worksheet.getCell('AG2').value = 'Diesel Per Bole CCF (gal)';
        worksheet.getCell('AH2').value = 'Gasoline Per Acre (gal)';
        worksheet.getCell('AI2').value = 'Gasoline Per Bole CCF(gal)';
        worksheet.getCell('AJ2').value = 'Jet Fuel Per Acre (gal)';
        worksheet.getCell('AK2').value = 'Jet Fuel Per Bole CCF (gal)';

      clusters.forEach((cluster) => {
        const { total, residual } = cluster.frcsResult;
        const row = worksheet.addRow({
          cluster_no: cluster.cluster_no,
          area: cluster.area,
          biomass: (cluster.biomass)*moistureContent,
          center_lat: cluster.center_lat,
          center_lng: cluster.center_lng,
          combinedCost: cluster.combinedCost,
          county: cluster.county,
          distance: cluster.distance,
          forest_type: cluster.forest_type,
          haz_class: cluster.haz_class,
          land_use: cluster.land_use,
          landing_distance: cluster.landing_distance,
          landing_lat: cluster.landing_lat,
          landing_lng: cluster.landing_lng,
          residueCost: cluster.residueCost,
          site_class: cluster.site_class,
          transportationCost: cluster.transportationCost,

          frcsResult_total_yieldPerAcre: total.yieldPerAcre,
          frcsResult_total_costPerAcre: total.costPerAcre,
          frcsResult_total_costPerBoleCCF: total.costPerBoleCCF,
          frcsResult_total_costPerGT: total.costPerGT,
          frcsResult_total_dieselPerAcre: total.dieselPerAcre,
          frcsResult_total_dieselPerBoleCCF: total.dieselPerBoleCCF,
          frcsResult_total_gasolinePerAcre: total.gasolinePerAcre,
          frcsResult_total_gasolinePerBoleCCF: total.gasolinePerBoleCCF,
          frcsResult_total_jetFuelPerAcre: total.jetFuelPerAcre,
          frcsResult_total_jetFuelPerBoleCCF: total.jetFuelPerBoleCCF,

          frcsResult_residual_yieldPerAcre: residual.yieldPerAcre,
          frcsResult_residual_costPerAcre: residual.costPerAcre,
          frcsResult_residual_costPerBoleCCF: residual.costPerBoleCCF,
          frcsResult_residual_costPerGT: residual.costPerGT,
          frcsResult_residual_dieselPerAcre: residual.dieselPerAcre,
          frcsResult_residual_dieselPerBoleCCF: residual.dieselPerBoleCCF,
          frcsResult_residual_gasolinePerAcre: residual.gasolinePerAcre,
          frcsResult_residual_gasolinePerBoleCCF: residual.gasolinePerBoleCCF,
          frcsResult_residual_jetFuelPerAcre: residual.jetFuelPerAcre,
          frcsResult_residual_jetFuelPerBoleCCF: residual.jetFuelPerBoleCCF,
        });      
      });

        const colOneLen= worksheet.getColumn('A').values.length - 1;

        const sumRow = worksheet.addRow({
        cluster_no: 'TOTAL',
        area: { formula: `SUM(B3:B${colOneLen})` },
        biomass: { formula: `SUM(C3:C${colOneLen})` },
        combinedCost: { formula: `SUM(F3:F${colOneLen})` },
        distance: { formula: `SUM(H3:H${colOneLen})` },
        residueCost: { formula: `SUM(O3:O${colOneLen})` },
        transportationCost: { formula: `SUM(Q3:Q${colOneLen})` },
        frcsResult_total_yieldPerAcre: { formula: `SUM(R3:R${colOneLen})` },
        frcsResult_total_costPerAcre: { formula: `SUM(S3:S${colOneLen})` },
        frcsResult_total_costPerBoleCCF: { formula: `SUM(T3:T${colOneLen})` },
        frcsResult_total_costPerGT: { formula: `SUM(U3:U${colOneLen})` },
        frcsResult_total_dieselPerAcre: { formula: `SUM(V3:V${colOneLen})` },
        frcsResult_total_dieselPerBoleCCF: { formula: `SUM(W3:W${colOneLen})` },
        frcsResult_total_gasolinePerAcre: { formula: `SUM(X3:X${colOneLen})` },
        frcsResult_total_gasolinePerBoleCCF: { formula: `SUM(Y3:Y${colOneLen})` },
        frcsResult_total_jetFuelPerAcre: { formula: `SUM(Z3:Z${colOneLen})` },
        frcsResult_total_jetFuelPerBoleCCF: { formula: `SUM(AA3:AA${colOneLen})` },
        frcsResult_residual_yieldPerAcre: { formula: `SUM(AB3:AB${colOneLen})` },
        frcsResult_residual_costPerAcre: { formula: `SUM(AC3:AC${colOneLen})` },
        frcsResult_residual_costPerBoleCCF: { formula: `SUM(AD3:AD${colOneLen})` },
        frcsResult_residual_costPerGT: { formula: `SUM(AE3:AE${colOneLen})` },
        frcsResult_residual_dieselPerAcre: { formula: `SUM(AF3:AF${colOneLen})` },
        frcsResult_residual_dieselPerBoleCCF: { formula: `SUM(AG3:AG${colOneLen})` },
        frcsResult_residual_gasolinePerAcre: { formula: `SUM(AH3:AH${colOneLen})` },
        frcsResult_residual_gasolinePerBoleCCF: { formula: `SUM(AI3:AI${colOneLen})` },
        frcsResult_residual_jetFuelPerAcre: { formula: `SUM(AJ3:AJ${colOneLen})` },
        frcsResult_residual_jetFuelPerBoleCCF: { formula: `SUM(AK3:AK${colOneLen})` },
      });

      worksheet.getRow(worksheet.getColumn('A').values.length - 1).eachCell((cell) => {
          cell.font = { bold: true };
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
      }); 

      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      });

      worksheet.getRow(2).eachCell((cell) => {
          cell.font = { bold: true };
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
      });
    });

    const workbookBuffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([workbookBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `clusters.xlsx`);
    
    setClusterExcelLoading(false);
  };

  const makeExcel = async () => {
    setMakeExcelLoading(true);
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

    setMakeExcelLoading(false);
  };

  return (
    <div className='flex items-center justify-center gap-x-8 m-3'>
      <Button 
        color="primary"
        outline
        size="sm"
        onClick={makeExcel}
      >
        {makeExcelLoading ? (
          <Spinner size="sm" className='mr-1'>
            {' '}
          </Spinner>
          ) : (
          <FontAwesomeIcon icon={faFileExcel} className='mr-1' fontSize={'14'} />
        )}
        Export Total Result
      </Button>
      <Button 
        color="primary"
        outline
        size="sm"
        onClick={makeClusterExcel}
      >
        {clusterExcelLoading ? (
          <Spinner size="sm" className='mr-1'>
            {' '}
          </Spinner>
          ) : (
          <FontAwesomeIcon icon={faFileExcel} className='mr-1' fontSize={'14'} />
        )}
        Export Cluster Data
      </Button>
    </div>
  );
};

export default ResultsExport;
