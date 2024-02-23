import { expect } from "@jest/globals"
import { addMinutes, setSeconds, subMinutes } from "date-fns"
import { formatDateWithTZ } from "../app/utils/formatDate"
import { compassDirections, degToCompass } from "../app/utils/astro"
import { Sighting } from "../app/models/Sightings"
import { SnapshotIn } from "mobx-state-tree"

interface CustomMatchers<R = unknown> {
  toHaveSighting(siteSighting: SiteSighting): R;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

type SiteSighting = {
  date: string,
  appears:  typeof compassDirections[number],
  disappears: typeof compassDirections[number],
  visible: number,
  timezone: string,
}

function prevCompassDirection(direction: typeof compassDirections[number]) {
  const idx = compassDirections.indexOf(direction)
  return idx === 0 ? compassDirections[compassDirections.length - 1] : compassDirections[idx - 1]
}

function nextCompassDirection(direction: typeof compassDirections[number]) {
  const idx = compassDirections.indexOf(direction)
  return idx === compassDirections.length - 1 ? compassDirections[0] : compassDirections[idx + 1]
}

expect.extend({
  toHaveSighting(appSightings: SnapshotIn<typeof Sighting>[], siteSighting: SiteSighting) {
    const found = appSightings.find((sighting) => {
      return setSeconds(new Date(sighting.date), 0) >= subMinutes(new Date(siteSighting.date), 1)
        && setSeconds(new Date(sighting.date), 0) <= addMinutes(new Date(siteSighting.date), 1)
    })

    const formattedDate = formatDateWithTZ(siteSighting.date, "yyyy-MM-dd h:mm aa", siteSighting.timezone)
    if (!found) {
      return {
        message: () => `Sighting ${formattedDate} not found`,
        pass: false
      }
    }

    if (found.visible > siteSighting.visible + 1 || found.visible < siteSighting.visible - 1) {
      return {
        message: () => `Sighting ${formattedDate} visibility time does not match, expected ${siteSighting.visible}, received ${found.visible}`,
        pass: false
      }
    }

    const appears = degToCompass(found.minAzimuth)
    if (appears !== siteSighting.appears
      && appears !== nextCompassDirection(siteSighting.appears)
      && appears !== prevCompassDirection(siteSighting.appears)
    ) {
      return {
        message: () => `Sighting ${formattedDate} approach azimuth does not match, expected ${siteSighting.appears}, received ${appears}`,
        pass: false
      }
    }

    const disappears = degToCompass(found.maxAzimuth)
    if (disappears !== siteSighting.disappears
      && disappears !== nextCompassDirection(siteSighting.disappears)
      && disappears !== prevCompassDirection(siteSighting.disappears)
    ) {
      return {
        message: () => `Sighting ${formattedDate} approach azimuth does not match, expected ${siteSighting.disappears}, received ${disappears}`,
        pass: false
      }
    }

    return {
      message: () => `Sighting ${formattedDate} found and valid`,
      pass: true
    }
  }
})
