import { useEffect, useCallback, useState } from "react"
import { CatmullRomCurve3, Vector3 } from "three"
import { OrbitPoint } from "../services/api"

export function useISSPathCurve(
  issPath: OrbitPoint[],
  mapper: (point: [number, number]) => Vector3,
) {
  const [curve, setCurve] = useState<CatmullRomCurve3>()
  const [curveStartsAt, setCurveStartsAt] = useState(0)
  const [curveEndsAt, setCurveEndsAt] = useState(0)

  const updateCurve = useCallback(() => {
    if (!issPath.length) return

    let currentPositionIdx = 0

    issPath.forEach((point, idx) => {
      if (
        Math.abs(new Date(point.date).valueOf() - new Date().valueOf()) <
        Math.abs(new Date(issPath[currentPositionIdx].date).valueOf() - new Date().valueOf())
      ) {
        currentPositionIdx = idx
      }
    })

    let startPositionIdx = currentPositionIdx
    for (; startPositionIdx > 0; startPositionIdx -= 1) {
      if (issPath[startPositionIdx].longitude < issPath[startPositionIdx - 1].longitude) {
        break
      }
    }

    let endPositionIdx = currentPositionIdx
    for (; endPositionIdx < issPath.length - 1; endPositionIdx += 1) {
      if (issPath[endPositionIdx].longitude > issPath[endPositionIdx + 1].longitude) {
        break
      }
    }

    const bf = issPath[startPositionIdx - 1]
    const af = issPath[endPositionIdx + 1]

    const issPathCoords = issPath
      .slice(startPositionIdx, endPositionIdx + 1)
      .map((p) => [p.latitude, p.longitude])
    if (bf) issPathCoords.unshift([bf.latitude, bf.longitude - 360])
    if (af) issPathCoords.push([af.latitude, af.longitude + 360])

    const newCurve = new CatmullRomCurve3(issPathCoords.map(mapper))

    setCurve(newCurve)
    setCurveStartsAt(
      bf ? new Date(bf.date).valueOf() : new Date(issPath[startPositionIdx].date).valueOf(),
    )
    setCurveEndsAt(
      af ? new Date(af.date).valueOf() : new Date(issPath[endPositionIdx].date).valueOf(),
    )
  }, [issPath])

  useEffect(() => {
    updateCurve()
  }, [issPath])

  return {
    curve,
    curveStartsAt,
    curveEndsAt,
    updateCurve,
  }
}
