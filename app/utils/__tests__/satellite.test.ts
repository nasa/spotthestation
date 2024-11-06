import { getOrbitalSpeed, getSatPath, getSightings, SatData, ShadowInterval } from "../satellite"
import mockISSData from "../../../test/mockISSData.json"

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
      mockISSData.points as SatData[],
      mockISSData.shadowIntervals as ShadowInterval[],
      29.7751019,
      -95.3740024, // Houston, TX
    )

    expect(result.sightings).toEqual([
      {
        date: "2024-11-06T11:13:36.000Z",
        maxHeight: 52,
        minAltitude: 41,
        maxAltitude: 10,
        minAzimuth: 358.59814615179044,
        maxAzimuth: 122.55012853993368,
        visible: 4,
        dayStage: 0,
      },
      {
        date: "2024-11-07T10:26:36.000Z",
        maxHeight: 16,
        minAltitude: 16,
        maxAltitude: 10,
        minAzimuth: 88.98816067556216,
        maxAzimuth: 99.92076969936295,
        visible: 1,
        dayStage: 0,
      },
      {
        date: "2024-11-07T11:59:31.000Z",
        maxHeight: 18,
        minAltitude: 13,
        maxAltitude: 10,
        minAzimuth: 269.3630402056663,
        maxAzimuth: 187.9949070577351,
        visible: 4,
        dayStage: 1,
      },
      {
        date: "2024-11-08T11:12:36.000Z",
        maxHeight: 30,
        minAltitude: 30,
        maxAltitude: 10,
        minAzimuth: 192.23850125153345,
        maxAzimuth: 160.73420395746138,
        visible: 2,
        dayStage: 0,
      },
      {
        date: "2024-11-10T01:19:56.000Z",
        maxHeight: 18,
        minAltitude: 10,
        maxAltitude: 18,
        minAzimuth: 208.20625488206244,
        maxAzimuth: 202.55564969987685,
        visible: 1,
        dayStage: 0,
      },
    ])

    expect(result.lastSightingOrbitPointAt).toEqual("2024-11-10T10:00:00.000Z")
  })
})

describe("getSatPath", () => {
  it("should calculate ISS path correctly", () => {
    const first = mockISSData.points[0] as SatData

    // take first 100 minutes of data
    const points = (mockISSData.points as SatData[]).filter(
      (p) => new Date(p.date).getTime() - new Date(first.date).getTime() < 100 * 60 * 1000,
    )

    const result = getSatPath(
      points,
      29.7751019,
      -95.3740024, // Houston, TX
    )

    expect(result).toEqual([
      {
        date: "Wed, 06 Nov 2024 10:03:00 GMT",
        latitude: -31.31959861544948,
        longitude: -17.25335232474539,
        azimuth: 122.6568576174525,
        elevation: -46.42252389638022,
        altitude: 421.51001241752783,
      },
      {
        date: "Wed, 06 Nov 2024 10:07:00 GMT",
        latitude: -41.12711329041695,
        longitude: -3.3235409953324253,
        azimuth: 126.39087136663885,
        elevation: -54.01380146160084,
        altitude: 427.13369065178176,
      },
      {
        date: "Wed, 06 Nov 2024 10:11:00 GMT",
        latitude: -48.394803371629436,
        longitude: 15.023812611122302,
        azimuth: 130.49165018542033,
        elevation: -61.53898849684535,
        altitude: 431.71246963460544,
      },
      {
        date: "Wed, 06 Nov 2024 10:15:00 GMT",
        latitude: -51.574182975418715,
        longitude: 37.685909819105504,
        azimuth: 135.775461742806,
        elevation: -68.9836872912147,
        altitude: 434.41992828951334,
      },
      {
        date: "Wed, 06 Nov 2024 10:19:00 GMT",
        latitude: -49.664131313975574,
        longitude: 60.988615511210874,
        azimuth: 144.54650974869276,
        elevation: -76.26363269796501,
        altitude: 434.84315352840986,
      },
      {
        date: "Wed, 06 Nov 2024 10:23:00 GMT",
        latitude: -43.30347859656478,
        longitude: 80.56050495688706,
        azimuth: 167.4689029698941,
        elevation: -82.89474144214022,
        altitude: 433.08075703317445,
      },
      {
        date: "Wed, 06 Nov 2024 10:27:00 GMT",
        latitude: -34.03744375712229,
        longitude: 95.48814407591735,
        azimuth: 243.16912442365972,
        elevation: -84.79580281051139,
        altitude: 429.6952869422212,
      },
      {
        date: "Wed, 06 Nov 2024 10:31:00 GMT",
        latitude: -23.13913664466421,
        longitude: 107.03209846162214,
        azimuth: 283.4452852007117,
        elevation: -79.0928134754455,
        altitude: 425.54609433446603,
      },
      {
        date: "Wed, 06 Nov 2024 10:35:00 GMT",
        latitude: -11.395279232145164,
        longitude: 116.61451352802523,
        azimuth: 295.17626512548514,
        elevation: -71.9147813611319,
        altitude: 421.5423661398172,
      },
      {
        date: "Wed, 06 Nov 2024 10:39:00 GMT",
        latitude: 0.7051894546793137,
        longitude: 125.34296917573786,
        azimuth: 300.8597468371566,
        elevation: -64.44855046721197,
        altitude: 418.4021668727182,
      },
      {
        date: "Wed, 06 Nov 2024 10:43:00 GMT",
        latitude: 12.79444447477423,
        longitude: 134.13053349791207,
        azimuth: 304.4861002772865,
        elevation: -56.85528082889445,
        altitude: 416.4943725024441,
      },
      {
        date: "Wed, 06 Nov 2024 10:47:00 GMT",
        latitude: 24.495045299488638,
        longitude: 143.90657806838652,
        azimuth: 307.1830332380285,
        elevation: -49.163968096764634,
        altitude: 415.7809250188111,
      },
      {
        date: "Wed, 06 Nov 2024 10:51:00 GMT",
        latitude: 35.284744481569874,
        longitude: 155.8265504229342,
        azimuth: 309.39947473840016,
        elevation: -41.362745270859314,
        altitude: 415.85387428551076,
      },
      {
        date: "Wed, 06 Nov 2024 10:55:00 GMT",
        latitude: 44.309185736103636,
        longitude: 171.36255578751644,
        azimuth: 311.37333257508857,
        elevation: -33.40596374875608,
        altitude: 416.09249116704086,
      },
      {
        date: "Wed, 06 Nov 2024 10:59:00 GMT",
        latitude: 50.20457167913977,
        longitude: -168.3347879056364,
        azimuth: 313.2902602925419,
        elevation: -25.188592435534126,
        altitude: 415.87599909472374,
      },
      {
        date: "Wed, 06 Nov 2024 11:03:00 GMT",
        latitude: 51.429615444554486,
        longitude: -144.67620653614668,
        azimuth: 315.40658954380274,
        elevation: -16.45221293662253,
        altitude: 414.80709261199445,
      },
      {
        date: "Wed, 06 Nov 2024 11:07:00 GMT",
        latitude: 47.56072691487066,
        longitude: -122.35841161584787,
        azimuth: 318.38210288636253,
        elevation: -6.385522484666942,
        altitude: 412.87890144528956,
      },
      {
        date: "Wed, 06 Nov 2024 11:11:00 GMT",
        latitude: 39.789640310023884,
        longitude: -104.62517840922636,
        azimuth: 325.7720131514978,
        elevation: 9.341433136183168,
        altitude: 410.49886533185327,
      },
      {
        date: "Wed, 06 Nov 2024 11:15:00 GMT",
        latitude: 29.668675691796444,
        longitude: -91.1867964340032,
        azimuth: 88.18494906652225,
        elevation: 42.52467454520872,
        altitude: 408.37359173650566,
      },
      {
        date: "Wed, 06 Nov 2024 11:19:00 GMT",
        latitude: 18.283741303592073,
        longitude: -80.55239673132772,
        azimuth: 126.66463380334228,
        elevation: 2.4668448482606222,
        altitude: 407.30230730165204,
      },
      {
        date: "Wed, 06 Nov 2024 11:23:00 GMT",
        latitude: 6.289605068365155,
        longitude: -71.4058933310561,
        azimuth: 131.18025682233798,
        elevation: -10.18459917756974,
        altitude: 407.92173655235274,
      },
      {
        date: "Wed, 06 Nov 2024 11:27:00 GMT",
        latitude: -5.883109359260798,
        longitude: -62.7325788753239,
        azimuth: 133.10757860700528,
        elevation: -19.665729863787362,
        altitude: 410.5083062279482,
      },
      {
        date: "Wed, 06 Nov 2024 11:31:00 GMT",
        latitude: -17.871900103108686,
        longitude: -53.6331835763065,
        azimuth: 134.20653684919415,
        elevation: -28.223102190351955,
        altitude: 414.87640198461304,
      },
      {
        date: "Wed, 06 Nov 2024 11:35:00 GMT",
        latitude: -29.25574588914751,
        longitude: -43.108069028256985,
        azimuth: 134.86040429534194,
        elevation: -36.387489669585705,
        altitude: 420.39086538098763,
      },
      {
        date: "Wed, 06 Nov 2024 11:39:00 GMT",
        latitude: -39.40325563428342,
        longitude: -29.87048369200186,
        azimuth: 135.1714864471576,
        elevation: -44.34738271598872,
        altitude: 426.1000915145478,
      },
    ])
  })
})
