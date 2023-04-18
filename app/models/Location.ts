import { types } from 'mobx-state-tree'
import { Sighting } from './Sightings'

export const Point = types.model('Point', {
  lat: types.optional(types.number, 0),
  lng: types.optional(types.number, 0)
})

export const Location = types.model('Location', {
  title: types.optional(types.string, ''),
  subtitle: types.optional(types.string, ''),
  location: types.optional(Point, ''),
  alert: types.maybeNull(types.boolean),
  sightings: types.optional(types.array(Sighting), []),
})