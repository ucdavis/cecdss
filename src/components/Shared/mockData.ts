import { AllYearsResults, YearlyResult } from '../../models/Types';

export const fakeallYearResults: AllYearsResults = {
  biomassTarget: 360135.42562338786,
  nearestSubstation: '',
  transmissionResults: {
    LineCost: 22332367.358223148,
    ROWcost: 5173.5,
    OverheadCost: 3909069.650189051,
    AllCost: 26246610.508412197,
    LineLoss: 5.494960719460801
  },
  teaResults: {
    SensitivityAnalysis: {
      LACcurrent: 0.12133289917329623,
      LACconstant: 0.1057465764071482
    },
    CombinedTaxRate: 40.336,
    Financing: {
      EquityRatio: 25,
      CostOfMoney: 7.5,
      TotalCostOfPlant: 96256610.5084122,
      TotalEquityCost: 24064152.627103046,
      TotalDebtCost: 72192457.88130915,
      CapitalRecoveryFactorEquity: 0.1597614704057439,
      CapitalRecoveryFactorDebt: 0.08024258719069131,
      AnnualEquityRecovery: 3844524.4077742277,
      AnnualDebtPayment: 5792909.59605126,
      DebtReserve: 5792909.59605126
    },
    CurrentLAC: {
      CostOfMoney: 0.15,
      PresentWorth: [],
      TotalPresentWorth: 0,
      CapitalRecoveryFactorCurrent: 0.1597614704057439,
      CurrentLevelAnnualRevenueRequirements: 22586119.181109093,
      CurrentLACofEnergy: 0
    },
    ConstantLAC: {
      RealCostOfMoney: 0.12634671890303628,
      CapitalRecoveryFactorConstant: 0.13923864551402346,
      ConstantLevelAnnualRevenueRequirements: 19684725.198190637,
      ConstantLACofEnergy: 0
    },
    ElectricalAndFuelBaseYear: {
      AnnualHours: 7446,
      BiomassTarget: 360135.42562338786,
      FuelConsumptionRate: 48.36629406706793,
      AnnualGeneration: 186150000,
      CapitalCostNEC: 3850.264420336488,
      AnnualFuelConsumption: 360135.42562338786,
      AnnualAshDisposal: 18006.771281169393
    },
    ExpensesBaseYear: {
      TotalNonFuelExpenses: 5800000,
      TotalExpensesIncludingFuel: 13740986.134995703,
      LaborCostKwh: 0.010744023636852002,
      MaintenanceCostKwh: 0.008058017727639,
      InsurancePropertyTaxKwh: 0.007520816545796401,
      UtilitiesKwh: 0.0010744023636852001,
      ManagementKwh: 0.0010744023636852001,
      OtherOperatingExpensesKwh: 0.0021488047273704003,
      TotalNonFuelExpensesKwh: 0.0311576685468708,
      TotalExpensesIncludingFuelKwh: 0.07381673991402472,
      FuelCostKwh: 0.042659071367153925,
      AshDisposalKwh: 0.0005372011818426001
    },
    IncomeOtherThanEnergy: {
      AnnualCapacityPayment: 4150000,
      AnnualDebtReserveInterest: 289645.47980256303
    },
    AnnualCashFlows: [],
    TotalCashFlow: {
      EquityRecovery: 76890488.15548453,
      EquityInterest: 52826335.52838144,
      EquityPrincipalPaid: 24064152.627103105,
      DebtRecovery: 115858191.9210252,
      DebtInterest: 43665734.03971609,
      DebtPrincipalPaid: 72192457.8813091,
      NonFuelExpenses: 142336581.76889247,
      DebtReserve: 0,
      Depreciation: 96256610.50841215,
      IncomeCapacity: 83000000,
      InterestOnDebtReserve: 5792909.596051259,
      TaxesWoCredit: 35713379.42264673,
      TaxCredit: 8736039.69640549,
      Taxes: 29807357.412821513,
      EnergyRevenueRequired: 470977782.47759604,
      BiomassFuelCost: 194878072.81542367
    }
  },
  teaInputs: {
    CapitalCost: 96256610.5084122,
    ElectricalFuelBaseYear: {
      NetElectricalCapacity: 25000,
      CapacityFactor: 85,
      MoistureContent: 50,
      NetStationEfficiency: 20,
      FuelHeatingValue: 18608,
      FuelAshConcentration: 5
    },
    ExpensesBaseYear: {
      BiomassFuelCost: 22.05,
      LaborCost: 2000000,
      MaintenanceCost: 1500000,
      InsurancePropertyTax: 1400000,
      Utilities: 200000,
      Management: 200000,
      OtherOperatingExpenses: 400000,
      AshDisposal: 100000
    },
    Taxes: {
      FederalTaxRate: 34,
      StateTaxRate: 9.6,
      ProductionTaxCredit: 0.009
    },
    Financing: {
      DebtRatio: 75,
      InterestRateOnDebt: 5,
      EconomicLife: 20,
      CostOfEquity: 15
    },
    IncomeOtherThanEnergy: {
      CapacityPayment: 166,
      InterestRateOnDebtReserve: 5,
      SalesPriceForChar: 0
    },
    EscalationInflation: {
      GeneralInflation: 2.1,
      EscalationBiomassFuel: 2.1,
      EscalationProductionTaxCredit: 2.1,
      EscalationHeatSales: 2.1,
      EscalationOther: 2.1,
      EscalationDualFuel: 2.1,
      EscalationCharSales: 2.1
    },
    TaxCreditFrac: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  annualGeneration: 186150000,
  distanceToNearestSubstation: 24.402,
  facilityCoordinates: {
    lat: 39.21204328248304,
    lng: -121.07163446489723
  },
  biomassCoordinates: {
    lat: 39.21204328248304,
    lng: -121.07163446489723
  }
};

export const fakeYearlyResult: YearlyResult = {
  year: 2016,
  clusterNumbers: [
    '151177',
    '139470',
    '153492',
    '134709',
    '144903',
    '151331',
    '142812'
  ],
  numberOfClusters: 489,
  totalArea: 15618.85937099989,
  totalFeedstock: 361095.7868752008,
  totalDryFeedstock: 180547.8934376004,
  totalHarvestCost: 4684057.157024427,
  totalCoproduct: 810417.9680109116,
  totalDryCoproduct: 405208.9840054558,
  totalCoproductCost: 11455886.968386216,
  totalMoveInCost: 0,
  totalMoveInDistance: 0,
  totalTransportationCost: 652743.5968259382,
  harvestCostPerDryTon: 25.9435713584955,
  transportationCostPerDryTon: 3.6153487276855683,
  moveInCostPerDryTon: 0,
  feedstockCostPerTon: 29.558920086181065,
  tripGeometries: [
    {
      coordinates: [
        [-121.071944, 39.212189],
        [-121.079181, 39.225329],
        [-121.079189, 39.226736],
        [-121.079181, 39.225329],
        [-121.082583, 39.227129],
        [-121.088431, 39.228994],
        [-121.089771, 39.229054],
        [-121.094314, 39.235556],
        [-121.093231, 39.236332],
        [-121.074834, 39.21449],
        [-121.072309, 39.21479],
        [-121.071944, 39.212189]
      ],
      type: 'LineString'
    }
  ],
  radius: 5000,
  clusters: [
    {
      cluster_no: '110821',
      area: 32.025456,
      biomass: 981.2546388097389,
      distance: 5.6706,
      combinedCost: 74623.52708065079,
      residueCost: 15172.227503450535,
      transportationCost: 1791.6509274392004,
      frcsResult: {
        Total: {
          WeightPerAcre: 150.25886179694916,
          CostPerAcre: 2330.1316015812795,
          CostPerBoleCCF: 56.57779668760989,
          CostPerGT: 15.507448770176897,
          DieselPerAcre: 48.41852549134743,
          DieselPerBoleCCF: 1.1756475425269046,
          GasolinePerAcre: 0.2032954714056783,
          GasolinePerBoleCCF: 0.0049362061099453595,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 30.639833475274763,
          CostPerAcre: 473.7552371916433,
          CostPerBoleCCF: 11.503224741181734,
          CostPerGT: 3.152927098781354,
          DieselPerAcre: 13.326611085518547,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1908055350004,
      center_lng: -121.044485531722,
      landing_lat: 39.192317,
      landing_lng: -121.040843,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '154843',
      area: 32.025456,
      biomass: 1033.8798418961096,
      distance: 5.4468000000000005,
      combinedCost: 37908.39180522952,
      residueCost: 14319.49635846138,
      transportationCost: 1992.0399096086958,
      frcsResult: {
        Total: {
          WeightPerAcre: 81.48098053967682,
          CostPerAcre: 1183.6956140524437,
          CostPerBoleCCF: 57.554289849638316,
          CostPerGT: 14.527262757669542,
          DieselPerAcre: 26.233807433676617,
          DieselPerBoleCCF: 1.2755544068701141,
          GasolinePerAcre: 0.07220421442030954,
          GasolinePerBoleCCF: 0.0035107524567779746,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 32.28306388193535,
          CostPerAcre: 447.1285704241457,
          CostPerBoleCCF: 21.740527747791035,
          CostPerGT: 5.48752073751025,
          DieselPerAcre: 12.714205965960929,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2386223871238,
      center_lng: -121.087457159602,
      landing_lat: 39.239643,
      landing_lng: -121.089872,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '162040',
      area: 32.025456,
      biomass: 849.9985720432887,
      distance: 4.3582,
      combinedCost: 44398.735778266826,
      residueCost: 13420.713357078224,
      transportationCost: 1375.4408187745848,
      frcsResult: {
        Total: {
          WeightPerAcre: 89.84134209310378,
          CostPerAcre: 1386.3576455637924,
          CostPerBoleCCF: 55.49361420322575,
          CostPerGT: 15.431176931073576,
          DieselPerAcre: 29.259981881402865,
          DieselPerBoleCCF: 1.1712289042555222,
          GasolinePerAcre: 0.10874864506560239,
          GasolinePerBoleCCF: 0.004353029230015076,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 26.5413417389994,
          CostPerAcre: 419.0639270547225,
          CostPerBoleCCF: 16.774439098654234,
          CostPerGT: 4.664488723025097,
          DieselPerAcre: 11.765470982388724,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1871917726584,
      center_lng: -121.047165945067,
      landing_lat: 39.186929,
      landing_lng: -121.048122,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 4
    }
  ],
  errorClusters: [],
  errorClusterNumbers: [],
  fuelCost: 14.779460043090532,
  energyRevenueRequired: 25718382.698809296,
  energyRevenueRequiredPW: 39114445.28705157,
  geoJson: [
    {
      id: '153224',
      geometry: {
        bbox: [
          -121.07760556650561,
          39.22586044746567,
          -121.07244463824074,
          39.22979907265777
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07244463824074, 39.226698150933096],
            [-121.07650778786132, 39.22586044746567],
            [-121.07760556650561, 39.22896133277297],
            [-121.07354225583717, 39.22979907265777],
            [-121.07244463824074, 39.226698150933096]
          ]
        ]
      },
      properties: {
        cluster_no: '165764',
        area: 32.025456,
        biomass: 1009.7336315933372,
        distance: 4.5405,
        combinedCost: 54343.1209871499,
        residueCost: 12536.954639180905,
        transportationCost: 1690.167031778829,
        frcsResult: {
          Total: {
            WeightPerAcre: 129.8131226244583,
            CostPerAcre: 1696.872668640531,
            CostPerBoleCCF: 46.26387649685791,
            CostPerGT: 13.071657428266967,
            DieselPerAcre: 34.72926927026649,
            DieselPerBoleCCF: 0.9468657572479887,
            GasolinePerAcre: 0.1805816205334718,
            GasolinePerBoleCCF: 0.004923413491394277,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 31.529094592543423,
            CostPerAcre: 391.46841934681294,
            CostPerBoleCCF: 10.673073436671503,
            CostPerGT: 3.0156305574692013,
            DieselPerAcre: 11.42718131153367,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1923106502588,
        center_lng: -121.101747940124,
        landing_lat: 39.194243,
        landing_lng: -121.101413,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '153244',
      geometry: {
        bbox: [
          -121.08529264625295,
          39.24756648835897,
          -121.08012993301745,
          39.251505316619884
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08012993301745, 39.248404446865045],
            [-121.08419421021708, 39.24756648835897],
            [-121.08529264625295, 39.250667321657424],
            [-121.08122820792418, 39.251505316619884],
            [-121.08012993301745, 39.248404446865045]
          ],
          [
            [-121.08136236668668, 39.2498173415986],
            [-121.08145389218345, 39.25007574687527],
            [-121.08179259207029, 39.250005918430794],
            [-121.08170106545452, 39.249747513407314],
            [-121.08136236668668, 39.2498173415986]
          ]
        ]
      },
      properties: {
        cluster_no: '134219',
        area: 32.025456,
        biomass: 308.6986191589277,
        distance: 4.5077,
        combinedCost: 9705.107527246506,
        residueCost: 3571.925479977342,
        transportationCost: 537.4854475014835,
        frcsResult: {
          Total: {
            WeightPerAcre: 23.186802757810817,
            CostPerAcre: 303.04353909110637,
            CostPerBoleCCF: 56.76017840954945,
            CostPerGT: 13.069656142609903,
            DieselPerAcre: 6.597264929149304,
            DieselPerBoleCCF: 1.2356704106501364,
            GasolinePerAcre: 0.01577074161741728,
            GasolinePerBoleCCF: 0.002953866333993661,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 9.639163893838942,
            CostPerAcre: 111.53394599525272,
            CostPerBoleCCF: 20.890353552491852,
            CostPerGT: 4.810233957662872,
            DieselPerAcre: 3.2354883132053494,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2292258360717,
        center_lng: -121.102053944707,
        landing_lat: 39.229231,
        landing_lng: -121.102053,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '153306',
      geometry: {
        bbox: [
          -121.08012993301745,
          39.245303569710735,
          -121.07496754204043,
          39.249242272921485
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07903175204748, 39.245303569710735],
            [-121.08012993301745, 39.248404446865045],
            [-121.07606556188111, 39.249242272921485],
            [-121.07496754204043, 39.2461413593206],
            [-121.07903175204748, 39.245303569710735]
          ]
        ]
      },
      properties: {
        cluster_no: '151152',
        area: 32.025456,
        biomass: 907.7366456187231,
        distance: 4.498,
        combinedCost: 60076.63156345323,
        residueCost: 12651.84426826836,
        transportationCost: 1438.720115133854,
        frcsResult: {
          Total: {
            WeightPerAcre: 144.01783400305706,
            CostPerAcre: 1875.902455954202,
            CostPerBoleCCF: 44.12949254988271,
            CostPerGT: 13.025487217884296,
            DieselPerAcre: 37.40199383983624,
            DieselPerBoleCCF: 0.8798597193936977,
            GasolinePerAcre: 0.21618929181290386,
            GasolinePerBoleCCF: 0.005085724853198271,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 28.34422234670829,
            CostPerAcre: 395.05586644163196,
            CostPerBoleCCF: 9.293454923302836,
            CostPerGT: 2.743103791112746,
            DieselPerAcre: 11.366294302341629,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1853357935209,
        center_lng: -121.055688477274,
        landing_lat: 39.185436,
        landing_lng: -121.055805,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 3
      }
    }
  ],
  errorGeoJson: [],
  cashFlow: {
    Year: 1,
    EquityRecovery: 3844524.4077742277,
    EquityInterest: 3609622.894065457,
    EquityPrincipalPaid: 234901.51370877074,
    EquityPrincipalRemaining: 23829251.113394275,
    DebtRecovery: 5792909.59605126,
    DebtInterest: 3609622.894065458,
    DebtPrincipalPaid: 2183286.701985802,
    DebtPrincipalRemaining: 70009171.17932335,
    NonFuelExpenses: 5800000,
    DebtReserve: 5792909.59605126,
    Depreciation: 4812830.52542061,
    IncomeCapacity: 4150000,
    InterestOnDebtReserve: 289645.47980256303,
    TaxesWoCredit: 4737702.103718128,
    TaxCredit: 1675349.9999999998,
    Taxes: 3605077.4456328508,
    EnergyRevenueRequired: 25718382.698809296,
    BiomassFuelCost: 5322607.133102263
  },
  lcaResults: {
    lciResults: {
      CO2: 1.5078754178268505,
      CH4: 0.4940711367282557,
      N2O: 0.06618964889893827,
      CO: 4.780005904832795,
      NOx: 0.9343685475515715,
      PM10: 2.814142716006168,
      PM25: 1.976131298106241,
      SOx: 0.6540926393707912,
      VOC: 0.13601772051157965,
      CI: 1.5478870713629864
    },
    lciaResults: {
      global_warming_air: 1.5399517116169406,
      acidification_air: 0.0013081506226568914,
      hh_particulate_air: 0.0026255782497927446,
      eutrophication_air: 0.00004138318297105911,
      eutrophication_water: 0.000271921707205593,
      smog_air: 0.023928362416185765
    },
    inputs: {
      technology: 'GPO',
      diesel: 0.0007251996429779244,
      gasoline: 0,
      jetfuel: 0,
      distance: 0.0004919245578505359
    }
  }
};
