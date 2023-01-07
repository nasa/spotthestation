import { LatLng } from "react-native-maps"

export class NightOverlay {
  private earthRadiusMeters: number
  getShadowRadiusFromAngle: (angle: number) => number
  getShadowPosition: () => LatLng
  private jday: (date: Date) => number
  private calculatePositionOfSun: () => LatLng

  constructor() {
    this.earthRadiusMeters = 6371008
    
    this.getShadowRadiusFromAngle = (angle) => {
      const shadowRadius =  this.earthRadiusMeters * Math.PI * 0.5
      const twilightDist = ((this.earthRadiusMeters * 2 * Math.PI) / 360) * angle
      return shadowRadius - twilightDist
    }

    this.getShadowPosition = () => {
      const sunPosition = this.calculatePositionOfSun()
      return sunPosition ? { latitude: sunPosition.latitude, longitude: sunPosition.longitude } : null
    }

    this.jday = (date) => {
      return (date.getTime() / 86400000.0) + 2440587.5
    }

    this.calculatePositionOfSun = () => {
      const date = new Date()

      const rad = 0.017453292519943295

      // based on NOAA solar calculations
      const msPastMidnight = ((date.getUTCHours() * 60 + date.getUTCMinutes()) * 60 + date.getUTCSeconds()) * 1000 + date.getUTCMilliseconds()
      const jc = (this.jday(date) - 2451545)/36525
      const meanLongSun = (280.46646+jc*(36000.76983+jc*0.0003032)) % 360
      const meanAnomSun = 357.52911+jc*(35999.05029-0.0001537*jc)
      const sunEq = Math.sin(rad*meanAnomSun)*(1.914602-jc*(0.004817+0.000014*jc))+Math.sin(rad*2*meanAnomSun)*(0.019993-0.000101*jc)+Math.sin(rad*3*meanAnomSun)*0.000289
      const sunTrueLong = meanLongSun + sunEq
      const sunAppLong = sunTrueLong - 0.00569 - 0.00478*Math.sin(rad*125.04-1934.136*jc)
      const meanObliqEcliptic = 23+(26+((21.448-jc*(46.815+jc*(0.00059-jc*0.001813))))/60)/60
      const obliqCorr = meanObliqEcliptic + 0.00256*Math.cos(rad*125.04-1934.136*jc)

      const latitude = Math.asin(Math.sin(rad*obliqCorr)*Math.sin(rad*sunAppLong)) / rad

      const eccent = 0.016708634-jc*(0.000042037+0.0000001267*jc)
      const y = Math.tan(rad*(obliqCorr/2))*Math.tan(rad*(obliqCorr/2))
      const rqOfTime = 4*((y*Math.sin(2*rad*meanLongSun)-2*eccent*Math.sin(rad*meanAnomSun)+4*eccent*y*Math.sin(rad*meanAnomSun)*Math.cos(2*rad*meanLongSun)-0.5*y*y*Math.sin(4*rad*meanLongSun)-1.25*eccent*eccent*Math.sin(2*rad*meanAnomSun))/rad)
      const trueSolarTimeInDeg = ((msPastMidnight+rqOfTime*60000) % 86400000) / 240000

      const longitude = -((trueSolarTimeInDeg < 0) ? trueSolarTimeInDeg + 180 : trueSolarTimeInDeg - 180)

      return { latitude, longitude }
    }
  }
}
