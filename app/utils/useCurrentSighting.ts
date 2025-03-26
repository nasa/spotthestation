import { useCallback, useEffect, useMemo, useState } from "react"
import { LocationType } from "../services/api"

export function useCurrentSighting(location?: LocationType) {
  const events = useMemo(
    () => location?.sightings?.filter((item) => item.notify) || [],
    [location?.sightings],
  )
  const eventsList = useMemo(
    () => (events?.length ? events : location?.sightings || []),
    [location?.sightings, events],
  )

  const [currentSightingIdx, setCurrentSightingIdx] = useState(-1)

  const updateCurrentSighting = useCallback(() => {
    const idx = eventsList.findIndex(
      (sighting) =>
        new Date(sighting.date) >
        new Date(new Date().getTime() - Math.max(sighting.visible, 30) * 60 * 1000),
    )

    setCurrentSightingIdx(idx)
  }, [eventsList])

  useEffect(() => {
    updateCurrentSighting()
  }, [eventsList])

  const currentSighting = useMemo(
    () =>
      eventsList.length > currentSightingIdx && eventsList[currentSightingIdx]
        ? eventsList[currentSightingIdx]
        : {
            date: null as string | null,
            visible: 0,
            maxHeight: 0,
            minAzimuth: 0,
            maxAzimuth: 0,
            minAltitude: 0,
            maxAltitude: 0,
            notify: false,
            dayStage: 0,
          },
    [currentSightingIdx, eventsList],
  )

  useEffect(() => {
    const diff =
      new Date(currentSighting.date).getTime() +
      Math.max(currentSighting.visible, 30) * 60 * 1000 -
      new Date().getTime()

    const timer = setTimeout(updateCurrentSighting, diff)
    return () => clearTimeout(timer)
  }, [currentSighting, updateCurrentSighting])

  return currentSighting
}
