import request from 'superagent'

const rootUrl = '/api/v1'

export function getLocations() {
  return request.get(rootUrl + '/locations').then((res) => {
    return res.body.locations
  })
}
