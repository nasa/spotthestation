function julian(date) {
  /* Calculate the present UTC Julian Date. Function is valid after
   * the beginning of the UNIX epoch 1970-01-01 and ignores leap
   * seconds. */
  return (date / 86400000) + 2440587.5
}

function GMST(julianDay) {
  /* Calculate Greenwich Mean Sidereal Time according to 
     http://aa.usno.navy.mil/faq/docs/GAST.php */
  const d = julianDay - 2451545.0
  // Low precision equation is good enough for our purposes.
  return (18.697374558 + 24.06570982441908 * d) % 24
}

const R2D = 180 / Math.PI
const D2R = Math.PI / 180

function sunEclipticPosition (julianDay) {
  /* Compute the position of the Sun in ecliptic coordinates at
     julianDay.  Following
     http://en.wikipedia.org/wiki/Position_of_the_Sun */
  // Days since start of J2000.0
  const n = julianDay - 2451545.0
  // mean longitude of the Sun
  let L = 280.460 + 0.9856474 * n
  L %= 360
  // mean anomaly of the Sun
  let g = 357.528 + 0.9856003 * n
  g %= 360
  // ecliptic longitude of Sun
  const lambda = L + 1.915 * Math.sin(g * D2R) +
    0.02 * Math.sin(2 * g * D2R)
  // distance from Sun in AU
  const R = 1.00014 - 0.01671 * Math.cos(g * D2R) -
    0.0014 * Math.cos(2 * g * D2R)
  return {lambda, R}
}

function eclipticObliquity (julianDay) {
  // Following the short term expression in
  // http://en.wikipedia.org/wiki/Axial_tilt#Obliquity_of_the_ecliptic_.28Earth.27s_axial_tilt.29
  const n = julianDay - 2451545.0
  // Julian centuries since J2000.0
  const T = n / 36525
  const epsilon = 23.43929111 -
    T * (46.836769 / 3600
      - T * (0.0001831 / 3600
        + T * (0.00200340 / 3600
          - T * (0.576e-6 / 3600
            - T * 4.34e-8 / 3600))))
  return epsilon
}

function sunEquatorialPosition (sunEclLng, eclObliq) {
  /* Compute the Sun's equatorial position from its ecliptic
   * position. Inputs are expected in degrees. Outputs are in
   * degrees as well. */
  let alpha = Math.atan(Math.cos(eclObliq * D2R)
    * Math.tan(sunEclLng * D2R)) * R2D
  const delta = Math.asin(Math.sin(eclObliq * D2R)
    * Math.sin(sunEclLng * D2R)) * R2D

  const lQuadrant = Math.floor(sunEclLng / 90) * 90
  const raQuadrant = Math.floor(alpha / 90) * 90
  alpha = alpha + (lQuadrant - raQuadrant)

  return {alpha, delta}
}

function hourAngle (lng, sunPos: { alpha: number, delta: number }, gst: number) {
  /* Compute the hour angle of the sun for a longitude on
   * Earth. Return the hour angle in degrees. */
  const lst = gst + lng / 15
  return lst * 15 - sunPos.alpha
}

function latitude (ha, sunPos: { alpha: number, delta: number }) {
  /* For a given hour angle and sun position, compute the
   * latitude of the terminator in degrees. */
  const lat = Math.atan(-Math.cos(ha * D2R) /
    Math.tan(sunPos.delta * D2R)) * R2D
  return lat
}

export function compute (time: Date, resolution = 2): [number, number][] {
  const today = time || new Date()
  const julianDay = julian(today)
  const gst = GMST(julianDay)
  const latLng: [number, number][] = []
  const startMinus = -360

  const sunEclPos = sunEclipticPosition(julianDay)
  const eclObliq = eclipticObliquity(julianDay)
  const sunEqPos = sunEquatorialPosition(sunEclPos.lambda, eclObliq)
  for (let i = 0; i <= 720 * resolution; i++) {
    const lng = startMinus + i / resolution
    const ha = hourAngle(lng, sunEqPos, gst)
    latLng[i + 1] = [-latitude(ha, sunEqPos), lng - 180]
  }
  if (sunEqPos.delta > 0) {
    latLng[0] = [-90, startMinus]
    latLng[latLng.length] = [-90, 180]
  } else {
    latLng[0] = [90, startMinus]
    latLng[latLng.length] = [90, 180]
  }
  return latLng
}

export function latLonTo2D(latLng: [number, number]): [number, number] {
  const lon = latLng[1]
  const lat = latLng[0]
  const lonRad = ((lon + 180) / 180.0 * Math.PI)
  const smA = 6378137.0
  const x = (smA * lonRad) / (2 * Math.PI * smA)
  const y = (-lat + 90) / 180
  return [x, y]
}

