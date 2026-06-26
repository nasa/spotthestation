import { getOrbitalSpeed, getSatPath, getSightings, SatData, ShadowInterval } from "../satellite"
import mockISSDataFull from "../../../test/mockISSDataFull.json"
import mockISSData200min from "../../../test/mockISSData200min.json"

describe("getOrbitalSpeed", () => {
  it("should calculate the orbital speed at a given latitude, azimuth, and elevation", () => {
    const latitude = 45
    const azimuth = 0
    const elevation = 100
    const expected = 8182
    expect(getOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
  })

  it("should calculate the orbital speed when latitude is 0", () => {
    const latitude = 0
    const azimuth = 90
    const elevation = 200
    const expected = 7574
    expect(getOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
  })

  it("should calculate the orbital speed when azimuth is 180", () => {
    const latitude = -30
    const azimuth = 180
    const elevation = 50
    const expected = 7636
    expect(getOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
  })
})

describe("getSightings", () => {
  it("should calculate sightings for provided location correctly", async () => {
    const result = await getSightings(
      mockISSDataFull.points as SatData[],
      mockISSDataFull.shadowIntervals as ShadowInterval[],
      29.7751019,
      -95.3740024, // Houston, TX
    )

    console.log(result.sightings)

    expect(result.sightings).toEqual([
      {
        date: "2024-11-06T11:13:36.000Z",
        maxHeight: 52,
        minAltitude: 41,
        maxAltitude: 5,
        minAzimuth: 358.59814615179044,
        maxAzimuth: 125.38395121476786,
        visible: 5,
        dayStage: 0,
        cloudCover: null,
      },
      {
        date: "2024-11-07T10:26:36.000Z",
        maxHeight: 16,
        minAltitude: 16,
        maxAltitude: 5,
        minAzimuth: 88.98816067556216,
        maxAzimuth: 107.3812578970283,
        visible: 2,
        dayStage: 0,
        cloudCover: null,
      },
      {
        date: "2024-11-07T11:59:31.000Z",
        maxHeight: 18,
        minAltitude: 13,
        maxAltitude: 5,
        minAzimuth: 269.3630402056663,
        maxAzimuth: 176.68480710156493,
        visible: 5,
        dayStage: 1,
        cloudCover: null,
      },
      {
        date: "2024-11-08T11:12:36.000Z",
        maxHeight: 30,
        minAltitude: 30,
        maxAltitude: 5,
        minAzimuth: 192.23850125153345,
        maxAzimuth: 156.20188220622865,
        visible: 3,
        dayStage: 0,
        cloudCover: null,
      },
      {
        date: "2024-11-09T10:25:51.000Z",
        maxHeight: 8,
        minAltitude: 8,
        maxAltitude: 5,
        minAzimuth: 137.84823074746757,
        maxAzimuth: 137.82725601782153,
        visible: 1,
        dayStage: 0,
        cloudCover: null,
      },
      {
        date: "2024-11-10T01:19:01.000Z",
        maxHeight: 18,
        minAltitude: 5,
        maxAltitude: 18,
        minAzimuth: 210.9002974659313,
        maxAzimuth: 202.55564969987685,
        visible: 2,
        dayStage: 0,
        cloudCover: null,
      },
    ])

    expect(result.lastSightingOrbitPointAt).toEqual("2024-11-10T10:00:00.000Z")
  })
})

describe("getSatPath", () => {
  it("should calculate ISS path correctly", () => {
    const result = getSatPath(
      mockISSData200min.points as SatData[],
      29.7751019,
      -95.3740024, // Houston, TX
    )

    expect(result).toEqual([
      {
        date: "Wed, 06 Nov 2024 10:03:00 GMT",
        latitude: -31.31959861544948,
        longitude: -17.25335232474539,
        azimuth: expect.closeTo(122.6568576174525, 12),
        elevation: expect.closeTo(-46.42252389638022, 12),
        altitude: 421.51001241752783,
      },
      {
        date: "Wed, 06 Nov 2024 10:07:00 GMT",
        latitude: -41.12711329041695,
        longitude: -3.3235409953324253,
        azimuth: expect.closeTo(126.39087136663885, 12),
        elevation: expect.closeTo(-54.01380146160084, 12),
        altitude: 427.13369065178176,
      },
      {
        date: "Wed, 06 Nov 2024 10:11:00 GMT",
        latitude: -48.394803371629436,
        longitude: 15.023812611122302,
        azimuth: expect.closeTo(130.49165018542033, 12),
        elevation: expect.closeTo(-61.53898849684535, 12),
        altitude: 431.71246963460544,
      },
      {
        date: "Wed, 06 Nov 2024 10:15:00 GMT",
        latitude: -51.574182975418715,
        longitude: 37.685909819105504,
        azimuth: expect.closeTo(135.775461742806, 12),
        elevation: expect.closeTo(-68.9836872912147, 12),
        altitude: 434.41992828951334,
      },
      {
        date: "Wed, 06 Nov 2024 10:19:00 GMT",
        latitude: -49.664131313975574,
        longitude: 60.988615511210874,
        azimuth: expect.closeTo(144.54650974869276, 12),
        elevation: expect.closeTo(-76.26363269796501, 12),
        altitude: 434.84315352840986,
      },
      {
        date: "Wed, 06 Nov 2024 10:23:00 GMT",
        latitude: -43.30347859656478,
        longitude: 80.56050495688706,
        azimuth: expect.closeTo(167.4689029698941, 12),
        elevation: expect.closeTo(-82.89474144214022, 12),
        altitude: 433.08075703317445,
      },
      {
        date: "Wed, 06 Nov 2024 10:27:00 GMT",
        latitude: -34.03744375712229,
        longitude: 95.48814407591735,
        azimuth: expect.closeTo(243.16912442365972, 12),
        elevation: expect.closeTo(-84.79580281051139, 12),
        altitude: 429.6952869422212,
      },
      {
        date: "Wed, 06 Nov 2024 10:31:00 GMT",
        latitude: -23.13913664466421,
        longitude: 107.03209846162214,
        azimuth: expect.closeTo(283.4452852007117, 12),
        elevation: expect.closeTo(-79.0928134754455, 12),
        altitude: 425.54609433446603,
      },
      {
        date: "Wed, 06 Nov 2024 10:35:00 GMT",
        latitude: -11.395279232145164,
        longitude: 116.61451352802523,
        azimuth: expect.closeTo(295.17626512548514, 12),
        elevation: expect.closeTo(-71.9147813611319, 12),
        altitude: 421.5423661398172,
      },
      {
        date: "Wed, 06 Nov 2024 10:39:00 GMT",
        latitude: 0.7051894546793137,
        longitude: 125.34296917573786,
        azimuth: expect.closeTo(300.8597468371566, 12),
        elevation: expect.closeTo(-64.44855046721197, 12),
        altitude: 418.4021668727182,
      },
      {
        date: "Wed, 06 Nov 2024 10:43:00 GMT",
        latitude: 12.79444447477423,
        longitude: 134.13053349791207,
        azimuth: expect.closeTo(304.4861002772865, 12),
        elevation: expect.closeTo(-56.85528082889445, 12),
        altitude: 416.4943725024441,
      },
      {
        date: "Wed, 06 Nov 2024 10:47:00 GMT",
        latitude: 24.495045299488638,
        longitude: 143.90657806838652,
        azimuth: expect.closeTo(307.1830332380285, 12),
        elevation: expect.closeTo(-49.163968096764634, 12),
        altitude: 415.7809250188111,
      },
      {
        date: "Wed, 06 Nov 2024 10:51:00 GMT",
        latitude: 35.284744481569874,
        longitude: 155.8265504229342,
        azimuth: expect.closeTo(309.39947473840016, 12),
        elevation: expect.closeTo(-41.362745270859314, 12),
        altitude: 415.85387428551076,
      },
      {
        date: "Wed, 06 Nov 2024 10:55:00 GMT",
        latitude: 44.309185736103636,
        longitude: 171.36255578751644,
        azimuth: expect.closeTo(311.37333257508857, 12),
        elevation: expect.closeTo(-33.40596374875608, 12),
        altitude: 416.09249116704086,
      },
      {
        date: "Wed, 06 Nov 2024 10:59:00 GMT",
        latitude: 50.20457167913977,
        longitude: -168.3347879056364,
        azimuth: expect.closeTo(313.2902602925419, 12),
        elevation: expect.closeTo(-25.188592435534126, 12),
        altitude: 415.87599909472374,
      },
      {
        date: "Wed, 06 Nov 2024 11:03:00 GMT",
        latitude: 51.429615444554486,
        longitude: -144.67620653614668,
        azimuth: expect.closeTo(315.40658954380274, 12),
        elevation: expect.closeTo(-16.45221293662253, 12),
        altitude: 414.80709261199445,
      },
      {
        date: "Wed, 06 Nov 2024 11:07:00 GMT",
        latitude: 47.56072691487066,
        longitude: -122.35841161584787,
        azimuth: expect.closeTo(318.38210288636253, 12),
        elevation: expect.closeTo(-6.385522484666942, 12),
        altitude: 412.87890144528956,
      },
      {
        date: "Wed, 06 Nov 2024 11:11:00 GMT",
        latitude: 39.789640310023884,
        longitude: -104.62517840922636,
        azimuth: expect.closeTo(325.7720131514978, 12),
        elevation: expect.closeTo(9.341433136183168, 12),
        altitude: 410.49886533185327,
      },
      {
        date: "Wed, 06 Nov 2024 11:15:00 GMT",
        latitude: 29.668675691796444,
        longitude: -91.1867964340032,
        azimuth: expect.closeTo(88.18494906652225, 12),
        elevation: expect.closeTo(42.52467454520872, 12),
        altitude: 408.37359173650566,
      },
      {
        date: "Wed, 06 Nov 2024 11:19:00 GMT",
        latitude: 18.283741303592073,
        longitude: -80.55239673132772,
        azimuth: expect.closeTo(126.66463380334228, 12),
        elevation: expect.closeTo(2.4668448482606222, 12),
        altitude: 407.30230730165204,
      },
      {
        date: "Wed, 06 Nov 2024 11:23:00 GMT",
        latitude: 6.289605068365155,
        longitude: -71.4058933310561,
        azimuth: expect.closeTo(131.18025682233798, 12),
        elevation: expect.closeTo(-10.18459917756974, 12),
        altitude: 407.92173655235274,
      },
      {
        date: "Wed, 06 Nov 2024 11:27:00 GMT",
        latitude: -5.883109359260798,
        longitude: -62.7325788753239,
        azimuth: expect.closeTo(133.10757860700528, 12),
        elevation: expect.closeTo(-19.665729863787362, 12),
        altitude: 410.5083062279482,
      },
      {
        date: "Wed, 06 Nov 2024 11:31:00 GMT",
        latitude: -17.871900103108686,
        longitude: -53.6331835763065,
        azimuth: expect.closeTo(134.20653684919415, 12),
        elevation: expect.closeTo(-28.223102190351955, 12),
        altitude: 414.87640198461304,
      },
      {
        date: "Wed, 06 Nov 2024 11:35:00 GMT",
        latitude: -29.25574588914751,
        longitude: -43.108069028256985,
        azimuth: expect.closeTo(134.86040429534194, 12),
        elevation: expect.closeTo(-36.387489669585705, 12),
        altitude: 420.39086538098763,
      },
      {
        date: "Wed, 06 Nov 2024 11:39:00 GMT",
        latitude: -39.40325563428342,
        longitude: -29.87048369200186,
        azimuth: expect.closeTo(135.1714864471576, 12),
        elevation: expect.closeTo(-44.34738271598872, 12),
        altitude: 426.1000915145478,
      },
      {
        date: "Wed, 06 Nov 2024 11:43:00 GMT",
        latitude: -47.270956752199865,
        longitude: -12.445632407456937,
        azimuth: expect.closeTo(135.12718964404442, 12),
        elevation: expect.closeTo(-52.185983001690964, 12),
        altitude: 430.9540863556431,
      },
      {
        date: "Wed, 06 Nov 2024 11:47:00 GMT",
        latitude: -51.34951630156405,
        longitude: 9.560985427287463,
        azimuth: expect.closeTo(134.60588051174776, 12),
        elevation: expect.closeTo(-59.94432888385493, 12),
        altitude: 434.0656763831066,
      },
      {
        date: "Wed, 06 Nov 2024 11:51:00 GMT",
        latitude: -50.41744676546162,
        longitude: 33.14529144731418,
        azimuth: expect.closeTo(133.26291352134476, 12),
        elevation: expect.closeTo(-67.64051055414893, 12),
        altitude: 434.9354929753217,
      },
      {
        date: "Wed, 06 Nov 2024 11:55:00 GMT",
        latitude: -44.795451107437934,
        longitude: 53.61781353185948,
        azimuth: expect.closeTo(130.00576610050553, 12),
        elevation: expect.closeTo(-75.26618486308512, 12),
        altitude: 433.56188955833477,
      },
      {
        date: "Wed, 06 Nov 2024 11:59:00 GMT",
        latitude: -35.970665597963304,
        longitude: 69.36522228004767,
        azimuth: expect.closeTo(119.26795521030694, 12),
        elevation: expect.closeTo(-82.70059871715617, 12),
        altitude: 430.42574920616335,
      },
      {
        date: "Wed, 06 Nov 2024 12:03:00 GMT",
        latitude: -25.311025581596233,
        longitude: 81.43858708916032,
        azimuth: expect.closeTo(32.190405573330175, 12),
        elevation: expect.closeTo(-87.20535050672376, 12),
        altitude: 426.3424480944377,
      },
      {
        date: "Wed, 06 Nov 2024 12:07:00 GMT",
        latitude: -13.684775139291494,
        longitude: 91.30148906837101,
        azimuth: expect.closeTo(337.7873117246717, 12),
        elevation: expect.closeTo(-81.02851908678574, 12),
        altitude: 422.23267436109745,
      },
      {
        date: "Wed, 06 Nov 2024 12:11:00 GMT",
        latitude: -1.6222801544743495,
        longitude: 100.11950516351118,
        azimuth: expect.closeTo(329.67499621641946, 12),
        elevation: expect.closeTo(-73.52071291165905, 12),
        altitude: 418.87892325946905,
      },
      {
        date: "Wed, 06 Nov 2024 12:15:00 GMT",
        latitude: 10.49643393061786,
        longitude: 108.82721729203524,
        azimuth: expect.closeTo(326.37904953514766, 12),
        elevation: expect.closeTo(-65.88084762964269, 12),
        altitude: 416.7255386371253,
      },
      {
        date: "Wed, 06 Nov 2024 12:19:00 GMT",
        latitude: 22.305302528114222,
        longitude: 118.33417518376254,
        azimuth: expect.closeTo(324.2931139474995, 12),
        elevation: expect.closeTo(-58.18459082676439, 12),
        altitude: 415.81114868817895,
      },
      {
        date: "Wed, 06 Nov 2024 12:23:00 GMT",
        latitude: 33.322285470379384,
        longitude: 129.73807210287907,
        azimuth: expect.closeTo(322.53076913420284, 12),
        elevation: expect.closeTo(-50.43831134414432, 12),
        altitude: 415.78731206902194,
      },
      {
        date: "Wed, 06 Nov 2024 12:27:00 GMT",
        latitude: 42.77369453241776,
        longitude: 144.46221163888228,
        azimuth: expect.closeTo(320.69785685584384, 12),
        elevation: expect.closeTo(-42.62803279082417, 12),
        altitude: 416.04885468317934,
      },
      {
        date: "Wed, 06 Nov 2024 12:31:00 GMT",
        latitude: 49.39520543007572,
        longitude: 163.84206748989675,
        azimuth: expect.closeTo(318.4814481544815, 12),
        elevation: expect.closeTo(-34.7204612301071, 12),
        altitude: 415.95595522470103,
      },
      {
        date: "Wed, 06 Nov 2024 12:35:00 GMT",
        latitude: 51.602238837635234,
        longitude: -172.83863707435935,
        azimuth: expect.closeTo(315.45525056507336, 12),
        elevation: expect.closeTo(-26.647677744457074, 12),
        altitude: 415.0624163448201,
      },
      {
        date: "Wed, 06 Nov 2024 12:39:00 GMT",
        latitude: 48.653902638682204,
        longitude: -149.8928662840487,
        azimuth: expect.closeTo(310.77502489297586, 12),
        elevation: expect.closeTo(-18.261999753600374, 12),
        altitude: 413.28000143535974,
      },
      {
        date: "Wed, 06 Nov 2024 12:43:00 GMT",
        latitude: 41.501740557283895,
        longitude: -131.2224428981312,
        azimuth: expect.closeTo(302.2192227779477, 12),
        elevation: expect.closeTo(-9.203539999473895, 12),
        altitude: 410.94047410177336,
      },
      {
        date: "Wed, 06 Nov 2024 12:47:00 GMT",
        latitude: 31.7300718251736,
        longitude: -117.07115189409015,
        azimuth: expect.closeTo(281.9857253670196, 12),
        elevation: expect.closeTo(1.300398890340349, 12),
        altitude: 408.7132029024515,
      },
      {
        date: "Wed, 06 Nov 2024 12:51:00 GMT",
        latitude: 20.526406059372498,
        longitude: -106.01266929173637,
        azimuth: expect.closeTo(229.05358369778236, 12),
        elevation: expect.closeTo(8.321615247650227, 12),
        altitude: 407.3954790899843,
      },
      {
        date: "Wed, 06 Nov 2024 12:55:00 GMT",
        latitude: 8.61143513267894,
        longitude: -96.66679444054839,
        azimuth: expect.closeTo(183.56360488442184, 12),
        elevation: expect.closeTo(-1.0979847266128195, 12),
        altitude: 407.6698771058009,
      },
      {
        date: "Wed, 06 Nov 2024 12:59:00 GMT",
        latitude: -3.555118827016241,
        longitude: -87.97277803417921,
        azimuth: expect.closeTo(166.67011986024656, 12),
        elevation: expect.closeTo(-11.213276780184005, 12),
        altitude: 409.8930643164258,
      },
      {
        date: "Wed, 06 Nov 2024 13:03:00 GMT",
        latitude: -15.607656861607728,
        longitude: -79.02598355399648,
        azimuth: expect.closeTo(158.54412437342825, 12),
        elevation: expect.closeTo(-20.01172545284541, 12),
        altitude: 413.97187362808654,
      },
      {
        date: "Wed, 06 Nov 2024 13:07:00 GMT",
        latitude: -27.14662472120597,
        longitude: -68.86248333959297,
        azimuth: expect.closeTo(153.27060052641733, 12),
        elevation: expect.closeTo(-28.20281259334781, 12),
        altitude: 419.3454237221713,
      },
      {
        date: "Wed, 06 Nov 2024 13:11:00 GMT",
        latitude: -37.5954175415621,
        longitude: -56.25938773650396,
        azimuth: expect.closeTo(149.00616782171087, 12),
        elevation: expect.closeTo(-36.07440808910718, 12),
        altitude: 425.0994900088699,
      },
      {
        date: "Wed, 06 Nov 2024 13:15:00 GMT",
        latitude: -46.004823997738086,
        longitude: -39.73342116408791,
        azimuth: expect.closeTo(144.9173152408837, 12),
        elevation: expect.closeTo(-43.73545244494258, 12),
        altitude: 430.1900283713194,
      },
      {
        date: "Wed, 06 Nov 2024 13:19:00 GMT",
        latitude: -50.932036663978984,
        longitude: -18.498365001372136,
        azimuth: expect.closeTo(140.4123095401766, 12),
        elevation: expect.closeTo(-51.21743348660801, 12),
        altitude: 433.6872357292241,
      },
      {
        date: "Wed, 06 Nov 2024 13:23:00 GMT",
        latitude: -50.99161425607445,
        longitude: 5.1729241469835525,
        azimuth: expect.closeTo(134.8023595537507, 12),
        elevation: expect.closeTo(-58.49778479847604, 12),
        altitude: 434.99992079008007,
      },
    ])
  })
})
