import request from 'superagent'

const rootUrl = '/api/v1'

export function getRegions() {
  return request.get(rootUrl + '/regions').then((res) => {
    return res.body.regions
  })
}
