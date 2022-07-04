import request from 'superagent'
import { getRegions } from '../apis/regions'
import { getLocations } from '../apis/locations'

export const RECEIVE_REGIONS = 'RECEIVE_REGIONS'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'

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
