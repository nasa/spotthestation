import { useEffect, useCallback, useState, useRef } from "react"
import { CatmullRomCurve3, Vector3 } from "three"
import { OrbitPoint } from "../services/api"

export function useISSPathCurve(issPath: OrbitPoint[], mapper: (point: OrbitPoint) => Vector3) {
  const [curve, setCurve] = useState<CatmullRomCurve3>()
  const [curveStartsAt, setCurveStartsAt] = useState(0)
  const [curveEndsAt, setCurveEndsAt] = useState(0)
  const issPathCoords = useRef<OrbitPoint[]>([])

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

    const coords = issPath.slice(startPositionIdx, endPositionIdx + 1)
    if (bf) coords.unshift({ ...bf, latitude: bf.latitude, longitude: bf.longitude - 360 })
    if (af) coords.push({ ...af, latitude: af.latitude, longitude: af.longitude + 360 })

    issPathCoords.current = coords
    const newCurve = new CatmullRomCurve3(coords.map(mapper))

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

  const getT = useCallback((timestamp: number) => {
    const currentIdx = issPathCoords.current.findIndex(
      (p) => new Date(p.date).valueOf() > timestamp,
    )

    if (currentIdx === -1) return Infinity
    if (currentIdx === 0) return -Infinity

    const prevIdx = currentIdx - 1

    return (
      (prevIdx +
        (timestamp - new Date(issPathCoords.current[prevIdx].date).valueOf()) /
          (new Date(issPathCoords.current[currentIdx].date).valueOf() -
            new Date(issPathCoords.current[prevIdx].date).valueOf())) /
      (issPathCoords.current.length - 1)
    )
  }, [])

  return {
    curve,
    curveStartsAt,
    curveEndsAt,
    updateCurve,
    getT,
  }
}
