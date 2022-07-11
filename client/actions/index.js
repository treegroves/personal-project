//import request from 'superagent'

import { getRegions } from '../apis/regions'
import { getLocations, addLocation } from '../apis/locations'

export const RECEIVE_REGIONS = 'RECEIVE_REGIONS'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const MAKE_LOCATION = 'MAKE_LOCATION'

export function receiveRegions(regions) {
  return {
    type: RECEIVE_REGIONS,
    payload: regions,
  }
}

export function fetchRegions() {
  return (dispatch) => {
    return getRegions().then((regions) => {
      dispatch(receiveRegions(regions))
      return null
    })
  }
}

export function receiveLocations(locations) {
  return {
    type: RECEIVE_LOCATIONS,
    payload: locations,
  }
}

export function fetchLocations() {
  return (dispatch) => {
    return getLocations().then((locations) => {
      dispatch(receiveLocations(locations))
      return null
    })
  }
}

export function makeLocation(location) {
  return {
    type: MAKE_LOCATION,
    payload: location,
  }
}

export function createLocation(location) {
  return (dispatch) => {
    return addLocation(location).then((addedLocation) => {
      dispatch(makeLocation(addedLocation))
      return null
    })
  }
}
