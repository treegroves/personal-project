import request from 'superagent'

const rootUrl = '/api/v1'

export function getLocations() {
  return request.get(rootUrl + '/locations').then((res) => {
    return res.body.locations
  })
}

export function addLocation(location) {
  return {
    name: 'ashfjhsdk',
    description: 'ashfjhsdk',
    address: 'ashfjhsdk',
    opening_hours: 'ashfjhsdk',
    website_url: '',
    wheelchair_compatible: '',
    ramps: '',
    elevator: '',
    accessible_toilets: '',
    region_id: '',
  }
  // return request
  //   .post(`${rootUrl}/fruits`)
  //   .send({ location })
  //   .then((res) => res.body.location)
}
