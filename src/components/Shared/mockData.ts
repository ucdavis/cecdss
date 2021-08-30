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
  location: {
    lat: 39.21204328248304,
    lng: -121.07163446489723
  },
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
    '142812',
    '127514',
    '160657',
    '109913',
    '154080',
    '145051',
    '156157',
    '136778',
    '156184',
    '146243',
    '159205',
    '121900',
    '160064',
    '161081',
    '120102',
    '155631',
    '148306',
    '151198',
    '139777',
    '162553',
    '168096',
    '100043',
    '158456',
    '148248',
    '142936',
    '131640',
    '96030',
    '106389',
    '129665',
    '152921',
    '144284',
    '161470',
    '141357',
    '110059',
    '163268',
    '160224',
    '165886',
    '151589',
    '142469',
    '166256',
    '167582',
    '164544',
    '148002',
    '153244',
    '106146',
    '155496',
    '149158',
    '156332',
    '162116',
    '122585',
    '164133',
    '159638',
    '160794',
    '148439',
    '149947',
    '137316',
    '157449',
    '157249',
    '165182',
    '120540',
    '167226',
    '149440',
    '138737',
    '142462',
    '142232',
    '154192',
    '164547',
    '164767',
    '152165',
    '137487',
    '168728'
  ],
  numberOfClusters: 489,
  totalArea: 15618.85937099989,
  totalFeedstock: 361095.7868752008,
  totalDryFeedstock: 180547.8934376004,
  totalFeedstockCost: 4684057.157024427,
  totalCoproduct: 810417.9680109116,
  totalDryCoproduct: 405208.9840054558,
  totalCoproductCost: 11455886.968386216,
  totalMoveInCost: 0,
  totalMoveInDistance: 0,
  totalTransportationCost: 652743.5968259382,
  harvestCostPerDryTon: 25.9435713584955,
  transportationCostPerDryTon: 3.6153487276855683,
  moveInCostPerDryTon: 0,
  totalCostPerDryTon: 29.558920086181065,
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
        [-121.088854, 39.230474],
        [-121.089566, 39.23079],
        [-121.092175, 39.23],
        [-121.092481, 39.229176],
        [-121.096039, 39.229184],
        [-121.094877, 39.23377],
        [-121.094314, 39.235556],
        [-121.093231, 39.236332],
        [-121.092202, 39.238039],
        [-121.091187, 39.237756],
        [-121.090842, 39.237617],
        [-121.090204, 39.239266],
        [-121.089872, 39.239643],
        [-121.089311, 39.240848],
        [-121.090842, 39.237617],
        [-121.092202, 39.238039],
        [-121.094664, 39.23536],
        [-121.095577, 39.231926],
        [-121.098004, 39.233396],
        [-121.095577, 39.231926],
        [-121.096039, 39.229184],
        [-121.097521, 39.229343],
        [-121.102053, 39.229231],
        [-121.104333, 39.230152],
        [-121.106519, 39.231423],
        [-121.104257, 39.231042],
        [-121.103838, 39.231777],
        [-121.104257, 39.231042],
        [-121.109458, 39.23172],
        [-121.109808, 39.233367],
        [-121.108092, 39.234198],
        [-121.104109, 39.235095],
        [-121.101669, 39.235444],
        [-121.107466, 39.234437],
        [-121.10189, 39.239227],
        [-121.10296, 39.237583],
        [-121.104933, 39.238369],
        [-121.107224, 39.239861],
        [-121.107308, 39.240955],
        [-121.105933, 39.240973],
        [-121.101886, 39.241088],
        [-121.100641, 39.241147],
        [-121.107308, 39.240955],
        [-121.107427, 39.242783],
        [-121.103777, 39.243326],
        [-121.107427, 39.242783],
        [-121.10747, 39.244547],
        [-121.10927, 39.246408],
        [-121.112092, 39.246862],
        [-121.102826, 39.253399],
        [-121.100399, 39.248115],
        [-121.099003, 39.247548],
        [-121.099306, 39.2463],
        [-121.10005, 39.244404],
        [-121.099003, 39.247548],
        [-121.101449, 39.249804],
        [-121.097789, 39.249826],
        [-121.095916, 39.246234],
        [-121.097789, 39.249826],
        [-121.101449, 39.249804],
        [-121.102826, 39.253399],
        [-121.092208, 39.255588],
        [-121.092558, 39.24765],
        [-121.091834, 39.245043],
        [-121.090111, 39.244739],
        [-121.088472, 39.245774],
        [-121.088631, 39.250974],
        [-121.086177, 39.249506],
        [-121.084336, 39.251829],
        [-121.087494, 39.255051],
        [-121.090379, 39.255605],
        [-121.093237, 39.255578],
        [-121.096343, 39.254064],
        [-121.100739, 39.254122],
        [-121.109887, 39.248937],
        [-121.112092, 39.246862],
        [-121.110521, 39.246556],
        [-121.111976, 39.24611],
        [-121.11322, 39.245856],
        [-121.109873, 39.246574],
        [-121.107537, 39.245448],
        [-121.106841, 39.239471],
        [-121.109162, 39.239364],
        [-121.110412, 39.240691],
        [-121.112109, 39.240919],
        [-121.112164, 39.2425],
        [-121.116328, 39.242752],
        [-121.112104, 39.242437],
        [-121.112109, 39.240919],
        [-121.114652, 39.241123],
        [-121.114327, 39.239441],
        [-121.110599, 39.238737],
        [-121.02424, 39.248031],
        [-121.025096, 39.248385],
        [-121.027233, 39.245552],
        [-121.032537, 39.241991],
        [-121.036372, 39.235637],
        [-121.052275, 39.221545],
        [-121.055793, 39.221532],
        [-121.059931, 39.221713],
        [-121.060909, 39.222885],
        [-121.05726, 39.22415],
        [-121.0608, 39.224697],
        [-121.059714, 39.221177],
        [-121.057491, 39.217154],
        [-121.054529, 39.216524],
        [-121.053142, 39.215047],
        [-121.054183, 39.214266],
        [-121.050144, 39.214666],
        [-121.04835, 39.213299],
        [-121.049871, 39.214441],
        [-121.051872, 39.212524],
        [-121.04663, 39.210152],
        [-121.052349, 39.211519],
        [-121.056874, 39.214407],
        [-121.056338, 39.211876],
        [-121.057511, 39.213161],
        [-121.060085, 39.213053],
        [-121.06013, 39.210952],
        [-121.060079, 39.208727],
        [-121.111472, 39.205264],
        [-121.115425, 39.206251],
        [-121.120329, 39.208763],
        [-121.122383, 39.209177],
        [-121.11076, 39.205251],
        [-121.090136, 39.209172],
        [-121.082702, 39.208677],
        [-121.075057, 39.209979],
        [-121.072052, 39.209738],
        [-121.071499, 39.20847],
        [-121.068309, 39.21153],
        [-121.069348, 39.212216],
        [-121.068309, 39.21153],
        [-121.066236, 39.213197],
        [-121.064695, 39.215885],
        [-121.066093, 39.216788],
        [-121.066626, 39.216193],
        [-121.066093, 39.216788],
        [-121.068452, 39.217978],
        [-121.067872, 39.219316],
        [-121.069559, 39.218368],
        [-121.071297, 39.219429],
        [-121.072021, 39.218579],
        [-121.070981, 39.219452],
        [-121.068452, 39.217978],
        [-121.06922, 39.215822],
        [-121.070657, 39.216007],
        [-121.06922, 39.215822],
        [-121.069426, 39.213934],
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
      cluster_no: '151177',
      area: 32.025456,
      biomass: 434.5885515494596,
      distance: 0.1686,
      combinedCost: 18266.643873785615,
      residueCost: 5698.845176060884,
      transportationCost: 495.896122320851,
      frcsResult: {
        Total: {
          WeightPerAcre: 38.75593056928989,
          CostPerAcre: 570.378884653059,
          CostPerBoleCCF: 54.785812565849795,
          CostPerGT: 14.71720266484908,
          DieselPerAcre: 11.878875959580455,
          DieselPerBoleCCF: 1.1409852105770157,
          GasolinePerAcre: 0.03858871563651338,
          GasolinePerBoleCCF: 0.003706508426069873,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 13.570097223579257,
          CostPerAcre: 177.94735463129345,
          CostPerBoleCCF: 17.092130651626082,
          CostPerGT: 4.591487083845138,
          DieselPerAcre: 5.096877358285253,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2116957243479,
      center_lng: -121.073225799846,
      landing_lat: 39.211756,
      landing_lng: -121.073093,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '139470',
      area: 32.025456,
      biomass: 555.8007212783452,
      distance: 0.5143,
      combinedCost: 26657.482113336544,
      residueCost: 7891.95423249614,
      transportationCost: 668.4266285155059,
      frcsResult: {
        Total: {
          WeightPerAcre: 52.60871669329755,
          CostPerAcre: 832.3841544469045,
          CostPerBoleCCF: 55.57242728508874,
          CostPerGT: 15.822171814218608,
          DieselPerAcre: 17.196354928149617,
          DieselPerBoleCCF: 1.1480794999613726,
          GasolinePerAcre: 0.05742054698227463,
          GasolinePerBoleCCF: 0.003833565493522407,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 17.354966663967105,
          CostPerAcre: 246.4275366600913,
          CostPerBoleCCF: 16.45223096682579,
          CostPerGT: 4.684157914300286,
          DieselPerAcre: 6.926448474396218,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2122215607351,
      center_lng: -121.069675118505,
      landing_lat: 39.212216,
      landing_lng: -121.069348,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '153492',
      area: 32.025456,
      biomass: 557.1773692479961,
      distance: 0.5705,
      combinedCost: 21283.480995135014,
      residueCost: 7399.755636104982,
      transportationCost: 676.3343851848356,
      frcsResult: {
        Total: {
          WeightPerAcre: 43.59253608082318,
          CostPerAcre: 664.5801076223556,
          CostPerBoleCCF: 60.37122257325347,
          CostPerGT: 15.24527286942389,
          DieselPerAcre: 14.143718615961875,
          DieselPerBoleCCF: 1.2848316926496275,
          GasolinePerAcre: 0.03616037132777428,
          GasolinePerBoleCCF: 0.0032848497881929665,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 17.39795271761302,
          CostPerAcre: 231.05855654654792,
          CostPerBoleCCF: 20.989625456338413,
          CostPerGT: 5.300415560089266,
          DieselPerAcre: 6.5275949238516615,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2147574411085,
      center_lng: -121.07488344505,
      landing_lat: 39.21449,
      landing_lng: -121.074834,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '134709',
      area: 32.025456,
      biomass: 536.2038112619472,
      distance: 0.8608,
      combinedCost: 31279.142237599648,
      residueCost: 6774.866165094821,
      transportationCost: 669.5942790543016,
      frcsResult: {
        Total: {
          WeightPerAcre: 69.20679991522287,
          CostPerAcre: 976.6962330715807,
          CostPerBoleCCF: 45.49734852325899,
          CostPerGT: 14.112720632481441,
          DieselPerAcre: 19.293501499026846,
          DieselPerBoleCCF: 0.8987473609626497,
          GasolinePerAcre: 0.09554028035497153,
          GasolinePerBoleCCF: 0.004450543870380056,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 16.74305000565635,
          CostPerAcre: 211.54628259141168,
          CostPerBoleCCF: 9.854440533258314,
          CostPerGT: 3.0567268368217024,
          DieselPerAcre: 6.190905069210313,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2081807037065,
      center_lng: -121.072367179336,
      landing_lat: 39.20847,
      landing_lng: -121.071499,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '144903',
      area: 32.025456,
      biomass: 531.3228647445396,
      distance: 2.5189,
      combinedCost: 33514.902669911266,
      residueCost: 6947.976222493679,
      transportationCost: 750.040227392415,
      frcsResult: {
        Total: {
          WeightPerAcre: 70.53341937560486,
          CostPerAcre: 1046.5082111527552,
          CostPerBoleCCF: 46.00973106145669,
          CostPerGT: 14.837054837507383,
          DieselPerAcre: 20.428874566755823,
          DieselPerBoleCCF: 0.8981554226596222,
          GasolinePerAcre: 0.10413889806197654,
          GasolinePerBoleCCF: 0.004578466410301877,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 16.590641667820112,
          CostPerAcre: 216.9516718979327,
          CostPerBoleCCF: 9.538279748767545,
          CostPerGT: 3.075870613086553,
          DieselPerAcre: 6.299459014279978,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2091772777636,
      center_lng: -121.068363040924,
      landing_lat: 39.209167,
      landing_lng: -121.068248,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '151331',
      area: 32.025456,
      biomass: 599.5915287950921,
      distance: 0.7797999999999999,
      combinedCost: 25105.68385143771,
      residueCost: 7341.351066963208,
      transportationCost: 758.6208541619415,
      frcsResult: {
        Total: {
          WeightPerAcre: 54.99414716804089,
          CostPerAcre: 783.9290048340829,
          CostPerBoleCCF: 51.483009853137034,
          CostPerGT: 14.25477155666581,
          DieselPerAcre: 16.210956763550058,
          DieselPerBoleCCF: 1.0646229972869357,
          GasolinePerAcre: 0.055845492874873545,
          GasolinePerBoleCCF: 0.003667543925790725,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 18.722341652062415,
          CostPerAcre: 229.23486450788423,
          CostPerBoleCCF: 15.054553046726143,
          CostPerGT: 4.16835020293034,
          DieselPerAcre: 6.7119501331946445,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2154636032235,
      center_lng: -121.070826109172,
      landing_lat: 39.216007,
      landing_lng: -121.070657,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '142812',
      area: 32.025456,
      biomass: 393.0075887549879,
      distance: 0.7737,
      combinedCost: 15837.710661309324,
      residueCost: 4840.5143449863945,
      transportationCost: 492.3489538691166,
      frcsResult: {
        Total: {
          WeightPerAcre: 35.19672500051557,
          CostPerAcre: 494.53505552924287,
          CostPerBoleCCF: 53.12986211486456,
          CostPerGT: 14.050598614558565,
          DieselPerAcre: 10.31219158892532,
          DieselPerBoleCCF: 1.1078796358234522,
          GasolinePerAcre: 0.03491146069792963,
          GasolinePerBoleCCF: 0.0037506766656298924,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 12.271724991362744,
          CostPerAcre: 151.14583676767614,
          CostPerBoleCCF: 16.238196619061736,
          CostPerGT: 4.2943153593256795,
          DieselPerAcre: 4.398152162092783,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.210850311659,
      center_lng: -121.077462542584,
      landing_lat: 39.210889,
      landing_lng: -121.077588,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 6
    },
    {
      cluster_no: '127514',
      area: 32.025456,
      biomass: 523.6112230833223,
      distance: 2.0204,
      combinedCost: 26072.20724103125,
      residueCost: 6587.275893571068,
      transportationCost: 717.0828275621186,
      frcsResult: {
        Total: {
          WeightPerAcre: 57.151788834685235,
          CostPerAcre: 814.1088526899118,
          CostPerBoleCCF: 48.20092299613065,
          CostPerGT: 14.244678413212357,
          DieselPerAcre: 16.33565579548919,
          DieselPerBoleCCF: 0.9671847744782875,
          GasolinePerAcre: 0.07052527377111234,
          GasolinePerBoleCCF: 0.00417558816501068,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 16.34984442011762,
          CostPerAcre: 205.688746276433,
          CostPerBoleCCF: 12.178208586828033,
          CostPerGT: 3.59899052103862,
          DieselPerAcre: 5.960256472043545,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2130107275835,
      center_lng: -121.065435081011,
      landing_lat: 39.21299,
      landing_lng: -121.0654,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 3
    },
    {
      cluster_no: '160657',
      area: 31.803057,
      biomass: 320.20563220313204,
      distance: 1.48,
      combinedCost: 11358.644496634892,
      residueCost: 3892.4597653361325,
      transportationCost: 422.8226128677098,
      frcsResult: {
        Total: {
          WeightPerAcre: 25.26167833920544,
          CostPerAcre: 357.1557443875566,
          CostPerBoleCCF: 57.83099676490517,
          CostPerGT: 14.138242898662064,
          DieselPerAcre: 7.6145977641246985,
          DieselPerBoleCCF: 1.2329628896723182,
          GasolinePerAcre: 0.020533797770310284,
          GasolinePerBoleCCF: 0.0033248520038850695,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 10.068391607861221,
          CostPerAcre: 122.39262927888136,
          CostPerBoleCCF: 19.8179305781924,
          CostPerGT: 4.844991992829365,
          DieselPerAcre: 3.531146556404667,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2100551196241,
      center_lng: -121.064759456143,
      landing_lat: 39.210344,
      landing_lng: -121.065485,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '109913',
      area: 31.358259,
      biomass: 364.97028007699134,
      distance: 0.8934,
      combinedCost: 14305.792403554115,
      residueCost: 5281.170752840027,
      transportationCost: 466.6059843696159,
      frcsResult: {
        Total: {
          WeightPerAcre: 28.227807074827492,
          CostPerAcre: 456.2049316434983,
          CostPerBoleCCF: 67.18443148859373,
          CostPerGT: 16.161543489161964,
          DieselPerAcre: 9.753490437565246,
          DieselPerBoleCCF: 1.4363779622385309,
          GasolinePerAcre: 0.021344124968133253,
          GasolinePerBoleCCF: 0.0031433086364049353,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 11.638729053069921,
          CostPerAcre: 168.414029389834,
          CostPerBoleCCF: 24.8020133813487,
          CostPerGT: 5.966245586963055,
          DieselPerAcre: 4.645730105364703,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2162323305733,
      center_lng: -121.066697643841,
      landing_lat: 39.216193,
      landing_lng: -121.066626,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '154080',
      area: 32.025456,
      biomass: 530.6825327937433,
      distance: 1.0177,
      combinedCost: 19092.729038964208,
      residueCost: 6477.300161919218,
      transportationCost: 687.0313336305169,
      frcsResult: {
        Total: {
          WeightPerAcre: 42.45925836555662,
          CostPerAcre: 596.1735264273585,
          CostPerBoleCCF: 54.87555751306527,
          CostPerGT: 14.041072533451986,
          DieselPerAcre: 12.63630122736771,
          DieselPerBoleCCF: 1.1631245669532846,
          GasolinePerAcre: 0.03821017261303589,
          GasolinePerBoleCCF: 0.003517104386328852,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 16.570647199956916,
          CostPerAcre: 202.25473641715573,
          CostPerBoleCCF: 18.61679683608332,
          CostPerGT: 4.7635013941088244,
          DieselPerAcre: 5.8792918030765655,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2138841499042,
      center_lng: -121.078601614368,
      landing_lat: 39.213882,
      landing_lng: -121.078647,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 6
    },
    {
      cluster_no: '145051',
      area: 32.025456,
      biomass: 411.5418761503693,
      distance: 1.338,
      combinedCost: 16454.97948870269,
      residueCost: 5459.341787631424,
      transportationCost: 555.1736474692734,
      frcsResult: {
        Total: {
          WeightPerAcre: 33.845183308096594,
          CostPerAcre: 513.8093736652085,
          CostPerBoleCCF: 59.594869555067795,
          CostPerGT: 15.181166814430954,
          DieselPerAcre: 10.873223233451721,
          DieselPerBoleCCF: 1.2611453847529621,
          GasolinePerAcre: 0.028356755217019892,
          GasolinePerBoleCCF: 0.0032889962985852743,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 12.850461087903614,
          CostPerAcre: 170.46882291485326,
          CostPerBoleCCF: 19.772055134665855,
          CostPerGT: 5.036723286828025,
          DieselPerAcre: 4.802785034512193,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2185872211831,
      center_lng: -121.072041004536,
      landing_lat: 39.218579,
      landing_lng: -121.072021,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '156157',
      area: 32.025456,
      biomass: 305.9472763777887,
      distance: 1.3171,
      combinedCost: 13898.618864748392,
      residueCost: 3890.8922756723364,
      transportationCost: 396.54953358514246,
      frcsResult: {
        Total: {
          WeightPerAcre: 29.420336077906093,
          CostPerAcre: 433.98660318055715,
          CostPerBoleCCF: 53.8088185483468,
          CostPerGT: 14.751245602067401,
          DieselPerAcre: 8.908441286950426,
          DieselPerBoleCCF: 1.1045334055131768,
          GasolinePerAcre: 0.03183288801147608,
          GasolinePerBoleCCF: 0.003946873203748928,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 9.553252774224001,
          CostPerAcre: 121.49373534829095,
          CostPerBoleCCF: 15.063677800665198,
          CostPerGT: 4.12958353115244,
          DieselPerAcre: 3.4911753041415317,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2070767714196,
      center_lng: -121.07644405604,
      landing_lat: 39.206608,
      landing_lng: -121.076389,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '118972',
      area: 32.025456,
      biomass: 458.0565393848815,
      distance: 1.0894000000000001,
      combinedCost: 31535.477772992865,
      residueCost: 5894.268269765348,
      transportationCost: 583.9332860685824,
      frcsResult: {
        Total: {
          WeightPerAcre: 67.05691663556524,
          CostPerAcre: 984.7003512765865,
          CostPerBoleCCF: 44.71029585431701,
          CostPerGT: 14.684545617093391,
          DieselPerAcre: 18.99519096981146,
          DieselPerBoleCCF: 0.8624761908213964,
          GasolinePerAcre: 0.1040913442567906,
          GasolinePerBoleCCF: 0.00472626499174209,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 14.30288890765151,
          CostPerAcre: 184.04947207513138,
          CostPerBoleCCF: 8.35676186937666,
          CostPerGT: 2.744675438558956,
          DieselPerAcre: 5.3612450628883614,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.206301323175,
      center_lng: -121.067138130218,
      landing_lat: 39.206216,
      landing_lng: -121.067307,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 5
    },
    {
      cluster_no: '156108',
      area: 32.025456,
      biomass: 741.3509637540183,
      distance: 1.0939,
      combinedCost: 46368.78328396192,
      residueCost: 11710.177356006336,
      transportationCost: 957.0166893592042,
      frcsResult: {
        Total: {
          WeightPerAcre: 83.7010250241476,
          CostPerAcre: 1447.8726948950211,
          CostPerBoleCCF: 57.33113727723643,
          CostPerGT: 17.29814771655798,
          DieselPerAcre: 30.034291380702715,
          DieselPerBoleCCF: 1.1892620727241725,
          GasolinePerAcre: 0.10557733135132917,
          GasolinePerBoleCCF: 0.0041805253309968645,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 23.14880274472964,
          CostPerAcre: 365.6521660770837,
          CostPerBoleCCF: 14.478658657627417,
          CostPerGT: 4.368550635689273,
          DieselPerAcre: 10.316659105206934,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2053657400246,
      center_lng: -121.071468641668,
      landing_lat: 39.205174,
      landing_lng: -121.069988,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '160491',
      area: 32.025456,
      biomass: 670.8416770360707,
      distance: 1.5704,
      combinedCost: 31496.60762913257,
      residueCost: 8288.653713191114,
      transportationCost: 894.1405143969245,
      frcsResult: {
        Total: {
          WeightPerAcre: 68.60200027850823,
          CostPerAcre: 983.4866248003642,
          CostPerBoleCCF: 49.67892301170682,
          CostPerGT: 14.336121699187142,
          DieselPerAcre: 20.168093693109892,
          DieselPerBoleCCF: 1.0187522113747867,
          GasolinePerAcre: 0.07645415467673533,
          GasolinePerBoleCCF: 0.0038619336230237395,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.947138958335852,
          CostPerAcre: 258.81454156940384,
          CostPerBoleCCF: 13.073515552432195,
          CostPerGT: 3.7726967219421703,
          DieselPerAcre: 7.587059289734526,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2043732077528,
      center_lng: -121.075121343083,
      landing_lat: 39.205132,
      landing_lng: -121.075698,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '145114',
      area: 31.580658,
      biomass: 601.4694655833171,
      distance: 1.661,
      combinedCost: 25485.11891000269,
      residueCost: 7475.013969563508,
      transportationCost: 831.8012210409922,
      frcsResult: {
        Total: {
          WeightPerAcre: 55.058599969132885,
          CostPerAcre: 806.9850511032002,
          CostPerBoleCCF: 52.78169211592984,
          CostPerGT: 14.65683928678925,
          DieselPerAcre: 16.86645088157028,
          DieselPerBoleCCF: 1.1031676687225882,
          GasolinePerAcre: 0.05294573010113297,
          GasolinePerBoleCCF: 0.0034629702510979234,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 19.045501381995177,
          CostPerAcre: 236.69595388302258,
          CostPerBoleCCF: 15.481343732279806,
          CostPerGT: 4.298982429915032,
          DieselPerAcre: 6.897181342624474,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2069021967602,
      center_lng: -121.080560572089,
      landing_lat: 39.207585,
      landing_lng: -121.079866,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '163526',
      area: 32.025456,
      biomass: 495.835101470624,
      distance: 1.0612000000000001,
      combinedCost: 16443.44662016685,
      residueCost: 5944.048706465362,
      transportationCost: 643.6876780142807,
      frcsResult: {
        Total: {
          WeightPerAcre: 36.98766947324698,
          CostPerAcre: 513.4492579954788,
          CostPerBoleCCF: 58.228212547595106,
          CostPerGT: 13.881633130923655,
          DieselPerAcre: 11.033139254571244,
          DieselPerBoleCCF: 1.2512238893683365,
          GasolinePerAcre: 0.027572964070018954,
          GasolinePerBoleCCF: 0.0031269388112552384,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 15.482530567890244,
          CostPerAcre: 185.60387419512034,
          CostPerBoleCCF: 21.048587894513492,
          CostPerGT: 5.017993207962638,
          DieselPerAcre: 5.353445620885733,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2192819603238,
      center_lng: -121.067749320858,
      landing_lat: 39.219316,
      landing_lng: -121.067872,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '147174',
      area: 32.025456,
      biomass: 339.1891655841473,
      distance: 1.8034000000000001,
      combinedCost: 14394.984058783135,
      residueCost: 4284.7847799220535,
      transportationCost: 462.3980680494266,
      frcsResult: {
        Total: {
          WeightPerAcre: 30.11456940191592,
          CostPerAcre: 449.48568597378085,
          CostPerBoleCCF: 54.88442057427503,
          CostPerGT: 14.925854657751943,
          DieselPerAcre: 9.275151337381491,
          DieselPerBoleCCF: 1.1325417533331408,
          GasolinePerAcre: 0.03095581041940936,
          GasolinePerBoleCCF: 0.0037798572263667,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 10.591236096190084,
          CostPerAcre: 133.7930919679037,
          CostPerBoleCCF: 16.336796829448808,
          CostPerGT: 4.442802757106388,
          DieselPerAcre: 3.848395049473041,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2138398445485,
      center_lng: -121.061760388848,
      landing_lat: 39.213987,
      landing_lng: -121.061782,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 5
    },
    {
      cluster_no: '165870',
      area: 32.025456,
      biomass: 339.3217157464441,
      distance: 1.6816,
      combinedCost: 14412.700013989597,
      residueCost: 4288.576229261781,
      transportationCost: 460.1599575892867,
      frcsResult: {
        Total: {
          WeightPerAcre: 31.793013916128427,
          CostPerAcre: 450.03886951647456,
          CostPerBoleCCF: 53.2522844609218,
          CostPerGT: 14.155275454654905,
          DieselPerAcre: 9.330800536927583,
          DieselPerBoleCCF: 1.1040967305211844,
          GasolinePerAcre: 0.03299385549443977,
          GasolinePerBoleCCF: 0.0039041031725552673,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 10.595374996266848,
          CostPerAcre: 133.91148058162798,
          CostPerBoleCCF: 15.845502998835995,
          CostPerGT: 4.211978170263858,
          DieselPerAcre: 3.843653037854452,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2069026730705,
      center_lng: -121.063574133009,
      landing_lat: 39.206832,
      landing_lng: -121.063625,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '162554',
      area: 32.025456,
      biomass: 671.8776976160037,
      distance: 1.6045999999999998,
      combinedCost: 39450.33552369069,
      residueCost: 8408.598520120384,
      transportationCost: 878.4217420018472,
      frcsResult: {
        Total: {
          WeightPerAcre: 86.19990558707968,
          CostPerAcre: 1231.8430539659041,
          CostPerBoleCCF: 45.74346183791041,
          CostPerGT: 14.290538319922968,
          DieselPerAcre: 24.403995155612236,
          DieselPerBoleCCF: 0.9062219553857201,
          GasolinePerAcre: 0.12022331912407391,
          GasolinePerBoleCCF: 0.00446439243430699,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.979488867106333,
          CostPerAcre: 262.55983740310785,
          CostPerBoleCCF: 9.749940029900479,
          CostPerGT: 3.045941125049937,
          DieselPerAcre: 7.715705667317126,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.209783684339,
      center_lng: -121.081724839976,
      landing_lat: 39.208795,
      landing_lng: -121.081504,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '159333',
      area: 31.803057,
      biomass: 141.45092348192068,
      distance: 1.4813,
      combinedCost: 7172.786853730967,
      residueCost: 1793.6378414983178,
      transportationCost: 187.57260896393984,
      frcsResult: {
        Total: {
          WeightPerAcre: 14.626735662025485,
          CostPerAcre: 225.53765362024686,
          CostPerBoleCCF: 55.407384537471536,
          CostPerGT: 15.419548068117257,
          DieselPerAcre: 4.524128226486579,
          DieselPerBoleCCF: 1.1114335381170604,
          GasolinePerAcre: 0.01449388511537756,
          GasolinePerBoleCCF: 0.0035606837844550797,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 4.447714679815864,
          CostPerAcre: 56.39828402339806,
          CostPerBoleCCF: 13.855253701448584,
          CostPerGT: 3.855835322834304,
          DieselPerAcre: 1.6355818076344155,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2165530820702,
      center_lng: -121.062566754304,
      landing_lat: 39.216508,
      landing_lng: -121.062469,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '149423',
      area: 31.580658,
      biomass: 464.96576395412063,
      distance: 2.1005,
      combinedCost: 22755.554834812563,
      residueCost: 6626.246212430011,
      transportationCost: 648.7877535655961,
      frcsResult: {
        Total: {
          WeightPerAcre: 46.269456282784816,
          CostPerAcre: 720.5535373839444,
          CostPerBoleCCF: 54.63381821325415,
          CostPerGT: 15.572984756512824,
          DieselPerAcre: 14.790379013919623,
          DieselPerBoleCCF: 1.1214362797875552,
          GasolinePerAcre: 0.05339181524701446,
          GasolinePerBoleCCF: 0.0040482748011640484,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 14.72311830722845,
          CostPerAcre: 209.81976412366112,
          CostPerBoleCCF: 15.908956456308132,
          CostPerGT: 4.5347358923196905,
          DieselPerAcre: 5.894314289854084,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2109521332337,
      center_lng: -121.06016593562,
      landing_lat: 39.210952,
      landing_lng: -121.06013,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '156045',
      area: 32.025456,
      biomass: 655.7775222032537,
      distance: 1.9547999999999999,
      combinedCost: 30099.180394153995,
      residueCost: 7834.008136510815,
      transportationCost: 953.0267883010332,
      frcsResult: {
        Total: {
          WeightPerAcre: 70.1059250499132,
          CostPerAcre: 939.8517352619116,
          CostPerBoleCCF: 46.439151795919045,
          CostPerGT: 13.406166947982884,
          DieselPerAcre: 19.00966447596205,
          DieselPerBoleCCF: 0.9392893166736355,
          GasolinePerAcre: 0.08316755033724872,
          GasolinePerBoleCCF: 0.004109404015230052,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.47675830761797,
          CostPerAcre: 244.6181605192699,
          CostPerBoleCCF: 12.086863770302212,
          CostPerGT: 3.489265141927869,
          DieselPerAcre: 7.218587543964215,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2127936765276,
      center_lng: -121.083202491955,
      landing_lat: 39.212795,
      landing_lng: -121.083249,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '153314',
      area: 32.025456,
      biomass: 321.1685315259783,
      distance: 1.6710999999999998,
      combinedCost: 16436.467036857735,
      residueCost: 4268.39786406113,
      transportationCost: 427.2869365179757,
      frcsResult: {
        Total: {
          WeightPerAcre: 33.80728891131883,
          CostPerAcre: 513.2313193872317,
          CostPerBoleCCF: 52.25459144608204,
          CostPerGT: 15.18108478717439,
          DieselPerAcre: 10.431936129686008,
          DieselPerBoleCCF: 1.062126452257828,
          GasolinePerAcre: 0.03977480501174886,
          GasolinePerBoleCCF: 0.004049667483695308,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 10.028538907485919,
          CostPerAcre: 133.2814078919323,
          CostPerBoleCCF: 13.570032173926608,
          CostPerGT: 3.9423867510212895,
          DieselPerAcre: 3.8262888264695656,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2041116068132,
      center_lng: -121.079177058858,
      landing_lat: 39.203728,
      landing_lng: -121.078579,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '165400',
      area: 32.025456,
      biomass: 243.59175655689242,
      distance: 1.7977,
      combinedCost: 9776.651612908874,
      residueCost: 3362.2457840700226,
      transportationCost: 334.35078719480805,
      frcsResult: {
        Total: {
          WeightPerAcre: 19.73827499669199,
          CostPerAcre: 305.2775146405058,
          CostPerBoleCCF: 67.4237635424093,
          CostPerGT: 15.466271226420158,
          DieselPerAcre: 6.464425026151934,
          DieselPerBoleCCF: 1.4277365462509224,
          GasolinePerAcre: 0.013789283252836697,
          GasolinePerBoleCCF: 0.0030455088529969493,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 7.606191666931844,
          CostPerAcre: 104.98666386108671,
          CostPerBoleCCF: 23.187413614828657,
          CostPerGT: 5.31893814827698,
          DieselPerAcre: 2.9405198701244117,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2206532941819,
      center_lng: -121.063943053616,
      landing_lat: 39.220652,
      landing_lng: -121.063947,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 6
    },
    {
      cluster_no: '161348',
      area: 32.025456,
      biomass: 303.1792991008198,
      distance: 2.9424,
      combinedCost: 17499.73515077395,
      residueCost: 3525.2691895231087,
      transportationCost: 434.1721397157144,
      frcsResult: {
        Total: {
          WeightPerAcre: 38.56835001386857,
          CostPerAcre: 546.4320367764303,
          CostPerBoleCCF: 44.85201758650245,
          CostPerGT: 14.167887311226485,
          DieselPerAcre: 10.567366686652372,
          DieselPerBoleCCF: 0.8673863986248551,
          GasolinePerAcre: 0.05455331832798045,
          GasolinePerBoleCCF: 0.004477823825051003,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 9.46682223980885,
          CostPerAcre: 110.07709584285416,
          CostPerBoleCCF: 9.035304495945633,
          CostPerGT: 2.854078429678018,
          DieselPerAcre: 3.247108521762254,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.203593882921,
      center_lng: -121.062683903016,
      landing_lat: 39.203385,
      landing_lng: -121.062973,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '152559',
      area: 32.025456,
      biomass: 767.7261510498083,
      distance: 1.9477,
      combinedCost: 34242.59977180252,
      residueCost: 10002.853902239283,
      transportationCost: 1114.084097679288,
      frcsResult: {
        Total: {
          WeightPerAcre: 74.78501106206633,
          CostPerAcre: 1069.2306698709465,
          CostPerBoleCCF: 50.30992760803078,
          CostPerGT: 14.297392681851177,
          DieselPerAcre: 22.077176734030488,
          DieselPerBoleCCF: 1.038785357151076,
          GasolinePerAcre: 0.08435009006224492,
          GasolinePerBoleCCF: 0.003968878787656377,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 23.972372198222825,
          CostPerAcre: 312.3407174042825,
          CostPerBoleCCF: 14.696397442047255,
          CostPerGT: 4.176514958927552,
          DieselPerAcre: 9.037703312415662,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2199579698153,
      center_lng: -121.080911648018,
      landing_lat: 39.219948,
      landing_lng: -121.081587,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '161995',
      area: 32.025456,
      biomass: 721.5024782069222,
      distance: 1.3945999999999998,
      combinedCost: 33545.27085603718,
      residueCost: 9278.506822236115,
      transportationCost: 968.0145473468918,
      frcsResult: {
        Total: {
          WeightPerAcre: 74.40680847148926,
          CostPerAcre: 1047.4564626351357,
          CostPerBoleCCF: 48.134097240147895,
          CostPerGT: 14.077427646107058,
          DieselPerAcre: 21.40966263546081,
          DieselPerBoleCCF: 0.9838449806128138,
          GasolinePerAcre: 0.09173201237367051,
          GasolinePerBoleCCF: 0.0042153901008167745,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 22.52903060012392,
          CostPerAcre: 289.7228636568396,
          CostPerBoleCCF: 13.313726144635122,
          CostPerGT: 3.8937681861177236,
          DieselPerAcre: 8.41526488568282,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2022085803379,
      center_lng: -121.070294548508,
      landing_lat: 39.202513,
      landing_lng: -121.069622,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '161403',
      area: 32.025456,
      biomass: 391.8647250304515,
      distance: 1.7978,
      combinedCost: 14814.15808034469,
      residueCost: 4781.216209561674,
      transportationCost: 555.1773655566288,
      frcsResult: {
        Total: {
          WeightPerAcre: 32.6902055649599,
          CostPerAcre: 462.57446202622975,
          CostPerBoleCCF: 54.86646818709585,
          CostPerGT: 14.15024635152664,
          DieselPerAcre: 9.841495418255771,
          DieselPerBoleCCF: 1.167310648568752,
          GasolinePerAcre: 0.028878185983504355,
          GasolinePerBoleCCF: 0.0034252735562283047,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 12.236038888265995,
          CostPerAcre: 149.29424297851293,
          CostPerBoleCCF: 17.707955162541296,
          CostPerGT: 4.566941088267092,
          DieselPerAcre: 4.333256892932639,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2211775367868,
      center_lng: -121.073061304459,
      landing_lat: 39.222,
      landing_lng: -121.073061,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '163406',
      area: 32.025456,
      biomass: 243.4302942912731,
      distance: 1.5909,
      combinedCost: 9473.135290588145,
      residueCost: 2941.1160554074127,
      transportationCost: 338.2515083946625,
      frcsResult: {
        Total: {
          WeightPerAcre: 20.985594455723955,
          CostPerAcre: 295.80016879660184,
          CostPerBoleCCF: 58.16517092843896,
          CostPerGT: 14.095391456300655,
          DieselPerAcre: 6.242073695126483,
          DieselPerBoleCCF: 1.227420812172016,
          GasolinePerAcre: 0.01605997459838307,
          GasolinePerBoleCCF: 0.0031579805090093324,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 7.601149981791769,
          CostPerAcre: 91.83682054074148,
          CostPerBoleCCF: 18.05848991232208,
          CostPerGT: 4.376183897697137,
          DieselPerAcre: 2.6387217794156097,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2224588171625,
      center_lng: -121.068736921603,
      landing_lat: 39.221938,
      landing_lng: -121.068443,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '158052',
      area: 32.025456,
      biomass: 791.96043627546,
      distance: 1.5275999999999998,
      combinedCost: 35877.26783998327,
      residueCost: 9739.309682220024,
      transportationCost: 1095.348292970371,
      frcsResult: {
        Total: {
          WeightPerAcre: 81.64423056704726,
          CostPerAcre: 1120.2734424759876,
          CostPerBoleCCF: 47.71117719070839,
          CostPerGT: 13.72140363985677,
          DieselPerAcre: 22.943136957086857,
          DieselPerBoleCCF: 0.977122219599278,
          GasolinePerAcre: 0.09597749527515179,
          GasolinePerBoleCCF: 0.004087572827998461,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 24.729091641207546,
          CostPerAcre: 304.1115068656641,
          CostPerBoleCCF: 12.951764667144678,
          CostPerGT: 3.724837686061895,
          DieselPerAcre: 8.928665559661383,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.216108902146,
      center_lng: -121.084051939297,
      landing_lat: 39.215981,
      landing_lng: -121.084066,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '160823',
      area: 31.803057,
      biomass: 333.35083627961586,
      distance: 1.6461,
      combinedCost: 29652.10301536169,
      residueCost: 4545.478146871388,
      transportationCost: 455.9751787384317,
      frcsResult: {
        Total: {
          WeightPerAcre: 66.09347148276248,
          CostPerAcre: 932.3664393445475,
          CostPerBoleCCF: 43.35087081770724,
          CostPerGT: 14.106785714648284,
          DieselPerAcre: 18.017649530631505,
          DieselPerBoleCCF: 0.8377401462350239,
          GasolinePerAcre: 0.11016892188231026,
          GasolinePerBoleCCF: 0.005122362302104714,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 10.481723070823534,
          CostPerAcre: 142.92582461086644,
          CostPerBoleCCF: 6.645411822819046,
          CostPerGT: 2.162480217855439,
          DieselPerAcre: 4.196374115174144,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2029956850317,
      center_lng: -121.066561054711,
      landing_lat: 39.202839,
      landing_lng: -121.06508,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 3
    },
    {
      cluster_no: '136427',
      area: 32.025456,
      biomass: 766.7183282275805,
      distance: 1.7466,
      combinedCost: 40228.760891299935,
      residueCost: 9311.653215068482,
      transportationCost: 1075.6337448778002,
      frcsResult: {
        Total: {
          WeightPerAcre: 91.70506960206761,
          CostPerAcre: 1256.1495109171883,
          CostPerBoleCCF: 45.60444681761357,
          CostPerGT: 13.697710675843235,
          DieselPerAcre: 25.074721612498326,
          DieselPerBoleCCF: 0.9103365469678013,
          GasolinePerAcre: 0.11679052045417052,
          GasolinePerBoleCCF: 0.004240074157227258,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 23.940902768959184,
          CostPerAcre: 290.7578650892116,
          CostPerBoleCCF: 10.555950131749857,
          CostPerGT: 3.170575698278038,
          DieselPerAcre: 8.58036957157308,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2012545276245,
      center_lng: -121.074425628611,
      landing_lat: 39.201193,
      landing_lng: -121.073845,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '160046',
      area: 32.025456,
      biomass: 611.122562965789,
      distance: 1.9409,
      combinedCost: 29825.305204233402,
      residueCost: 7443.692791431216,
      transportationCost: 815.7599286301922,
      frcsResult: {
        Total: {
          WeightPerAcre: 67.72809446706842,
          CostPerAcre: 931.2999385311923,
          CostPerBoleCCF: 46.88710887471996,
          CostPerGT: 13.750570510794754,
          DieselPerAcre: 18.84399714933294,
          DieselPerBoleCCF: 0.9487174962871463,
          GasolinePerAcre: 0.07996070389979654,
          GasolinePerBoleCCF: 0.0040256914816959736,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 19.082400043446345,
          CostPerAcre: 232.43050126846646,
          CostPerBoleCCF: 11.701916609130446,
          CostPerGT: 3.431818111780506,
          DieselPerAcre: 6.819727851087751,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2087390676994,
      center_lng: -121.085403304593,
      landing_lat: 39.20885,
      landing_lng: -121.085377,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '164960',
      area: 32.025456,
      biomass: 827.2240225437621,
      distance: 1.8956,
      combinedCost: 29998.558160103403,
      residueCost: 9790.283785155654,
      transportationCost: 1194.7957133064806,
      frcsResult: {
        Total: {
          WeightPerAcre: 68.2552027887323,
          CostPerAcre: 936.7097898653934,
          CostPerBoleCCF: 51.50369777272807,
          CostPerGT: 13.723639394417376,
          DieselPerAcre: 19.82053494774368,
          DieselPerBoleCCF: 1.0898048175508872,
          GasolinePerAcre: 0.061271576361661945,
          GasolinePerBoleCCF: 0.0033689332439272857,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 25.83020277818252,
          CostPerAcre: 305.7031814053063,
          CostPerBoleCCF: 16.808668419621103,
          CostPerGT: 4.47882606622,
          DieselPerAcre: 8.890564647417174,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2122016231517,
      center_lng: -121.08665889042,
      landing_lat: 39.212183,
      landing_lng: -121.086659,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '155685',
      area: 32.025456,
      biomass: 305.9202326032242,
      distance: 2.1090999999999998,
      combinedCost: 11616.093201758447,
      residueCost: 3734.2397781496884,
      transportationCost: 428.01217613742216,
      frcsResult: {
        Total: {
          WeightPerAcre: 25.665880555007107,
          CostPerAcre: 362.7143732710144,
          CostPerBoleCCF: 55.12986015234896,
          CostPerGT: 14.132161664730148,
          DieselPerAcre: 7.610932833401892,
          DieselPerBoleCCF: 1.1568046199836053,
          GasolinePerAcre: 0.02323144480909419,
          GasolinePerBoleCCF: 0.0035310051044087597,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 9.55240832802581,
          CostPerAcre: 116.60223598844895,
          CostPerBoleCCF: 17.722663994600747,
          CostPerGT: 4.543083403608424,
          DieselPerAcre: 3.3837296851541376,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2144252613126,
      center_lng: -121.057185656539,
      landing_lat: 39.214407,
      landing_lng: -121.056874,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '142650',
      area: 32.025456,
      biomass: 1174.3667156987397,
      distance: 1.6892,
      combinedCost: 53929.69870790419,
      residueCost: 16120.033531828769,
      transportationCost: 1634.1844382748905,
      frcsResult: {
        Total: {
          WeightPerAcre: 121.91228926589976,
          CostPerAcre: 1683.963491664387,
          CostPerBoleCCF: 51.65433703876228,
          CostPerGT: 13.81291009958428,
          DieselPerAcre: 35.40380140186682,
          DieselPerBoleCCF: 1.0859854736268262,
          GasolinePerAcre: 0.1433814732437585,
          GasolinePerBoleCCF: 0.004398120850427228,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 36.66978904839762,
          CostPerAcre: 503.3506324415418,
          CostPerBoleCCF: 15.439909086812545,
          CostPerGT: 4.128793212501298,
          DieselPerAcre: 14.370438683255749,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1990948031394,
      center_lng: -121.06913325836,
      landing_lat: 39.200371,
      landing_lng: -121.070013,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '156564',
      area: 32.025456,
      biomass: 796.9681500802669,
      distance: 2.624,
      combinedCost: 39893.80183983913,
      residueCost: 9612.665924477142,
      transportationCost: 1168.3588583220296,
      frcsResult: {
        Total: {
          WeightPerAcre: 91.95490287333729,
          CostPerAcre: 1245.6903608129462,
          CostPerBoleCCF: 45.13453043027212,
          CostPerGT: 13.546753048380843,
          DieselPerAcre: 24.991468616471096,
          DieselPerBoleCCF: 0.9055044786821494,
          GasolinePerAcre: 0.11518120326951994,
          GasolinePerBoleCCF: 0.004173307980460596,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 24.885458307924388,
          CostPerAcre: 300.15703521839447,
          CostPerBoleCCF: 10.875452894316151,
          CostPerGT: 3.2641765239189464,
          DieselPerAcre: 8.88342971318902,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.205960237436,
      center_lng: -121.084718105844,
      landing_lat: 39.206039,
      landing_lng: -121.084719,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '155754',
      area: 32.025456,
      biomass: 621.6890939284482,
      distance: 2.4642,
      combinedCost: 41525.41834627907,
      residueCost: 8729.549274297977,
      transportationCost: 896.6241006366475,
      frcsResult: {
        Total: {
          WeightPerAcre: 87.359147338687,
          CostPerAcre: 1296.637847913206,
          CostPerBoleCCF: 46.12873526847087,
          CostPerGT: 14.84261107639028,
          DieselPerAcre: 25.526108423403016,
          DieselPerBoleCCF: 0.9081079191020655,
          GasolinePerAcre: 0.1303024889433278,
          GasolinePerBoleCCF: 0.004635595842712098,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 19.412341667467537,
          CostPerAcre: 272.58157617796223,
          CostPerBoleCCF: 9.69726696379559,
          CostPerGT: 3.1202408045625405,
          DieselPerAcre: 7.824947911234439,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.211620460225,
      center_lng: -121.056313304106,
      landing_lat: 39.211876,
      landing_lng: -121.056338,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '163550',
      area: 32.025456,
      biomass: 684.1121345802253,
      distance: 2.0606,
      combinedCost: 26067.99458165955,
      residueCost: 8342.112089142072,
      transportationCost: 1008.9437693488968,
      frcsResult: {
        Total: {
          WeightPerAcre: 60.540816653789975,
          CostPerAcre: 813.9773117253834,
          CostPerBoleCCF: 50.838711396967646,
          CostPerGT: 13.445099632207006,
          DieselPerAcre: 17.232204656986248,
          DieselPerBoleCCF: 1.0762745676940546,
          GasolinePerAcre: 0.0579472235944076,
          GasolinePerBoleCCF: 0.003619219029983897,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 21.361511123533273,
          CostPerAcre: 260.48378793238953,
          CostPerBoleCCF: 16.269077684995025,
          CostPerGT: 4.3026143737372715,
          DieselPerAcre: 7.587962157869565,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.219101054023,
      center_lng: -121.08494961749,
      landing_lat: 39.218452,
      landing_lng: -121.084636,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 3
    },
    {
      cluster_no: '127206',
      area: 31.580658,
      biomass: 605.0265151659336,
      distance: 1.609,
      combinedCost: 27299.932082512823,
      residueCost: 7790.856715835117,
      transportationCost: 840.5550192895047,
      frcsResult: {
        Total: {
          WeightPerAcre: 61.507853563584284,
          CostPerAcre: 864.4510219677128,
          CostPerBoleCCF: 50.40319086997492,
          CostPerGT: 14.054319438640123,
          DieselPerAcre: 17.78926449220828,
          DieselPerBoleCCF: 1.0372313420328523,
          GasolinePerAcre: 0.06870039844875288,
          GasolinePerBoleCCF: 0.0040056859299833795,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 19.158135184071643,
          CostPerAcre: 246.69709908625455,
          CostPerBoleCCF: 14.384066484194665,
          CostPerGT: 4.010822761539374,
          DieselPerAcre: 7.09663236176465,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2151845199421,
      center_lng: -121.08758164112,
      landing_lat: 39.214843,
      landing_lng: -121.086766,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '150975',
      area: 32.025456,
      biomass: 397.15888851097986,
      distance: 2.141,
      combinedCost: 13513.419470931964,
      residueCost: 4961.647411601909,
      transportationCost: 569.7504992397551,
      frcsResult: {
        Total: {
          WeightPerAcre: 30.311072230466348,
          CostPerAcre: 421.9586903284676,
          CostPerBoleCCF: 60.62896350631401,
          CostPerGT: 13.920942390957299,
          DieselPerAcre: 9.096362792199683,
          DieselPerBoleCCF: 1.3070072033334772,
          GasolinePerAcre: 0.02077000434138857,
          GasolinePerBoleCCF: 0.0029843296609432914,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 12.401349992049447,
          CostPerAcre: 154.92823620066204,
          CostPerBoleCCF: 22.260800865116877,
          CostPerGT: 5.111275345942403,
          DieselPerAcre: 4.453731057317298,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2233117512596,
      center_lng: -121.064912463239,
      landing_lat: 39.223361,
      landing_lng: -121.06452,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '164717',
      area: 32.025456,
      biomass: 306.4801447940703,
      distance: 2.2615,
      combinedCost: 10825.413125564413,
      residueCost: 3729.144167547985,
      transportationCost: 453.70027865473037,
      frcsResult: {
        Total: {
          WeightPerAcre: 24.454891644020368,
          CostPerAcre: 338.0252610786998,
          CostPerBoleCCF: 57.342294614461,
          CostPerGT: 13.822398643150509,
          DieselPerAcre: 7.234352011102501,
          DieselPerBoleCCF: 1.2272288261579813,
          GasolinePerAcre: 0.018470733387857353,
          GasolinePerBoleCCF: 0.003133358235688435,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 9.569891675986451,
          CostPerAcre: 116.44312473015171,
          CostPerBoleCCF: 19.75330465775517,
          CostPerGT: 4.7615473593244895,
          DieselPerAcre: 3.378802745132492,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2247375720325,
      center_lng: -121.074440119142,
      landing_lat: 39.224702,
      landing_lng: -121.074244,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '137376',
      area: 32.025456,
      biomass: 549.2455558236577,
      distance: 2.0495,
      combinedCost: 24489.27458134077,
      residueCost: 6458.601257960903,
      transportationCost: 770.5096964559255,
      frcsResult: {
        Total: {
          WeightPerAcre: 57.93597516012428,
          CostPerAcre: 764.6815265125584,
          CostPerBoleCCF: 46.833459138387525,
          CostPerGT: 13.198734023188885,
          DieselPerAcre: 15.537597105535081,
          DieselPerBoleCCF: 0.9516110876504282,
          GasolinePerAcre: 0.06659823032003974,
          GasolinePerBoleCCF: 0.004078855563056784,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 17.15028057129484,
          CostPerAcre: 201.67086014203525,
          CostPerBoleCCF: 12.351473993285175,
          CostPerGT: 3.4809263084750786,
          DieselPerAcre: 5.926585374579444,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.20036861997,
      center_lng: -121.077826038239,
      landing_lat: 39.200292,
      landing_lng: -121.078352,
      land_use: 'private',
      haz_class: 2,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '131559',
      area: 32.025456,
      biomass: 323.1659412620714,
      distance: 2.0875,
      combinedCost: 11249.588456457834,
      residueCost: 4203.56603175111,
      transportationCost: 456.3281620901558,
      frcsResult: {
        Total: {
          WeightPerAcre: 24.160075031321288,
          CostPerAcre: 351.27020381717074,
          CostPerBoleCCF: 66.55426858485905,
          CostPerGT: 14.53928447497707,
          DieselPerAcre: 7.6547966243613965,
          DieselPerBoleCCF: 1.4503347706809324,
          GasolinePerAcre: 0.014086058213899187,
          GasolinePerBoleCCF: 0.002668849482484857,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 10.090908346849812,
          CostPerAcre: 131.2570235300041,
          CostPerBoleCCF: 24.868933096904012,
          CostPerGT: 5.4328069494751805,
          DieselPerAcre: 3.7841669422863875,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2211963371337,
      center_lng: -121.059548236556,
      landing_lat: 39.221177,
      landing_lng: -121.059714,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '164169',
      area: 32.025456,
      biomass: 647.5797169930388,
      distance: 2.2389,
      combinedCost: 25945.15195514788,
      residueCost: 8596.176797877295,
      transportationCost: 972.1616551360768,
      frcsResult: {
        Total: {
          WeightPerAcre: 58.08439175531165,
          CostPerAcre: 810.1415310104525,
          CostPerBoleCCF: 51.82858690891006,
          CostPerGT: 13.947663159206058,
          DieselPerAcre: 17.075630870436814,
          DieselPerBoleCCF: 1.0924088998240526,
          GasolinePerAcre: 0.05991336044638598,
          GasolinePerBoleCCF: 0.0038329411467492177,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.220780525124727,
          CostPerAcre: 268.4169992107933,
          CostPerBoleCCF: 17.171905449747836,
          CostPerGT: 4.621155375811391,
          DieselPerAcre: 7.689420024948873,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.222904479879,
      center_lng: -121.081720494647,
      landing_lat: 39.22254,
      landing_lng: -121.081608,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '149537',
      area: 32.025456,
      biomass: 600.1852463037384,
      distance: 2.8923,
      combinedCost: 43549.99865628052,
      residueCost: 8838.743469829635,
      transportationCost: 874.6668656805115,
      frcsResult: {
        Total: {
          WeightPerAcre: 83.63213074159503,
          CostPerAcre: 1359.8556928051398,
          CostPerBoleCCF: 53.280871187061564,
          CostPerGT: 16.259967081393587,
          DieselPerAcre: 27.664665386184723,
          DieselPerBoleCCF: 1.0839366858360353,
          GasolinePerAcre: 0.11414192362795376,
          GasolinePerBoleCCF: 0.004472225370707686,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 18.740880576493225,
          CostPerAcre: 275.9911824465399,
          CostPerBoleCCF: 10.813684656763101,
          CostPerGT: 3.300061591151996,
          DieselPerAcre: 7.951541663240862,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2045138410637,
      center_lng: -121.05778786532,
      landing_lat: 39.202792,
      landing_lng: -121.059755,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '132612',
      area: 32.025456,
      biomass: 711.9806000915028,
      distance: 1.8205,
      combinedCost: 41718.13419661856,
      residueCost: 9306.662411733261,
      transportationCost: 1006.466687790727,
      frcsResult: {
        Total: {
          WeightPerAcre: 101.0778199620621,
          CostPerAcre: 1302.6554312487715,
          CostPerBoleCCF: 44.45892480483246,
          CostPerGT: 12.88764866256219,
          DieselPerAcre: 25.821988848748116,
          DieselPerBoleCCF: 0.8812905032278446,
          GasolinePerAcre: 0.14345602852010797,
          GasolinePerBoleCCF: 0.004896076607657714,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 22.23170842880435,
          CostPerAcre: 290.60202645461976,
          CostPerBoleCCF: 9.918089874229016,
          CostPerGT: 2.875032589382047,
          DieselPerAcre: 8.42456762763296,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1998809800063,
      center_lng: -121.065661626106,
      landing_lat: 39.199569,
      landing_lng: -121.066503,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '147407',
      area: 30.691062,
      biomass: 424.63530618511976,
      distance: 2.1369000000000002,
      combinedCost: 22588.971507217964,
      residueCost: 5382.602291170132,
      transportationCost: 585.7108766293159,
      frcsResult: {
        Total: {
          WeightPerAcre: 50.59753622419321,
          CostPerAcre: 736.0113999058738,
          CostPerBoleCCF: 49.86004201625958,
          CostPerGT: 14.546388121442757,
          DieselPerAcre: 14.72999016815591,
          DieselPerBoleCCF: 0.9978621646040661,
          GasolinePerAcre: 0.061435379470577575,
          GasolinePerBoleCCF: 0.004161852115442218,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 13.83579708597636,
          CostPerAcre: 175.38012503999153,
          CostPerBoleCCF: 11.880876307661998,
          CostPerGT: 3.466179148781033,
          DieselPerAcre: 5.055079494491611,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.202586873187,
      center_lng: -121.083544226629,
      landing_lat: 39.202307,
      landing_lng: -121.083306,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '138554',
      area: 32.025456,
      biomass: 670.6968486191071,
      distance: 2.2457,
      combinedCost: 26672.857617196307,
      residueCost: 9090.462450580259,
      transportationCost: 982.6626497777178,
      frcsResult: {
        Total: {
          WeightPerAcre: 55.77108886572327,
          CostPerAcre: 832.8642570209245,
          CostPerBoleCCF: 56.32223484838694,
          CostPerGT: 14.933620159831595,
          DieselPerAcre: 17.770272786209453,
          DieselPerBoleCCF: 1.201710205171697,
          GasolinePerAcre: 0.0504979307284808,
          GasolinePerBoleCCF: 0.003414909800572239,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.94261666778787,
          CostPerAcre: 283.8511479924051,
          CostPerBoleCCF: 19.195362130675306,
          CostPerGT: 5.089575150232706,
          DieselPerAcre: 8.108402526086662,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2240396300507,
      center_lng: -121.07810931802,
      landing_lat: 39.224614,
      landing_lng: -121.07765,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '161227',
      area: 32.025456,
      biomass: 499.11415164464825,
      distance: 2.104,
      combinedCost: 18243.440283879936,
      residueCost: 6746.73469214338,
      transportationCost: 738.4454101508722,
      frcsResult: {
        Total: {
          WeightPerAcre: 35.45103052912485,
          CostPerAcre: 569.6543488367483,
          CostPerBoleCCF: 69.2415352647542,
          CostPerGT: 16.06876698178768,
          DieselPerAcre: 12.663108939886847,
          DieselPerBoleCCF: 1.5392019845246134,
          GasolinePerAcre: 0.01910477559253453,
          GasolinePerBoleCCF: 0.002322187122097783,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 15.58491943548433,
          CostPerAcre: 210.66787283663908,
          CostPerBoleCCF: 25.606698124846996,
          CostPerGT: 5.942503495450282,
          DieselPerAcre: 5.98033753502236,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.214118443335,
      center_lng: -121.091856277213,
      landing_lat: 39.212136,
      landing_lng: -121.089075,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '161419',
      area: 32.025456,
      biomass: 428.21005829917317,
      distance: 2.1757,
      combinedCost: 12223.59825818141,
      residueCost: 4746.3027775082155,
      transportationCost: 638.7522213261586,
      frcsResult: {
        Total: {
          WeightPerAcre: 29.391622180415084,
          CostPerAcre: 381.6838160924675,
          CostPerBoleCCF: 58.12824417468774,
          CostPerGT: 12.986143253664986,
          DieselPerAcre: 8.454176803621017,
          DieselPerBoleCCF: 1.2875223753731535,
          GasolinePerAcre: 0.016995983608702536,
          GasolinePerBoleCCF: 0.0025883902946419648,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 13.370927748824972,
          CostPerAcre: 148.20406546305588,
          CostPerBoleCCF: 22.570624537119144,
          CostPerGT: 5.042391486707756,
          DieselPerAcre: 4.30184865459164,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2116708897627,
      center_lng: -121.090712029452,
      landing_lat: 39.211506,
      landing_lng: -121.089246,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '159999',
      area: 32.025456,
      biomass: 747.2727392494386,
      distance: 2.2066999999999997,
      combinedCost: 46161.03228651828,
      residueCost: 9251.188673114519,
      transportationCost: 1105.2552374686993,
      frcsResult: {
        Total: {
          WeightPerAcre: 121.30968340480129,
          CostPerAcre: 1441.3856366797177,
          CostPerBoleCCF: 41.4013093882039,
          CostPerGT: 11.88186792862959,
          DieselPerAcre: 28.213548259065554,
          DieselPerBoleCCF: 0.8103853754941687,
          GasolinePerAcre: 0.17387932230547792,
          GasolinePerBoleCCF: 0.004994382790967083,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 23.33371113433759,
          CostPerAcre: 288.86985006909873,
          CostPerBoleCCF: 8.29728681297544,
          CostPerGT: 2.3812596155672234,
          DieselPerAcre: 8.573110554384977,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1982477991011,
      center_lng: -121.073337149939,
      landing_lat: 39.198297,
      landing_lng: -121.073313,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '147699',
      area: 32.025456,
      biomass: 466.64443143895573,
      distance: 2.5818000000000003,
      combinedCost: 29288.417754398706,
      residueCost: 5555.135181245279,
      transportationCost: 661.248362512157,
      frcsResult: {
        Total: {
          WeightPerAcre: 62.77465835296964,
          CostPerAcre: 914.5355418014566,
          CostPerBoleCCF: 43.63411366754455,
          CostPerGT: 14.568546700154096,
          DieselPerAcre: 17.50202601845178,
          DieselPerBoleCCF: 0.8350527210753733,
          GasolinePerAcre: 0.09589097852444414,
          GasolinePerBoleCCF: 0.004575128757036357,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 14.571047214408306,
          CostPerAcre: 173.45998699426104,
          CostPerBoleCCF: 8.276083807928755,
          CostPerGT: 2.7632167429558825,
          DieselPerAcre: 5.138270391504545,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2007998700717,
      center_lng: -121.061231985958,
      landing_lat: 39.20084,
      landing_lng: -121.061151,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 6
    },
    {
      cluster_no: '156869',
      area: 32.025456,
      biomass: 272.1029525921375,
      distance: 2.0129,
      combinedCost: 9915.154382744504,
      residueCost: 3262.5291236898524,
      transportationCost: 390.02722343096633,
      frcsResult: {
        Total: {
          WeightPerAcre: 22.157569472356702,
          CostPerAcre: 309.60228584237814,
          CostPerBoleCCF: 58.09869056883261,
          CostPerGT: 13.972754828936953,
          DieselPerAcre: 6.567916881007821,
          DieselPerBoleCCF: 1.232508246873073,
          GasolinePerAcre: 0.016446016482338587,
          GasolinePerBoleCCF: 0.003086191757588514,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 8.49645833589809,
          CostPerAcre: 101.87299514766792,
          CostPerBoleCCF: 19.117066937347523,
          CostPerGT: 4.597661096121686,
          DieselPerAcre: 2.9534615698878057,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2258859931093,
      center_lng: -121.069425986469,
      landing_lat: 39.226026,
      landing_lng: -121.06905,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '124889',
      area: 32.025456,
      biomass: 265.5274147435896,
      distance: 2.3215,
      combinedCost: 13051.579632987614,
      residueCost: 3310.9789269404405,
      transportationCost: 377.4644235215702,
      frcsResult: {
        Total: {
          WeightPerAcre: 29.373358389776072,
          CostPerAcre: 407.5376673165127,
          CostPerBoleCCF: 48.26495520155637,
          CostPerGT: 13.874398082391679,
          DieselPerAcre: 8.224859327434821,
          DieselPerBoleCCF: 0.9740755243353676,
          GasolinePerAcre: 0.03555765326459962,
          GasolinePerBoleCCF: 0.004211116369166199,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 8.29113611196011,
          CostPerAcre: 103.38584802478505,
          CostPerBoleCCF: 12.24405428889047,
          CostPerGT: 3.5197149285037272,
          DieselPerAcre: 3.022851961606166,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2150735614154,
      center_lng: -121.052895457854,
      landing_lat: 39.215047,
      landing_lng: -121.053142,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 3
    },
    {
      cluster_no: '161823',
      area: 32.025456,
      biomass: 689.1920841997274,
      distance: 2.743,
      combinedCost: 29904.061648724168,
      residueCost: 8081.198726620779,
      transportationCost: 1024.002005764107,
      frcsResult: {
        Total: {
          WeightPerAcre: 69.22430001214455,
          CostPerAcre: 933.759121141762,
          CostPerBoleCCF: 51.11462680555707,
          CostPerGT: 13.488892209497898,
          DieselPerAcre: 19.49808529736454,
          DieselPerBoleCCF: 1.0673388145103857,
          GasolinePerAcre: 0.06381584374652921,
          GasolinePerBoleCCF: 0.003493323881427835,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 21.52013336514951,
          CostPerAcre: 252.33672634109502,
          CostPerBoleCCF: 13.813088733730167,
          CostPerGT: 3.6452044483920476,
          DieselPerAcre: 7.448521813342214,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2050379422338,
      center_lng: -121.088858031812,
      landing_lat: 39.204276,
      landing_lng: -121.087703,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '152581',
      area: 32.025456,
      biomass: 406.0375023422265,
      distance: 2.422,
      combinedCost: 18242.089379111683,
      residueCost: 5381.609614040644,
      transportationCost: 591.1954994137081,
      frcsResult: {
        Total: {
          WeightPerAcre: 38.72761392362933,
          CostPerAcre: 569.6121666186949,
          CostPerBoleCCF: 53.27119149525772,
          CostPerGT: 14.708165799782229,
          DieselPerAcre: 11.806622606951002,
          DieselPerBoleCCF: 1.104177352005464,
          GasolinePerAcre: 0.04057707846712169,
          GasolinePerBoleCCF: 0.003794844007935546,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 12.678586132925837,
          CostPerAcre: 168.0416233274132,
          CostPerBoleCCF: 15.715565818384318,
          CostPerGT: 4.339064721590916,
          DieselPerAcre: 4.837157077165829,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2190117944808,
      center_lng: -121.054358555198,
      landing_lat: 39.218666,
      landing_lng: -121.054481,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '165183',
      area: 31.358259,
      biomass: 631.6169869902875,
      distance: 4.9102,
      combinedCost: 59668.0738586752,
      residueCost: 10195.837869667888,
      transportationCost: 1072.4035156202863,
      frcsResult: {
        Total: {
          WeightPerAcre: 125.45856234618628,
          CostPerAcre: 1902.7865628214627,
          CostPerBoleCCF: 45.99777720976891,
          CostPerGT: 15.166653652310913,
          DieselPerAcre: 37.09732074083082,
          DieselPerBoleCCF: 0.8967870216540862,
          GasolinePerAcre: 0.21040903890785526,
          GasolinePerBoleCCF: 0.0050864076316862435,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.141966012535566,
          CostPerAcre: 325.14043173340355,
          CostPerBoleCCF: 7.859913157356294,
          CostPerGT: 2.591616113344433,
          DieselPerAcre: 9.456856568130918,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1986469401451,
      center_lng: -121.038707958981,
      landing_lat: 39.198481,
      landing_lng: -121.039136,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '165465',
      area: 32.025456,
      biomass: 856.3021576748812,
      distance: 4.5243,
      combinedCost: 40453.59084077146,
      residueCost: 11271.055909594172,
      transportationCost: 1460.8515173082117,
      frcsResult: {
        Total: {
          WeightPerAcre: 78.17095012947082,
          CostPerAcre: 1263.1698621487687,
          CostPerBoleCCF: 58.00038499969782,
          CostPerGT: 16.15907009006083,
          DieselPerAcre: 26.942988454942423,
          DieselPerBoleCCF: 1.2371287110751443,
          GasolinePerAcre: 0.07245453792300596,
          GasolinePerBoleCCF: 0.0033268614304658092,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 26.738172211345912,
          CostPerAcre: 351.94052848440856,
          CostPerBoleCCF: 16.159890099316453,
          CostPerGT: 4.502190748628566,
          DieselPerAcre: 10.150842716645537,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2017527569983,
      center_lng: -121.105001160064,
      landing_lat: 39.199131,
      landing_lng: -121.104696,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '141763',
      area: 32.025456,
      biomass: 360.89352862993326,
      distance: 5.2158,
      combinedCost: 17035.8861061429,
      residueCost: 4882.610242645334,
      transportationCost: 627.6837420143374,
      frcsResult: {
        Total: {
          WeightPerAcre: 35.46756949540435,
          CostPerAcre: 531.9482759634368,
          CostPerBoleCCF: 58.01270457124413,
          CostPerGT: 14.99815982689096,
          DieselPerAcre: 10.918444173398086,
          DieselPerBoleCCF: 1.1907332062722993,
          GasolinePerAcre: 0.03441292067949478,
          GasolinePerBoleCCF: 0.00375297127751272,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 11.268958313347147,
          CostPerAcre: 152.46028792362347,
          CostPerBoleCCF: 16.62686776480486,
          CostPerGT: 4.298582905247518,
          DieselPerAcre: 4.299372159045987,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2339933273645,
      center_lng: -121.046608143263,
      landing_lat: 39.233548,
      landing_lng: -121.046596,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '164708',
      area: 32.025456,
      biomass: 319.9255872702311,
      distance: 4.7287,
      combinedCost: 17718.422163442643,
      residueCost: 4130.034727714834,
      transportationCost: 520.5426391028677,
      frcsResult: {
        Total: {
          WeightPerAcre: 37.66903329640159,
          CostPerAcre: 553.260573821108,
          CostPerBoleCCF: 48.92958900296235,
          CostPerGT: 14.687410995332321,
          DieselPerAcre: 11.059825484460553,
          DieselPerBoleCCF: 0.9781154504859422,
          GasolinePerAcre: 0.04963446770449305,
          GasolinePerBoleCCF: 0.0043896026936973065,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 9.989727773750705,
          CostPerAcre: 128.9609967681595,
          CostPerBoleCCF: 11.405129640267278,
          CostPerGT: 3.4235281737500487,
          DieselPerAcre: 3.7620269773874373,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2281432613062,
      center_lng: -121.040719098326,
      landing_lat: 39.227962,
      landing_lng: -121.040188,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'pine',
      site_class: 6
    },
    {
      cluster_no: '151395',
      area: 32.025456,
      biomass: 624.5912220065917,
      distance: 4.5405,
      combinedCost: 26970.256385885754,
      residueCost: 7140.497513772117,
      transportationCost: 1045.4871054539196,
      frcsResult: {
        Total: {
          WeightPerAcre: 62.872405551543125,
          CostPerAcre: 842.1505812715284,
          CostPerBoleCCF: 52.23673350000101,
          CostPerGT: 13.394597739403004,
          DieselPerAcre: 17.626776895125772,
          DieselPerBoleCCF: 1.0933498920637623,
          GasolinePerAcre: 0.0555240876332024,
          GasolinePerBoleCCF: 0.003444036058429249,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 19.50296108216513,
          CostPerAcre: 222.96318009561259,
          CostPerBoleCCF: 13.829911749727843,
          CostPerGT: 3.5462804093415228,
          DieselPerAcre: 6.594705819658747,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1953234424481,
      center_lng: -121.102907826587,
      landing_lat: 39.194243,
      landing_lng: -121.101413,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      cluster_no: '134295',
      area: 32.025456,
      biomass: 556.2562837467055,
      distance: 4.7293,
      combinedCost: 17526.989198240826,
      residueCost: 7357.81118355373,
      transportationCost: 1004.2703590064764,
      frcsResult: {
        Total: {
          WeightPerAcre: 38.99821946001249,
          CostPerAcre: 547.2830487797215,
          CostPerBoleCCF: 60.93312257521059,
          CostPerGT: 14.033539386096532,
          DieselPerAcre: 12.267528423312054,
          DieselPerBoleCCF: 1.3658358591212598,
          GasolinePerAcre: 0.02788422328265271,
          GasolinePerBoleCCF: 0.0031045595126413025,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 17.369191675107,
          CostPerAcre: 229.74883428837768,
          CostPerBoleCCF: 25.57965921367338,
          CostPerGT: 5.891264715917471,
          DieselPerAcre: 6.524755748005721,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2368888536339,
      center_lng: -121.095559132094,
      landing_lat: 39.235556,
      landing_lng: -121.094314,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '166480',
      area: 32.025456,
      biomass: 1256.3110501400722,
      distance: 4.823,
      combinedCost: 45325.59606176187,
      residueCost: 15852.971904017535,
      transportationCost: 2155.7767798390796,
      frcsResult: {
        Total: {
          WeightPerAcre: 111.13379180762371,
          CostPerAcre: 1415.2990065703318,
          CostPerBoleCCF: 50.0263229459036,
          CostPerGT: 12.735091492426188,
          DieselPerAcre: 30.28339473873139,
          DieselPerBoleCCF: 1.0704217822983186,
          GasolinePerAcre: 0.1173787381877938,
          GasolinePerBoleCCF: 0.004148965438614145,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 39.22851403396324,
          CostPerAcre: 495.0115902804799,
          CostPerBoleCCF: 17.49708687872664,
          CostPerGT: 4.454195094300044,
          DieselPerAcre: 14.126096316731683,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1877395424602,
      center_lng: -121.091397305648,
      landing_lat: 39.18708,
      landing_lng: -121.091741,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 0
    },
    {
      cluster_no: '158601',
      area: 32.025456,
      biomass: 789.1651487113791,
      distance: 4.8568999999999996,
      combinedCost: 35706.909758369795,
      residueCost: 11773.845526809533,
      transportationCost: 1441.7808700905794,
      frcsResult: {
        Total: {
          WeightPerAcre: 69.54333613008465,
          CostPerAcre: 1114.9539840547407,
          CostPerBoleCCF: 60.57946609967369,
          CostPerGT: 16.032506435543407,
          DieselPerAcre: 24.383398871140805,
          DieselPerBoleCCF: 1.3248378914591812,
          GasolinePerAcre: 0.06860951096263916,
          GasolinePerBoleCCF: 0.003727801867087931,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 24.641808338697164,
          CostPerAcre: 367.64021492182763,
          CostPerBoleCCF: 19.97521714370604,
          CostPerGT: 5.286490918901795,
          DieselPerAcre: 10.375084761448287,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2343246423771,
      center_lng: -121.090482907065,
      landing_lat: 39.236332,
      landing_lng: -121.093231,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 2
    },
    {
      cluster_no: '166257',
      area: 32.025456,
      biomass: 1000.5213302234702,
      distance: 4.2702,
      combinedCost: 31055.44358005835,
      residueCost: 11253.72642149934,
      transportationCost: 1609.6606311036167,
      frcsResult: {
        Total: {
          WeightPerAcre: 82.11880020646224,
          CostPerAcre: 969.7112066119636,
          CostPerBoleCCF: 47.17582058571543,
          CostPerGT: 11.808638267655223,
          DieselPerAcre: 20.904912728561293,
          DieselPerBoleCCF: 1.0170104310625787,
          GasolinePerAcre: 0.0781183839716248,
          GasolinePerBoleCCF: 0.0038004086593650104,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 31.24143900475516,
          CostPerAcre: 351.3994124392589,
          CostPerBoleCCF: 17.095353257883836,
          CostPerGT: 4.279159115279012,
          DieselPerAcre: 10.272695504615495,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1900053553317,
      center_lng: -121.096982040978,
      landing_lat: 39.190001,
      landing_lng: -121.096996,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 0
    },
    {
      cluster_no: '160481',
      area: 32.025456,
      biomass: 662.3728118243674,
      distance: 4.623399999999999,
      combinedCost: 28964.743666879447,
      residueCost: 9276.186247862617,
      transportationCost: 1185.2446520827793,
      frcsResult: {
        Total: {
          WeightPerAcre: 61.81269736970256,
          CostPerAcre: 904.428766506227,
          CostPerBoleCCF: 54.061218401466625,
          CostPerGT: 14.631763456249557,
          DieselPerAcre: 19.05885077674507,
          DieselPerBoleCCF: 1.1392214981205855,
          GasolinePerAcre: 0.06533231770691761,
          GasolinePerBoleCCF: 0.00390516625192213,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.682697283822204,
          CostPerAcre: 289.650403349842,
          CostPerBoleCCF: 17.313529042268577,
          CostPerGT: 4.685936962392033,
          DieselPerAcre: 8.157591783223953,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2327633005407,
      center_lng: -121.098424723007,
      landing_lat: 39.233396,
      landing_lng: -121.098004,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 5
    },
    {
      cluster_no: '155433',
      area: 32.025456,
      biomass: 655.6903423512214,
      distance: 5.1102,
      combinedCost: 21182.8008143394,
      residueCost: 8954.469355810726,
      transportationCost: 1305.8831544959928,
      frcsResult: {
        Total: {
          WeightPerAcre: 44.0094528162319,
          CostPerAcre: 661.4363528294305,
          CostPerBoleCCF: 63.47680780359864,
          CostPerGT: 15.029415511966432,
          DieselPerAcre: 14.579996369278343,
          DieselPerBoleCCF: 1.3992149408644776,
          GasolinePerAcre: 0.028337527501808412,
          GasolinePerBoleCCF: 0.0027194994335688516,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 20.474036102755928,
          CostPerAcre: 279.6047417969857,
          CostPerBoleCCF: 26.833143325279256,
          CostPerGT: 6.353288302958854,
          DieselPerAcre: 7.7831426034305125,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2248528751813,
      center_lng: -121.105139141603,
      landing_lat: 39.224959,
      landing_lng: -121.105957,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'other',
      site_class: 4
    },
    {
      cluster_no: '117847',
      area: 32.025456,
      biomass: 959.7489160159193,
      distance: 5.2001,
      combinedCost: 53146.74342955445,
      residueCost: 15751.643659629248,
      transportationCost: 1809.0964741063387,
      frcsResult: {
        Total: {
          WeightPerAcre: 92.77234160344734,
          CostPerAcre: 1659.5155875237017,
          CostPerBoleCCF: 65.71977297809083,
          CostPerGT: 17.888042479484376,
          DieselPerAcre: 36.27771103788317,
          DieselPerBoleCCF: 1.436661970215095,
          GasolinePerAcre: 0.0976816282316011,
          GasolinePerBoleCCF: 0.0038683664557139365,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 29.96831383184425,
          CostPerAcre: 491.8475995979339,
          CostPerBoleCCF: 19.478040958704447,
          CostPerGT: 5.301662015822798,
          DieselPerAcre: 13.71234392579225,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2354089644535,
      center_lng: -121.08628070044,
      landing_lat: 39.237617,
      landing_lng: -121.090842,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '153489',
      area: 32.025456,
      biomass: 575.8733891030375,
      distance: 5.166399999999999,
      combinedCost: 20493.8686721779,
      residueCost: 7984.832760409923,
      transportationCost: 1082.2039211619237,
      frcsResult: {
        Total: {
          WeightPerAcre: 44.31035006712761,
          CostPerAcre: 639.9243361961154,
          CostPerBoleCCF: 60.00134253744627,
          CostPerGT: 14.441870471044963,
          DieselPerAcre: 13.913174487471316,
          DieselPerBoleCCF: 1.3045435233302078,
          GasolinePerAcre: 0.03498649714136101,
          GasolinePerBoleCCF: 0.0032804453283377566,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 17.98173893614622,
          CostPerAcre: 249.32768359051386,
          CostPerBoleCCF: 23.377757183151893,
          CostPerGT: 5.626849781434741,
          DieselPerAcre: 6.948104325758852,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2374616512756,
      center_lng: -121.091506301724,
      landing_lat: 39.237756,
      landing_lng: -121.091187,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '138175',
      area: 32.025456,
      biomass: 892.6176033524748,
      distance: 4.173,
      combinedCost: 42929.10812847285,
      residueCost: 11164.230556380684,
      transportationCost: 1362.8580115260022,
      frcsResult: {
        Total: {
          WeightPerAcre: 109.6958781488834,
          CostPerAcre: 1340.4682864928716,
          CostPerBoleCCF: 43.18134623369569,
          CostPerGT: 12.219860117930205,
          DieselPerAcre: 27.13841859500006,
          DieselPerBoleCCF: 0.874226911142888,
          GasolinePerAcre: 0.14880380177618574,
          GasolinePerBoleCCF: 0.004793510260656113,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 27.872127827078398,
          CostPerAcre: 348.6048896971423,
          CostPerBoleCCF: 11.229828107426583,
          CostPerGT: 3.177921500605543,
          DieselPerAcre: 10.233950266398788,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.1861063829029,
      center_lng: -121.051888992062,
      landing_lat: 39.186126,
      landing_lng: -121.052075,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 4
    },
    {
      cluster_no: '162264',
      area: 31.803057,
      biomass: 166.4629829440232,
      distance: 4.5548,
      combinedCost: 10826.385652179104,
      residueCost: 1911.489906205358,
      transportationCost: 260.74461377705404,
      frcsResult: {
        Total: {
          WeightPerAcre: 23.522433588726212,
          CostPerAcre: 340.4196537514964,
          CostPerBoleCCF: 46.597062962961495,
          CostPerGT: 14.472127319116,
          DieselPerAcre: 6.4346448636189795,
          DieselPerBoleCCF: 0.8807821421298663,
          GasolinePerAcre: 0.03227946471910806,
          GasolinePerBoleCCF: 0.004418453028052763,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 5.234181825477444,
          CostPerAcre: 60.103967559010385,
          CostPerBoleCCF: 8.22710536776313,
          CostPerGT: 2.5551764162623423,
          DieselPerAcre: 1.768275778776665,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.2309174559574,
      center_lng: -121.041271060439,
      landing_lat: 39.230908,
      landing_lng: -121.041258,
      land_use: 'private',
      haz_class: 0,
      forest_type: 'other',
      site_class: 6
    },
    {
      cluster_no: '90761',
      area: 32.025456,
      biomass: 590.3098433618438,
      distance: 5.2574,
      combinedCost: 64697.27223382058,
      residueCost: 10145.945616465568,
      transportationCost: 1036.764322696947,
      frcsResult: {
        Total: {
          WeightPerAcre: 122.84654800736146,
          CostPerAcre: 2020.1827019674781,
          CostPerBoleCCF: 47.80962794135703,
          CostPerGT: 16.444765723872198,
          DieselPerAcre: 39.433196594361284,
          DieselPerBoleCCF: 0.9332257205641346,
          GasolinePerAcre: 0.21585937286477752,
          GasolinePerBoleCCF: 0.005108526221053551,
          JetFuelPerAcre: 0,
          JetFuelPerBoleCCF: 0
        },
        Residue: {
          WeightPerAcre: 18.432519535766918,
          CostPerAcre: 316.8087791307505,
          CostPerBoleCCF: 7.497594076043412,
          CostPerGT: 2.578898506059495,
          DieselPerAcre: 9.200221912831527,
          GasolinePerAcre: 0,
          JetFuelPerAcre: 0
        }
      },
      center_lat: 39.195696221392,
      center_lng: -121.037471128886,
      landing_lat: 39.195495,
      landing_lng: -121.038671,
      land_use: 'private',
      haz_class: 3,
      forest_type: 'pine',
      site_class: 3
    },
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
      type: 'Feature',
      id: '100043',
      geometry: {
        bbox: [
          -121.05302685141136,
          39.18102045108664,
          -121.0478698786464,
          39.18495845134895
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0478698786464, 39.18185734424363],
            [-121.05193080128544, 39.18102045108664],
            [-121.05302685141136, 39.18412152186649],
            [-121.04896576787493, 39.18495845134895],
            [-121.0478698786464, 39.18185734424363]
          ]
        ]
      },
      properties: {
        cluster_no: '144903',
        area: 32.025456,
        biomass: 531.3228647445396,
        distance: 2.5189,
        combinedCost: 33514.902669911266,
        residueCost: 6947.976222493679,
        transportationCost: 750.040227392415,
        frcsResult: {
          Total: {
            WeightPerAcre: 70.53341937560486,
            CostPerAcre: 1046.5082111527552,
            CostPerBoleCCF: 46.00973106145669,
            CostPerGT: 14.837054837507383,
            DieselPerAcre: 20.428874566755823,
            DieselPerBoleCCF: 0.8981554226596222,
            GasolinePerAcre: 0.10413889806197654,
            GasolinePerBoleCCF: 0.004578466410301877,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 16.590641667820112,
            CostPerAcre: 216.9516718979327,
            CostPerBoleCCF: 9.538279748767545,
            CostPerGT: 3.075870613086553,
            DieselPerAcre: 6.299459014279978,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2091772777636,
        center_lng: -121.068363040924,
        landing_lat: 39.209167,
        landing_lng: -121.068248,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '104849',
      geometry: {
        bbox: [
          -121.10614540181878,
          39.18336990272437,
          -121.10098660552924,
          39.187309169914535
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10098660552924, 39.18420852945732],
            [-121.10504704649732, 39.18336990272437],
            [-121.10614540181878, 39.186470506783245],
            [-121.10208480004766, 39.187309169914535],
            [-121.10098660552924, 39.18420852945732]
          ]
        ]
      },
      properties: {
        cluster_no: '151331',
        area: 32.025456,
        biomass: 599.5915287950921,
        distance: 0.7797999999999999,
        combinedCost: 25105.68385143771,
        residueCost: 7341.351066963208,
        transportationCost: 758.6208541619415,
        frcsResult: {
          Total: {
            WeightPerAcre: 54.99414716804089,
            CostPerAcre: 783.9290048340829,
            CostPerBoleCCF: 51.483009853137034,
            CostPerGT: 14.25477155666581,
            DieselPerAcre: 16.210956763550058,
            DieselPerBoleCCF: 1.0646229972869357,
            GasolinePerAcre: 0.055845492874873545,
            GasolinePerBoleCCF: 0.003667543925790725,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 18.722341652062415,
            CostPerAcre: 229.23486450788423,
            CostPerBoleCCF: 15.054553046726143,
            CostPerGT: 4.16835020293034,
            DieselPerAcre: 6.7119501331946445,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2154636032235,
        center_lng: -121.070826109172,
        landing_lat: 39.216007,
        landing_lng: -121.070657,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '106146',
      geometry: {
        bbox: [
          -121.02413856067116,
          39.21025734929003,
          -121.01898041139495,
          39.21419468656078
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.01898041139495, 39.21109330512461],
            [-121.02304330377801, 39.21025734929003],
            [-121.02413856067116, 39.213358694399865],
            [-121.020075507204, 39.21419468656078],
            [-121.01898041139495, 39.21109330512461]
          ]
        ]
      },
      properties: {
        cluster_no: '142812',
        area: 32.025456,
        biomass: 393.0075887549879,
        distance: 0.7737,
        combinedCost: 15837.710661309324,
        residueCost: 4840.5143449863945,
        transportationCost: 492.3489538691166,
        frcsResult: {
          Total: {
            WeightPerAcre: 35.19672500051557,
            CostPerAcre: 494.53505552924287,
            CostPerBoleCCF: 53.12986211486456,
            CostPerGT: 14.050598614558565,
            DieselPerAcre: 10.31219158892532,
            DieselPerBoleCCF: 1.1078796358234522,
            GasolinePerAcre: 0.03491146069792963,
            GasolinePerBoleCCF: 0.0037506766656298924,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 12.271724991362744,
            CostPerAcre: 151.14583676767614,
            CostPerBoleCCF: 16.238196619061736,
            CostPerGT: 4.2943153593256795,
            DieselPerAcre: 4.398152162092783,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.210850311659,
        center_lng: -121.077462542584,
        landing_lat: 39.210889,
        landing_lng: -121.077588,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '106389',
      geometry: {
        bbox: [
          -121.0336800155622,
          39.22492773035367,
          -121.02852052492351,
          39.228865308222865
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0325841291401, 39.22492773035367],
            [-121.0336800155622, 39.22802900189062],
            [-121.02961625021514, 39.228865308222865],
            [-121.02852052492351, 39.225764000327594],
            [-121.0325841291401, 39.22492773035367]
          ]
        ]
      },
      properties: {
        cluster_no: '127514',
        area: 32.025456,
        biomass: 523.6112230833223,
        distance: 2.0204,
        combinedCost: 26072.20724103125,
        residueCost: 6587.275893571068,
        transportationCost: 717.0828275621186,
        frcsResult: {
          Total: {
            WeightPerAcre: 57.151788834685235,
            CostPerAcre: 814.1088526899118,
            CostPerBoleCCF: 48.20092299613065,
            CostPerGT: 14.244678413212357,
            DieselPerAcre: 16.33565579548919,
            DieselPerBoleCCF: 0.9671847744782875,
            GasolinePerAcre: 0.07052527377111234,
            GasolinePerBoleCCF: 0.00417558816501068,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 16.34984442011762,
            CostPerAcre: 205.688746276433,
            CostPerBoleCCF: 12.178208586828033,
            CostPerGT: 3.59899052103862,
            DieselPerAcre: 5.960256472043545,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2130107275835,
        center_lng: -121.065435081011,
        landing_lat: 39.21299,
        landing_lng: -121.0654,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '108576',
      geometry: {
        bbox: [
          -121.03555168582746,
          39.21788883526267,
          -121.03039263742848,
          39.22182645138481
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03555168582746, 39.22099008532031],
            [-121.03148833643277, 39.22182645138481],
            [-121.03039263742848, 39.21872516497571],
            [-121.03445582572765, 39.21788883526267],
            [-121.03555168582746, 39.22099008532031]
          ]
        ]
      },
      properties: {
        cluster_no: '160657',
        area: 31.803057,
        biomass: 320.20563220313204,
        distance: 1.48,
        combinedCost: 11358.644496634892,
        residueCost: 3892.4597653361325,
        transportationCost: 422.8226128677098,
        frcsResult: {
          Total: {
            WeightPerAcre: 25.26167833920544,
            CostPerAcre: 357.1557443875566,
            CostPerBoleCCF: 57.83099676490517,
            CostPerGT: 14.138242898662064,
            DieselPerAcre: 7.6145977641246985,
            DieselPerBoleCCF: 1.2329628896723182,
            GasolinePerAcre: 0.020533797770310284,
            GasolinePerBoleCCF: 0.0033248520038850695,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 10.068391607861221,
            CostPerAcre: 122.39262927888136,
            CostPerBoleCCF: 19.8179305781924,
            CostPerGT: 4.844991992829365,
            DieselPerAcre: 3.531146556404667,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2100551196241,
        center_lng: -121.064759456143,
        landing_lat: 39.210344,
        landing_lng: -121.065485,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '109374',
      geometry: {
        bbox: [
          -121.11780476934429,
          39.240858052663114,
          -121.11264151941074,
          39.24479764858972
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.11264151941074, 39.241697070604445],
            [-121.11670504469865, 39.240858052663114],
            [-121.11780476934429, 39.24395859415818],
            [-121.11374108302134, 39.24479764858972],
            [-121.11264151941074, 39.241697070604445]
          ]
        ]
      },
      properties: {
        cluster_no: '109913',
        area: 31.358259,
        biomass: 364.97028007699134,
        distance: 0.8934,
        combinedCost: 14305.792403554115,
        residueCost: 5281.170752840027,
        transportationCost: 466.6059843696159,
        frcsResult: {
          Total: {
            WeightPerAcre: 28.227807074827492,
            CostPerAcre: 456.2049316434983,
            CostPerBoleCCF: 67.18443148859373,
            CostPerGT: 16.161543489161964,
            DieselPerAcre: 9.753490437565246,
            DieselPerBoleCCF: 1.4363779622385309,
            GasolinePerAcre: 0.021344124968133253,
            GasolinePerBoleCCF: 0.0031433086364049353,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.638729053069921,
            CostPerAcre: 168.414029389834,
            CostPerBoleCCF: 24.8020133813487,
            CostPerGT: 5.966245586963055,
            DieselPerAcre: 4.645730105364703,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2162323305733,
        center_lng: -121.066697643841,
        landing_lat: 39.216193,
        landing_lng: -121.066626,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '109913',
      geometry: {
        bbox: [
          -121.06915234853138,
          39.214294389379106,
          -121.06399250692995,
          39.21823280282381
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06508958816568, 39.21823280282381],
            [-121.06454213400704, 39.21668541386799],
            [-121.06522406094037, 39.216544858287776],
            [-121.06513263556975, 39.21628644310526],
            [-121.06445071088864, 39.21642699817648],
            [-121.06399250692995, 39.21513181482963],
            [-121.06805510628237, 39.214294389379106],
            [-121.06915234853138, 39.21739534098239],
            [-121.06508958816568, 39.21823280282381]
          ],
          [
            [-121.06608403533518, 39.21692211903],
            [-121.0659926064254, 39.21666370445679],
            [-121.06565404701963, 39.21673348939734],
            [-121.06574547481127, 39.21699190422323],
            [-121.06608403533518, 39.21692211903]
          ]
        ]
      },
      properties: {
        cluster_no: '154080',
        area: 32.025456,
        biomass: 530.6825327937433,
        distance: 1.0177,
        combinedCost: 19092.729038964208,
        residueCost: 6477.300161919218,
        transportationCost: 687.0313336305169,
        frcsResult: {
          Total: {
            WeightPerAcre: 42.45925836555662,
            CostPerAcre: 596.1735264273585,
            CostPerBoleCCF: 54.87555751306527,
            CostPerGT: 14.041072533451986,
            DieselPerAcre: 12.63630122736771,
            DieselPerBoleCCF: 1.1631245669532846,
            GasolinePerAcre: 0.03821017261303589,
            GasolinePerBoleCCF: 0.003517104386328852,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 16.570647199956916,
            CostPerAcre: 202.25473641715573,
            CostPerBoleCCF: 18.61679683608332,
            CostPerGT: 4.7635013941088244,
            DieselPerAcre: 5.8792918030765655,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2138841499042,
        center_lng: -121.078601614368,
        landing_lat: 39.213882,
        landing_lng: -121.078647,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '110059',
      geometry: {
        bbox: [
          -121.05651529417189,
          39.24018797086934,
          -121.05135400456821,
          39.24412610686021
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05541820053143, 39.24018797086934],
            [-121.05651529417189, 39.243289052378685],
            [-121.05245093705543, 39.24412610686021],
            [-121.05135400456821, 39.241024988942165],
            [-121.05541820053143, 39.24018797086934]
          ]
        ]
      },
      properties: {
        cluster_no: '145051',
        area: 32.025456,
        biomass: 411.5418761503693,
        distance: 1.338,
        combinedCost: 16454.97948870269,
        residueCost: 5459.341787631424,
        transportationCost: 555.1736474692734,
        frcsResult: {
          Total: {
            WeightPerAcre: 33.845183308096594,
            CostPerAcre: 513.8093736652085,
            CostPerBoleCCF: 59.594869555067795,
            CostPerGT: 15.181166814430954,
            DieselPerAcre: 10.873223233451721,
            DieselPerBoleCCF: 1.2611453847529621,
            GasolinePerAcre: 0.028356755217019892,
            GasolinePerBoleCCF: 0.0032889962985852743,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 12.850461087903614,
            CostPerAcre: 170.46882291485326,
            CostPerBoleCCF: 19.772055134665855,
            CostPerGT: 5.036723286828025,
            DieselPerAcre: 4.802785034512193,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2185872211831,
        center_lng: -121.072041004536,
        landing_lat: 39.218579,
        landing_lng: -121.072021,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '110821',
      geometry: {
        bbox: [
          -121.04709632828832,
          39.18889638433215,
          -121.04193898085491,
          39.19283425004398
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04193898085491, 39.18973308539316],
            [-121.0460004126463, 39.18889638433215],
            [-121.04709632828832, 39.19199751265482],
            [-121.04303473555288, 39.19283425004398],
            [-121.04193898085491, 39.18973308539316]
          ]
        ]
      },
      properties: {
        cluster_no: '156157',
        area: 32.025456,
        biomass: 305.9472763777887,
        distance: 1.3171,
        combinedCost: 13898.618864748392,
        residueCost: 3890.8922756723364,
        transportationCost: 396.54953358514246,
        frcsResult: {
          Total: {
            WeightPerAcre: 29.420336077906093,
            CostPerAcre: 433.98660318055715,
            CostPerBoleCCF: 53.8088185483468,
            CostPerGT: 14.751245602067401,
            DieselPerAcre: 8.908441286950426,
            DieselPerBoleCCF: 1.1045334055131768,
            GasolinePerAcre: 0.03183288801147608,
            GasolinePerBoleCCF: 0.003946873203748928,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 9.553252774224001,
            CostPerAcre: 121.49373534829095,
            CostPerBoleCCF: 15.063677800665198,
            CostPerGT: 4.12958353115244,
            DieselPerAcre: 3.4911753041415317,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2070767714196,
        center_lng: -121.07644405604,
        landing_lat: 39.206608,
        landing_lng: -121.076389,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '111919',
      geometry: {
        bbox: [
          -121.08364644596652,
          39.181360118287394,
          -121.07848849398592,
          39.18529884813943
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07848849398592, 39.18219801059387],
            [-121.08254908235561, 39.181360118287394],
            [-121.08364644596652, 39.184460919466815],
            [-121.07958569675833, 39.18529884813943],
            [-121.07848849398592, 39.18219801059387]
          ]
        ]
      },
      properties: {
        cluster_no: '118972',
        area: 32.025456,
        biomass: 458.0565393848815,
        distance: 1.0894000000000001,
        combinedCost: 31535.477772992865,
        residueCost: 5894.268269765348,
        transportationCost: 583.9332860685824,
        frcsResult: {
          Total: {
            WeightPerAcre: 67.05691663556524,
            CostPerAcre: 984.7003512765865,
            CostPerBoleCCF: 44.71029585431701,
            CostPerGT: 14.684545617093391,
            DieselPerAcre: 18.99519096981146,
            DieselPerBoleCCF: 0.8624761908213964,
            GasolinePerAcre: 0.1040913442567906,
            GasolinePerBoleCCF: 0.00472626499174209,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 14.30288890765151,
            CostPerAcre: 184.04947207513138,
            CostPerBoleCCF: 8.35676186937666,
            CostPerGT: 2.744675438558956,
            DieselPerAcre: 5.3612450628883614,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.206301323175,
        center_lng: -121.067138130218,
        landing_lat: 39.206216,
        landing_lng: -121.067307,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 5
      }
    },
    {
      type: 'Feature',
      id: '112027',
      geometry: {
        bbox: [
          -121.07991395918434,
          39.19543922074943,
          -121.07475512275649,
          39.19937787385296
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07475512275649, 39.19627699383013],
            [-121.0788165421518, 39.19543922074943],
            [-121.07991395918434, 39.19854006439232],
            [-121.07585237888068, 39.19937787385296],
            [-121.07475512275649, 39.19627699383013]
          ]
        ]
      },
      properties: {
        cluster_no: '156108',
        area: 32.025456,
        biomass: 741.3509637540183,
        distance: 1.0939,
        combinedCost: 46368.78328396192,
        residueCost: 11710.177356006336,
        transportationCost: 957.0166893592042,
        frcsResult: {
          Total: {
            WeightPerAcre: 83.7010250241476,
            CostPerAcre: 1447.8726948950211,
            CostPerBoleCCF: 57.33113727723643,
            CostPerGT: 17.29814771655798,
            DieselPerAcre: 30.034291380702715,
            DieselPerBoleCCF: 1.1892620727241725,
            GasolinePerAcre: 0.10557733135132917,
            GasolinePerBoleCCF: 0.0041805253309968645,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.14880274472964,
            CostPerAcre: 365.6521660770837,
            CostPerBoleCCF: 14.478658657627417,
            CostPerGT: 4.368550635689273,
            DieselPerAcre: 10.316659105206934,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2053657400246,
        center_lng: -121.071468641668,
        landing_lat: 39.205174,
        landing_lng: -121.069988,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '113123',
      geometry: {
        bbox: [
          -121.06849970047368,
          39.18781184005779,
          -121.0633417623253,
          39.19175021472186
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06849970047368, 39.19091277910904],
            [-121.06443841535153, 39.19175021472186],
            [-121.0633417623253, 39.18864923931581],
            [-121.06740288655041, 39.18781184005779],
            [-121.06849970047368, 39.19091277910904]
          ]
        ]
      },
      properties: {
        cluster_no: '160491',
        area: 32.025456,
        biomass: 670.8416770360707,
        distance: 1.5704,
        combinedCost: 31496.60762913257,
        residueCost: 8288.653713191114,
        transportationCost: 894.1405143969245,
        frcsResult: {
          Total: {
            WeightPerAcre: 68.60200027850823,
            CostPerAcre: 983.4866248003642,
            CostPerBoleCCF: 49.67892301170682,
            CostPerGT: 14.336121699187142,
            DieselPerAcre: 20.168093693109892,
            DieselPerBoleCCF: 1.0187522113747867,
            GasolinePerAcre: 0.07645415467673533,
            GasolinePerBoleCCF: 0.0038619336230237395,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 20.947138958335852,
            CostPerAcre: 258.81454156940384,
            CostPerBoleCCF: 13.073515552432195,
            CostPerGT: 3.7726967219421703,
            DieselPerAcre: 7.587059289734526,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2043732077528,
        center_lng: -121.075121343083,
        landing_lat: 39.205132,
        landing_lng: -121.075698,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '115491',
      geometry: {
        bbox: [
          -121.07573777264038,
          39.23289998693339,
          -121.07057640169384,
          39.2368385740718
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07573777264038, 39.23600089376822],
            [-121.07167404595157, 39.2368385740718],
            [-121.07057640169384, 39.23373763081269],
            [-121.0746399672998, 39.23289998693339],
            [-121.07573777264038, 39.23600089376822]
          ]
        ]
      },
      properties: {
        cluster_no: '145114',
        area: 31.580658,
        biomass: 601.4694655833171,
        distance: 1.661,
        combinedCost: 25485.11891000269,
        residueCost: 7475.013969563508,
        transportationCost: 831.8012210409922,
        frcsResult: {
          Total: {
            WeightPerAcre: 55.058599969132885,
            CostPerAcre: 806.9850511032002,
            CostPerBoleCCF: 52.78169211592984,
            CostPerGT: 14.65683928678925,
            DieselPerAcre: 16.86645088157028,
            DieselPerBoleCCF: 1.1031676687225882,
            GasolinePerAcre: 0.05294573010113297,
            GasolinePerBoleCCF: 0.0034629702510979234,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 19.045501381995177,
            CostPerAcre: 236.69595388302258,
            CostPerBoleCCF: 15.481343732279806,
            CostPerGT: 4.298982429915032,
            DieselPerAcre: 6.897181342624474,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2069021967602,
        center_lng: -121.080560572089,
        landing_lat: 39.207585,
        landing_lng: -121.079866,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '117458',
      geometry: {
        bbox: [
          -121.06817355505662,
          39.174570621858734,
          -121.06301656810851,
          39.178508977466805
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06301656810851, 39.17540800809657],
            [-121.0670769551714, 39.174570621858734],
            [-121.06817355505662, 39.17767155489217],
            [-121.06411300715477, 39.178508977466805],
            [-121.06301656810851, 39.17540800809657]
          ]
        ]
      },
      properties: {
        cluster_no: '163526',
        area: 32.025456,
        biomass: 495.835101470624,
        distance: 1.0612000000000001,
        combinedCost: 16443.44662016685,
        residueCost: 5944.048706465362,
        transportationCost: 643.6876780142807,
        frcsResult: {
          Total: {
            WeightPerAcre: 36.98766947324698,
            CostPerAcre: 513.4492579954788,
            CostPerBoleCCF: 58.228212547595106,
            CostPerGT: 13.881633130923655,
            DieselPerAcre: 11.033139254571244,
            DieselPerBoleCCF: 1.2512238893683365,
            GasolinePerAcre: 0.027572964070018954,
            GasolinePerBoleCCF: 0.0031269388112552384,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 15.482530567890244,
            CostPerAcre: 185.60387419512034,
            CostPerBoleCCF: 21.048587894513492,
            CostPerGT: 5.017993207962638,
            DieselPerAcre: 5.353445620885733,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2192819603238,
        center_lng: -121.067749320858,
        landing_lat: 39.219316,
        landing_lng: -121.067872,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '117847',
      geometry: {
        bbox: [
          -121.08902677176528,
          39.23348705827935,
          -121.08386494433724,
          39.237425962397474
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08386494433724, 39.23432513586751],
            [-121.08792838932206, 39.23348705827935],
            [-121.08902677176528, 39.23658784836675],
            [-121.08496316572126, 39.237425962397474],
            [-121.08386494433724, 39.23432513586751]
          ]
        ]
      },
      properties: {
        cluster_no: '147174',
        area: 32.025456,
        biomass: 339.1891655841473,
        distance: 1.8034000000000001,
        combinedCost: 14394.984058783135,
        residueCost: 4284.7847799220535,
        transportationCost: 462.3980680494266,
        frcsResult: {
          Total: {
            WeightPerAcre: 30.11456940191592,
            CostPerAcre: 449.48568597378085,
            CostPerBoleCCF: 54.88442057427503,
            CostPerGT: 14.925854657751943,
            DieselPerAcre: 9.275151337381491,
            DieselPerBoleCCF: 1.1325417533331408,
            GasolinePerAcre: 0.03095581041940936,
            GasolinePerBoleCCF: 0.0037798572263667,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 10.591236096190084,
            CostPerAcre: 133.7930919679037,
            CostPerBoleCCF: 16.336796829448808,
            CostPerGT: 4.442802757106388,
            DieselPerAcre: 3.848395049473041,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2138398445485,
        center_lng: -121.061760388848,
        landing_lat: 39.213987,
        landing_lng: -121.061782,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 5
      }
    },
    {
      type: 'Feature',
      id: '118972',
      geometry: {
        bbox: [
          -121.0699230867719,
          39.2041540408926,
          -121.0647639423335,
          39.20809246369332
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0647639423335, 39.20499148959433],
            [-121.06882596494351, 39.2041540408926],
            [-121.0699230867719, 39.207254978613186],
            [-121.06586090319519, 39.20809246369332],
            [-121.0647639423335, 39.20499148959433]
          ]
        ]
      },
      properties: {
        cluster_no: '165870',
        area: 32.025456,
        biomass: 339.3217157464441,
        distance: 1.6816,
        combinedCost: 14412.700013989597,
        residueCost: 4288.576229261781,
        transportationCost: 460.1599575892867,
        frcsResult: {
          Total: {
            WeightPerAcre: 31.793013916128427,
            CostPerAcre: 450.03886951647456,
            CostPerBoleCCF: 53.2522844609218,
            CostPerGT: 14.155275454654905,
            DieselPerAcre: 9.330800536927583,
            DieselPerBoleCCF: 1.1040967305211844,
            GasolinePerAcre: 0.03299385549443977,
            GasolinePerBoleCCF: 0.0039041031725552673,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 10.595374996266848,
            CostPerAcre: 133.91148058162798,
            CostPerBoleCCF: 15.845502998835995,
            CostPerGT: 4.211978170263858,
            DieselPerAcre: 3.843653037854452,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2069026730705,
        center_lng: -121.063574133009,
        landing_lat: 39.206832,
        landing_lng: -121.063625,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '120102',
      geometry: {
        bbox: [
          -121.03664763964188,
          39.22099008532031,
          -121.03148833643277,
          39.22492773035367
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03148833643277, 39.22182645138481],
            [-121.03555168582746, 39.22099008532031],
            [-121.03664763964188, 39.22409132793214],
            [-121.0325841291401, 39.22492773035367],
            [-121.03148833643277, 39.22182645138481]
          ]
        ]
      },
      properties: {
        cluster_no: '162554',
        area: 32.025456,
        biomass: 671.8776976160037,
        distance: 1.6045999999999998,
        combinedCost: 39450.33552369069,
        residueCost: 8408.598520120384,
        transportationCost: 878.4217420018472,
        frcsResult: {
          Total: {
            WeightPerAcre: 86.19990558707968,
            CostPerAcre: 1231.8430539659041,
            CostPerBoleCCF: 45.74346183791041,
            CostPerGT: 14.290538319922968,
            DieselPerAcre: 24.403995155612236,
            DieselPerBoleCCF: 0.9062219553857201,
            GasolinePerAcre: 0.12022331912407391,
            GasolinePerBoleCCF: 0.00446439243430699,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 20.979488867106333,
            CostPerAcre: 262.55983740310785,
            CostPerBoleCCF: 9.749940029900479,
            CostPerGT: 3.045941125049937,
            DieselPerAcre: 7.715705667317126,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.209783684339,
        center_lng: -121.081724839976,
        landing_lat: 39.208795,
        landing_lng: -121.081504,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '120540',
      geometry: {
        bbox: [
          -121.07716367564689,
          39.249242272921485,
          -121.07200109681965,
          39.25318090917876
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07200109681965, 39.25007996652382],
            [-121.07606556188111, 39.249242272921485],
            [-121.07716367564689, 39.25234317912849],
            [-121.07309904943278, 39.25318090917876],
            [-121.07200109681965, 39.25007996652382]
          ]
        ]
      },
      properties: {
        cluster_no: '159333',
        area: 31.803057,
        biomass: 141.45092348192068,
        distance: 1.4813,
        combinedCost: 7172.786853730967,
        residueCost: 1793.6378414983178,
        transportationCost: 187.57260896393984,
        frcsResult: {
          Total: {
            WeightPerAcre: 14.626735662025485,
            CostPerAcre: 225.53765362024686,
            CostPerBoleCCF: 55.407384537471536,
            CostPerGT: 15.419548068117257,
            DieselPerAcre: 4.524128226486579,
            DieselPerBoleCCF: 1.1114335381170604,
            GasolinePerAcre: 0.01449388511537756,
            GasolinePerBoleCCF: 0.0035606837844550797,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 4.447714679815864,
            CostPerAcre: 56.39828402339806,
            CostPerBoleCCF: 13.855253701448584,
            CostPerGT: 3.855835322834304,
            DieselPerAcre: 1.6355818076344155,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2165530820702,
        center_lng: -121.062566754304,
        landing_lat: 39.216508,
        landing_lng: -121.062469,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '120786',
      geometry: {
        bbox: [
          -121.10647851676822,
          39.19661104574672,
          -121.10131876862978,
          39.200550332302164
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10131876862978, 39.197449685760766],
            [-121.10537994676757, 39.19661104574672],
            [-121.10647851676822, 39.199711655871745],
            [-121.10241717776935, 39.200550332302164],
            [-121.10131876862978, 39.197449685760766]
          ]
        ]
      },
      properties: {
        cluster_no: '149423',
        area: 31.580658,
        biomass: 464.96576395412063,
        distance: 2.1005,
        combinedCost: 22755.554834812563,
        residueCost: 6626.246212430011,
        transportationCost: 648.7877535655961,
        frcsResult: {
          Total: {
            WeightPerAcre: 46.269456282784816,
            CostPerAcre: 720.5535373839444,
            CostPerBoleCCF: 54.63381821325415,
            CostPerGT: 15.572984756512824,
            DieselPerAcre: 14.790379013919623,
            DieselPerBoleCCF: 1.1214362797875552,
            GasolinePerAcre: 0.05339181524701446,
            GasolinePerBoleCCF: 0.0040482748011640484,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 14.72311830722845,
            CostPerAcre: 209.81976412366112,
            CostPerBoleCCF: 15.908956456308132,
            CostPerGT: 4.5347358923196905,
            DieselPerAcre: 5.894314289854084,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2109521332337,
        center_lng: -121.06016593562,
        landing_lat: 39.210952,
        landing_lng: -121.06013,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '121552',
      geometry: {
        bbox: [
          -121.04193898085491,
          39.18663191320006,
          -121.03678195530969,
          39.19056965407117
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04193898085491, 39.18973308539316],
            [-121.03787745540795, 39.19056965407117],
            [-121.03678195530969, 39.187468445559716],
            [-121.04084331981248, 39.18663191320006],
            [-121.04193898085491, 39.18973308539316]
          ]
        ]
      },
      properties: {
        cluster_no: '156045',
        area: 32.025456,
        biomass: 655.7775222032537,
        distance: 1.9547999999999999,
        combinedCost: 30099.180394153995,
        residueCost: 7834.008136510815,
        transportationCost: 953.0267883010332,
        frcsResult: {
          Total: {
            WeightPerAcre: 70.1059250499132,
            CostPerAcre: 939.8517352619116,
            CostPerBoleCCF: 46.439151795919045,
            CostPerGT: 13.406166947982884,
            DieselPerAcre: 19.00966447596205,
            DieselPerBoleCCF: 0.9392893166736355,
            GasolinePerAcre: 0.08316755033724872,
            GasolinePerBoleCCF: 0.004109404015230052,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 20.47675830761797,
            CostPerAcre: 244.6181605192699,
            CostPerBoleCCF: 12.086863770302212,
            CostPerGT: 3.489265141927869,
            DieselPerAcre: 7.218587543964215,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2127936765276,
        center_lng: -121.083202491955,
        landing_lat: 39.212795,
        landing_lng: -121.083249,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '121900',
      geometry: {
        bbox: [
          -121.06057955744488,
          39.23935082034143,
          -121.05541820053143,
          39.243289052378685
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05541820053143, 39.24018797086934],
            [-121.05948230266297, 39.23935082034143],
            [-121.06057955744488, 39.24245186543783],
            [-121.05651529417189, 39.243289052378685],
            [-121.05541820053143, 39.24018797086934]
          ]
        ]
      },
      properties: {
        cluster_no: '153314',
        area: 32.025456,
        biomass: 321.1685315259783,
        distance: 1.6710999999999998,
        combinedCost: 16436.467036857735,
        residueCost: 4268.39786406113,
        transportationCost: 427.2869365179757,
        frcsResult: {
          Total: {
            WeightPerAcre: 33.80728891131883,
            CostPerAcre: 513.2313193872317,
            CostPerBoleCCF: 52.25459144608204,
            CostPerGT: 15.18108478717439,
            DieselPerAcre: 10.431936129686008,
            DieselPerBoleCCF: 1.062126452257828,
            GasolinePerAcre: 0.03977480501174886,
            GasolinePerBoleCCF: 0.004049667483695308,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 10.028538907485919,
            CostPerAcre: 133.2814078919323,
            CostPerBoleCCF: 13.570032173926608,
            CostPerGT: 3.9423867510212895,
            DieselPerAcre: 3.8262888264695656,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2041116068132,
        center_lng: -121.079177058858,
        landing_lat: 39.203728,
        landing_lng: -121.078579,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '121986',
      geometry: {
        bbox: [
          -121.03084939538928,
          39.192242394260425,
          -121.02569231724966,
          39.19617987568377
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02569231724966, 39.193078565762704],
            [-121.02975412359373, 39.192242394260425],
            [-121.03084939538928, 39.195343667870254],
            [-121.0267874280543, 39.19617987568377],
            [-121.02569231724966, 39.193078565762704]
          ]
        ]
      },
      properties: {
        cluster_no: '165400',
        area: 32.025456,
        biomass: 243.59175655689242,
        distance: 1.7977,
        combinedCost: 9776.651612908874,
        residueCost: 3362.2457840700226,
        transportationCost: 334.35078719480805,
        frcsResult: {
          Total: {
            WeightPerAcre: 19.73827499669199,
            CostPerAcre: 305.2775146405058,
            CostPerBoleCCF: 67.4237635424093,
            CostPerGT: 15.466271226420158,
            DieselPerAcre: 6.464425026151934,
            DieselPerBoleCCF: 1.4277365462509224,
            GasolinePerAcre: 0.013789283252836697,
            GasolinePerBoleCCF: 0.0030455088529969493,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 7.606191666931844,
            CostPerAcre: 104.98666386108671,
            CostPerBoleCCF: 23.187413614828657,
            CostPerGT: 5.31893814827698,
            DieselPerAcre: 2.9405198701244117,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2206532941819,
        center_lng: -121.063943053616,
        landing_lat: 39.220652,
        landing_lng: -121.063947,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '122002',
      geometry: {
        bbox: [
          -121.0736579604159,
          39.1900752111316,
          -121.06849970047368,
          39.194013710601105
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06849970047368, 39.19091277910904],
            [-121.0725608918472, 39.1900752111316],
            [-121.0736579604159, 39.193176106259116],
            [-121.0695966081455, 39.194013710601105],
            [-121.06849970047368, 39.19091277910904]
          ]
        ]
      },
      properties: {
        cluster_no: '161348',
        area: 32.025456,
        biomass: 303.1792991008198,
        distance: 2.9424,
        combinedCost: 17499.73515077395,
        residueCost: 3525.2691895231087,
        transportationCost: 434.1721397157144,
        frcsResult: {
          Total: {
            WeightPerAcre: 38.56835001386857,
            CostPerAcre: 546.4320367764303,
            CostPerBoleCCF: 44.85201758650245,
            CostPerGT: 14.167887311226485,
            DieselPerAcre: 10.567366686652372,
            DieselPerBoleCCF: 0.8673863986248551,
            GasolinePerAcre: 0.05455331832798045,
            GasolinePerBoleCCF: 0.004477823825051003,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 9.46682223980885,
            CostPerAcre: 110.07709584285416,
            CostPerBoleCCF: 9.035304495945633,
            CostPerGT: 2.854078429678018,
            DieselPerAcre: 3.247108521762254,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.203593882921,
        center_lng: -121.062683903016,
        landing_lat: 39.203385,
        landing_lng: -121.062973,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '122585',
      geometry: {
        bbox: [
          -121.0670769551714,
          39.17146968121939,
          -121.06192022275222,
          39.17540800809657
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06192022275222, 39.17230703112597],
            [-121.06598044898772, 39.17146968121939],
            [-121.0670769551714, 39.174570621858734],
            [-121.06301656810851, 39.17540800809657],
            [-121.06192022275222, 39.17230703112597]
          ]
        ]
      },
      properties: {
        cluster_no: '152559',
        area: 32.025456,
        biomass: 767.7261510498083,
        distance: 1.9477,
        combinedCost: 34242.59977180252,
        residueCost: 10002.853902239283,
        transportationCost: 1114.084097679288,
        frcsResult: {
          Total: {
            WeightPerAcre: 74.78501106206633,
            CostPerAcre: 1069.2306698709465,
            CostPerBoleCCF: 50.30992760803078,
            CostPerGT: 14.297392681851177,
            DieselPerAcre: 22.077176734030488,
            DieselPerBoleCCF: 1.038785357151076,
            GasolinePerAcre: 0.08435009006224492,
            GasolinePerBoleCCF: 0.003968878787656377,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.972372198222825,
            CostPerAcre: 312.3407174042825,
            CostPerBoleCCF: 14.696397442047255,
            CostPerGT: 4.176514958927552,
            DieselPerAcre: 9.037703312415662,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2199579698153,
        center_lng: -121.080911648018,
        landing_lat: 39.219948,
        landing_lng: -121.081587,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '123285',
      geometry: {
        bbox: [
          -121.0334960167616,
          39.17506353598173,
          -121.02834007669458,
          39.17900106578987
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0334960167616, 39.17816477472251],
            [-121.02943504142458, 39.17900106578987],
            [-121.02834007669458, 39.17589979075716],
            [-121.03240089112211, 39.17506353598173],
            [-121.0334960167616, 39.17816477472251]
          ]
        ]
      },
      properties: {
        cluster_no: '161995',
        area: 32.025456,
        biomass: 721.5024782069222,
        distance: 1.3945999999999998,
        combinedCost: 33545.27085603718,
        residueCost: 9278.506822236115,
        transportationCost: 968.0145473468918,
        frcsResult: {
          Total: {
            WeightPerAcre: 74.40680847148926,
            CostPerAcre: 1047.4564626351357,
            CostPerBoleCCF: 48.134097240147895,
            CostPerGT: 14.077427646107058,
            DieselPerAcre: 21.40966263546081,
            DieselPerBoleCCF: 0.9838449806128138,
            GasolinePerAcre: 0.09173201237367051,
            GasolinePerBoleCCF: 0.0042153901008167745,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 22.52903060012392,
            CostPerAcre: 289.7228636568396,
            CostPerBoleCCF: 13.313726144635122,
            CostPerGT: 3.8937681861177236,
            DieselPerAcre: 8.41526488568282,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2022085803379,
        center_lng: -121.070294548508,
        landing_lat: 39.202513,
        landing_lng: -121.069622,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '124889',
      geometry: {
        bbox: [
          -121.05586702684899,
          39.21370520026664,
          -121.05070764177911,
          39.217643296717824
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05070764177911, 39.21454219210836],
            [-121.05477036144764, 39.21370520026664],
            [-121.05586702684899, 39.21680626850347],
            [-121.05180414614362, 39.217643296717824],
            [-121.05070764177911, 39.21454219210836]
          ]
        ]
      },
      properties: {
        cluster_no: '161403',
        area: 32.025456,
        biomass: 391.8647250304515,
        distance: 1.7978,
        combinedCost: 14814.15808034469,
        residueCost: 4781.216209561674,
        transportationCost: 555.1773655566288,
        frcsResult: {
          Total: {
            WeightPerAcre: 32.6902055649599,
            CostPerAcre: 462.57446202622975,
            CostPerBoleCCF: 54.86646818709585,
            CostPerGT: 14.15024635152664,
            DieselPerAcre: 9.841495418255771,
            DieselPerBoleCCF: 1.167310648568752,
            GasolinePerAcre: 0.028878185983504355,
            GasolinePerBoleCCF: 0.0034252735562283047,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 12.236038888265995,
            CostPerAcre: 149.29424297851293,
            CostPerBoleCCF: 17.707955162541296,
            CostPerGT: 4.566941088267092,
            DieselPerAcre: 4.333256892932639,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2211775367868,
        center_lng: -121.073061304459,
        landing_lat: 39.222,
        landing_lng: -121.073061,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '127206',
      geometry: {
        bbox: [
          -121.0905628838555,
          39.21320604575515,
          -121.08540245168567,
          39.21714496808165
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08650043173587, 39.21714496808165],
            [-121.08540245168567, 39.214044169588384],
            [-121.08946474283917, 39.21320604575515],
            [-121.0894658420375, 39.21320914963896],
            [-121.08913212788603, 39.21327800660069],
            [-121.08931514268107, 39.21379480129862],
            [-121.08964885903633, 39.213725943838305],
            [-121.0905628838555, 39.21630680783087],
            [-121.08650043173587, 39.21714496808165]
          ]
        ]
      },
      properties: {
        cluster_no: '163406',
        area: 32.025456,
        biomass: 243.4302942912731,
        distance: 1.5909,
        combinedCost: 9473.135290588145,
        residueCost: 2941.1160554074127,
        transportationCost: 338.2515083946625,
        frcsResult: {
          Total: {
            WeightPerAcre: 20.985594455723955,
            CostPerAcre: 295.80016879660184,
            CostPerBoleCCF: 58.16517092843896,
            CostPerGT: 14.095391456300655,
            DieselPerAcre: 6.242073695126483,
            DieselPerBoleCCF: 1.227420812172016,
            GasolinePerAcre: 0.01605997459838307,
            GasolinePerBoleCCF: 0.0031579805090093324,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 7.601149981791769,
            CostPerAcre: 91.83682054074148,
            CostPerBoleCCF: 18.05848991232208,
            CostPerGT: 4.376183897697137,
            DieselPerAcre: 2.6387217794156097,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2224588171625,
        center_lng: -121.068736921603,
        landing_lat: 39.221938,
        landing_lng: -121.068443,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '141449',
      geometry: {
        bbox: [
          -121.03865227864749,
          39.17732835128462,
          -121.0334960167616,
          39.18126600589365
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0334960167616, 39.17816477472251],
            [-121.03755689850149, 39.17732835128462],
            [-121.03865227864749, 39.180429546154045],
            [-121.03459123599823, 39.18126600589365],
            [-121.0334960167616, 39.17816477472251]
          ]
        ]
      },
      properties: {
        cluster_no: '156184',
        area: 27.577476,
        biomass: 182.519478269111,
        distance: 4.034800000000001,
        combinedCost: 7003.509769260779,
        residueCost: 2431.3138817865165,
        transportationCost: 304.6409191956781,
        frcsResult: {
          Total: {
            WeightPerAcre: 16.71923222909531,
            CostPerAcre: 253.95760544803952,
            CostPerBoleCCF: 61.161947627650896,
            CostPerGT: 15.189549494150505,
            DieselPerAcre: 5.4232091524367965,
            DieselPerBoleCCF: 1.3061000223637795,
            GasolinePerAcre: 0.014186436854715732,
            GasolinePerBoleCCF: 0.0034165943028181055,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 6.61842578592439,
            CostPerAcre: 88.16303137337573,
            CostPerBoleCCF: 21.23276717009609,
            CostPerGT: 5.2731507144180805,
            DieselPerAcre: 2.503337430764126,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2278776121281,
        center_lng: -121.057726812063,
        landing_lat: 39.228092,
        landing_lng: -121.057809,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '141747',
      geometry: {
        bbox: [
          -121.03162525165293,
          39.182102333258506,
          -121.0264688698848,
          39.18603982445557
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0264688698848, 39.18293852824409],
            [-121.03053009974015, 39.182102333258506],
            [-121.03162525165293, 39.18520359317116],
            [-121.02756386085319, 39.18603982445557],
            [-121.0264688698848, 39.18293852824409]
          ]
        ]
      },
      properties: {
        cluster_no: '147654',
        area: 32.025456,
        biomass: 1184.802035165852,
        distance: 3.0077,
        combinedCost: 73971.36712989841,
        residueCost: 21967.759591827533,
        transportationCost: 1721.8519442834456,
        frcsResult: {
          Total: {
            WeightPerAcre: 124.45243936356255,
            CostPerAcre: 2309.767802522419,
            CostPerBoleCCF: 68.29640349189977,
            CostPerGT: 18.559441778195293,
            DieselPerAcre: 50.31516328406337,
            DieselPerBoleCCF: 1.487744651066872,
            GasolinePerAcre: 0.14917329581373023,
            GasolinePerBoleCCF: 0.004410832807516441,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 36.99563357242601,
            CostPerAcre: 685.9468165520433,
            CostPerBoleCCF: 20.282428608651358,
            CostPerGT: 5.511718533279921,
            DieselPerAcre: 18.76028609986561,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1993867054703,
        center_lng: -121.05165006723,
        landing_lat: 39.197399,
        landing_lng: -121.055363,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '141763',
      geometry: {
        bbox: [
          -121.04916042104215,
          39.23172159076055,
          -121.04399996362173,
          39.23565954372162
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04806376997982, 39.23172159076055],
            [-121.04916042104215, 39.2348227309006],
            [-121.04509645355394, 39.23565954372162],
            [-121.04399996362173, 39.23255836719378],
            [-121.04806376997982, 39.23172159076055]
          ]
        ]
      },
      properties: {
        cluster_no: '58887',
        area: 32.025456,
        biomass: 690.0974251980532,
        distance: 3.4249,
        combinedCost: 29977.485593803372,
        residueCost: 8725.254546258624,
        transportationCost: 1177.0135931484224,
        frcsResult: {
          Total: {
            WeightPerAcre: 67.49437496485604,
            CostPerAcre: 936.0517956029532,
            CostPerBoleCCF: 49.50793127005929,
            CostPerGT: 13.868589731964336,
            DieselPerAcre: 19.442410636809306,
            DieselPerBoleCCF: 1.0283122515794123,
            GasolinePerAcre: 0.0718524248556963,
            GasolinePerBoleCCF: 0.0038002864030099075,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 21.548402783025267,
            CostPerAcre: 272.4474726061238,
            CostPerBoleCCF: 14.409791009264513,
            CostPerGT: 4.036595238462254,
            DieselPerAcre: 7.952964376250333,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2204055474992,
        center_lng: -121.093984232739,
        landing_lat: 39.220908,
        landing_lng: -121.094242,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '141773',
      geometry: {
        bbox: [
          -121.0432253311932,
          39.239597429593864,
          -121.03806449863286,
          39.243535248385044
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03806449863286, 39.24043401388399],
            [-121.04212881484449, 39.239597429593864],
            [-121.0432253311932, 39.24269862770451],
            [-121.03916085380476, 39.243535248385044],
            [-121.03806449863286, 39.24043401388399]
          ]
        ]
      },
      properties: {
        cluster_no: '163180',
        area: 32.025456,
        biomass: 949.7811768005372,
        distance: 3.2636999999999996,
        combinedCost: 34742.82127823113,
        residueCost: 10460.986443181926,
        transportationCost: 1470.3796808494146,
        frcsResult: {
          Total: {
            WeightPerAcre: 92.35456991067831,
            CostPerAcre: 1084.850166637163,
            CostPerBoleCCF: 48.45057468288104,
            CostPerGT: 11.746578081478667,
            DieselPerAcre: 23.04628427938679,
            DieselPerBoleCCF: 1.0292718312452402,
            GasolinePerAcre: 0.08141746873573318,
            GasolinePerBoleCCF: 0.0036361916795382833,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 29.657069576168947,
            CostPerAcre: 326.6459794727646,
            CostPerBoleCCF: 14.588360595792032,
            CostPerGT: 3.5368686117934796,
            DieselPerAcre: 9.721809490058021,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1944656816041,
        center_lng: -121.059310544163,
        landing_lat: 39.19514,
        landing_lng: -121.058741,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '141786',
      geometry: {
        bbox: [
          -121.05290074426921,
          39.217643296717824,
          -121.04774117167723,
          39.22158132602652
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04774117167723, 39.21848019251116],
            [-121.05180414614362, 39.217643296717824],
            [-121.05290074426921, 39.220744393859235],
            [-121.04883760874263, 39.22158132602652],
            [-121.04774117167723, 39.21848019251116]
          ]
        ]
      },
      properties: {
        cluster_no: '162277',
        area: 32.025456,
        biomass: 465.60342591808586,
        distance: 3.26,
        combinedCost: 11917.738888877366,
        residueCost: 5798.731218758442,
        transportationCost: 781.2611509877992,
        frcsResult: {
          Total: {
            WeightPerAcre: 28.094236094421298,
            CostPerAcre: 372.13330823072016,
            CostPerBoleCCF: 63.69594472425605,
            CostPerGT: 13.245895242711905,
            DieselPerAcre: 8.502849984267597,
            DieselPerBoleCCF: 1.4553845372550305,
            GasolinePerAcre: 0.017767321850299868,
            GasolinePerBoleCCF: 0.0030411315661459594,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 14.538541650057564,
            CostPerAcre: 181.06631233473905,
            CostPerBoleCCF: 30.992092260518426,
            CostPerGT: 6.444963006867219,
            DieselPerAcre: 5.126993649362957,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2243261507501,
        center_lng: -121.091122737713,
        landing_lat: 39.224313,
        landing_lng: -121.091854,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '141821',
      geometry: {
        bbox: [
          -121.11230708641003,
          39.22535523327738,
          -121.10714511156596,
          39.22929468413967
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10714511156596, 39.22619406885135],
            [-121.11120783185254, 39.22535523327738],
            [-121.11230708641003, 39.2284558121034],
            [-121.10824420514636, 39.22929468413967],
            [-121.10714511156596, 39.22619406885135]
          ]
        ]
      },
      properties: {
        cluster_no: '162999',
        area: 32.025456,
        biomass: 395.7798362454372,
        distance: 3.2095,
        combinedCost: 14957.472702017574,
        residueCost: 4353.099676863751,
        transportationCost: 606.6001376859108,
        frcsResult: {
          Total: {
            WeightPerAcre: 36.20439999669376,
            CostPerAcre: 467.04948407346876,
            CostPerBoleCCF: 54.51978434179179,
            CostPerGT: 12.900351452202507,
            DieselPerAcre: 9.928038201666798,
            DieselPerBoleCCF: 1.158923240790476,
            GasolinePerAcre: 0.02432962873523844,
            GasolinePerBoleCCF: 0.002840054762917595,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 12.358288863878698,
            CostPerAcre: 135.92623558158706,
            CostPerBoleCCF: 15.866989051494134,
            CostPerGT: 3.7544120491984416,
            DieselPerAcre: 4.025548118750619,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.197854680033,
        center_lng: -121.090596535608,
        landing_lat: 39.197057,
        landing_lng: -121.089492,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '141832',
      geometry: {
        bbox: [
          -121.0396149415075,
          39.21705237311493,
          -121.03445582572765,
          39.22099008532031
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03555168582746, 39.22099008532031],
            [-121.03445582572765, 39.21788883526267],
            [-121.03851892032392, 39.21705237311493],
            [-121.0396149415075, 39.2201535868169],
            [-121.03555168582746, 39.22099008532031]
          ],
          [
            [-121.03688530564871, 39.21960993084731],
            [-121.03679397738055, 39.21935149468667],
            [-121.0364553773534, 39.21942120026944],
            [-121.03654670450295, 39.219679636682564],
            [-121.03688530564871, 39.21960993084731]
          ]
        ]
      },
      properties: {
        cluster_no: '135046',
        area: 32.025456,
        biomass: 903.4978983270156,
        distance: 3.2051999999999996,
        combinedCost: 29842.267787096298,
        residueCost: 11979.767877242155,
        transportationCost: 1334.7704607731148,
        frcsResult: {
          Total: {
            WeightPerAcre: 65.6278390476687,
            CostPerAcre: 931.8295979016286,
            CostPerBoleCCF: 58.027230991014285,
            CostPerGT: 14.198693899166715,
            DieselPerAcre: 20.31017171108102,
            DieselPerBoleCCF: 1.2647623857409158,
            GasolinePerAcre: 0.05254411771432063,
            GasolinePerBoleCCF: 0.0032720463727422882,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 28.211866782693605,
            CostPerAcre: 374.07017334092467,
            CostPerBoleCCF: 23.294233628318462,
            CostPerGT: 5.699870341140126,
            DieselPerAcre: 10.51916306812278,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1956794961249,
        center_lng: -121.054932664443,
        landing_lat: 39.195685,
        landing_lng: -121.054911,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '142045',
      geometry: {
        bbox: [
          -121.05103076416883,
          39.2246824520877,
          -121.04587074919787,
          39.22862044319662
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04587074919787, 39.225519288200566],
            [-121.04993413956925, 39.2246824520877],
            [-121.05103076416883, 39.22778357070293],
            [-121.04696721270231, 39.22862044319662],
            [-121.04587074919787, 39.225519288200566]
          ]
        ]
      },
      properties: {
        cluster_no: '159976',
        area: 31.803057,
        biomass: 260.8254546019709,
        distance: 3.3735,
        combinedCost: 11108.960487419554,
        residueCost: 3616.1963719288156,
        transportationCost: 427.96425844935936,
        frcsResult: {
          Total: {
            WeightPerAcre: 21.97777343899584,
            CostPerAcre: 349.30480071206847,
            CostPerBoleCCF: 63.66068691804041,
            CostPerGT: 15.893548164996833,
            DieselPerAcre: 7.4254221660607636,
            DieselPerBoleCCF: 1.3532807873932542,
            GasolinePerAcre: 0.017562785681802903,
            GasolinePerBoleCCF: 0.003200812008362611,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 8.201269915718193,
            CostPerAcre: 113.7059362541411,
            CostPerBoleCCF: 20.722870094660692,
            CostPerGT: 5.173678606240847,
            DieselPerAcre: 3.2032634675836165,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2261180532647,
        center_lng: -121.051999515282,
        landing_lat: 39.225755,
        landing_lng: -121.050983,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '142066',
      geometry: {
        bbox: [
          -121.10724385100474,
          39.186470506783245,
          -121.10208480004766,
          39.190409802776365
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10614540181878, 39.186470506783245],
            [-121.10724385100474, 39.18957110324119],
            [-121.10318308841906, 39.190409802776365],
            [-121.10208480004766, 39.187309169914535],
            [-121.10614540181878, 39.186470506783245]
          ],
          [
            [-121.10457865904829, 39.18818388998011],
            [-121.10476172055895, 39.188700659081704],
            [-121.10543850186001, 39.18856087648382],
            [-121.10553003582665, 39.18881926044988],
            [-121.10586842661614, 39.18874936751964],
            [-121.10559382332157, 39.187974216221704],
            [-121.10457865904829, 39.18818388998011]
          ]
        ]
      },
      properties: {
        cluster_no: '153853',
        area: 32.025456,
        biomass: 532.4155549374045,
        distance: 3.323,
        combinedCost: 16871.201560578083,
        residueCost: 6809.493706353409,
        transportationCost: 850.0807029570874,
        frcsResult: {
          Total: {
            WeightPerAcre: 38.52059440886913,
            CostPerAcre: 526.8059746152587,
            CostPerBoleCCF: 59.41769504357813,
            CostPerGT: 13.675956529216094,
            DieselPerAcre: 11.740382651432691,
            DieselPerBoleCCF: 1.324181026206489,
            GasolinePerAcre: 0.026304971387025526,
            GasolinePerBoleCCF: 0.002966900231429266,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 16.62476109434334,
            CostPerAcre: 212.62753312094634,
            CostPerBoleCCF: 23.98195641208425,
            CostPerGT: 5.519840396647414,
            DieselPerAcre: 6.137409204555857,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2285057373304,
        center_lng: -121.088467399284,
        landing_lat: 39.228994,
        landing_lng: -121.088431,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '142232',
      geometry: {
        bbox: [
          -121.0267874280543,
          39.193078565762704,
          -121.02163041729646,
          39.19701595109222
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02163041729646, 39.19391460486411],
            [-121.02569231724966, 39.193078565762704],
            [-121.0267874280543, 39.19617987568377],
            [-121.02272536709852, 39.19701595109222],
            [-121.02163041729646, 39.19391460486411]
          ]
        ]
      },
      properties: {
        cluster_no: '134793',
        area: 32.025456,
        biomass: 123.11750669503803,
        distance: 3.3051,
        combinedCost: 4885.969998104408,
        residueCost: 1542.2922684718997,
        transportationCost: 191.55082362746177,
        frcsResult: {
          Total: {
            WeightPerAcre: 10.365197200749803,
            CostPerAcre: 152.56519682668713,
            CostPerBoleCCF: 59.328180156129584,
            CostPerGT: 14.71898641886435,
            DieselPerAcre: 3.2112487689961706,
            DieselPerBoleCCF: 1.2487615095438878,
            GasolinePerAcre: 0.008838319751499445,
            GasolinePerBoleCCF: 0.0034369662111740206,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 3.8443638927432615,
            CostPerAcre: 48.15832344344761,
            CostPerBoleCCF: 18.72737523824463,
            CostPerGT: 4.646156026820591,
            DieselPerAcre: 1.3849178536677056,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2286646101233,
        center_lng: -121.053591907475,
        landing_lat: 39.228505,
        landing_lng: -121.053796,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '142244',
      geometry: {
        bbox: [
          -121.03007332224043,
          39.202382472998764,
          -121.02491554754211,
          39.206319944771906
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02491554754211, 39.20321862103787],
            [-121.02897793053796, 39.202382472998764],
            [-121.03007332224043, 39.205483760409166],
            [-121.02601077820711, 39.206319944771906],
            [-121.02491554754211, 39.20321862103787]
          ]
        ]
      },
      properties: {
        cluster_no: '136861',
        area: 32.025456,
        biomass: 719.5665389875379,
        distance: 3.785,
        combinedCost: 23004.958980280015,
        residueCost: 7588.896696457762,
        transportationCost: 1177.3156323944972,
        frcsResult: {
          Total: {
            WeightPerAcre: 63.23733082332952,
            CostPerAcre: 718.3335338076065,
            CostPerBoleCCF: 49.42480150615658,
            CostPerGT: 11.359327227369294,
            DieselPerAcre: 15.541334499762614,
            DieselPerBoleCCF: 1.0693185500056028,
            GasolinePerAcre: 0.04493463282184936,
            GasolinePerBoleCCF: 0.0030917188234271683,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 22.4685805875032,
            CostPerAcre: 236.96451649143614,
            CostPerBoleCCF: 16.304298268676455,
            CostPerGT: 3.7472251501800447,
            DieselPerAcre: 7.017421372460364,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1950626085106,
        center_lng: -121.089565105709,
        landing_lat: 39.19529,
        landing_lng: -121.090255,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '142462',
      geometry: {
        bbox: [
          -121.0211706966577,
          39.21419468656078,
          -121.01601236009226,
          39.21813195659201
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.01601236009226, 39.215030546282044],
            [-121.020075507204, 39.21419468656078],
            [-121.0211706966577, 39.21729606054311],
            [-121.01710738843853, 39.21813195659201],
            [-121.01601236009226, 39.215030546282044]
          ]
        ]
      },
      properties: {
        cluster_no: '156209',
        area: 32.025456,
        biomass: 407.8499636818075,
        distance: 4.2672,
        combinedCost: 12787.47905261472,
        residueCost: 5718.259627352244,
        transportationCost: 707.323701493727,
        frcsResult: {
          Total: {
            WeightPerAcre: 27.344763863632576,
            CostPerAcre: 399.29108433662026,
            CostPerBoleCCF: 67.94096093508706,
            CostPerGT: 14.602103946769171,
            DieselPerAcre: 8.999559628741265,
            DieselPerBoleCCF: 1.531310748360779,
            GasolinePerAcre: 0.017892267485636184,
            GasolinePerBoleCCF: 0.003044440244142582,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 12.735180528945708,
            CostPerAcre: 178.55357398665126,
            CostPerBoleCCF: 30.381598465194354,
            CostPerGT: 6.529717165490694,
            DieselPerAcre: 5.014717245704569,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2276208234531,
        center_lng: -121.091749830164,
        landing_lat: 39.227059,
        landing_lng: -121.093127,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '142469',
      geometry: {
        bbox: [
          -121.02601077820711,
          39.20321862103787,
          -121.02085307091352,
          39.207155996712466
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02085307091352, 39.20405463665896],
            [-121.02491554754211, 39.20321862103787],
            [-121.02601077820711, 39.206319944771906],
            [-121.02194814052935, 39.207155996712466],
            [-121.02085307091352, 39.20405463665896]
          ]
        ]
      },
      properties: {
        cluster_no: '142045',
        area: 32.025456,
        biomass: 129.20349953518075,
        distance: 3.4279,
        combinedCost: 5387.503546625049,
        residueCost: 1611.2925849044786,
        transportationCost: 213.29234135979942,
        frcsResult: {
          Total: {
            WeightPerAcre: 11.118705542611163,
            CostPerAcre: 168.2256623176591,
            CostPerBoleCCF: 62.8386020176575,
            CostPerGT: 15.129968292887472,
            DieselPerAcre: 3.511918132343625,
            DieselPerBoleCCF: 1.3118333005592233,
            GasolinePerAcre: 0.007890732893470084,
            GasolinePerBoleCCF: 0.002947485045320316,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 4.034399995278155,
            CostPerAcre: 50.31286939066469,
            CostPerBoleCCF: 18.793746045929403,
            CostPerGT: 4.525065368252301,
            DieselPerAcre: 1.4568928219469994,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2267693295639,
        center_lng: -121.049105663625,
        landing_lat: 39.226574,
        landing_lng: -121.049118,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '142495',
      geometry: {
        bbox: [
          -121.02993558490083,
          39.23900547040464,
          -121.02477520957133,
          39.24294297192361
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02477520957133, 39.239841620902745],
            [-121.02883964586798, 39.23900547040464],
            [-121.02993558490083, 39.242106785053366],
            [-121.02587098740376, 39.24294297192361],
            [-121.02477520957133, 39.239841620902745]
          ]
        ]
      },
      properties: {
        cluster_no: '166532',
        area: 32.025456,
        biomass: 912.2388016036712,
        distance: 3.9328000000000003,
        combinedCost: 49200.48029492583,
        residueCost: 12877.28556009372,
        transportationCost: 1467.4673542615947,
        frcsResult: {
          Total: {
            WeightPerAcre: 109.65285890074554,
            CostPerAcre: 1536.2928882238502,
            CostPerBoleCCF: 50.11786869989646,
            CostPerGT: 14.010513757917211,
            DieselPerAcre: 31.78393453572396,
            DieselPerBoleCCF: 1.0368745894991174,
            GasolinePerAcre: 0.14234975173223074,
            GasolinePerBoleCCF: 0.0046438190409297,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 28.484802889416194,
            CostPerAcre: 402.09530693626095,
            CostPerBoleCCF: 13.117394444997105,
            CostPerGT: 3.6669842534632453,
            DieselPerAcre: 11.388480441731215,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1964612438887,
        center_lng: -121.050522222179,
        landing_lat: 39.194961,
        landing_lng: -121.051298,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '142617',
      geometry: {
        bbox: [
          -121.03039263742848,
          39.2156238711181,
          -121.02523391122058,
          39.21956136224958
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02523391122058, 39.21646003205031],
            [-121.02929703211548, 39.2156238711181],
            [-121.03039263742848, 39.21872516497571],
            [-121.02632935543797, 39.21956136224958],
            [-121.02523391122058, 39.21646003205031]
          ]
        ]
      },
      properties: {
        cluster_no: '137476',
        area: 31.803057,
        biomass: 115.91845081037343,
        distance: 3.4337,
        combinedCost: 6666.448675825089,
        residueCost: 1421.1456173399554,
        transportationCost: 181.96294500089982,
        frcsResult: {
          Total: {
            WeightPerAcre: 14.093695102434065,
            CostPerAcre: 209.6165999333048,
            CostPerBoleCCF: 51.435893524825666,
            CostPerGT: 14.873076110260309,
            DieselPerAcre: 4.099705028588509,
            DieselPerBoleCCF: 1.0059889884711684,
            GasolinePerAcre: 0.01662013318480311,
            GasolinePerBoleCCF: 0.004078261936955159,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 3.6448839119576912,
            CostPerAcre: 44.6858180123991,
            CostPerBoleCCF: 10.965042740349823,
            CostPerGT: 3.170624714641485,
            DieselPerAcre: 1.3094625918202496,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2290096445524,
        center_lng: -121.050097029399,
        landing_lat: 39.228932,
        landing_lng: -121.050202,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '142650',
      geometry: {
        bbox: [
          -121.07179070478173,
          39.197114634542295,
          -121.06663200262665,
          39.20105309565145
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06663200262665, 39.19795214288142],
            [-121.0706936095776, 39.197114634542295],
            [-121.07179070478173, 39.200215550940825],
            [-121.06772893689899, 39.20105309565145],
            [-121.06663200262665, 39.19795214288142]
          ]
        ]
      },
      properties: {
        cluster_no: '166020',
        area: 32.025456,
        biomass: 674.3740832724396,
        distance: 2.8919,
        combinedCost: 49930.22824090874,
        residueCost: 10202.93612999999,
        transportationCost: 1019.0854084444043,
        frcsResult: {
          Total: {
            WeightPerAcre: 94.62493891933016,
            CostPerAcre: 1559.079384877728,
            CostPerBoleCCF: 52.569545908265,
            CostPerGT: 16.476411004152695,
            DieselPerAcre: 31.34351976925796,
            DieselPerBoleCCF: 1.0568509964396977,
            GasolinePerAcre: 0.12596463278302927,
            GasolinePerBoleCCF: 0.004247316467740048,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 21.057438909611143,
            CostPerAcre: 318.5883170562814,
            CostPerBoleCCF: 10.742264519545648,
            CostPerGT: 3.366853608517359,
            DieselPerAcre: 9.145802805560235,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.213447091669,
        center_lng: -121.048124626604,
        landing_lat: 39.213299,
        landing_lng: -121.04835,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '142812',
      geometry: {
        bbox: [
          -121.08024234144825,
          39.20868046871449,
          -121.07508255314362,
          39.21261914127324
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07508255314362, 39.2095182549629],
            [-121.0791447100723, 39.20868046871449],
            [-121.08024234144825, 39.211781318626855],
            [-121.07618002355316, 39.21261914127324],
            [-121.07508255314362, 39.2095182549629]
          ]
        ]
      },
      properties: {
        cluster_no: '160361',
        area: 32.025456,
        biomass: 589.404319862431,
        distance: 3.4508,
        combinedCost: 27935.475737288794,
        residueCost: 7853.295278467871,
        transportationCost: 951.0337782605068,
        frcsResult: {
          Total: {
            WeightPerAcre: 62.09966113079495,
            CostPerAcre: 872.2897103257108,
            CostPerBoleCCF: 50.928483423840426,
            CostPerGT: 14.046609827523618,
            DieselPerAcre: 18.406352811063012,
            DieselPerBoleCCF: 1.0746517159781188,
            GasolinePerAcre: 0.0706551791602714,
            GasolinePerBoleCCF: 0.004125190378926675,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 18.404244419265442,
            CostPerAcre: 245.22040462024557,
            CostPerBoleCCF: 14.317150786091892,
            CostPerGT: 3.948820334200533,
            DieselPerAcre: 7.08886604863361,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2306365265142,
        center_lng: -121.080747891576,
        landing_lat: 39.229056,
        landing_lng: -121.079995,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '142936',
      geometry: {
        bbox: [
          -121.08715989027505,
          39.240526781491965,
          -121.08199761997861,
          39.24446564765548
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08199761997861, 39.24136479953865],
            [-121.08606148102993, 39.240526781491965],
            [-121.08715989027505, 39.243627593159346],
            [-121.08309586812955, 39.24446564765548],
            [-121.08199761997861, 39.24136479953865]
          ]
        ]
      },
      properties: {
        cluster_no: '163421',
        area: 32.025456,
        biomass: 1163.748407918374,
        distance: 3.2039,
        combinedCost: 51341.652589470046,
        residueCost: 16349.074986975565,
        transportationCost: 1860.3015146633718,
        frcsResult: {
          Total: {
            WeightPerAcre: 108.8983699403304,
            CostPerAcre: 1603.1513365327273,
            CostPerBoleCCF: 58.064749827640654,
            CostPerGT: 14.721536579575577,
            DieselPerAcre: 34.864970402774375,
            DieselPerBoleCCF: 1.2627789641891132,
            GasolinePerAcre: 0.11443410710883369,
            GasolinePerBoleCCF: 0.004144704027378153,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 36.33823068493932,
            CostPerAcre: 510.5024886132946,
            CostPerBoleCCF: 18.489957006696976,
            CostPerGT: 4.687879982896149,
            DieselPerAcre: 14.449551985528089,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1912580063817,
        center_lng: -121.075234259322,
        landing_lat: 39.194075,
        landing_lng: -121.075691,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '142983',
      geometry: {
        bbox: [
          -121.03806449863286,
          39.23733277199227,
          -121.03290398842623,
          39.24127046570533
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03290398842623, 39.23816918743297],
            [-121.03696823723436, 39.23733277199227],
            [-121.03806449863286, 39.24043401388399],
            [-121.03400008864776, 39.24127046570533],
            [-121.03290398842623, 39.23816918743297]
          ]
        ]
      },
      properties: {
        cluster_no: '161549',
        area: 32.025456,
        biomass: 748.793503229809,
        distance: 2.7586,
        combinedCost: 26044.288354434804,
        residueCost: 9526.886851774274,
        transportationCost: 1049.4563668697435,
        frcsResult: {
          Total: {
            WeightPerAcre: 54.56300276678574,
            CostPerAcre: 813.2370809781695,
            CostPerBoleCCF: 59.707252741770624,
            CostPerGT: 14.90455143119823,
            DieselPerAcre: 17.918375037586657,
            DieselPerBoleCCF: 1.31555357240251,
            GasolinePerAcre: 0.03829392348739926,
            GasolinePerBoleCCF: 0.0028115109623211474,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.381197233532255,
            CostPerAcre: 297.47856991557825,
            CostPerBoleCCF: 21.840652098458243,
            CostPerGT: 5.452019772208414,
            DieselPerAcre: 8.543328338909468,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2102055103321,
        center_lng: -121.09533247117,
        landing_lat: 39.208341,
        landing_lng: -121.094693,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '143064',
      geometry: {
        bbox: [
          -121.07958569675833,
          39.18219801059387,
          -121.07442781185635,
          39.18613664446511
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07442781185635, 39.18303577055768],
            [-121.07848849398592, 39.18219801059387],
            [-121.07958569675833, 39.18529884813943],
            [-121.07552485377846, 39.18613664446511],
            [-121.07442781185635, 39.18303577055768]
          ]
        ]
      },
      properties: {
        cluster_no: '158983',
        area: 32.025456,
        biomass: 1282.2291602768353,
        distance: 2.5468,
        combinedCost: 43839.91265516787,
        residueCost: 15781.677207696071,
        transportationCost: 1899.7468228174528,
        frcsResult: {
          Total: {
            WeightPerAcre: 104.14739482270873,
            CostPerAcre: 1368.9083039182292,
            CostPerBoleCCF: 54.45216430020127,
            CostPerGT: 13.143951476160657,
            DieselPerAcre: 29.984299178073137,
            DieselPerBoleCCF: 1.1927095340115323,
            GasolinePerAcre: 0.08825649573207013,
            GasolinePerBoleCCF: 0.003510649466006719,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 40.03781117985753,
            CostPerAcre: 492.7854019532484,
            CostPerBoleCCF: 19.60192044645663,
            CostPerGT: 4.731615253479192,
            DieselPerAcre: 14.249909631647313,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1937462681943,
        center_lng: -121.062976302573,
        landing_lat: 39.194445,
        landing_lng: -121.065006,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '143374',
      geometry: {
        bbox: [
          -121.10055252305776,
          39.204489551780505,
          -121.09539239936568,
          39.20842870418952
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09539239936568, 39.20532799991127],
            [-121.09945408702575, 39.204489551780505],
            [-121.10055252305776, 39.20759021963964],
            [-121.09649067448997, 39.20842870418952],
            [-121.09539239936568, 39.20532799991127]
          ]
        ]
      },
      properties: {
        cluster_no: '157378',
        area: 32.025456,
        biomass: 599.0491427791887,
        distance: 3.0349,
        combinedCost: 18777.459997835318,
        residueCost: 7680.05417978698,
        transportationCost: 936.1863729896002,
        frcsResult: {
          Total: {
            WeightPerAcre: 41.73512780369469,
            CostPerAcre: 586.329200053711,
            CostPerBoleCCF: 58.98047589015121,
            CostPerGT: 14.04881764856618,
            DieselPerAcre: 12.97314166554907,
            DieselPerBoleCCF: 1.3050042009750495,
            GasolinePerAcre: 0.0295601815935228,
            GasolinePerBoleCCF: 0.002973540423409838,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 18.705405561725296,
            CostPerAcre: 239.81092352867608,
            CostPerBoleCCF: 24.12324406166756,
            CostPerGT: 5.746021065435586,
            DieselPerAcre: 6.908733063962329,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2309337111645,
        center_lng: -121.075881527117,
        landing_lat: 39.230917,
        landing_lng: -121.075865,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '143463',
      geometry: {
        bbox: [
          -121.09725749661544,
          39.19518750291159,
          -121.0920981372073,
          39.199126568734016
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0920981372073, 39.19602584181854],
            [-121.0961593422137, 39.19518750291159],
            [-121.09725749661544, 39.19828819342469],
            [-121.09319613073608, 39.199126568734016],
            [-121.0920981372073, 39.19602584181854]
          ]
        ]
      },
      properties: {
        cluster_no: '148012',
        area: 27.799875,
        biomass: 102.97687511773091,
        distance: 3.3070999999999997,
        combinedCost: 3360.400941959244,
        residueCost: 1206.5624915521207,
        transportationCost: 169.00917412906253,
        frcsResult: {
          Total: {
            WeightPerAcre: 9.0042208040154,
            CostPerAcre: 120.87827524257732,
            CostPerBoleCCF: 65.33134461538509,
            CostPerGT: 13.424623615257422,
            DieselPerAcre: 2.6359510910070525,
            DieselPerBoleCCF: 1.424658225560319,
            GasolinePerAcre: 0.005015122532861634,
            GasolinePerBoleCCF: 0.00271053419504251,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 3.7042207965946217,
            CostPerAcre: 43.401723624732874,
            CostPerBoleCCF: 23.457424068459652,
            CostPerGT: 4.820153189199673,
            DieselPerAcre: 1.2510624857001282,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2303615198482,
        center_lng: -121.063057875464,
        landing_lat: 39.230273,
        landing_lng: -121.063056,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '143531',
      geometry: {
        bbox: [
          -121.05115782734488,
          39.188059550892675,
          -121.0460004126463,
          39.19199751265482
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0460004126463, 39.18889638433215],
            [-121.05006175077054, 39.188059550892675],
            [-121.05115782734488, 39.19116064288298],
            [-121.04709632828832, 39.19199751265482],
            [-121.0460004126463, 39.18889638433215]
          ]
        ]
      },
      properties: {
        cluster_no: '158725',
        area: 32.025456,
        biomass: 524.0319141705888,
        distance: 2.7392,
        combinedCost: 16667.83292465934,
        residueCost: 6289.839728006735,
        transportationCost: 800.2139986061906,
        frcsResult: {
          Total: {
            WeightPerAcre: 37.84131391230093,
            CostPerAcre: 520.4557563414347,
            CostPerBoleCCF: 57.241899002995495,
            CostPerGT: 13.75363861697868,
            DieselPerAcre: 11.322102414109137,
            DieselPerBoleCCF: 1.2452521371765448,
            GasolinePerAcre: 0.02771728878354551,
            GasolinePerBoleCCF: 0.0030484632475535935,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 16.36298056679002,
            CostPerAcre: 196.4012543024129,
            CostPerBoleCCF: 21.60103068485424,
            CostPerGT: 5.190127772983312,
            DieselPerAcre: 5.6851500007365665,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2317981013708,
        center_lng: -121.072267497704,
        landing_lat: 39.231475,
        landing_lng: -121.07204,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '143787',
      geometry: {
        bbox: [
          -121.0532253928662,
          39.2308846822112,
          -121.048063770339,
          39.23482273123141
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05289045027686, 39.234054546239264],
            [-121.05280014453413, 39.23379922464923],
            [-121.05178418629507, 39.234008469915025],
            [-121.05187448872147, 39.23426379225421],
            [-121.04916042140135, 39.23482273123141],
            [-121.048063770339, 39.23172159109136],
            [-121.05212748291228, 39.2308846822112],
            [-121.05322429509302, 39.233985785959284],
            [-121.0532253928662, 39.23398888964359],
            [-121.05289154803681, 39.23405764992655],
            [-121.05289045027686, 39.234054546239264]
          ]
        ]
      },
      properties: {
        cluster_no: '164709',
        area: 32.025456,
        biomass: 617.4990089552465,
        distance: 3.271,
        combinedCost: 43077.959631271304,
        residueCost: 7970.594652166144,
        transportationCost: 934.8700532489644,
        frcsResult: {
          Total: {
            WeightPerAcre: 94.5066445019572,
            CostPerAcre: 1345.1161985412887,
            CostPerBoleCCF: 44.79991835851516,
            CostPerGT: 14.233033091270443,
            DieselPerAcre: 26.235239959873546,
            DieselPerBoleCCF: 0.8737807258532632,
            GasolinePerAcre: 0.13279742553178375,
            GasolinePerBoleCCF: 0.004422899544661377,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 19.281505592152897,
            CostPerAcre: 248.88309637702412,
            CostPerBoleCCF: 8.289203869968034,
            CostPerGT: 2.633498392505829,
            DieselPerAcre: 7.44276243953159,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2102863404777,
        center_lng: -121.047029881276,
        landing_lat: 39.210152,
        landing_lng: -121.04663,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '143859',
      geometry: {
        bbox: [
          -121.0460004126463,
          39.18579524846164,
          -121.04084331981248,
          39.18973308539316
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04490459067142, 39.18579524846164],
            [-121.0460004126463, 39.18889638433215],
            [-121.04193898085491, 39.18973308539316],
            [-121.04084331981248, 39.18663191320006],
            [-121.04490459067142, 39.18579524846164]
          ]
        ]
      },
      properties: {
        cluster_no: '166096',
        area: 32.025456,
        biomass: 1235.785225786674,
        distance: 2.6448,
        combinedCost: 51467.66403032173,
        residueCost: 15958.235654603222,
        transportationCost: 1918.7628149832974,
        frcsResult: {
          Total: {
            WeightPerAcre: 125.58314783140365,
            CostPerAcre: 1607.086063983655,
            CostPerBoleCCF: 49.040460158034605,
            CostPerGT: 12.796988224416708,
            DieselPerAcre: 33.61049992400693,
            DieselPerBoleCCF: 1.025629192707411,
            GasolinePerAcre: 0.14099771063815375,
            GasolinePerBoleCCF: 0.004302565224033201,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 38.58759187649581,
            CostPerAcre: 498.2984677752355,
            CostPerBoleCCF: 15.20564872248787,
            CostPerGT: 3.967876871857083,
            DieselPerAcre: 14.264894576206068,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1928564890432,
        center_lng: -121.067090752924,
        landing_lat: 39.192708,
        landing_lng: -121.067763,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '143883',
      geometry: {
        bbox: [
          -121.06167690608183,
          39.24245186543783,
          -121.05651529417189,
          39.246390126491605
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06057955744488, 39.24245186543783],
            [-121.06167690608183, 39.245552903132236],
            [-121.05761248165572, 39.246390126491605],
            [-121.05651529417189, 39.243289052378685],
            [-121.06057955744488, 39.24245186543783]
          ]
        ]
      },
      properties: {
        cluster_no: '155807',
        area: 31.13586,
        biomass: 421.5397800442625,
        distance: 2.8872,
        combinedCost: 14776.759410661421,
        residueCost: 4824.475599977289,
        transportationCost: 651.0252635782492,
        frcsResult: {
          Total: {
            WeightPerAcre: 37.49515147006192,
            CostPerAcre: 474.58973064053544,
            CostPerBoleCCF: 53.59480773210224,
            CostPerGT: 12.657362673130487,
            DieselPerAcre: 10.131269243800697,
            DieselPerBoleCCF: 1.1441112020498534,
            GasolinePerAcre: 0.02691349521514322,
            GasolinePerBoleCCF: 0.0030393063910330947,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 13.538722875946336,
            CostPerAcre: 154.94916793617676,
            CostPerBoleCCF: 17.498210196374014,
            CostPerGT: 4.132512121197757,
            DieselPerAcre: 4.46643274002267,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1932156354671,
        center_lng: -121.079808926253,
        landing_lat: 39.192912,
        landing_lng: -121.078893,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '143908',
      geometry: {
        bbox: [
          -121.0993513929759,
          39.238011932776864,
          -121.0941889213116,
          39.24195108686236
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0941889213116, 39.238850348106595],
            [-121.09825250051881, 39.238011932776864],
            [-121.0993513929759, 39.241112635070444],
            [-121.09528765270981, 39.24195108686236],
            [-121.0941889213116, 39.238850348106595]
          ]
        ]
      },
      properties: {
        cluster_no: '165414',
        area: 32.025456,
        biomass: 509.503832778854,
        distance: 4.5911,
        combinedCost: 14277.505586506166,
        residueCost: 5896.052316768492,
        transportationCost: 969.1458338642063,
        frcsResult: {
          Total: {
            WeightPerAcre: 33.287394506381816,
            CostPerAcre: 445.81740183515785,
            CostPerBoleCCF: 62.06914262336503,
            CostPerGT: 13.392979788480782,
            DieselPerAcre: 10.066237590953373,
            DieselPerBoleCCF: 1.4014767798242782,
            GasolinePerAcre: 0.013624704227656102,
            GasolinePerBoleCCF: 0.0018969060122517182,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 15.90933889524802,
            CostPerAcre: 184.10517922893877,
            CostPerBoleCCF: 25.632132303993007,
            CostPerGT: 5.530777700058271,
            DieselPerAcre: 5.34587128024428,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2133373004607,
        center_lng: -121.096312232522,
        landing_lat: 39.213382,
        landing_lng: -121.097711,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '144030',
      geometry: {
        bbox: [
          -121.07036703597849,
          39.1807724803279,
          -121.06520953990268,
          39.18471089343916
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06520953990268, 39.18160993924488],
            [-121.06927024865507, 39.1807724803279],
            [-121.07036703597849, 39.183873398174256],
            [-121.06630616636397, 39.18471089343916],
            [-121.06520953990268, 39.18160993924488]
          ]
        ]
      },
      properties: {
        cluster_no: '153106',
        area: 32.025456,
        biomass: 556.40965043729,
        distance: 3.5311,
        combinedCost: 20539.433065508405,
        residueCost: 6523.925042423781,
        transportationCost: 871.6905570697563,
        frcsResult: {
          Total: {
            WeightPerAcre: 45.126341701534884,
            CostPerAcre: 641.3470916857017,
            CostPerBoleCCF: 56.97018026456993,
            CostPerGT: 14.212255359132902,
            DieselPerAcre: 13.843910628531864,
            DieselPerBoleCCF: 1.2297398620785531,
            GasolinePerAcre: 0.03133308938697825,
            GasolinePerBoleCCF: 0.0027832850164335285,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 17.373980574618205,
            CostPerAcre: 203.71060578883814,
            CostPerBoleCCF: 18.095396524043498,
            CostPerGT: 4.514228233615253,
            DieselPerAcre: 5.924792218481565,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2034593767546,
        center_lng: -121.097413864917,
        landing_lat: 39.203368,
        landing_lng: -121.095556,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '144284',
      geometry: {
        bbox: [
          -121.06927024865507,
          39.17767155489217,
          -121.06411300715477,
          39.18160993924488
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06411300715477, 39.178508977466805],
            [-121.06817355505662, 39.17767155489217],
            [-121.06927024865507, 39.1807724803279],
            [-121.06520953990268, 39.18160993924488],
            [-121.06411300715477, 39.178508977466805]
          ]
        ]
      },
      properties: {
        cluster_no: '122002',
        area: 32.025456,
        biomass: 1185.6138808643752,
        distance: 2.7716,
        combinedCost: 56033.257920760174,
        residueCost: 17642.048488243967,
        transportationCost: 1866.1786277928545,
        frcsResult: {
          Total: {
            WeightPerAcre: 111.06709468453535,
            CostPerAcre: 1749.647465464978,
            CostPerBoleCCF: 59.1319290338471,
            CostPerGT: 15.753067732927688,
            DieselPerAcre: 37.68103178517223,
            DieselPerBoleCCF: 1.2734863116272386,
            GasolinePerAcre: 0.12448929945179249,
            GasolinePerBoleCCF: 0.004207300365334129,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 37.0209835845702,
            CostPerAcre: 550.8757935638439,
            CostPerBoleCCF: 18.617663829110064,
            CostPerGT: 4.959846974736309,
            DieselPerAcre: 15.478077032927143,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1920702174043,
        center_lng: -121.071143224429,
        landing_lat: 39.191583,
        landing_lng: -121.067868,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '144751',
      geometry: {
        bbox: [
          -121.06244898889453,
          39.23231149774879,
          -121.05728807461723,
          39.23624976783483
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05728807461723, 39.23314870790973],
            [-121.06135176068092, 39.23231149774879],
            [-121.06244898889453, 39.23541252126786],
            [-121.05838514172434, 39.23624976783483],
            [-121.05728807461723, 39.23314870790973]
          ]
        ]
      },
      properties: {
        cluster_no: '127498',
        area: 32.025456,
        biomass: 276.27604732695784,
        distance: 3.049,
        combinedCost: 10557.57252995938,
        residueCost: 3360.7430359371833,
        transportationCost: 416.9612352182237,
        frcsResult: {
          Total: {
            WeightPerAcre: 23.437180519617282,
            CostPerAcre: 329.6618955233418,
            CostPerBoleCCF: 63.48564068482748,
            CostPerGT: 14.065765941744132,
            DieselPerAcre: 7.059255835055134,
            DieselPerBoleCCF: 1.3594576307799267,
            GasolinePerAcre: 0.01395790345610007,
            GasolinePerBoleCCF: 0.0026879856469937038,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 8.626763888294295,
            CostPerAcre: 104.93974030962067,
            CostPerBoleCCF: 20.20908918296251,
            CostPerGT: 4.4774899532725145,
            DieselPerAcre: 3.026975523741678,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2175530905451,
        center_lng: -121.04529613319,
        landing_lat: 39.216863,
        landing_lng: -121.045246,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '144903',
      geometry: {
        bbox: [
          -121.07102030239594,
          39.207254978613186,
          -121.06586090319519,
          39.2111934302855
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06586090319519, 39.20809246369332],
            [-121.0699230867719, 39.207254978613186],
            [-121.07102030239594, 39.21035590882139],
            [-121.06695795784088, 39.2111934302855],
            [-121.06586090319519, 39.20809246369332]
          ]
        ]
      },
      properties: {
        cluster_no: '155016',
        area: 32.025456,
        biomass: 495.94372136277843,
        distance: 3.2159,
        combinedCost: 19898.406322013023,
        residueCost: 6238.841136233996,
        transportationCost: 784.4779913027451,
        frcsResult: {
          Total: {
            WeightPerAcre: 42.773699969922504,
            CostPerAcre: 621.3309288090394,
            CostPerBoleCCF: 54.788077330633826,
            CostPerGT: 14.526003811827016,
            DieselPerAcre: 12.983600994626158,
            DieselPerBoleCCF: 1.1448754638485064,
            GasolinePerAcre: 0.04042922576724999,
            GasolinePerBoleCCF: 0.003564991609221049,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 15.485922241443758,
            CostPerAcre: 194.8088150949044,
            CostPerBoleCCF: 17.17796415923966,
            CostPerGT: 4.554406451438373,
            DieselPerAcre: 5.607928555767598,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2323499192912,
        center_lng: -121.068000854829,
        landing_lat: 39.232987,
        landing_lng: -121.068268,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '144932',
      geometry: {
        bbox: [
          -121.04896576787493,
          39.18185734424363,
          -121.04380886235204,
          39.18579524846164
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04380886235204, 39.182694105035075],
            [-121.0478698786464, 39.18185734424363],
            [-121.04896576787493, 39.18495845134895],
            [-121.04490459067142, 39.18579524846164],
            [-121.04380886235204, 39.182694105035075]
          ]
        ]
      },
      properties: {
        cluster_no: '159365',
        area: 32.025456,
        biomass: 593.3692494707955,
        distance: 4.1948,
        combinedCost: 22527.6988722531,
        residueCost: 6896.117228625808,
        transportationCost: 1089.0626476640261,
        frcsResult: {
          Total: {
            WeightPerAcre: 51.797355556909174,
            CostPerAcre: 703.4310103891448,
            CostPerBoleCCF: 51.0458380599311,
            CostPerGT: 13.580442530821735,
            DieselPerAcre: 14.831435953774688,
            DieselPerBoleCCF: 1.0762719679841763,
            GasolinePerAcre: 0.04828036862296226,
            GasolinePerBoleCCF: 0.0035035587595692126,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 18.52804998220152,
            CostPerAcre: 215.33236649700814,
            CostPerBoleCCF: 15.626011573170805,
            CostPerGT: 4.157207721935242,
            DieselPerAcre: 6.299653839549364,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2169706201197,
        center_lng: -121.097314700554,
        landing_lat: 39.216885,
        landing_lng: -121.098186,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '144962',
      geometry: {
        bbox: [
          -121.03103161768385,
          39.242106785053366,
          -121.02587098740376,
          39.24604431557054
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02587098740376, 39.24294297192361],
            [-121.02993558490083, 39.242106785053366],
            [-121.03103161768385, 39.245208092322564],
            [-121.02696685897473, 39.24604431557054],
            [-121.02587098740376, 39.24294297192361]
          ]
        ]
      },
      properties: {
        cluster_no: '149170',
        area: 32.025456,
        biomass: 436.89340608952074,
        distance: 4.7431,
        combinedCost: 14144.518261241083,
        residueCost: 5504.978507851208,
        transportationCost: 790.1716221310897,
        frcsResult: {
          Total: {
            WeightPerAcre: 32.435955586335105,
            CostPerAcre: 441.6648512745949,
            CostPerBoleCCF: 56.13861326991022,
            CostPerGT: 13.616520410475074,
            DieselPerAcre: 9.718861035722567,
            DieselPerBoleCCF: 1.2353334876748252,
            GasolinePerAcre: 0.025030565795769445,
            GasolinePerBoleCCF: 0.00318155553714666,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 13.642066676256562,
            CostPerAcre: 171.89383682315741,
            CostPerBoleCCF: 21.848878399645834,
            CostPerGT: 5.299484282669764,
            DieselPerAcre: 4.947544435087513,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2234954611987,
        center_lng: -121.095407964669,
        landing_lat: 39.223639,
        landing_lng: -121.094628,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '145051',
      geometry: {
        bbox: [
          -121.07431251215915,
          39.216557746733685,
          -121.06915234853138,
          39.22049628510369
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06915234853138, 39.21739534098239],
            [-121.0732150150778, 39.216557746733685],
            [-121.07431251215915, 39.2196586544543],
            [-121.0702496845996, 39.22049628510369],
            [-121.06915234853138, 39.21739534098239]
          ]
        ]
      },
      properties: {
        cluster_no: '131675',
        area: 32.025456,
        biomass: 502.9687716324065,
        distance: 3.86,
        combinedCost: 14399.23197038927,
        residueCost: 5427.17501431916,
        transportationCost: 826.0370877984159,
        frcsResult: {
          Total: {
            WeightPerAcre: 37.5011139876711,
            CostPerAcre: 449.61832769498335,
            CostPerBoleCCF: 55.45985148845754,
            CostPerGT: 11.989465908740746,
            DieselPerAcre: 10.04076960324596,
            DieselPerBoleCCF: 1.2385162185906438,
            GasolinePerAcre: 0.017227381799792506,
            GasolinePerBoleCCF: 0.002124975734529224,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 15.705280562824978,
            CostPerAcre: 169.46441025911264,
            CostPerBoleCCF: 20.903220457519375,
            CostPerGT: 4.518916699776597,
            DieselPerAcre: 4.994399017636072,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1929859725612,
        center_lng: -121.084622415249,
        landing_lat: 39.193561,
        landing_lng: -121.085282,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '145114',
      geometry: {
        bbox: [
          -121.08320677317046,
          39.204741729049665,
          -121.07804717252687,
          39.20868046871449
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07804717252687, 39.20557961128688],
            [-121.08210907468191, 39.204741729049665],
            [-121.08320677317046, 39.207842550080635],
            [-121.0791447100723, 39.20868046871449],
            [-121.07804717252687, 39.20557961128688]
          ],
          [
            [-121.0814653885055, 39.20598693539546],
            [-121.0816483302919, 39.20650374051324],
            [-121.0819868265676, 39.20643391224331],
            [-121.08180388254594, 39.205917107631095],
            [-121.0814653885055, 39.20598693539546]
          ]
        ]
      },
      properties: {
        cluster_no: '143374',
        area: 32.025456,
        biomass: 764.8121041252006,
        distance: 3.1124,
        combinedCost: 29129.342383232382,
        residueCost: 8802.377155461858,
        transportationCost: 1094.0168570438084,
        frcsResult: {
          Total: {
            WeightPerAcre: 65.6092974265789,
            CostPerAcre: 909.5683878234984,
            CostPerBoleCCF: 51.776938997107514,
            CostPerGT: 13.863406917919901,
            DieselPerAcre: 19.311262444578556,
            DieselPerBoleCCF: 1.0992884877438192,
            GasolinePerAcre: 0.05479350119114275,
            GasolinePerBoleCCF: 0.0031191055082735166,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.881380615632782,
            CostPerAcre: 274.85563844779784,
            CostPerBoleCCF: 15.646084247690704,
            CostPerGT: 4.189278794752821,
            DieselPerAcre: 8.069958649025086,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.206364663768,
        center_lng: -121.098262130468,
        landing_lat: 39.207525,
        landing_lng: -121.09866,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '145277',
      geometry: {
        bbox: [
          -121.09715370203293,
          39.231810505849786,
          -121.09199174038238,
          39.23574960191256
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09199174038238, 39.23264884827194],
            [-121.09605499750657, 39.231810505849786],
            [-121.09715370203293, 39.2349112230394],
            [-121.09309028387305, 39.23574960191256],
            [-121.09199174038238, 39.23264884827194]
          ]
        ]
      },
      properties: {
        cluster_no: '162342',
        area: 32.025456,
        biomass: 330.8406636906425,
        distance: 4.3551,
        combinedCost: 14221.514621128092,
        residueCost: 4377.177113257069,
        transportationCost: 542.5736026438569,
        frcsResult: {
          Total: {
            WeightPerAcre: 28.45749719121339,
            CostPerAcre: 444.0690749611213,
            CostPerBoleCCF: 60.7012202135107,
            CostPerGT: 15.60464267034113,
            DieselPerAcre: 9.382532195865338,
            DieselPerBoleCCF: 1.282528293670166,
            GasolinePerAcre: 0.02354180169762924,
            GasolinePerBoleCCF: 0.003218004066587398,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 10.33055278559164,
            CostPerAcre: 136.678057394626,
            CostPerBoleCCF: 18.682960215125124,
            CostPerGT: 4.8028839808451975,
            DieselPerAcre: 3.9199918806716836,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.220079376293,
        center_lng: -121.045815268793,
        landing_lat: 39.22071,
        landing_lng: -121.046239,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '145385',
      geometry: {
        bbox: [
          -121.10394878502863,
          39.17716867177068,
          -121.09879049800423,
          39.18110788139643
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09879049800423, 39.17800722572369],
            [-121.102850617401, 39.17716867177068],
            [-121.10394878502863, 39.180269291056234],
            [-121.099888504852, 39.18110788139643],
            [-121.09879049800423, 39.17800722572369]
          ]
        ]
      },
      properties: {
        cluster_no: '139030',
        area: 30.468663,
        biomass: 361.399531853697,
        distance: 3.8682,
        combinedCost: 12582.325450165095,
        residueCost: 4602.202980214032,
        transportationCost: 587.1064299144555,
        frcsResult: {
          Total: {
            WeightPerAcre: 29.946899280732467,
            CostPerAcre: 412.9595529073624,
            CostPerBoleCCF: 57.06348094951448,
            CostPerGT: 13.789726576903288,
            DieselPerAcre: 8.89602608145505,
            DieselPerBoleCCF: 1.2292686081519724,
            GasolinePerAcre: 0.02474754660040015,
            GasolinePerBoleCCF: 0.003419659731896176,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.861351837253148,
            CostPerAcre: 151.04709321226312,
            CostPerBoleCCF: 20.8719543241346,
            CostPerGT: 5.043830808535336,
            DieselPerAcre: 4.292292668953172,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2316206583319,
        center_lng: -121.05839224304,
        landing_lat: 39.231406,
        landing_lng: -121.059074,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '145787',
      geometry: {
        bbox: [
          -121.10824420514636,
          39.22619406885135,
          -121.10308229730856,
          39.23013342377917
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10308229730856, 39.227032772032736],
            [-121.10714511156596, 39.22619406885135],
            [-121.10824420514636, 39.22929468413967],
            [-121.10418122990012, 39.23013342377917],
            [-121.10308229730856, 39.227032772032736]
          ]
        ]
      },
      properties: {
        cluster_no: '161253',
        area: 32.025456,
        biomass: 748.4590157983191,
        distance: 5.1173,
        combinedCost: 26526.504087372225,
        residueCost: 8533.732223707766,
        transportationCost: 1493.854053810445,
        frcsResult: {
          Total: {
            WeightPerAcre: 62.07575272539413,
            CostPerAcre: 828.2943445792693,
            CostPerBoleCCF: 50.587213278398465,
            CostPerGT: 13.343283137353374,
            DieselPerAcre: 17.71931251454322,
            DieselPerBoleCCF: 1.0821885325984,
            GasolinePerAcre: 0.05026898000296593,
            GasolinePerBoleCCF: 0.00307012552885325,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.37075280983725,
            CostPerAcre: 266.4671573671821,
            CostPerBoleCCF: 16.27420374126696,
            CostPerGT: 4.2926125849163475,
            DieselPerAcre: 7.835226971561982,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.209572419454,
        center_lng: -121.099115202732,
        landing_lat: 39.209593,
        landing_lng: -121.099523,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146146',
      geometry: {
        bbox: [
          -121.10384839460215,
          39.21379153276164,
          -121.09868750641624,
          39.21773077188154
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09868750641624, 39.21463009016638],
            [-121.10274967683421, 39.21379153276164],
            [-121.10384839460215, 39.216892178040986],
            [-121.09978606324171, 39.21773077188154],
            [-121.09868750641624, 39.21463009016638]
          ]
        ]
      },
      properties: {
        cluster_no: '151770',
        area: 32.025456,
        biomass: 466.7732454317402,
        distance: 3.6295,
        combinedCost: 18376.133059610576,
        residueCost: 5942.372789798686,
        transportationCost: 728.3369798198454,
        frcsResult: {
          Total: {
            WeightPerAcre: 38.2718750425754,
            CostPerAcre: 573.7977020408571,
            CostPerBoleCCF: 58.79322775794512,
            CostPerGT: 14.992672854479641,
            DieselPerAcre: 12.158007478256105,
            DieselPerBoleCCF: 1.2457500268988764,
            GasolinePerAcre: 0.03038643176972965,
            GasolinePerBoleCCF: 0.0031134952221571746,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 14.575069451992821,
            CostPerAcre: 185.55154342841166,
            CostPerBoleCCF: 19.012230468723743,
            CostPerGT: 4.848248046953423,
            DieselPerAcre: 5.27845789932964,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2000769396672,
        center_lng: -121.096191508149,
        landing_lat: 39.200148,
        landing_lng: -121.095524,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '146188',
      geometry: {
        bbox: [
          -121.0877071013916,
          39.180522093642644,
          -121.08254908235561,
          39.184460919466815
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08660957695386, 39.180522093642644],
            [-121.0877071013916, 39.18362285845171],
            [-121.08364644596652, 39.184460919466815],
            [-121.08254908235561, 39.181360118287394],
            [-121.08660957695386, 39.180522093642644]
          ]
        ]
      },
      properties: {
        cluster_no: '149504',
        area: 32.025456,
        biomass: 858.2553529129157,
        distance: 4.8115,
        combinedCost: 31685.62582711973,
        residueCost: 10012.105713857729,
        transportationCost: 1665.3843641598817,
        frcsResult: {
          Total: {
            WeightPerAcre: 72.83971660848195,
            CostPerAcre: 989.3887483481806,
            CostPerBoleCCF: 50.623960789983784,
            CostPerGT: 13.58309442177277,
            DieselPerAcre: 21.148398670677047,
            DieselPerBoleCCF: 1.082098120544357,
            GasolinePerAcre: 0.06307983868587248,
            GasolinePerBoleCCF: 0.0032276001577777424,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 26.799161045916588,
            CostPerAcre: 312.6296067059195,
            CostPerBoleCCF: 15.996289606175027,
            CostPerGT: 4.292021183804479,
            DieselPerAcre: 9.162574674139808,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.212665308903,
        center_lng: -121.100197136393,
        landing_lat: 39.213466,
        landing_lng: -121.100034,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146242',
      geometry: {
        bbox: [
          -121.06903432929333,
          39.25091752766755,
          -121.06387188496775,
          39.25485597188634
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06387188496775, 39.25175495634822],
            [-121.06793653784466, 39.25091752766755],
            [-121.06903432929333, 39.25401850676621],
            [-121.06496951524028, 39.25485597188634],
            [-121.06387188496775, 39.25175495634822]
          ]
        ]
      },
      properties: {
        cluster_no: '131284',
        area: 32.025456,
        biomass: 686.8597382048076,
        distance: 3.8899,
        combinedCost: 26588.57366494367,
        residueCost: 9178.166512566704,
        transportationCost: 1225.3077265624795,
        frcsResult: {
          Total: {
            WeightPerAcre: 55.12605553437956,
            CostPerAcre: 830.2324770939615,
            CostPerBoleCCF: 58.38793825874505,
            CostPerGT: 15.060618232991187,
            DieselPerAcre: 17.821011073449704,
            DieselPerBoleCCF: 1.2533020846247032,
            GasolinePerAcre: 0.04683751042744481,
            GasolinePerBoleCCF: 0.003293951685199458,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 21.447305487385023,
            CostPerAcre: 286.5897213943403,
            CostPerBoleCCF: 20.155057071406144,
            CostPerGT: 5.198806963716234,
            DieselPerAcre: 8.123983714379191,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2195909315194,
        center_lng: -121.09799119621,
        landing_lat: 39.219603,
        landing_lng: -121.098565,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146243',
      geometry: {
        bbox: [
          -121.03774368718271,
          39.22409132793214,
          -121.0325841291401,
          39.22802900189062
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03774368718271, 39.2271925631065],
            [-121.03605531027486, 39.22754010565831],
            [-121.03596507210007, 39.22728477278415],
            [-121.03630370931073, 39.227215068408896],
            [-121.03621237353832, 39.22695663137071],
            [-121.03655100897919, 39.22688692632822],
            [-121.03645967273876, 39.22662848949093],
            [-121.03612103841687, 39.22669819428088],
            [-121.03593837012662, 39.22618131994648],
            [-121.03559973739151, 39.22625102331161],
            [-121.03596507210007, 39.22728477278415],
            [-121.03562643423847, 39.22735447623964],
            [-121.03571667130782, 39.22760980936328],
            [-121.0336800155622, 39.22802900189062],
            [-121.0325841291401, 39.22492773035367],
            [-121.03664763964188, 39.22409132793214],
            [-121.03774368718271, 39.2271925631065]
          ],
          [
            [-121.03526110400553, 39.22632072575698],
            [-121.03516977307451, 39.226062288007306],
            [-121.03483114015648, 39.226131989280404],
            [-121.0349224699686, 39.22639042728256],
            [-121.03526110400553, 39.22632072575698]
          ],
          [
            [-121.03658892223052, 39.224938458074654],
            [-121.03649758830879, 39.22468002138115],
            [-121.03615896312058, 39.22474972624298],
            [-121.0362502959235, 39.225008163188996],
            [-121.03658892223052, 39.224938458074654]
          ]
        ]
      },
      properties: {
        cluster_no: '157526',
        area: 32.025456,
        biomass: 882.0432400830691,
        distance: 3.4218,
        combinedCost: 41483.25367908021,
        residueCost: 12343.026655697486,
        transportationCost: 1429.10129077068,
        frcsResult: {
          Total: {
            WeightPerAcre: 88.22860842924676,
            CostPerAcre: 1295.3212494173451,
            CostPerBoleCCF: 52.91456195117397,
            CostPerGT: 14.68141992125041,
            DieselPerAcre: 27.37714299362352,
            DieselPerBoleCCF: 1.1183708517357098,
            GasolinePerAcre: 0.10043654284110995,
            GasolinePerBoleCCF: 0.004102886191914336,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 27.541941638022863,
            CostPerAcre: 385.4129869594202,
            CostPerBoleCCF: 15.74432549796026,
            CostPerGT: 4.368344846654753,
            DieselPerAcre: 10.944324813559442,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2358590150668,
        center_lng: -121.069498298905,
        landing_lat: 39.234251,
        landing_lng: -121.068926,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146257',
      geometry: {
        bbox: [
          -121.099888504852,
          39.17800722572369,
          -121.09473028478975,
          39.18194633941206
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09473028478975, 39.17884564735634],
            [-121.09879049800423, 39.17800722572369],
            [-121.099888504852, 39.18110788139643],
            [-121.0958281308459, 39.18194633941206],
            [-121.09473028478975, 39.17884564735634]
          ]
        ]
      },
      properties: {
        cluster_no: '160797',
        area: 32.025456,
        biomass: 887.2705956765764,
        distance: 3.151,
        combinedCost: 33470.09585304925,
        residueCost: 10651.875974217897,
        transportationCost: 1409.7405869125485,
        frcsResult: {
          Total: {
            WeightPerAcre: 84.3510001689841,
            CostPerAcre: 1045.1091111099013,
            CostPerBoleCCF: 49.731554524341085,
            CostPerGT: 12.390002596485967,
            DieselPerAcre: 22.17300437266202,
            DieselPerBoleCCF: 1.0551032080817229,
            GasolinePerAcre: 0.08087113733107688,
            GasolinePerBoleCCF: 0.0038482559695176147,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 27.705166654819106,
            CostPerAcre: 332.6065356951638,
            CostPerBoleCCF: 15.827093926594637,
            CostPerGT: 3.9431249781133406,
            DieselPerAcre: 9.630733680255634,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1904487392607,
        center_lng: -121.07863994773,
        landing_lat: 39.190646,
        landing_lng: -121.079771,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146290',
      geometry: {
        bbox: [
          -121.11240322359086,
          39.18873227137329,
          -121.10724385100474,
          39.19267169210639
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10724385100474, 39.18957110324119],
            [-121.1113045197142, 39.18873227137329],
            [-121.11240322359086, 39.19183282382481],
            [-121.108342394067, 39.19267169210639],
            [-121.10724385100474, 39.18957110324119]
          ]
        ]
      },
      properties: {
        cluster_no: '162403',
        area: 32.025456,
        biomass: 157.8636137611924,
        distance: 3.7071,
        combinedCost: 5714.310429926012,
        residueCost: 1861.1735426218147,
        transportationCost: 237.80815667782224,
        frcsResult: {
          Total: {
            WeightPerAcre: 12.50181665173732,
            CostPerAcre: 178.43025966362546,
            CostPerBoleCCF: 61.30540394775157,
            CostPerGT: 14.272346542438681,
            DieselPerAcre: 3.7653954027576115,
            DieselPerBoleCCF: 1.293721628967178,
            GasolinePerAcre: 0.008155594743208426,
            GasolinePerBoleCCF: 0.0028021145690709176,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 4.929316658635318,
            CostPerAcre: 58.11544237252437,
            CostPerBoleCCF: 19.96741290948303,
            CostPerGT: 4.6485598046623355,
            DieselPerAcre: 1.6870113518112844,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2232034409116,
        center_lng: -121.046835926731,
        landing_lat: 39.22348,
        landing_lng: -121.046796,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '146617',
      geometry: {
        bbox: [
          -121.03180798195476,
          39.23196660870004,
          -121.02664804900591,
          39.23590414836814
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02664804900591, 39.23280281893563],
            [-121.03071206922166, 39.23196660870004],
            [-121.03180798195476, 39.235067901767295],
            [-121.02774380057356, 39.23590414836814],
            [-121.02664804900591, 39.23280281893563]
          ]
        ]
      },
      properties: {
        cluster_no: '152571',
        area: 32.025456,
        biomass: 97.49820890640277,
        distance: 3.6643000000000003,
        combinedCost: 3266.782627288486,
        residueCost: 1018.4534022067046,
        transportationCost: 160.80292290349513,
        frcsResult: {
          Total: {
            WeightPerAcre: 7.932869433248418,
            CostPerAcre: 102.00581147973305,
            CostPerBoleCCF: 60.794869381926866,
            CostPerGT: 12.85862730227275,
            DieselPerAcre: 2.1586643515015194,
            DieselPerBoleCCF: 1.2865513776637247,
            GasolinePerAcre: 0.0040146411277714525,
            GasolinePerBoleCCF: 0.0023927027238704905,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 3.0443972103442576,
            CostPerAcre: 31.801370828465476,
            CostPerBoleCCF: 18.953431747042238,
            CostPerGT: 4.008810569247348,
            DieselPerAcre: 0.9319210588478026,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.233662914669,
        center_lng: -121.063951927021,
        landing_lat: 39.233653,
        landing_lng: -121.063877,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146688',
      geometry: {
        bbox: [
          -121.07629436970903,
          39.172895452370454,
          -121.07113724853278,
          39.176833999974285
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07519744818106, 39.172895452370454],
            [-121.07629436970903, 39.17599631271764],
            [-121.07223400924524, 39.176833999974285],
            [-121.07113724853278, 39.17373310328185],
            [-121.07519744818106, 39.172895452370454]
          ]
        ]
      },
      properties: {
        cluster_no: '162790',
        area: 32.025456,
        biomass: 931.4543394091091,
        distance: 3.6496,
        combinedCost: 43897.75550729026,
        residueCost: 14124.887286153984,
        transportationCost: 1553.182861972335,
        frcsResult: {
          Total: {
            WeightPerAcre: 84.29328346303261,
            CostPerAcre: 1370.7144562528715,
            CostPerBoleCCF: 60.414985947697026,
            CostPerGT: 16.261253565404267,
            DieselPerAcre: 29.934812437789788,
            DieselPerBoleCCF: 1.3193931562668069,
            GasolinePerAcre: 0.08810520697152092,
            GasolinePerBoleCCF: 0.003883284966333938,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 29.08481113927337,
            CostPerAcre: 441.051870928988,
            CostPerBoleCCF: 19.439601342808462,
            CostPerGT: 5.23234892282271,
            DieselPerAcre: 12.396175277522268,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2324010900431,
        center_lng: -121.08563059656,
        landing_lat: 39.230474,
        landing_lng: -121.088854,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 5
      }
    },
    {
      type: 'Feature',
      id: '146731',
      geometry: {
        bbox: [
          -121.08573190619745,
          39.224184643288744,
          -121.08057084361579,
          39.22812346046845
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08057084361579, 39.225022611582745],
            [-121.08463380549254, 39.224184643288744],
            [-121.08573190619745, 39.22728545574863],
            [-121.08166878329628, 39.22812346046845],
            [-121.08057084361579, 39.225022611582745]
          ]
        ]
      },
      properties: {
        cluster_no: '115491',
        area: 32.025456,
        biomass: 961.9415061279807,
        distance: 3.0863,
        combinedCost: 45102.92510880569,
        residueCost: 11631.476874295844,
        transportationCost: 1518.8878298795994,
        frcsResult: {
          Total: {
            WeightPerAcre: 112.63302775909408,
            CostPerAcre: 1408.3460703512135,
            CostPerBoleCCF: 43.55665246675986,
            CostPerGT: 12.50384632617232,
            DieselPerAcre: 28.716629712046227,
            DieselPerBoleCCF: 0.888134164404849,
            GasolinePerAcre: 0.14111980888192882,
            GasolinePerBoleCCF: 0.004364485832742003,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 30.03677780975174,
            CostPerAcre: 363.1947309133036,
            CostPerBoleCCF: 11.23271261601493,
            CostPerGT: 3.224584636844933,
            DieselPerAcre: 10.747939417467956,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2349622422179,
        center_lng: -121.073219417158,
        landing_lat: 39.234843,
        landing_lng: -121.073362,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 5
      }
    },
    {
      type: 'Feature',
      id: '146790',
      geometry: {
        bbox: [
          -121.1104426742665,
          39.232395291950944,
          -121.10528025646263,
          39.23633470486574
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10528025646263, 39.23323406805412],
            [-121.10934339270929, 39.232395291950944],
            [-121.1104426742665, 39.23549589229332],
            [-121.10637937700781, 39.23633470486574],
            [-121.10528025646263, 39.23323406805412]
          ]
        ]
      },
      properties: {
        cluster_no: '146146',
        area: 32.025456,
        biomass: 883.9878958886761,
        distance: 4.6533,
        combinedCost: 28730.939684976205,
        residueCost: 10228.127239758216,
        transportationCost: 1693.9122390463688,
        frcsResult: {
          Total: {
            WeightPerAcre: 65.75780274471367,
            CostPerAcre: 897.1281996726668,
            CostPerBoleCCF: 53.83882539802365,
            CostPerGT: 13.642916311475869,
            DieselPerAcre: 19.511719977168315,
            DieselPerBoleCCF: 1.170945340308313,
            GasolinePerAcre: 0.04491739826049385,
            GasolinePerBoleCCF: 0.0026956013233811844,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 27.602663827446396,
            CostPerAcre: 319.37491349875603,
            CostPerBoleCCF: 19.16645827278894,
            CostPerGT: 4.856836758044365,
            DieselPerAcre: 9.263174837489958,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2157256099252,
        center_lng: -121.101378684299,
        landing_lat: 39.215517,
        landing_lng: -121.100985,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146791',
      geometry: {
        bbox: [
          -121.10131876862978,
          39.19434903165428,
          -121.0961593422137,
          39.19828819342469
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0961593422137, 39.19518750291159],
            [-121.1002204533668, 39.19434903165428],
            [-121.10131876862978, 39.197449685760766],
            [-121.09725749661544, 39.19828819342469],
            [-121.0961593422137, 39.19518750291159]
          ]
        ]
      },
      properties: {
        cluster_no: '157939',
        area: 32.025456,
        biomass: 751.0169599187326,
        distance: 3.9328000000000003,
        combinedCost: 81848.55233286426,
        residueCost: 13244.760397950926,
        transportationCost: 1208.1188272633256,
        frcsResult: {
          Total: {
            WeightPerAcre: 138.69993090730426,
            CostPerAcre: 2555.7341738666973,
            CostPerBoleCCF: 60.30496158371941,
            CostPerGT: 18.426355061234617,
            DieselPerAcre: 52.834566472093805,
            DieselPerBoleCCF: 1.2466814952712968,
            GasolinePerAcre: 0.2177729848977049,
            GasolinePerBoleCCF: 0.005138559253350965,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.450625025252805,
            CostPerAcre: 413.56976768577243,
            CostPerBoleCCF: 9.75856926260247,
            CostPerGT: 2.9817590029094445,
            DieselPerAcre: 11.56584601470468,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1970717534759,
        center_lng: -121.046714765226,
        landing_lat: 39.194961,
        landing_lng: -121.051298,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '146939',
      geometry: {
        bbox: [
          -121.06037703649243,
          39.189486506208986,
          -121.05521923271094,
          39.1934246888359
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05521923271094, 39.19032364073287],
            [-121.05928054437494, 39.189486506208986],
            [-121.06037703649243, 39.192587517965634],
            [-121.05631556390796, 39.1934246888359],
            [-121.05521923271094, 39.19032364073287]
          ]
        ]
      },
      properties: {
        cluster_no: '143463',
        area: 32.025456,
        biomass: 579.9850101156132,
        distance: 3.4806,
        combinedCost: 20695.045566051824,
        residueCost: 6693.117788661663,
        transportationCost: 886.3720776808464,
        frcsResult: {
          Total: {
            WeightPerAcre: 46.752486036184955,
            CostPerAcre: 646.2061169730674,
            CostPerBoleCCF: 52.57607839783377,
            CostPerGT: 13.821855729188908,
            DieselPerAcre: 13.668315296705446,
            DieselPerBoleCCF: 1.1120699692105311,
            GasolinePerAcre: 0.039485896341225624,
            GasolinePerBoleCCF: 0.0032126182763007488,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 18.11012496170588,
            CostPerAcre: 208.99367642608004,
            CostPerBoleCCF: 17.00396766266923,
            CostPerGT: 4.470215257950679,
            DieselPerAcre: 6.105754738250667,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1969842062775,
        center_lng: -121.095089501231,
        landing_lat: 39.197485,
        landing_lng: -121.0951,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '146948',
      geometry: {
        bbox: [
          -121.10791063202709,
          39.21295284298119,
          -121.10274967683421,
          39.216892178040986
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10274967683421, 39.21379153276164],
            [-121.10681175332839, 39.21295284298119],
            [-121.10791063202709, 39.21605345182054],
            [-121.10384839460215, 39.216892178040986],
            [-121.10274967683421, 39.21379153276164]
          ]
        ]
      },
      properties: {
        cluster_no: '135996',
        area: 32.025456,
        biomass: 848.554756529929,
        distance: 3.7213000000000003,
        combinedCost: 54956.67934335282,
        residueCost: 13297.107974539618,
        transportationCost: 1430.3347908083117,
        frcsResult: {
          Total: {
            WeightPerAcre: 108.25681391589762,
            CostPerAcre: 1716.0311267184711,
            CostPerBoleCCF: 54.92201637133887,
            CostPerGT: 15.851483750959257,
            DieselPerAcre: 35.95640213794586,
            DieselPerBoleCCF: 1.1507938732154992,
            GasolinePerAcre: 0.13589770053872033,
            GasolinePerBoleCCF: 0.004349440763401373,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 26.496258368028517,
            CostPerAcre: 415.2043291605159,
            CostPerBoleCCF: 13.288721054385505,
            CostPerGT: 3.8353643908556108,
            DieselPerAcre: 11.835330164444208,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2318233283429,
        center_lng: -121.089301171616,
        landing_lat: 39.23079,
        landing_lng: -121.089566,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 5
      }
    },
    {
      type: 'Feature',
      id: '147174',
      geometry: {
        bbox: [
          -121.06399250692995,
          39.21203081935071,
          -121.05883298735515,
          39.215969107872596
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05883298735515, 39.21286807601258],
            [-121.0628955194901, 39.21203081935071],
            [-121.06399250692995, 39.21513181482963],
            [-121.05992981378164, 39.215969107872596],
            [-121.05883298735515, 39.21286807601258]
          ]
        ]
      },
      properties: {
        cluster_no: '113123',
        area: 32.025456,
        biomass: 960.0185553353404,
        distance: 3.1964,
        combinedCost: 31398.33406194795,
        residueCost: 12649.061015899988,
        transportationCost: 1580.5291388959001,
        frcsResult: {
          Total: {
            WeightPerAcre: 71.7854835044582,
            CostPerAcre: 980.4180169034267,
            CostPerBoleCCF: 55.031494411147335,
            CostPerGT: 13.657608321918433,
            DieselPerAcre: 21.580964389568337,
            DieselPerBoleCCF: 1.211353423453747,
            GasolinePerAcre: 0.06533229071821195,
            GasolinePerBoleCCF: 0.0036671435342266684,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 29.976733362839248,
            CostPerAcre: 394.96895894003785,
            CostPerBoleCCF: 22.16986191781336,
            CostPerGT: 5.502072837825332,
            DieselPerAcre: 11.242748733202736,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1899535122412,
        center_lng: -121.065782928394,
        landing_lat: 39.189144,
        landing_lng: -121.065597,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '147293',
      geometry: {
        bbox: [
          -121.11756291780561,
          39.19099382321077,
          -121.11240322359086,
          39.19493336868621
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.11240322359086, 39.19183282382481],
            [-121.11646395921515, 39.19099382321077],
            [-121.11756291780561, 39.19409433164872],
            [-121.1135020213671, 39.19493336868621],
            [-121.11240322359086, 39.19183282382481]
          ]
        ]
      },
      properties: {
        cluster_no: '135815',
        area: 32.025456,
        biomass: 960.1681833574544,
        distance: 3.4402,
        combinedCost: 43510.817231608715,
        residueCost: 15436.532658619433,
        transportationCost: 1575.8003155907631,
        frcsResult: {
          Total: {
            WeightPerAcre: 83.4695999787468,
            CostPerAcre: 1358.6322465356534,
            CostPerBoleCCF: 61.13382766542805,
            CostPerGT: 16.276970859829103,
            DieselPerAcre: 30.344762363822195,
            DieselPerBoleCCF: 1.3654110430755124,
            GasolinePerAcre: 0.08414795217005336,
            GasolinePerBoleCCF: 0.003786371491976602,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 29.98140552182784,
            CostPerAcre: 482.0082080523517,
            CostPerBoleCCF: 21.688729087309337,
            CostPerGT: 5.77465578096794,
            DieselPerAcre: 13.712785677560634,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2343051232092,
        center_lng: -121.07734471098,
        landing_lat: 39.235116,
        landing_lng: -121.077688,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 5
      }
    },
    {
      type: 'Feature',
      id: '147407',
      geometry: {
        bbox: [
          -121.08617088300657,
          39.200802922270945,
          -121.08101147002377,
          39.204741729049665
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08101147002377, 39.20164090048959],
            [-121.08507311742868, 39.200802922270945],
            [-121.08617088300657, 39.20390371443571],
            [-121.08210907468191, 39.204741729049665],
            [-121.08101147002377, 39.20164090048959]
          ],
          [
            [-121.0818131783474, 39.20286519805768],
            [-121.08199611473951, 39.20338200230374],
            [-121.0823345961153, 39.203312173136915],
            [-121.08215165748814, 39.20279536939635],
            [-121.0818131783474, 39.20286519805768]
          ],
          [
            [-121.08217905373786, 39.20389880634055],
            [-121.08227052421441, 39.204157208280485],
            [-121.08294749301974, 39.204017547511114],
            [-121.082764548248, 39.20350074458995],
            [-121.08242606640624, 39.20357057492876],
            [-121.08251753734876, 39.20382897666824],
            [-121.08217905373786, 39.20389880634055],
            [-121.08208758391288, 39.20364040434829],
            [-121.08174910076794, 39.20371023284856],
            [-121.08184056947533, 39.20396863509357],
            [-121.08217905373786, 39.20389880634055]
          ]
        ]
      },
      properties: {
        cluster_no: '132562',
        area: 32.025456,
        biomass: 1296.0334643367726,
        distance: 3.4162,
        combinedCost: 47724.82836959251,
        residueCost: 25775.472077505023,
        transportationCost: 2121.825133246149,
        frcsResult: {
          Total: {
            WeightPerAcre: 76.1757972426443,
            CostPerAcre: 1490.2154201830106,
            CostPerBoleCCF: 90.77773899314361,
            CostPerGT: 19.56284639117327,
            DieselPerAcre: 35.86463601624504,
            DieselPerBoleCCF: 2.1847247876196065,
            GasolinePerAcre: 0.05039496848754735,
            GasolinePerBoleCCF: 0.0030698523407900686,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 40.46885278813119,
            CostPerAcre: 804.8432496169617,
            CostPerBoleCCF: 49.02771066155622,
            CostPerGT: 10.565603232917645,
            DieselPerAcre: 22.24232580995701,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2370842632424,
        center_lng: -121.078227366366,
        landing_lat: 39.235183,
        landing_lng: -121.077423,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '147426',
      geometry: {
        bbox: [
          -121.11264151941074,
          39.2385964851751,
          -121.10747859154745,
          39.242535956132116
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10747859154745, 39.23943533422233],
            [-121.11154204982974, 39.2385964851751],
            [-121.11264151941074, 39.241697070604445],
            [-121.10857790009325, 39.242535956132116],
            [-121.10747859154745, 39.23943533422233]
          ]
        ]
      },
      properties: {
        cluster_no: '151912',
        area: 32.025456,
        biomass: 524.2323396742869,
        distance: 4.0354,
        combinedCost: 23819.804018886232,
        residueCost: 7268.986687055965,
        transportationCost: 961.0024281023888,
        frcsResult: {
          Total: {
            WeightPerAcre: 49.61854439491406,
            CostPerAcre: 743.777200826937,
            CostPerBoleCCF: 55.325708078155046,
            CostPerGT: 14.98990367204675,
            DieselPerAcre: 15.488479522851282,
            DieselPerBoleCCF: 1.1521072381662574,
            GasolinePerAcre: 0.050562929430402664,
            GasolinePerBoleCCF: 0.0037611126962921273,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 16.36923888528822,
            CostPerAcre: 226.97527513912576,
            CostPerBoleCCF: 16.883507318246103,
            CostPerGT: 4.574404144801775,
            DieselPerAcre: 6.436603411373975,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2223922899684,
        center_lng: -121.099090112191,
        landing_lat: 39.222211,
        landing_lng: -121.099488,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '147654',
      geometry: {
        bbox: [
          -121.05444661925766,
          39.197362804236356,
          -121.04928844062073,
          39.201300852418214
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04928844062073, 39.198199746689596],
            [-121.05335026157672, 39.197362804236356],
            [-121.05444661925766, 39.200463873615924],
            [-121.05038463733456, 39.201300852418214],
            [-121.04928844062073, 39.198199746689596]
          ]
        ]
      },
      properties: {
        cluster_no: '160689',
        area: 32.025456,
        biomass: 212.62589825368005,
        distance: 4.366899999999999,
        combinedCost: 6001.964781390278,
        residueCost: 2526.0500493048767,
        transportationCost: 370.8675960652319,
        frcsResult: {
          Total: {
            WeightPerAcre: 14.169833305719193,
            CostPerAcre: 187.41231292351554,
            CostPerBoleCCF: 64.27597813683062,
            CostPerGT: 13.22614803435074,
            DieselPerAcre: 4.165402154311966,
            DieselPerBoleCCF: 1.428589688826518,
            GasolinePerAcre: 0.008012237056083202,
            GasolinePerBoleCCF: 0.002747921765706404,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 6.639277774957523,
            CostPerAcre: 78.87631792986419,
            CostPerBoleCCF: 27.051864456967124,
            CostPerGT: 5.566495824480047,
            DieselPerAcre: 2.2539649048509096,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.226627396068,
        center_lng: -121.096033651305,
        landing_lat: 39.226393,
        landing_lng: -121.096381,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '147699',
      geometry: {
        bbox: [
          -121.06366707524411,
          39.19878951884306,
          -121.05850850745506,
          39.20272778792308
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05850850745506, 39.19962676242273],
            [-121.06257030191529, 39.19878951884306],
            [-121.06366707524411, 39.20189050798037],
            [-121.05960511982863, 39.20272778792308],
            [-121.05850850745506, 39.19962676242273]
          ]
        ]
      },
      properties: {
        cluster_no: '153432',
        area: 32.025456,
        biomass: 356.3757166812867,
        distance: 3.3873,
        combinedCost: 16665.139843802208,
        residueCost: 4851.010499927741,
        transportationCost: 552.5579344564026,
        frcsResult: {
          Total: {
            WeightPerAcre: 32.42094445480347,
            CostPerAcre: 520.3716644597413,
            CostPerBoleCCF: 65.1335278403821,
            CostPerGT: 16.05047826984705,
            DieselPerAcre: 11.102016370040662,
            DieselPerBoleCCF: 1.3896096611508815,
            GasolinePerAcre: 0.025203108165075882,
            GasolinePerBoleCCF: 0.0031546055626192377,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.127888910661778,
            CostPerAcre: 151.47358088914459,
            CostPerBoleCCF: 18.95954251884281,
            CostPerGT: 4.672090324213314,
            DieselPerAcre: 4.3358859994553205,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2185201128225,
        center_lng: -121.041037913397,
        landing_lat: 39.21686,
        landing_lng: -121.041325,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '147894',
      geometry: {
        bbox: [
          -121.03755689850149,
          39.17422714883996,
          -121.03240089112211,
          39.17816477472251
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0364616119642, 39.17422714883996],
            [-121.03755689850149, 39.17732835128462],
            [-121.0334960167616, 39.17816477472251],
            [-121.03240089112211, 39.17506353598173],
            [-121.0364616119642, 39.17422714883996]
          ]
        ]
      },
      properties: {
        cluster_no: '139122',
        area: 32.025456,
        biomass: 661.2609026949663,
        distance: 3.7683,
        combinedCost: 30764.050684558995,
        residueCost: 9400.96101807877,
        transportationCost: 1101.4905909148188,
        frcsResult: {
          Total: {
            WeightPerAcre: 64.262005601635,
            CostPerAcre: 960.6124167149719,
            CostPerBoleCCF: 54.745577563038744,
            CostPerGT: 14.948372801650176,
            DieselPerAcre: 20.371501677349073,
            DieselPerBoleCCF: 1.1609777322749293,
            GasolinePerAcre: 0.0694627901636348,
            GasolinePerBoleCCF: 0.0039587043645061435,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 20.647977742923203,
            CostPerAcre: 293.5465155618321,
            CostPerBoleCCF: 16.72930024265797,
            CostPerGT: 4.567963804017401,
            DieselPerAcre: 8.365329022676706,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2309710883075,
        center_lng: -121.093715495792,
        landing_lat: 39.23,
        landing_lng: -121.092175,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '147965',
      geometry: {
        bbox: [
          -121.10571296856502,
          39.206751602722534,
          -121.10055252305776,
          39.21069087996393
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10055252305776, 39.20759021963964],
            [-121.10461427772525, 39.206751602722534],
            [-121.10571296856502, 39.20985222661793],
            [-121.10165105299, 39.21069087996393],
            [-121.10055252305776, 39.20759021963964]
          ]
        ]
      },
      properties: {
        cluster_no: '159077',
        area: 32.025456,
        biomass: 986.7640852668673,
        distance: 3.4386,
        combinedCost: 30159.222096373604,
        residueCost: 11983.829143834084,
        transportationCost: 1442.7477685625504,
        frcsResult: {
          Total: {
            WeightPerAcre: 73.65145029881978,
            CostPerAcre: 941.726547043502,
            CostPerBoleCCF: 54.21093682529277,
            CostPerGT: 12.786259377415037,
            DieselPerAcre: 20.8816657128655,
            DieselPerBoleCCF: 1.2020630238373664,
            GasolinePerAcre: 0.058409274884380136,
            GasolinePerBoleCCF: 0.003362357704271049,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 30.81186682453069,
            CostPerAcre: 374.1969870416235,
            CostPerBoleCCF: 21.540827630285843,
            CostPerGT: 5.080646552422604,
            DieselPerAcre: 10.854280277193332,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1921593403778,
        center_lng: -121.054268276845,
        landing_lat: 39.192535,
        landing_lng: -121.053276,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '148002',
      geometry: {
        bbox: [
          -121.05895608735564,
          39.173144248693326,
          -121.05379948925803,
          39.17708238353732
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05379948925803, 39.173981333916934],
            [-121.05785990283844, 39.173144248693326],
            [-121.05895608735564, 39.17624526199094],
            [-121.05489551292439, 39.17708238353732],
            [-121.05379948925803, 39.173981333916934]
          ]
        ]
      },
      properties: {
        cluster_no: '160034',
        area: 32.025456,
        biomass: 874.3983216934539,
        distance: 5.403,
        combinedCost: 35983.894582182395,
        residueCost: 10552.26013894235,
        transportationCost: 1784.2551649900777,
        frcsResult: {
          Total: {
            WeightPerAcre: 78.75878357475722,
            CostPerAcre: 1123.6028796024762,
            CostPerBoleCCF: 50.63499173888486,
            CostPerGT: 14.26638183836297,
            DieselPerAcre: 23.482314767996538,
            DieselPerBoleCCF: 1.0582269197352618,
            GasolinePerAcre: 0.07750608697750909,
            GasolinePerBoleCCF: 0.0034927999429904765,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 27.30322783517755,
            CostPerAcre: 329.4960152618077,
            CostPerBoleCCF: 14.848687479939372,
            CostPerGT: 4.18360975508278,
            DieselPerAcre: 9.635236360049007,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2119129123677,
        center_lng: -121.104174786616,
        landing_lat: 39.21241,
        landing_lng: -121.102862,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '148012',
      geometry: {
        bbox: [
          -121.06541535291322,
          39.228373160603404,
          -121.06025462629871,
          39.23231149774879
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06025462629871, 39.22921046679738],
            [-121.06127530084409, 39.22900016198571],
            [-121.06127639907533, 39.22900326612951],
            [-121.06093777752821, 39.22907303844294],
            [-121.0613034876079, 39.230106714213925],
            [-121.06164211362955, 39.23003694088936],
            [-121.06173354389699, 39.23029535945013],
            [-121.06241079622276, 39.230155809536306],
            [-121.06213650066327, 39.22938055521572],
            [-121.06179787818205, 39.22945032987409],
            [-121.06161392172619, 39.228930388755636],
            [-121.06431805744786, 39.228373160603404],
            [-121.06541535291322, 39.23147415515014],
            [-121.06135176068092, 39.23231149774879],
            [-121.06025462629871, 39.22921046679738]
          ],
          [
            [-121.06410391563423, 39.22980691865744],
            [-121.06444253756163, 39.229737137722715],
            [-121.06398534799582, 39.22844505451409],
            [-121.06364673166128, 39.22851483418486],
            [-121.06392104009016, 39.22929008502348],
            [-121.06324379875485, 39.229429643122806],
            [-121.06333523396385, 39.22968806047121],
            [-121.06401247753635, 39.22954850186629],
            [-121.06410391563423, 39.22980691865744]
          ]
        ]
      },
      properties: {
        cluster_no: '162767',
        area: 32.025456,
        biomass: 216.48318644574977,
        distance: 3.9544,
        combinedCost: 8795.200746983863,
        residueCost: 2914.198655972237,
        transportationCost: 332.6595454455877,
        frcsResult: {
          Total: {
            WeightPerAcre: 17.95138887370885,
            CostPerAcre: 274.6315539420848,
            CostPerBoleCCF: 66.47954973054009,
            CostPerGT: 15.298624294430121,
            DieselPerAcre: 5.824064613233374,
            DieselPerBoleCCF: 1.4098204941555146,
            GasolinePerAcre: 0.01331050602704174,
            GasolinePerBoleCCF: 0.003222049450115192,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 6.759722217405734,
            CostPerAcre: 90.99632042623334,
            CostPerBoleCCF: 22.027310126015806,
            CostPerGT: 5.069040677933518,
            DieselPerAcre: 2.559480828145225,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2241416062473,
        center_lng: -121.043680430017,
        landing_lat: 39.223314,
        landing_lng: -121.043948,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '148041',
      geometry: {
        bbox: [
          -121.0478698786464,
          39.1787562295684,
          -121.04271322767633,
          39.182694105035075
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.04271322767633, 39.17959295404416],
            [-121.04677408307319, 39.1787562295684],
            [-121.0478698786464, 39.18185734424363],
            [-121.04380886235204, 39.182694105035075],
            [-121.04271322767633, 39.17959295404416]
          ]
        ]
      },
      properties: {
        cluster_no: '144751',
        area: 32.025456,
        biomass: 368.15129888201216,
        distance: 4.240600000000001,
        combinedCost: 16314.99980665989,
        residueCost: 5215.249566234265,
        transportationCost: 616.3399650075805,
        frcsResult: {
          Total: {
            WeightPerAcre: 31.97655561141361,
            CostPerAcre: 509.4384856427927,
            CostPerBoleCCF: 62.796003468077025,
            CostPerGT: 15.931624776401977,
            DieselPerAcre: 10.671611260366445,
            DieselPerBoleCCF: 1.3154375976726365,
            GasolinePerAcre: 0.028096285613183905,
            GasolinePerBoleCCF: 0.003463292425933231,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.495583353505166,
            CostPerAcre: 162.84700415301708,
            CostPerBoleCCF: 20.073357874907718,
            CostPerGT: 5.092699980947635,
            DieselPerAcre: 4.537479962360209,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2346973066566,
        center_lng: -121.059752121783,
        landing_lat: 39.234634,
        landing_lng: -121.060129,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '148085',
      geometry: {
        bbox: [
          -121.11307190908126,
          39.215214593224644,
          -121.10791063202709,
          39.21915405314415
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10791063202709, 39.21605345182054],
            [-121.11197277550497, 39.215214593224644],
            [-121.11307190908126, 39.21831515809844],
            [-121.1090096046728, 39.21915405314415],
            [-121.10791063202709, 39.21605345182054]
          ]
        ]
      },
      properties: {
        cluster_no: '161088',
        area: 32.025456,
        biomass: 959.0529003610461,
        distance: 3.7186,
        combinedCost: 28663.079751343368,
        residueCost: 10753.007802831127,
        transportationCost: 1553.1471010025348,
        frcsResult: {
          Total: {
            WeightPerAcre: 73.70685850271757,
            CostPerAcre: 895.0092623612719,
            CostPerBoleCCF: 52.18430766012518,
            CostPerGT: 12.142821991636952,
            DieselPerAcre: 19.720817810228976,
            DieselPerBoleCCF: 1.1498397471364494,
            GasolinePerAcre: 0.051834579658745744,
            GasolinePerBoleCCF: 0.003022261071588102,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 29.94658063139042,
            CostPerAcre: 335.7643932636315,
            CostPerBoleCCF: 19.577040301413074,
            CostPerGT: 4.555402306981404,
            DieselPerAcre: 9.770738308796863,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1939803481065,
        center_lng: -121.093835837304,
        landing_lat: 39.194497,
        landing_lng: -121.093381,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '148167',
      geometry: {
        bbox: [
          -121.06431805744786,
          39.225272158610586,
          -121.05915758573614,
          39.22921046679738
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06016430085148, 39.22895515136923],
            [-121.06016910882562, 39.22895416073333],
            [-121.05989484177326, 39.22817890169079],
            [-121.05989003384677, 39.22817989231595],
            [-121.05915758573614, 39.226109428405415],
            [-121.06322085581377, 39.225272158610586],
            [-121.06431805744786, 39.228373160603404],
            [-121.06161392172619, 39.228930388755636],
            [-121.06152359184254, 39.228675074330035],
            [-121.06186221096796, 39.228605300430054],
            [-121.06167935442882, 39.228088463647794],
            [-121.06134073754062, 39.22815823704222],
            [-121.06124931136695, 39.22789981832078],
            [-121.06091069494576, 39.2279695905428],
            [-121.06072784679017, 39.22745275243924],
            [-121.06005061646765, 39.227592293113176],
            [-121.06023346014892, 39.22810913222777],
            [-121.06091069494576, 39.2279695905428],
            [-121.06127530084409, 39.22900016198571],
            [-121.06025462629871, 39.22921046679738],
            [-121.06016430085148, 39.22895515136923]
          ]
        ]
      },
      properties: {
        cluster_no: '135320',
        area: 32.025456,
        biomass: 868.3929238257947,
        distance: 3.4436999999999998,
        combinedCost: 36578.09572906919,
        residueCost: 10456.123547114645,
        transportationCost: 1265.5954001148627,
        frcsResult: {
          Total: {
            WeightPerAcre: 80.33556964535678,
            CostPerAcre: 1142.1569057149159,
            CostPerBoleCCF: 50.32510616323517,
            CostPerGT: 14.217325037427303,
            DieselPerAcre: 23.88893044699522,
            DieselPerBoleCCF: 1.052581265197244,
            GasolinePerAcre: 0.08067900484027359,
            GasolinePerBoleCCF: 0.0035548351224033658,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 27.115708323584673,
            CostPerAcre: 326.4941347631286,
            CostPerBoleCCF: 14.385809787967279,
            CostPerGT: 4.064129204590749,
            DieselPerAcre: 9.540847169198573,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2056415067349,
        center_lng: -121.101992331441,
        landing_lat: 39.20676,
        landing_lng: -121.102375,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '148248',
      geometry: {
        bbox: [
          -121.11527045815686,
          39.22141571545928,
          -121.1101086712774,
          39.22535523327738
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.1101086712774, 39.22225464696036],
            [-121.11417113662797, 39.22141571545928],
            [-121.11527045815686, 39.22451626531534],
            [-121.11120783185254, 39.22535523327738],
            [-121.1101086712774, 39.22225464696036]
          ]
        ]
      },
      properties: {
        cluster_no: '153380',
        area: 32.025456,
        biomass: 737.7041561051124,
        distance: 4.307,
        combinedCost: 26873.34781683807,
        residueCost: 8917.799539578888,
        transportationCost: 1369.119600617074,
        frcsResult: {
          Total: {
            WeightPerAcre: 60.25479183423022,
            CostPerAcre: 839.1245956603419,
            CostPerBoleCCF: 53.78992270558632,
            CostPerGT: 13.92627158963385,
            DieselPerAcre: 17.954992930257013,
            DieselPerBoleCCF: 1.150958614361491,
            GasolinePerAcre: 0.04651696403636942,
            GasolinePerBoleCCF: 0.002981850267475248,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.034930590999622,
            CostPerAcre: 278.45972090386124,
            CostPerBoleCCF: 17.84994378844392,
            CostPerGT: 4.621370557049551,
            DieselPerAcre: 8.077105934404956,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2188733360658,
        center_lng: -121.102593013972,
        landing_lat: 39.219216,
        landing_lng: -121.10193,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '148254',
      geometry: {
        bbox: [
          -121.11426632375586,
          39.181692252290034,
          -121.10910739361263,
          39.18563171132346
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10910739361263, 39.18253114366711],
            [-121.11316764686356, 39.181692252290034],
            [-121.11426632375586, 39.18479278353962],
            [-121.11020590972538, 39.18563171132346],
            [-121.10910739361263, 39.18253114366711]
          ]
        ]
      },
      properties: {
        cluster_no: '162389',
        area: 32.025456,
        biomass: 971.2724796229706,
        distance: 3.4228,
        combinedCost: 35374.430444575315,
        residueCost: 12883.243163840036,
        transportationCost: 1636.1729769051428,
        frcsResult: {
          Total: {
            WeightPerAcre: 73.11925015353813,
            CostPerAcre: 1104.5722641568418,
            CostPerBoleCCF: 64.4245726723103,
            CostPerGT: 15.10644955791294,
            DieselPerAcre: 24.7482227564241,
            DieselPerBoleCCF: 1.443448950530026,
            GasolinePerAcre: 0.04992661815870662,
            GasolinePerBoleCCF: 0.0029119878746037037,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 30.32813895368018,
            CostPerAcre: 402.28133406874946,
            CostPerBoleCCF: 23.463202800234427,
            CostPerGT: 5.50171580293871,
            DieselPerAcre: 11.412900760570555,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1881670091796,
        center_lng: -121.074131498404,
        landing_lat: 39.187406,
        landing_lng: -121.069761,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '148306',
      geometry: {
        bbox: [
          -121.08309586812955,
          39.24136479953865,
          -121.07793366500248,
          39.245303569710735
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07793366500248, 39.242202685148634],
            [-121.08199761997861, 39.24136479953865],
            [-121.08309586812955, 39.24446564765548],
            [-121.07903175204748, 39.245303569710735],
            [-121.07793366500248, 39.242202685148634]
          ]
        ]
      },
      properties: {
        cluster_no: '165269',
        area: 32.025456,
        biomass: 817.4828605949531,
        distance: 3.4228,
        combinedCost: 23338.388640684192,
        residueCost: 9754.240220519441,
        transportationCost: 1377.104153211244,
        frcsResult: {
          Total: {
            WeightPerAcre: 54.038672387691015,
            CostPerAcre: 728.7449284308143,
            CostPerBoleCCF: 60.39426624574462,
            CostPerGT: 13.485618654776733,
            DieselPerAcre: 16.473418630873088,
            DieselPerBoleCCF: 1.3652239514213143,
            GasolinePerAcre: 0.02776869978781849,
            GasolinePerBoleCCF: 0.002301313097155749,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 25.52603343399554,
            CostPerAcre: 304.5777153186965,
            CostPerBoleCCF: 25.241681847566134,
            CostPerGT: 5.636291601199172,
            DieselPerAcre: 8.77285850989512,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1889919664911,
        center_lng: -121.070345193375,
        landing_lat: 39.187406,
        landing_lng: -121.069761,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '148439',
      geometry: {
        bbox: [
          -121.12415864214033,
          39.2095967601922,
          -121.11899741915286,
          39.21353647892455
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.11899741915286, 39.210435979430564],
            [-121.12305911983628, 39.2095967601922],
            [-121.12415864214033, 39.21269722322927],
            [-121.12009678057318, 39.21353647892455],
            [-121.11899741915286, 39.210435979430564]
          ]
        ]
      },
      properties: {
        cluster_no: '160379',
        area: 32.025456,
        biomass: 1251.923742634899,
        distance: 3.9536,
        combinedCost: 54137.144872535166,
        residueCost: 16422.746871929252,
        transportationCost: 2228.219686678516,
        frcsResult: {
          Total: {
            WeightPerAcre: 122.36138114568111,
            CostPerAcre: 1690.4410314262245,
            CostPerBoleCCF: 53.36023969791052,
            CostPerGT: 13.815151607463616,
            DieselPerAcre: 36.16217928751898,
            DieselPerBoleCCF: 1.1414906044683535,
            GasolinePerAcre: 0.12883322314547566,
            GasolinePerBoleCCF: 0.004066732610185699,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 39.091519653456274,
            CostPerAcre: 512.8029050368324,
            CostPerBoleCCF: 16.187069186000432,
            CostPerGT: 4.190888499585495,
            DieselPerAcre: 14.779689913028697,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1906825991252,
        center_lng: -121.061900144065,
        landing_lat: 39.188537,
        landing_lng: -121.061922,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '148494',
      geometry: {
        bbox: [
          -121.03272049717464,
          39.18520359317116,
          -121.02756386085319,
          39.189141113124904
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03272049717464, 39.18830484553615],
            [-121.02865894541893, 39.189141113124904],
            [-121.02756386085319, 39.18603982445557],
            [-121.03162525165293, 39.18520359317116],
            [-121.03272049717464, 39.18830484553615]
          ]
        ]
      },
      properties: {
        cluster_no: '162943',
        area: 32.025456,
        biomass: 354.9585894016142,
        distance: 3.8998000000000004,
        combinedCost: 11241.26053329233,
        residueCost: 4310.706162626922,
        transportationCost: 599.0454631081047,
        frcsResult: {
          Total: {
            WeightPerAcre: 25.99044444279334,
            CostPerAcre: 351.0101630806547,
            CostPerBoleCCF: 61.85573747210928,
            CostPerGT: 13.505354394891205,
            DieselPerAcre: 7.673251728981198,
            DieselPerBoleCCF: 1.3521963020660703,
            GasolinePerAcre: 0.016138403935817183,
            GasolinePerBoleCCF: 0.0028439429454451023,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.083638884068167,
            CostPerAcre: 134.60249130026196,
            CostPerBoleCCF: 23.719929622230776,
            CostPerGT: 5.178922261084485,
            DieselPerAcre: 3.8332544841448537,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2364218591448,
        center_lng: -121.065355997363,
        landing_lat: 39.236371,
        landing_lng: -121.065685,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '148741',
      geometry: {
        bbox: [
          -121.08979493519765,
          39.22334654258821,
          -121.08463380549254,
          39.22728545574863
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08463380549254, 39.224184643288744],
            [-121.0886966734801, 39.22334654258821],
            [-121.08979493519765, 39.22644731861806],
            [-121.08573190619745, 39.22728545574863],
            [-121.08463380549254, 39.224184643288744]
          ]
        ]
      },
      properties: {
        cluster_no: '166727',
        area: 31.803057,
        biomass: 393.5422375258321,
        distance: 5.2664,
        combinedCost: 12934.081893157296,
        residueCost: 4003.0860411203203,
        transportationCost: 705.3853609039566,
        frcsResult: {
          Total: {
            WeightPerAcre: 34.6247022305059,
            CostPerAcre: 406.69303875905064,
            CostPerBoleCCF: 50.381526388657775,
            CostPerGT: 11.74574834034922,
            DieselPerAcre: 8.77636875412063,
            DieselPerBoleCCF: 1.0872250366800262,
            GasolinePerAcre: 0.022173840142134034,
            GasolinePerBoleCCF: 0.0027469167302877607,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 12.374352488373432,
            CostPerAcre: 125.87110858935102,
            CostPerBoleCCF: 15.593034486929414,
            CostPerGT: 3.63529793704487,
            DieselPerAcre: 3.725214021896571,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1922561060088,
        center_lng: -121.088463167881,
        landing_lat: 39.191173,
        landing_lng: -121.088938,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '148934',
      geometry: {
        bbox: [
          -121.05960511982863,
          39.19962676242273,
          -121.05444661925766,
          39.2035649354751
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05444661925766, 39.200463873615924],
            [-121.05850850745506, 39.19962676242273],
            [-121.05960511982863, 39.20272778792308],
            [-121.05554307066426, 39.2035649354751],
            [-121.05444661925766, 39.200463873615924]
          ]
        ]
      },
      properties: {
        cluster_no: '157950',
        area: 32.025456,
        biomass: 636.1102461656096,
        distance: 4.0829,
        combinedCost: 23354.123615463242,
        residueCost: 7068.781656572195,
        transportationCost: 1036.9093481397608,
        frcsResult: {
          Total: {
            WeightPerAcre: 55.070977688033366,
            CostPerAcre: 729.2362555419428,
            CostPerBoleCCF: 49.775395783528396,
            CostPerGT: 13.241752483003438,
            DieselPerAcre: 15.243616438003391,
            DieselPerBoleCCF: 1.0404817857143382,
            GasolinePerAcre: 0.049635802332276845,
            GasolinePerBoleCCF: 0.0033879852891926876,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 19.86264445900816,
            CostPerAcre: 220.72384095240346,
            CostPerBoleCCF: 15.065921995474001,
            CostPerGT: 4.00798842182832,
            DieselPerAcre: 6.5116944452642445,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1993482797324,
        center_lng: -121.099464957176,
        landing_lat: 39.199345,
        landing_lng: -121.0992,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '149158',
      geometry: {
        bbox: [
          -121.08122820792418,
          39.248404446865045,
          -121.07606556188111,
          39.25234317912849
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07606556188111, 39.249242272921485],
            [-121.08012993301745, 39.248404446865045],
            [-121.08122820792418, 39.251505316619884],
            [-121.07716367564689, 39.25234317912849],
            [-121.07606556188111, 39.249242272921485]
          ]
        ]
      },
      properties: {
        cluster_no: '133838',
        area: 32.025456,
        biomass: 590.7679833805172,
        distance: 3.7103,
        combinedCost: 36268.86870563954,
        residueCost: 10010.6718026591,
        transportationCost: 918.2625173881245,
        frcsResult: {
          Total: {
            WeightPerAcre: 68.97390853394555,
            CostPerAcre: 1132.5012423129758,
            CostPerBoleCCF: 59.351165983420664,
            CostPerGT: 16.41927021948618,
            DieselPerAcre: 24.05601199470881,
            DieselPerBoleCCF: 1.2607071034033799,
            GasolinePerAcre: 0.08812071293339198,
            GasolinePerBoleCCF: 0.0046181556933265954,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 18.446825031328743,
            CostPerAcre: 312.5848325987646,
            CostPerBoleCCF: 16.381681176418496,
            CostPerGT: 4.5319286559630845,
            DieselPerAcre: 8.653973097437547,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1932829751125,
        center_lng: -121.048791553974,
        landing_lat: 39.192803,
        landing_lng: -121.051317,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '149170',
      geometry: {
        bbox: [
          -121.09792071144858,
          39.22166994398542,
          -121.09275944756678,
          39.225609049081164
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09682212774095, 39.22166994398542],
            [-121.09792071144858, 39.22477064714249],
            [-121.09385787028523, 39.225609049081164],
            [-121.09275944756678, 39.22250830948561],
            [-121.09682212774095, 39.22166994398542]
          ]
        ]
      },
      properties: {
        cluster_no: '162027',
        area: 32.025456,
        biomass: 448.42283654824814,
        distance: 3.7489,
        combinedCost: 42567.52800861318,
        residueCost: 7030.518059268357,
        transportationCost: 721.8438520093208,
        frcsResult: {
          Total: {
            WeightPerAcre: 78.55957484350846,
            CostPerAcre: 1329.177889258257,
            CostPerBoleCCF: 52.7850592929787,
            CostPerGT: 16.919362049832806,
            DieselPerAcre: 27.487533817410196,
            DieselPerBoleCCF: 1.0916003900572264,
            GasolinePerAcre: 0.11688153755293117,
            GasolinePerBoleCCF: 0.004641665302925638,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 14.002074991477036,
            CostPerAcre: 219.52905398968738,
            CostPerBoleCCF: 8.718061160228698,
            CostPerGT: 2.7944277247807374,
            DieselPerAcre: 6.490849591667738,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2147657196106,
        center_lng: -121.039710304411,
        landing_lat: 39.214754,
        landing_lng: -121.039708,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '149203',
      geometry: {
        bbox: [
          -121.07552485377846,
          39.18303577055768,
          -121.07036703597849,
          39.186974308439396
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07036703597849, 39.183873398174256],
            [-121.07442781185635, 39.18303577055768],
            [-121.07552485377846, 39.18613664446511],
            [-121.07146391703863, 39.186974308439396],
            [-121.07036703597849, 39.183873398174256]
          ]
        ]
      },
      properties: {
        cluster_no: '147965',
        area: 32.025456,
        biomass: 806.8230961498812,
        distance: 5.341,
        combinedCost: 32409.306721308258,
        residueCost: 9609.550826394703,
        transportationCost: 1636.754824539246,
        frcsResult: {
          Total: {
            WeightPerAcre: 71.73387505186089,
            CostPerAcre: 1011.9858003367152,
            CostPerBoleCCF: 51.23226141744458,
            CostPerGT: 14.107502203179287,
            DieselPerAcre: 21.350345411389696,
            DieselPerBoleCCF: 1.0808713690499505,
            GasolinePerAcre: 0.06765342077887863,
            GasolinePerBoleCCF: 0.0034249865343709785,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 25.19318057953277,
            CostPerAcre: 300.0597657811556,
            CostPerBoleCCF: 15.190668047162744,
            CostPerGT: 4.182957710903303,
            DieselPerAcre: 8.76785027365026,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2086794794001,
        center_lng: -121.102944393772,
        landing_lat: 39.209753,
        landing_lng: -121.103639,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '149289',
      geometry: {
        bbox: [
          -121.03400008864776,
          39.23816918743297,
          -121.02883964586798,
          39.242106785053366
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03290398842623, 39.23816918743297],
            [-121.03400008864776, 39.24127046570533],
            [-121.02993558490083, 39.242106785053366],
            [-121.02883964586798, 39.23900547040464],
            [-121.03290398842623, 39.23816918743297]
          ]
        ]
      },
      properties: {
        cluster_no: '162051',
        area: 30.913461,
        biomass: 474.3389059735978,
        distance: 3.4878,
        combinedCost: 15743.168554464824,
        residueCost: 4957.8853915438285,
        transportationCost: 780.661233896031,
        frcsResult: {
          Total: {
            WeightPerAcre: 41.38581594797026,
            CostPerAcre: 509.26580347845305,
            CostPerBoleCCF: 53.34066389343912,
            CostPerGT: 12.305322290098033,
            DieselPerAcre: 10.912787017784424,
            DieselPerBoleCCF: 1.1430088187355647,
            GasolinePerAcre: 0.025634510320461167,
            GasolinePerBoleCCF: 0.0026849668478367964,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 15.344089294097408,
            CostPerAcre: 160.37949912964544,
            CostPerBoleCCF: 16.7982002719224,
            CostPerGT: 3.8752286370594358,
            DieselPerAcre: 4.7205412023535676,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1894382854596,
        center_lng: -121.083387260639,
        landing_lat: 39.188466,
        landing_lng: -121.082331,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '149423',
      geometry: {
        bbox: [
          -121.0628955194901,
          39.208929816378806,
          -121.05773625470127,
          39.21286807601258
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05773625470127, 39.20976703666516],
            [-121.06179862583443, 39.208929816378806],
            [-121.06189112801488, 39.20919133770385],
            [-121.06155740618703, 39.209260120688604],
            [-121.06164880996683, 39.209518538085625],
            [-121.06198253289679, 39.209449754851846],
            [-121.06225675144985, 39.210225005983396],
            [-121.06192302521345, 39.21029378996423],
            [-121.06201443159809, 39.210552207152936],
            [-121.06234815893667, 39.2104834229231],
            [-121.0628955194901, 39.21203081935071],
            [-121.05883298735515, 39.21286807601258],
            [-121.05773625470127, 39.20976703666516]
          ]
        ]
      },
      properties: {
        cluster_no: '146939',
        area: 32.025456,
        biomass: 1447.6433111553476,
        distance: 4.0165,
        combinedCost: 47186.48300211713,
        residueCost: 19207.153750907622,
        transportationCost: 2234.892183423185,
        frcsResult: {
          Total: {
            WeightPerAcre: 106.0549781644511,
            CostPerAcre: 1473.4054997411163,
            CostPerBoleCCF: 63.12376992967367,
            CostPerGT: 13.892846193946902,
            DieselPerAcre: 33.02162074468091,
            DieselPerBoleCCF: 1.4147152233098246,
            GasolinePerAcre: 0.06516636674296397,
            GasolinePerBoleCCF: 0.0027918633004684478,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 45.202894570973406,
            CostPerAcre: 599.7464564097893,
            CostPerBoleCCF: 25.694391216267658,
            CostPerGT: 5.655052377454735,
            DieselPerAcre: 16.913753866245926,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1913220230711,
        center_lng: -121.057856157823,
        landing_lat: 39.189995,
        landing_lng: -121.056308,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 5
      }
    },
    {
      type: 'Feature',
      id: '149440',
      geometry: {
        bbox: [
          -121.02491554754211,
          39.20011728981407,
          -121.01975809491876,
          39.20405463665896
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.01975809491876, 39.2009532691213],
            [-121.02382041050984, 39.20011728981407],
            [-121.02491554754211, 39.20321862103787],
            [-121.02085307091352, 39.20405463665896],
            [-121.01975809491876, 39.2009532691213]
          ]
        ]
      },
      properties: {
        cluster_no: '165184',
        area: 32.025456,
        biomass: 983.4211544787657,
        distance: 4.2432,
        combinedCost: 40598.36872248966,
        residueCost: 12571.726506052899,
        transportationCost: 1660.7862637130415,
        frcsResult: {
          Total: {
            WeightPerAcre: 80.94123351086651,
            CostPerAcre: 1267.6905747256076,
            CostPerBoleCCF: 57.5334312982607,
            CostPerGT: 15.661863795977581,
            DieselPerAcre: 27.309026637738825,
            DieselPerBoleCCF: 1.239404977215991,
            GasolinePerAcre: 0.06920803145372904,
            GasolinePerBoleCCF: 0.00314096799512203,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 30.70748327451655,
            CostPerAcre: 392.5541764667738,
            CostPerBoleCCF: 17.815852853118336,
            CostPerGT: 4.849866494980864,
            DieselPerAcre: 11.307370667474093,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2025669053825,
        center_lng: -121.10090979103,
        landing_lat: 39.200244,
        landing_lng: -121.100246,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '149462',
      geometry: {
        bbox: [
          -121.11154204982974,
          39.23549589229332,
          -121.10637937700781,
          39.23943533422233
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10637937700781, 39.23633470486574],
            [-121.1104426742665, 39.23549589229332],
            [-121.11154204982974, 39.2385964851751],
            [-121.10747859154745, 39.23943533422233],
            [-121.10637937700781, 39.23633470486574]
          ]
        ]
      },
      properties: {
        cluster_no: '164298',
        area: 32.025456,
        biomass: 424.864376729403,
        distance: 5.8178,
        combinedCost: 16543.723904713734,
        residueCost: 5858.701892459954,
        transportationCost: 767.322803419527,
        frcsResult: {
          Total: {
            WeightPerAcre: 33.86923615633665,
            CostPerAcre: 516.5804322884188,
            CostPerBoleCCF: 61.54973024003776,
            CostPerGT: 15.252202024986353,
            DieselPerAcre: 11.061297787007328,
            DieselPerBoleCCF: 1.3179358960211451,
            GasolinePerAcre: 0.02673507140022957,
            GasolinePerBoleCCF: 0.003185440891252221,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 13.266458305212048,
            CostPerAcre: 182.9389062394601,
            CostPerBoleCCF: 21.796877360541792,
            CostPerGT: 5.401329554497018,
            DieselPerAcre: 5.086709377718265,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2323250188763,
        center_lng: -121.054757366671,
        landing_lat: 39.233433,
        landing_lng: -121.054584,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '149504',
      geometry: {
        bbox: [
          -121.10274967683421,
          39.21069087996393,
          -121.0975890435029,
          39.21463009016638
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.10165105299, 39.21069087996393],
            [-121.10274967683421, 39.21379153276164],
            [-121.09868750641624, 39.21463009016638],
            [-121.0975890435029, 39.21152940093846],
            [-121.10165105299, 39.21069087996393]
          ]
        ]
      },
      properties: {
        cluster_no: '164370',
        area: 32.025456,
        biomass: 675.6656886841403,
        distance: 4.3568,
        combinedCost: 54193.56667678344,
        residueCost: 9485.414341990358,
        transportationCost: 1100.890790506326,
        frcsResult: {
          Total: {
            WeightPerAcre: 120.06277022536537,
            CostPerAcre: 1692.202811313083,
            CostPerBoleCCF: 42.59563362516229,
            CostPerGT: 14.094317565192872,
            DieselPerAcre: 33.002878207356495,
            DieselPerBoleCCF: 0.830738785740216,
            GasolinePerAcre: 0.19860727867941455,
            GasolinePerBoleCCF: 0.004999284259168896,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 21.097769495745517,
            CostPerAcre: 296.18358414601056,
            CostPerBoleCCF: 7.455446446328306,
            CostPerGT: 2.4669061324343535,
            DieselPerAcre: 8.820846547612023,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.204809566094,
        center_lng: -121.040881709695,
        landing_lat: 39.20437,
        landing_lng: -121.040576,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '149537',
      geometry: {
        bbox: [
          -121.06070182595117,
          39.20272778792308,
          -121.05554307066426,
          39.20666598982207
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05554307066426, 39.2035649354751],
            [-121.05960511982863, 39.20272778792308],
            [-121.06070182595117, 39.20582880590566],
            [-121.05663961580821, 39.20666598982207],
            [-121.05554307066426, 39.2035649354751]
          ]
        ]
      },
      properties: {
        cluster_no: '146948',
        area: 32.025456,
        biomass: 908.4867484055752,
        distance: 5.668100000000001,
        combinedCost: 39687.05096274504,
        residueCost: 11114.171714165692,
        transportationCost: 1894.486913055247,
        frcsResult: {
          Total: {
            WeightPerAcre: 86.57861691032028,
            CostPerAcre: 1239.2345315159616,
            CostPerBoleCCF: 49.484658869066685,
            CostPerGT: 14.313401804507729,
            DieselPerAcre: 25.73563062685851,
            DieselPerBoleCCF: 1.0276657646010687,
            GasolinePerAcre: 0.0908979127371124,
            GasolinePerBoleCCF: 0.0036297021179709293,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 28.36764442653292,
            CostPerAcre: 347.0417943202961,
            CostPerBoleCCF: 13.857945666056079,
            CostPerGT: 4.008400765742982,
            DieselPerAcre: 10.153326452686654,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2148707006265,
        center_lng: -121.105408094967,
        landing_lat: 39.214589,
        landing_lng: -121.104092,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '149660',
      geometry: {
        bbox: [
          -121.05948230266297,
          39.23624976783483,
          -121.05432120072265,
          39.24018797086934
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05432120072265, 39.23708688195539],
            [-121.05838514172434, 39.23624976783483],
            [-121.05948230266297, 39.23935082034143],
            [-121.05541820053143, 39.24018797086934],
            [-121.05432120072265, 39.23708688195539]
          ]
        ]
      },
      properties: {
        cluster_no: '164531',
        area: 30.468663,
        biomass: 1087.3386954022794,
        distance: 3.9144,
        combinedCost: 32347.0679387644,
        residueCost: 13018.8981167827,
        transportationCost: 1796.6537754434257,
        frcsResult: {
          Total: {
            WeightPerAcre: 82.18682375833292,
            CostPerAcre: 1061.650389410405,
            CostPerBoleCCF: 56.54210959356522,
            CostPerGT: 12.91752547260064,
            DieselPerAcre: 23.73565087670236,
            DieselPerBoleCCF: 1.2641296857531712,
            GasolinePerAcre: 0.05674010794624385,
            GasolinePerBoleCCF: 0.003021903852575178,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 35.68711549313074,
            CostPerAcre: 427.2881326227771,
            CostPerBoleCCF: 22.756806443790023,
            CostPerGT: 5.198985835968072,
            DieselPerAcre: 12.228829485685171,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1907994878063,
        center_lng: -121.092503001165,
        landing_lat: 39.192003,
        landing_lng: -121.093133,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '149731',
      geometry: {
        bbox: [
          -121.09176766302193,
          39.17968393666411,
          -121.08660957695386,
          39.18362285845171
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08660957695386, 39.180522093642644],
            [-121.09066997776912, 39.17968393666411],
            [-121.09176766302193, 39.18278466509864],
            [-121.0877071013916, 39.18362285845171],
            [-121.08660957695386, 39.180522093642644]
          ]
        ]
      },
      properties: {
        cluster_no: '146791',
        area: 32.025456,
        biomass: 766.2950613239047,
        distance: 3.8663000000000003,
        combinedCost: 28666.886278171645,
        residueCost: 8835.919446212962,
        transportationCost: 1233.3509343467863,
        frcsResult: {
          Total: {
            WeightPerAcre: 65.35810282589861,
            CostPerAcre: 895.1281217719943,
            CostPerBoleCCF: 51.408507458501745,
            CostPerGT: 13.69574824037416,
            DieselPerAcre: 18.836870735419293,
            DieselPerBoleCCF: 1.0818288311394366,
            GasolinePerAcre: 0.057793936264943814,
            GasolinePerBoleCCF: 0.003319189657063788,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.927686192006284,
            CostPerAcre: 275.9030018561785,
            CostPerBoleCCF: 15.845509915014421,
            CostPerGT: 4.221404690878664,
            DieselPerAcre: 8.106244178541974,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.196143912182,
        center_lng: -121.098734052012,
        landing_lat: 39.19641,
        landing_lng: -121.098546,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '149947',
      geometry: {
        bbox: [
          -121.06387188496775,
          39.24865393343297,
          -121.05870976299472,
          39.25259225256131
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05870976299472, 39.249491193216414],
            [-121.06277434858553, 39.24865393343297],
            [-121.06387188496775, 39.25175495634822],
            [-121.05980713820063, 39.25259225256131],
            [-121.05870976299472, 39.249491193216414]
          ],
          [
            [-121.06224850837923, 39.25126092516188],
            [-121.06233996757294, 39.25151934456657],
            [-121.0633561407158, 39.25131001232378],
            [-121.06326467816426, 39.25105159367813],
            [-121.06224850837923, 39.25126092516188]
          ],
          [
            [-121.06175397315819, 39.25191731465491],
            [-121.06209270061441, 39.25184753974743],
            [-121.06200124188803, 39.25158912014098],
            [-121.06166251555113, 39.2516588947955],
            [-121.06175397315819, 39.25191731465491]
          ]
        ]
      },
      properties: {
        cluster_no: '141144',
        area: 32.025456,
        biomass: 965.7488886149281,
        distance: 3.5481,
        combinedCost: 34010.18547789954,
        residueCost: 11644.378814364467,
        transportationCost: 1648.5096750773464,
        frcsResult: {
          Total: {
            WeightPerAcre: 84.00399745660002,
            CostPerAcre: 1061.9734962680795,
            CostPerBoleCCF: 50.287024185058605,
            CostPerGT: 12.641940007875691,
            DieselPerAcre: 22.769467663250424,
            DieselPerBoleCCF: 1.0781895923829565,
            GasolinePerAcre: 0.07846032455143229,
            GasolinePerBoleCCF: 0.003715286918318186,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 30.155663938553385,
            CostPerAcre: 363.59759606122293,
            CostPerBoleCCF: 17.217229216184037,
            CostPerGT: 4.328336830030889,
            DieselPerAcre: 10.54420004323196,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1857202349824,
        center_lng: -121.068959779694,
        landing_lat: 39.186023,
        landing_lng: -121.069045,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '150138',
      geometry: {
        bbox: [
          -121.06354631095128,
          39.23541252126786,
          -121.05838514172434,
          39.23935082034143
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05838514172434, 39.23624976783483],
            [-121.06244898889453, 39.23541252126786],
            [-121.06354631095128, 39.23851353736288],
            [-121.05948230266297, 39.23935082034143],
            [-121.05838514172434, 39.23624976783483]
          ]
        ]
      },
      properties: {
        cluster_no: '134755',
        area: 32.025456,
        biomass: 959.4876453430074,
        distance: 3.5505,
        combinedCost: 40081.97267362442,
        residueCost: 11627.95197441894,
        transportationCost: 1642.2363460567863,
        frcsResult: {
          Total: {
            WeightPerAcre: 103.51362793613397,
            CostPerAcre: 1251.5660252776547,
            CostPerBoleCCF: 45.015211553838874,
            CostPerGT: 12.090833354327492,
            DieselPerAcre: 25.841019860437314,
            DieselPerBoleCCF: 0.9294267759677145,
            GasolinePerAcre: 0.12397760460185378,
            GasolinePerBoleCCF: 0.004459116008564184,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 29.9601556131787,
            CostPerAcre: 363.08466534930653,
            CostPerBoleCCF: 13.059105706411216,
            CostPerGT: 3.5076025503938784,
            DieselPerAcre: 10.642292614710094,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1866247034208,
        center_lng: -121.064776852973,
        landing_lat: 39.18643,
        landing_lng: -121.064715,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '150390',
      geometry: {
        bbox: [
          -121.05838514172434,
          39.23314870790973,
          -121.05322429473378,
          39.23708688195539
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05340820386157, 39.234505739748585],
            [-121.05341301229593, 39.23450474937226],
            [-121.05323020109849, 39.2339878994777],
            [-121.05322539269586, 39.23398888984684],
            [-121.05322429473378, 39.2339857856285],
            [-121.05728807461723, 39.23314870790973],
            [-121.05838514172434, 39.23624976783483],
            [-121.05432120072265, 39.23708688195539],
            [-121.05340820386157, 39.234505739748585]
          ],
          [
            [-121.05418172875555, 39.23462366893786],
            [-121.05436454833733, 39.2351405175122],
            [-121.05470320453973, 39.235070762974814],
            [-121.05452038272013, 39.23455391490603],
            [-121.05418172875555, 39.23462366893786]
          ]
        ]
      },
      properties: {
        cluster_no: '154216',
        area: 31.803057,
        biomass: 560.6792658414205,
        distance: 4.3671999999999995,
        combinedCost: 23329.023481146585,
        residueCost: 7189.274519663386,
        transportationCost: 894.6551376285561,
        frcsResult: {
          Total: {
            WeightPerAcre: 47.93434402163162,
            CostPerAcre: 733.5465732475525,
            CostPerBoleCCF: 58.5259502536994,
            CostPerGT: 15.30315243109451,
            DieselPerAcre: 15.61099845064628,
            DieselPerBoleCCF: 1.2455221686718594,
            GasolinePerAcre: 0.041792431897293945,
            GasolinePerBoleCCF: 0.0033344055843291427,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 17.629728671725506,
            CostPerAcre: 226.05608384324142,
            CostPerBoleCCF: 18.035865206190287,
            CostPerGT: 4.715952381474705,
            DieselPerAcre: 6.531345398450142,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.221192715866,
        center_lng: -121.042061040291,
        landing_lat: 39.222456,
        landing_lng: -121.04045,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '150561',
      geometry: {
        bbox: [
          -121.1135020213671,
          39.19183282382481,
          -121.108342394067,
          39.19577227338705
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.108342394067, 39.19267169210639],
            [-121.11240322359086, 39.19183282382481],
            [-121.1135020213671, 39.19493336868621],
            [-121.1094410310172, 39.19577227338705],
            [-121.108342394067, 39.19267169210639]
          ]
        ]
      },
      properties: {
        cluster_no: '159551',
        area: 32.025456,
        biomass: 580.5339814227644,
        distance: 4.1086,
        combinedCost: 30164.045262183514,
        residueCost: 7469.624932084821,
        transportationCost: 982.5523294811941,
        frcsResult: {
          Total: {
            WeightPerAcre: 69.85782222955693,
            CostPerAcre: 941.8771511694796,
            CostPerBoleCCF: 48.02938640434336,
            CostPerGT: 13.482772882246682,
            DieselPerAcre: 19.252564297206085,
            DieselPerBoleCCF: 0.9817510157846366,
            GasolinePerAcre: 0.08236830741952136,
            GasolinePerBoleCCF: 0.0042002285113423255,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 18.12726667881839,
            CostPerAcre: 233.2402365194994,
            CostPerBoleCCF: 11.893680010101168,
            CostPerGT: 3.338784821448602,
            DieselPerAcre: 6.873064243908216,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2302578573866,
        center_lng: -121.097264767663,
        landing_lat: 39.229343,
        landing_lng: -121.097521,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 2
      }
    },
    {
      type: 'Feature',
      id: '150863',
      geometry: {
        bbox: [
          -121.08199761997861,
          39.23826394400025,
          -121.07683567187068,
          39.242202685148634
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07683567187068, 39.23910179317058],
            [-121.08089946575251, 39.23826394400025],
            [-121.08199761997861, 39.24136479953865],
            [-121.07793366500248, 39.242202685148634],
            [-121.07683567187068, 39.23910179317058]
          ]
        ]
      },
      properties: {
        cluster_no: '143787',
        area: 31.358259,
        biomass: 258.3699028292581,
        distance: 5.3692,
        combinedCost: 11606.641109780448,
        residueCost: 3454.5475559456454,
        transportationCost: 446.660426591939,
        frcsResult: {
          Total: {
            WeightPerAcre: 25.43461273408421,
            CostPerAcre: 370.13027763373117,
            CostPerBoleCCF: 53.39175906634543,
            CostPerGT: 14.552227765502007,
            DieselPerAcre: 7.630314059347785,
            DieselPerBoleCCF: 1.100682420421684,
            GasolinePerAcre: 0.026868127692843195,
            GasolinePerBoleCCF: 0.0038757612846784125,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 8.239293604573458,
            CostPerAcre: 110.1638823745172,
            CostPerBoleCCF: 15.891278884711832,
            CostPerGT: 4.331258491185505,
            DieselPerAcre: 3.111590215760971,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.233045926129,
        center_lng: -121.051062240885,
        landing_lat: 39.233452,
        landing_lng: -121.051369,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '150975',
      geometry: {
        bbox: [
          -121.06728403207185,
          39.22133378334151,
          -121.06212374799918,
          39.225272158610586
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06212374799918, 39.222171149163316],
            [-121.06618676320906, 39.22133378334151],
            [-121.06728403207185, 39.224434756391034],
            [-121.06322085581377, 39.225272158610586],
            [-121.06212374799918, 39.222171149163316]
          ]
        ]
      },
      properties: {
        cluster_no: '134577',
        area: 32.025456,
        biomass: 226.9182367376591,
        distance: 4.1483,
        combinedCost: 10651.51815032317,
        residueCost: 2955.7568960053854,
        transportationCost: 347.6248197945173,
        frcsResult: {
          Total: {
            WeightPerAcre: 22.77916940261454,
            CostPerAcre: 332.5953625866614,
            CostPerBoleCCF: 55.741900056360926,
            CostPerGT: 14.600855575905541,
            DieselPerAcre: 6.848342220581251,
            DieselPerBoleCCF: 1.1477598624422507,
            GasolinePerAcre: 0.023282709989900386,
            GasolinePerBoleCCF: 0.003902106401017848,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 7.085558336395245,
            CostPerAcre: 92.29398313658315,
            CostPerBoleCCF: 15.468171124792473,
            CostPerGT: 4.051683426437395,
            DieselPerAcre: 2.6722610938066156,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2273596461979,
        center_lng: -121.043443907316,
        landing_lat: 39.228051,
        landing_lng: -121.044239,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '151028',
      geometry: {
        bbox: [
          -121.08397544568105,
          39.194601315304645,
          -121.0788165421518,
          39.19854006439232
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0788165421518, 39.19543922074943],
            [-121.0828778677519, 39.194601315304645],
            [-121.08397544568105, 39.19770212256336],
            [-121.07991395918434, 39.19854006439232],
            [-121.0788165421518, 39.19543922074943]
          ]
        ]
      },
      properties: {
        cluster_no: '150390',
        area: 31.580658,
        biomass: 386.90656217252473,
        distance: 5.936,
        combinedCost: 17677.760411240317,
        residueCost: 5267.068812713367,
        transportationCost: 697.2855392673616,
        frcsResult: {
          Total: {
            WeightPerAcre: 36.51320845512908,
            CostPerAcre: 559.7654238629327,
            CostPerBoleCCF: 56.76690188998171,
            CostPerGT: 15.330491281006596,
            DieselPerAcre: 11.549551821936115,
            DieselPerBoleCCF: 1.1712625453437238,
            GasolinePerAcre: 0.03598148439970453,
            GasolinePerBoleCCF: 0.0036489524141707017,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 12.251377478345281,
            CostPerAcre: 166.78147784993484,
            CostPerBoleCCF: 16.913634509322097,
            CostPerGT: 4.567702617941446,
            DieselPerAcre: 4.707376212649285,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.235613750404,
        center_lng: -121.05606128614,
        landing_lat: 39.235754,
        landing_lng: -121.056063,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '151031',
      geometry: {
        bbox: [
          -121.07309904943278,
          39.25007996652382,
          -121.06793653784466,
          39.25401850676621
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06793653784466, 39.25091752766755],
            [-121.07200109681965, 39.25007996652382],
            [-121.07309904943278, 39.25318090917876],
            [-121.06903432929333, 39.25401850676621],
            [-121.06793653784466, 39.25091752766755]
          ]
        ]
      },
      properties: {
        cluster_no: '154531',
        area: 32.025456,
        biomass: 877.4398495494369,
        distance: 4.5921,
        combinedCost: 27774.091771510273,
        residueCost: 10566.119723661062,
        transportationCost: 1670.6418703348486,
        frcsResult: {
          Total: {
            WeightPerAcre: 62.38403344644536,
            CostPerAcre: 867.250470110723,
            CostPerBoleCCF: 57.023842874432574,
            CostPerGT: 13.901801826507883,
            DieselPerAcre: 19.263441229660987,
            DieselPerBoleCCF: 1.266618449639826,
            GasolinePerAcre: 0.03543138947998811,
            GasolinePerBoleCCF: 0.002329700652997875,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 27.398200030295804,
            CostPerAcre: 329.9287830175178,
            CostPerBoleCCF: 21.693625695171672,
            CostPerGT: 5.288673476054587,
            DieselPerAcre: 9.602637374637515,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2219614794389,
        center_lng: -121.103531660582,
        landing_lat: 39.220954,
        landing_lng: -121.104093,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '151152',
      geometry: {
        bbox: [
          -121.05818414597113,
          39.18328446001867,
          -121.05302685141136,
          39.187222585079176
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05302685141136, 39.18412152186649],
            [-121.05708784126922, 39.18328446001867],
            [-121.05818414597113, 39.18638548689609],
            [-121.05412299521598, 39.187222585079176],
            [-121.05302685141136, 39.18412152186649]
          ]
        ]
      },
      properties: {
        cluster_no: '166965',
        area: 31.803057,
        biomass: 1138.5369004759525,
        distance: 4.178,
        combinedCost: 51174.24412009545,
        residueCost: 14930.143715837763,
        transportationCost: 1788.4742961070328,
        frcsResult: {
          Total: {
            WeightPerAcre: 125.04016528683412,
            CostPerAcre: 1609.0982737947315,
            CostPerBoleCCF: 46.89127308342526,
            CostPerGT: 12.86865120582305,
            DieselPerAcre: 33.16637911964984,
            DieselPerBoleCCF: 0.9665125901976505,
            GasolinePerAcre: 0.15946838714792494,
            GasolinePerBoleCCF: 0.004647121814562731,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 35.79960569438191,
            CostPerAcre: 469.45624490871313,
            CostPerBoleCCF: 13.680582062163115,
            CostPerGT: 3.754443572845658,
            DieselPerAcre: 13.479387421274943,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1882761799523,
        center_lng: -121.056776960582,
        landing_lat: 39.187895,
        landing_lng: -121.056466,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '151177',
      geometry: {
        bbox: [
          -121.07618002355316,
          39.2095182549629,
          -121.07102030239594,
          39.213456831525484
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07102030239594, 39.21035590882139],
            [-121.07508255314362, 39.2095182549629],
            [-121.07618002355316, 39.21261914127324],
            [-121.07211761182732, 39.213456831525484],
            [-121.07102030239594, 39.21035590882139]
          ]
        ]
      },
      properties: {
        cluster_no: '150138',
        area: 32.025456,
        biomass: 481.87796367084263,
        distance: 4.6657,
        combinedCost: 19365.03787738681,
        residueCost: 6128.104033128749,
        transportationCost: 835.7251912519664,
        frcsResult: {
          Total: {
            WeightPerAcre: 41.64643890698026,
            CostPerAcre: 604.6764135813339,
            CostPerBoleCCF: 55.609149096435395,
            CostPerGT: 14.519282547348498,
            DieselPerAcre: 12.711675736053367,
            DieselPerBoleCCF: 1.169030998059014,
            GasolinePerAcre: 0.03843474727261494,
            GasolinePerBoleCCF: 0.003534656790907176,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 15.046716701577727,
            CostPerAcre: 191.35103128988231,
            CostPerBoleCCF: 17.59762376993138,
            CostPerGT: 4.594655300955647,
            DieselPerAcre: 5.485982623049155,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2372454784851,
        center_lng: -121.060781635236,
        landing_lat: 39.237542,
        landing_lng: -121.060487,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '151198',
      geometry: {
        bbox: [
          -121.09122381847232,
          39.23968863101313,
          -121.08606148102993,
          39.243627593159346
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08606148102993, 39.240526781491965],
            [-121.09012524814477, 39.23968863101313],
            [-121.09122381847232, 39.24278940622681],
            [-121.08715989027505, 39.243627593159346],
            [-121.08606148102993, 39.240526781491965]
          ]
        ]
      },
      properties: {
        cluster_no: '161696',
        area: 32.025456,
        biomass: 1005.1415346309367,
        distance: 3.8,
        combinedCost: 36377.711487789165,
        residueCost: 10995.866238016799,
        transportationCost: 1709.8621878761787,
        frcsResult: {
          Total: {
            WeightPerAcre: 99.5950113653501,
            CostPerAcre: 1135.899875642338,
            CostPerBoleCCF: 44.4291241474695,
            CostPerGT: 11.405188473501461,
            DieselPerAcre: 23.778485768985185,
            DieselPerBoleCCF: 0.930061987788902,
            GasolinePerAcre: 0.10554185846615795,
            GasolinePerBoleCCF: 0.004128121177842314,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 31.38570562838939,
            CostPerAcre: 343.3476868531333,
            CostPerBoleCCF: 13.429561295019973,
            CostPerGT: 3.4474386030602604,
            DieselPerAcre: 10.168103964689506,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.186188888988,
        center_lng: -121.082252306695,
        landing_lat: 39.186354,
        landing_lng: -121.082098,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '151331',
      geometry: {
        bbox: [
          -121.0732150150778,
          39.213456831525484,
          -121.06805510628237,
          39.21739534098239
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07211761182732, 39.213456831525484],
            [-121.0732150150778, 39.216557746733685],
            [-121.06915234853138, 39.21739534098239],
            [-121.06805510628237, 39.214294389379106],
            [-121.07211761182732, 39.213456831525484]
          ]
        ]
      },
      properties: {
        cluster_no: '165228',
        area: 32.025456,
        biomass: 1174.4698214520895,
        distance: 4.551,
        combinedCost: 44214.190682830056,
        residueCost: 14307.148596529378,
        transportationCost: 1919.1570254646144,
        frcsResult: {
          Total: {
            WeightPerAcre: 107.64523100342183,
            CostPerAcre: 1380.59519536053,
            CostPerBoleCCF: 51.85854163968083,
            CostPerGT: 12.825419040780762,
            DieselPerAcre: 29.595275204885887,
            DieselPerBoleCCF: 1.1116711232285563,
            GasolinePerAcre: 0.0977824353849644,
            GasolinePerBoleCCF: 0.003672948098096465,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 36.67300854208257,
            CostPerAcre: 446.74300957742423,
            CostPerBoleCCF: 16.78076313915986,
            CostPerGT: 4.150142142044576,
            DieselPerAcre: 12.961231130123458,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1875084241336,
        center_lng: -121.06047669161,
        landing_lat: 39.186913,
        landing_lng: -121.059097,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '151364',
      geometry: {
        bbox: [
          -121.03509628263109,
          39.24127046570533,
          -121.02993558490083,
          39.245208092322564
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02993558490083, 39.242106785053366],
            [-121.03400008864776, 39.24127046570533],
            [-121.03509628263109, 39.24437173659258],
            [-121.03103161768385, 39.245208092322564],
            [-121.02993558490083, 39.242106785053366]
          ]
        ]
      },
      properties: {
        cluster_no: '149660',
        area: 32.025456,
        biomass: 498.46492426122586,
        distance: 6.0103,
        combinedCost: 27777.370751160168,
        residueCost: 6479.291603404269,
        transportationCost: 891.5343459027822,
        frcsResult: {
          Total: {
            WeightPerAcre: 57.28145284402131,
            CostPerAcre: 867.3528567761898,
            CostPerBoleCCF: 49.86320905766195,
            CostPerGT: 15.141949334595463,
            DieselPerAcre: 17.557217085892916,
            DieselPerBoleCCF: 1.0093460570114139,
            GasolinePerAcre: 0.07262543773811932,
            GasolinePerBoleCCF: 0.004175160497308996,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 15.564647206310688,
            CostPerAcre: 202.31691949692362,
            CostPerBoleCCF: 11.630988211964118,
            CostPerGT: 3.531979540530111,
            DieselPerAcre: 5.895457471821732,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2379899686207,
        center_lng: -121.056966680807,
        landing_lat: 39.236672,
        landing_lng: -121.057511,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '151395',
      geometry: {
        bbox: [
          -121.10537994676757,
          39.19351042805104,
          -121.1002204533668,
          39.197449685760766
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.1002204533668, 39.19434903165428],
            [-121.10428147065511, 39.19351042805104],
            [-121.10537994676757, 39.19661104574672],
            [-121.10131876862978, 39.197449685760766],
            [-121.1002204533668, 39.19434903165428]
          ]
        ]
      },
      properties: {
        cluster_no: '166955',
        area: 32.025456,
        biomass: 1082.302780863348,
        distance: 3.9482,
        combinedCost: 37068.02634339418,
        residueCost: 13367.761138591519,
        transportationCost: 1871.6195966847984,
        frcsResult: {
          Total: {
            WeightPerAcre: 85.99410588185007,
            CostPerAcre: 1157.4550677246932,
            CostPerBoleCCF: 58.05241745765457,
            CostPerGT: 13.459702334889743,
            DieselPerAcre: 25.789133127945675,
            DieselPerBoleCCF: 1.2934597324434798,
            GasolinePerAcre: 0.06225798638186922,
            GasolinePerBoleCCF: 0.003122563213290028,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 33.79507791749626,
            CostPerAcre: 417.41048553973815,
            CostPerBoleCCF: 20.935316137488975,
            CostPerGT: 4.853942968059126,
            DieselPerAcre: 12.018083215778097,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1873025780895,
        center_lng: -121.078186318105,
        landing_lat: 39.18586,
        landing_lng: -121.080814,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '151540',
      geometry: {
        bbox: [
          -121.0706936095776,
          39.194013710601105,
          -121.06553516211473,
          39.19795214288142
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06553516211473, 39.194851182574304],
            [-121.0695966081455, 39.194013710601105],
            [-121.0706936095776, 39.197114634542295],
            [-121.06663200262665, 39.19795214288142],
            [-121.06553516211473, 39.194851182574304]
          ]
        ]
      },
      properties: {
        cluster_no: '165733',
        area: 28.022274,
        biomass: 334.49236704668704,
        distance: 5.1036,
        combinedCost: 10225.0970045636,
        residueCost: 3915.893537812149,
        transportationCost: 592.9381175271694,
        frcsResult: {
          Total: {
            WeightPerAcre: 28.742215937172602,
            CostPerAcre: 364.8917644786287,
            CostPerBoleCCF: 55.13227901992517,
            CostPerGT: 12.695324719438576,
            DieselPerAcre: 8.04966350924445,
            DieselPerBoleCCF: 1.2162409180220555,
            GasolinePerAcre: 0.018246161671067386,
            GasolinePerBoleCCF: 0.0027568516864974867,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.936660352642582,
            CostPerAcre: 139.7421757353507,
            CostPerBoleCCF: 21.113944937894054,
            CostPerGT: 4.86191378009309,
            DieselPerAcre: 4.00821953051497,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1883902784852,
        center_lng: -121.088425930267,
        landing_lat: 39.188415,
        landing_lng: -121.089089,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '151561',
      geometry: {
        bbox: [
          -121.03819812932741,
          39.20070977968439,
          -121.03304021988957,
          39.20464744362862
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.03304021988957, 39.201546192546125],
            [-121.03710241558527, 39.20070977968439],
            [-121.03819812932741, 39.20381099443477],
            [-121.03413577261774, 39.20464744362862],
            [-121.03304021988957, 39.201546192546125]
          ]
        ]
      },
      properties: {
        cluster_no: '160660',
        area: 31.13586,
        biomass: 74.80497096441376,
        distance: 4.6158,
        combinedCost: 3644.2515498735092,
        residueCost: 918.7071584206956,
        transportationCost: 120.03924904864691,
        frcsResult: {
          Total: {
            WeightPerAcre: 8.227534270511136,
            CostPerAcre: 117.0435488171359,
            CostPerBoleCCF: 67.56384598183483,
            CostPerGT: 14.22583546526687,
            DieselPerAcre: 2.333784320852247,
            DieselPerBoleCCF: 1.347186120058904,
            GasolinePerAcre: 0.005018901264467842,
            GasolinePerBoleCCF: 0.002897180369678739,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 2.402534279265572,
            CostPerAcre: 29.506400607553335,
            CostPerBoleCCF: 17.03268506700628,
            CostPerGT: 3.5862993258270865,
            DieselPerAcre: 0.8567245166763364,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2307247676524,
        center_lng: -121.045341113257,
        landing_lat: 39.230497,
        landing_lng: -121.04545,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '151589',
      geometry: {
        bbox: [
          -121.11899741915286,
          39.20733547239595,
          -121.11383651793292,
          39.21127506631118
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.11383651793292, 39.20817452282945],
            [-121.11789815170259, 39.20733547239595],
            [-121.11899741915286, 39.210435979430564],
            [-121.11493562449931, 39.21127506631118],
            [-121.11383651793292, 39.20817452282945]
          ]
        ]
      },
      properties: {
        cluster_no: '162533',
        area: 31.803057,
        biomass: 59.34806284263297,
        distance: 4.625100000000001,
        combinedCost: 1108.8744315159656,
        residueCost: 521.8862511137384,
        transportationCost: 104.96007222286491,
        frcsResult: {
          Total: {
            WeightPerAcre: 3.335202798040489,
            CostPerAcre: 34.8669133132694,
            CostPerBoleCCF: 81.44125111895008,
            CostPerGT: 10.454210860507356,
            DieselPerAcre: 0.7885439464417003,
            DieselPerBoleCCF: 1.8418609351360633,
            GasolinePerAcre: 0.0006956979093046847,
            GasolinePerBoleCCF: 0.0016249935182260223,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 1.8661118911503687,
            CostPerAcre: 16.409939809048495,
            CostPerBoleCCF: 38.329920885969536,
            CostPerGT: 4.920222488026733,
            DieselPerAcre: 0.4604048120419956,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2260217954469,
        center_lng: -121.100730718836,
        landing_lat: 39.227467,
        landing_lng: -121.100986,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '151721',
      geometry: {
        bbox: [
          -121.02710610251654,
          39.206319944771906,
          -121.02194814052935,
          39.21025734929003
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02710610251654, 39.2094212610245],
            [-121.02304330377801, 39.21025734929003],
            [-121.02194814052935, 39.207155996712466],
            [-121.02601077820711, 39.206319944771906],
            [-121.02710610251654, 39.2094212610245]
          ]
        ]
      },
      properties: {
        cluster_no: '163973',
        area: 32.025456,
        biomass: 675.4174902436318,
        distance: 3.7893000000000003,
        combinedCost: 27848.440923535985,
        residueCost: 7945.926171977774,
        transportationCost: 1003.3996955537185,
        frcsResult: {
          Total: {
            WeightPerAcre: 60.30779722998225,
            CostPerAcre: 869.5720343072082,
            CostPerBoleCCF: 52.70668484282564,
            CostPerGT: 14.418898952503893,
            DieselPerAcre: 18.219997123552147,
            DieselPerBoleCCF: 1.1043543356282615,
            GasolinePerAcre: 0.05267042470700146,
            GasolinePerBoleCCF: 0.003192470969678113,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 21.090019459633357,
            CostPerAcre: 248.11281912669017,
            CostPerBoleCCF: 15.038666892725137,
            CostPerGT: 4.11410846561877,
            DieselPerAcre: 7.266303986459411,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2047377598055,
        center_lng: -121.105831003799,
        landing_lat: 39.205962,
        landing_lng: -121.106251,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '151770',
      geometry: {
        bbox: [
          -121.09835574488223,
          39.19828819342469,
          -121.09319613073608,
          39.202227288095536
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09319613073608, 39.199126568734016],
            [-121.09725749661544, 39.19828819342469],
            [-121.09835574488223, 39.201388876378275],
            [-121.09429421811829, 39.202227288095536],
            [-121.09319613073608, 39.199126568734016]
          ]
        ]
      },
      properties: {
        cluster_no: '165039',
        area: 32.025456,
        biomass: 768.2356255246561,
        distance: 3.852,
        combinedCost: 31807.833174236956,
        residueCost: 9767.18697972483,
        transportationCost: 1151.1944778170316,
        frcsResult: {
          Total: {
            WeightPerAcre: 76.08369743871746,
            CostPerAcre: 993.2046923621308,
            CostPerBoleCCF: 50.6250331920916,
            CostPerGT: 13.054106540525577,
            DieselPerAcre: 20.725747598059346,
            DieselPerBoleCCF: 1.0564203614335168,
            GasolinePerAcre: 0.08122915018050579,
            GasolinePerBoleCCF: 0.004140363467548083,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.988280620411967,
            CostPerAcre: 304.9819799513496,
            CostPerBoleCCF: 15.545358350358493,
            CostPerGT: 4.00850629265226,
            DieselPerAcre: 8.729924571954623,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.188943777875,
        center_lng: -121.052789571755,
        landing_lat: 39.189,
        landing_lng: -121.051893,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '151773',
      geometry: {
        bbox: [
          -121.09539239936568,
          39.202227288095536,
          -121.0902325974892,
          39.20616631567457
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.0902325974892, 39.20306556744951],
            [-121.09429421811829, 39.202227288095536],
            [-121.09539239936568, 39.20532799991127],
            [-121.09133061782872, 39.20616631567457],
            [-121.0902325974892, 39.20306556744951]
          ]
        ]
      },
      properties: {
        cluster_no: '161861',
        area: 30.468663,
        biomass: 340.40248541844466,
        distance: 4.5758,
        combinedCost: 11378.98077756572,
        residueCost: 4068.6796311397884,
        transportationCost: 555.1420935255732,
        frcsResult: {
          Total: {
            WeightPerAcre: 27.031924127056975,
            CostPerAcre: 373.4650508808253,
            CostPerBoleCCF: 60.564648826738,
            CostPerGT: 13.815703577941541,
            DieselPerAcre: 8.144133703592914,
            DieselPerBoleCCF: 1.3207302707248598,
            GasolinePerAcre: 0.017190485627714993,
            GasolinePerBoleCCF: 0.0027877728391133374,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.172216037784285,
            CostPerAcre: 133.53653329454556,
            CostPerBoleCCF: 21.655555788819857,
            CostPerGT: 4.9399566478098125,
            DieselPerAcre: 3.868455575948179,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2217827871779,
        center_lng: -121.038053266142,
        landing_lat: 39.222648,
        landing_lng: -121.038622,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '151886',
      geometry: {
        bbox: [
          -121.06322085581377,
          39.222171149163316,
          -121.05806063898149,
          39.226109428405415
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06212374799918, 39.222171149163316],
            [-121.06322085581377, 39.225272158610586],
            [-121.05915758573614, 39.226109428405415],
            [-121.05806063898149, 39.2230083825646],
            [-121.06212374799918, 39.222171149163316]
          ]
        ]
      },
      properties: {
        cluster_no: '160658',
        area: 32.025456,
        biomass: 214.56735253195282,
        distance: 5.6662,
        combinedCost: 14307.778036533633,
        residueCost: 2988.0490076900915,
        transportationCost: 374.74426100484584,
        frcsResult: {
          Total: {
            WeightPerAcre: 28.570455581607916,
            CostPerAcre: 446.7626639425098,
            CostPerBoleCCF: 55.747522723723655,
            CostPerGT: 15.63722575813985,
            DieselPerAcre: 9.12940444222078,
            DieselPerBoleCCF: 1.1391768441560242,
            GasolinePerAcre: 0.03506493189280403,
            GasolinePerBoleCCF: 0.00437543968032087,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 6.699899996176567,
            CostPerAcre: 93.30230950310565,
            CostPerBoleCCF: 11.642361904865,
            CostPerGT: 3.265692044587785,
            DieselPerAcre: 2.6915940301527757,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.238455669083,
        center_lng: -121.052357401816,
        landing_lat: 39.236261,
        landing_lng: -121.053602,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '151900',
      geometry: {
        bbox: [
          -121.02852052492351,
          39.22266268500593,
          -121.02336135654586,
          39.22660013784934
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.02336135654586, 39.22349878617915],
            [-121.02742489333504, 39.22266268500593],
            [-121.02852052492351, 39.225764000327594],
            [-121.02445682700377, 39.22660013784934],
            [-121.02336135654586, 39.22349878617915]
          ]
        ]
      },
      properties: {
        cluster_no: '157726',
        area: 32.025456,
        biomass: 1130.9197361403872,
        distance: 4.08,
        combinedCost: 32945.519533034116,
        residueCost: 13236.236662818086,
        transportationCost: 1804.8295619270928,
        frcsResult: {
          Total: {
            WeightPerAcre: 82.93648361268814,
            CostPerAcre: 1028.7291313833007,
            CostPerBoleCCF: 51.59434422208784,
            CostPerGT: 12.403819001869515,
            DieselPerAcre: 22.79063642516335,
            DieselPerBoleCCF: 1.1430296906039568,
            GasolinePerAcre: 0.0650228197198253,
            GasolinePerBoleCCF: 0.003261120581279076,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 35.313150143447984,
            CostPerAcre: 413.30361268917096,
            CostPerBoleCCF: 20.728613792285294,
            CostPerGT: 4.9833751647741815,
            DieselPerAcre: 11.909112090565442,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1932257984225,
        center_lng: -121.097932390155,
        landing_lat: 39.192856,
        landing_lng: -121.097934,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '151912',
      geometry: {
        bbox: [
          -121.10198345867612,
          39.22083144609213,
          -121.09682212774095,
          39.22477064714249
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09682212774095, 39.22166994398542],
            [-121.1008847139911, 39.22083144609213],
            [-121.10198345867612, 39.223932112806445],
            [-121.09792071144858, 39.22477064714249],
            [-121.09682212774095, 39.22166994398542]
          ]
        ]
      },
      properties: {
        cluster_no: '145277',
        area: 32.025456,
        biomass: 764.8910975853331,
        distance: 4.5057,
        combinedCost: 27332.716803126677,
        residueCost: 9930.706443620456,
        transportationCost: 1352.00559192594,
        frcsResult: {
          Total: {
            WeightPerAcre: 63.73843053360882,
            CostPerAcre: 853.468465933059,
            CostPerBoleCCF: 52.39378414794064,
            CostPerGT: 13.390170714715529,
            DieselPerAcre: 18.3804612656881,
            DieselPerBoleCCF: 1.1283626267799096,
            GasolinePerAcre: 0.06089055360223654,
            GasolinePerBoleCCF: 0.003738025069967164,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 23.88384719909478,
            CostPerAcre: 310.0879014375457,
            CostPerBoleCCF: 19.03606193234673,
            CostPerGT: 4.865006854444566,
            DieselPerAcre: 8.864776540988181,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2337286138296,
        center_lng: -121.094538673643,
        landing_lat: 39.23377,
        landing_lng: -121.094877,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '151921',
      geometry: {
        bbox: [
          -121.09342124101853,
          39.245890174015976,
          -121.08825839346837,
          39.24982919424561
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09232248275964, 39.245890174015976],
            [-121.09342124101853, 39.24899093438894],
            [-121.08935699062161, 39.24982919424561],
            [-121.08825839346837, 39.246728397407786],
            [-121.09232248275964, 39.245890174015976]
          ]
        ]
      },
      properties: {
        cluster_no: '120786',
        area: 32.025456,
        biomass: 834.935932108561,
        distance: 4.467,
        combinedCost: 27620.913368533966,
        residueCost: 9231.573957862307,
        transportationCost: 1416.3622460145473,
        frcsResult: {
          Total: {
            WeightPerAcre: 68.4371195153586,
            CostPerAcre: 862.4674499102829,
            CostPerBoleCCF: 53.263518520397376,
            CostPerGT: 12.602334172126117,
            DieselPerAcre: 18.662700090700266,
            DieselPerBoleCCF: 1.152554884274229,
            GasolinePerAcre: 0.042523652264587784,
            GasolinePerBoleCCF: 0.0026261389229070837,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 26.07100839121732,
            CostPerAcre: 288.25737743944404,
            CostPerBoleCCF: 17.801949700808006,
            CostPerGT: 4.212003361344768,
            DieselPerAcre: 8.560755042283681,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1985609046694,
        center_lng: -121.104024402739,
        landing_lat: 39.199136,
        landing_lng: -121.104032,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '152067',
      geometry: {
        bbox: [
          -121.08683010080337,
          39.22728545574863,
          -121.08166878329628,
          39.23122430189396
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.08166878329628, 39.22812346046845],
            [-121.08573190619745, 39.22728545574863],
            [-121.08683010080337, 39.23038626074277],
            [-121.08276681686618, 39.23122430189396],
            [-121.08166878329628, 39.22812346046845]
          ]
        ]
      },
      properties: {
        cluster_no: '166369',
        area: 32.025456,
        biomass: 656.1428815188502,
        distance: 4.604,
        combinedCost: 71356.12613193544,
        residueCost: 10346.495008249696,
        transportationCost: 1080.1285468911228,
        frcsResult: {
          Total: {
            WeightPerAcre: 139.28052871712313,
            CostPerAcre: 2228.106482915823,
            CostPerBoleCCF: 46.768653782893445,
            CostPerGT: 15.997257502095481,
            DieselPerAcre: 43.76948157798586,
            DieselPerBoleCCF: 0.9187351438871467,
            GasolinePerAcre: 0.24234871727456483,
            GasolinePerBoleCCF: 0.005086975573137658,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 20.488166710845594,
            CostPerAcre: 323.07096605430684,
            CostPerBoleCCF: 6.781360888518016,
            CostPerGT: 2.3195702158085543,
            DieselPerAcre: 9.543770696418836,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2018774877457,
        center_lng: -121.039723835391,
        landing_lat: 39.200893,
        landing_lng: -121.038113,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '152165',
      geometry: {
        bbox: [
          -121.02445682700377,
          39.22349878617915,
          -121.01929772607697,
          39.22743614291455
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.01929772607697, 39.2243347549],
            [-121.02336135654586, 39.22349878617915],
            [-121.02445682700377, 39.22660013784934],
            [-121.02039303539256, 39.22743614291455],
            [-121.01929772607697, 39.2243347549]
          ]
        ]
      },
      properties: {
        cluster_no: '163423',
        area: 32.025456,
        biomass: 313.6257348256485,
        distance: 5.126600000000001,
        combinedCost: 13019.1816763829,
        residueCost: 4464.991028164357,
        transportationCost: 539.3808533245268,
        frcsResult: {
          Total: {
            WeightPerAcre: 25.13287497107406,
            CostPerAcre: 406.52603592538696,
            CostPerBoleCCF: 67.32431470311285,
            CostPerGT: 16.175070953612195,
            DieselPerAcre: 8.572552040998316,
            DieselPerBoleCCF: 1.4196905989138426,
            GasolinePerAcre: 0.01884860106043127,
            GasolinePerBoleCCF: 0.0031214953960262597,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 9.793013870767322,
            CostPerAcre: 139.42006097163323,
            CostPerBoleCCF: 23.089197815866758,
            CostPerGT: 5.547318447734079,
            DieselPerAcre: 3.8571670176447603,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2255908353964,
        center_lng: -121.039372688633,
        landing_lat: 39.225558,
        landing_lng: -121.039421,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '152390',
      geometry: {
        bbox: [
          -121.06277434858553,
          39.245552903132236,
          -121.05761248165572,
          39.249491193216414
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05761248165572, 39.246390126491605],
            [-121.06167690608183, 39.245552903132236],
            [-121.06277434858553, 39.24865393343297],
            [-121.05870976299472, 39.249491193216414],
            [-121.05761248165572, 39.246390126491605]
          ]
        ]
      },
      properties: {
        cluster_no: '159572',
        area: 32.025456,
        biomass: 474.96010868414197,
        distance: 3.8955,
        combinedCost: 18668.594669878265,
        residueCost: 6248.895272321314,
        transportationCost: 814.2834634889621,
        frcsResult: {
          Total: {
            WeightPerAcre: 41.076122266359405,
            CostPerAcre: 582.9298627278957,
            CostPerBoleCCF: 60.7089062919698,
            CostPerGT: 14.191453101338746,
            DieselPerAcre: 12.544369587363928,
            DieselPerBoleCCF: 1.3064263927178434,
            GasolinePerAcre: 0.027904494004135923,
            GasolinePerBoleCCF: 0.0029060980058465153,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 14.830705570098424,
            CostPerAcre: 195.12275710676266,
            CostPerBoleCCF: 20.320950999476683,
            CostPerGT: 4.750272088525859,
            DieselPerAcre: 5.4667799369376775,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1856286491714,
        center_lng: -121.085836254118,
        landing_lat: 39.1854,
        landing_lng: -121.084622,
        land_use: 'private',
        haz_class: 2,
        forest_type: 'other',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '152559',
      geometry: {
        bbox: [
          -121.08353579867696,
          39.21798299593881,
          -121.07837524587613,
          39.221921755228664
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.07837524587613, 39.218820891397854],
            [-121.08243788573886, 39.21798299593881],
            [-121.08353579867696, 39.22108382335494],
            [-121.079472997813, 39.221921755228664],
            [-121.07837524587613, 39.218820891397854]
          ]
        ]
      },
      properties: {
        cluster_no: '143531',
        area: 32.025456,
        biomass: 813.0572073859335,
        distance: 4.0666,
        combinedCost: 50583.75184155937,
        residueCost: 12275.03533855814,
        transportationCost: 1286.7409476044463,
        frcsResult: {
          Total: {
            WeightPerAcre: 107.93075858171608,
            CostPerAcre: 1579.4857641233702,
            CostPerBoleCCF: 52.30337234533119,
            CostPerGT: 14.634250559144515,
            DieselPerAcre: 32.6596146450073,
            DieselPerBoleCCF: 1.0814962845714031,
            GasolinePerAcre: 0.1407274033371194,
            GasolinePerBoleCCF: 0.0046600722482726,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 25.387841702735894,
            CostPerAcre: 383.28994717696264,
            CostPerBoleCCF: 12.69233144025548,
            CostPerGT: 3.5512577898428073,
            DieselPerAcre: 10.857232340910565,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1901778993851,
        center_lng: -121.048045725323,
        landing_lat: 39.189362,
        landing_lng: -121.049349,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '152571',
      geometry: {
        bbox: [
          -121.06651274222156,
          39.23147415515014,
          -121.06135176068092,
          39.23541252126786
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06135176068092, 39.23231149774879],
            [-121.06541535291322, 39.23147415515014],
            [-121.06651274222156, 39.234575142259],
            [-121.06244898889453, 39.23541252126786],
            [-121.06135176068092, 39.23231149774879]
          ]
        ]
      },
      properties: {
        cluster_no: '153667',
        area: 31.580658,
        biomass: 224.72342519084444,
        distance: 5.571899999999999,
        combinedCost: 10405.257574391162,
        residueCost: 3098.41279669407,
        transportationCost: 391.75613637090055,
        frcsResult: {
          Total: {
            WeightPerAcre: 21.161067597869206,
            CostPerAcre: 329.48197515045956,
            CostPerBoleCCF: 66.89065869826895,
            CostPerGT: 15.570196240176296,
            DieselPerAcre: 6.908497365957022,
            DieselPerBoleCCF: 1.402546950294002,
            GasolinePerAcre: 0.015312883849760137,
            GasolinePerBoleCCF: 0.003108785804785811,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 7.115856331772582,
            CostPerAcre: 98.11109055087041,
            CostPerBoleCCF: 19.918283753022717,
            CostPerGT: 4.636396065421086,
            DieselPerAcre: 2.7555300214292844,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2363711981673,
        center_lng: -121.051717203462,
        landing_lat: 39.235751,
        landing_lng: -121.051075,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 3
      }
    },
    {
      type: 'Feature',
      id: '152581',
      geometry: {
        bbox: [
          -121.05696378602302,
          39.21680626850347,
          -121.05180414614362,
          39.220744393859235
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.05586702684899, 39.21680626850347],
            [-121.05696378602302, 39.21990732926669],
            [-121.05290074426921, 39.220744393859235],
            [-121.05180414614362, 39.217643296717824],
            [-121.05586702684899, 39.21680626850347]
          ]
        ]
      },
      properties: {
        cluster_no: '165183',
        area: 31.358259,
        biomass: 631.6169869902875,
        distance: 4.9102,
        combinedCost: 59668.0738586752,
        residueCost: 10195.837869667888,
        transportationCost: 1072.4035156202863,
        frcsResult: {
          Total: {
            WeightPerAcre: 125.45856234618628,
            CostPerAcre: 1902.7865628214627,
            CostPerBoleCCF: 45.99777720976891,
            CostPerGT: 15.166653652310913,
            DieselPerAcre: 37.09732074083082,
            DieselPerBoleCCF: 0.8967870216540862,
            GasolinePerAcre: 0.21040903890785526,
            GasolinePerBoleCCF: 0.0050864076316862435,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 20.141966012535566,
            CostPerAcre: 325.14043173340355,
            CostPerBoleCCF: 7.859913157356294,
            CostPerGT: 2.591616113344433,
            DieselPerAcre: 9.456856568130918,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1986469401451,
        center_lng: -121.038707958981,
        landing_lat: 39.198481,
        landing_lng: -121.039136,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'other',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '152705',
      geometry: {
        bbox: [
          -121.10341503925895,
          39.237173385028406,
          -121.09825250051881,
          39.241112635070444
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09825250051881, 39.238011932776864],
            [-121.1023159857547, 39.237173385028406],
            [-121.10341503925895, 39.24027405085562],
            [-121.0993513929759, 39.241112635070444],
            [-121.09825250051881, 39.238011932776864]
          ]
        ]
      },
      properties: {
        cluster_no: '165465',
        area: 32.025456,
        biomass: 856.3021576748812,
        distance: 4.5243,
        combinedCost: 40453.59084077146,
        residueCost: 11271.055909594172,
        transportationCost: 1460.8515173082117,
        frcsResult: {
          Total: {
            WeightPerAcre: 78.17095012947082,
            CostPerAcre: 1263.1698621487687,
            CostPerBoleCCF: 58.00038499969782,
            CostPerGT: 16.15907009006083,
            DieselPerAcre: 26.942988454942423,
            DieselPerBoleCCF: 1.2371287110751443,
            GasolinePerAcre: 0.07245453792300596,
            GasolinePerBoleCCF: 0.0033268614304658092,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 26.738172211345912,
            CostPerAcre: 351.94052848440856,
            CostPerBoleCCF: 16.159890099316453,
            CostPerGT: 4.502190748628566,
            DieselPerAcre: 10.150842716645537,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2017527569983,
        center_lng: -121.105001160064,
        landing_lat: 39.199131,
        landing_lng: -121.104696,
        land_use: 'private',
        haz_class: 3,
        forest_type: 'pine',
        site_class: 0
      }
    },
    {
      type: 'Feature',
      id: '152803',
      geometry: {
        bbox: [
          -121.06257030191529,
          39.19568852217423,
          -121.05741198881874,
          39.19962676242273
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.06147362233528, 39.19568852217423],
            [-121.06156610646323, 39.195950042969244],
            [-121.0612324452297, 39.1960188248798],
            [-121.06141521776398, 39.196535658573154],
            [-121.06174888120094, 39.19646687616478],
            [-121.06257030191529, 39.19878951884306],
            [-121.05850850745506, 39.19962676242273],
            [-121.05796133404178, 39.198079351002114],
            [-121.05796613999998, 39.19807836045818],
            [-121.05787476374876, 39.19781994101742],
            [-121.05786995780643, 39.197820931557786],
            [-121.05741198881874, 39.19652572939642],
            [-121.06147362233528, 39.19568852217423]
          ]
        ]
      },
      properties: {
        cluster_no: '141763',
        area: 32.025456,
        biomass: 360.89352862993326,
        distance: 5.2158,
        combinedCost: 17035.8861061429,
        residueCost: 4882.610242645334,
        transportationCost: 627.6837420143374,
        frcsResult: {
          Total: {
            WeightPerAcre: 35.46756949540435,
            CostPerAcre: 531.9482759634368,
            CostPerBoleCCF: 58.01270457124413,
            CostPerGT: 14.99815982689096,
            DieselPerAcre: 10.918444173398086,
            DieselPerBoleCCF: 1.1907332062722993,
            GasolinePerAcre: 0.03441292067949478,
            GasolinePerBoleCCF: 0.00375297127751272,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 11.268958313347147,
            CostPerAcre: 152.46028792362347,
            CostPerBoleCCF: 16.62686776480486,
            CostPerGT: 4.298582905247518,
            DieselPerAcre: 4.299372159045987,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2339933273645,
        center_lng: -121.046608143263,
        landing_lat: 39.233548,
        landing_lng: -121.046596,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'other',
        site_class: 4
      }
    },
    {
      type: 'Feature',
      id: '152921',
      geometry: {
        bbox: [
          -121.09692607071995,
          39.18194633941206,
          -121.09176766302193,
          39.18588538593243
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09176766302193, 39.18278466509864],
            [-121.0958281308459, 39.18194633941206],
            [-121.09692607071995, 39.185047023861515],
            [-121.09286544208105, 39.18588538593243],
            [-121.09176766302193, 39.18278466509864]
          ]
        ]
      },
      properties: {
        cluster_no: '164708',
        area: 32.025456,
        biomass: 319.9255872702311,
        distance: 4.7287,
        combinedCost: 17718.422163442643,
        residueCost: 4130.034727714834,
        transportationCost: 520.5426391028677,
        frcsResult: {
          Total: {
            WeightPerAcre: 37.66903329640159,
            CostPerAcre: 553.260573821108,
            CostPerBoleCCF: 48.92958900296235,
            CostPerGT: 14.687410995332321,
            DieselPerAcre: 11.059825484460553,
            DieselPerBoleCCF: 0.9781154504859422,
            GasolinePerAcre: 0.04963446770449305,
            GasolinePerBoleCCF: 0.0043896026936973065,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 9.989727773750705,
            CostPerAcre: 128.9609967681595,
            CostPerBoleCCF: 11.405129640267278,
            CostPerGT: 3.4235281737500487,
            DieselPerAcre: 3.7620269773874373,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.2281432613062,
        center_lng: -121.040719098326,
        landing_lat: 39.227962,
        landing_lng: -121.040188,
        land_use: 'private',
        haz_class: 0,
        forest_type: 'pine',
        site_class: 6
      }
    },
    {
      type: 'Feature',
      id: '153106',
      geometry: {
        bbox: [
          -121.09945408702575,
          39.201388876378275,
          -121.09429421811829,
          39.20532799991127
        ],
        type: 'Polygon',
        coordinates: [
          [
            [-121.09429421811829, 39.202227288095536],
            [-121.09835574488223, 39.201388876378275],
            [-121.09945408702575, 39.204489551780505],
            [-121.09539239936568, 39.20532799991127],
            [-121.09429421811829, 39.202227288095536]
          ]
        ]
      },
      properties: {
        cluster_no: '151395',
        area: 32.025456,
        biomass: 624.5912220065917,
        distance: 4.5405,
        combinedCost: 26970.256385885754,
        residueCost: 7140.497513772117,
        transportationCost: 1045.4871054539196,
        frcsResult: {
          Total: {
            WeightPerAcre: 62.872405551543125,
            CostPerAcre: 842.1505812715284,
            CostPerBoleCCF: 52.23673350000101,
            CostPerGT: 13.394597739403004,
            DieselPerAcre: 17.626776895125772,
            DieselPerBoleCCF: 1.0933498920637623,
            GasolinePerAcre: 0.0555240876332024,
            GasolinePerBoleCCF: 0.003444036058429249,
            JetFuelPerAcre: 0,
            JetFuelPerBoleCCF: 0
          },
          Residue: {
            WeightPerAcre: 19.50296108216513,
            CostPerAcre: 222.96318009561259,
            CostPerBoleCCF: 13.829911749727843,
            CostPerGT: 3.5462804093415228,
            DieselPerAcre: 6.594705819658747,
            GasolinePerAcre: 0,
            JetFuelPerAcre: 0
          }
        },
        center_lat: 39.1953234424481,
        center_lng: -121.102907826587,
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
    },
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
