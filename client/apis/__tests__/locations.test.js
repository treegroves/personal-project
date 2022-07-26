import nock from 'nock'
import { getLocations, addLocation } from '../locations'

const getLocationsMockData = [
  {
    name: 'adsd',
    description: 'adsd',
    address: 'adsd',
    openingHours: 'adsd',
    websiteUrl: 'adsd',
    wheelchairCompatible: 'adsd',
    ramps: 'adsd',
    elevator: 'adsd',
    accessibleToilets: 'adsd',
    regionId: 'adsd',
  },
  {
    name: 'adsd2',
    description: 'adsd2',
    address: 'adsd2',
    openingHours: 'adsd2',
    websiteUrl: 'adsd2',
    wheelchairCompatible: 'adsd2',
    ramps: 'adsd2',
    elevator: 'adsd2',
    accessibleToilets: 'adsd2',
    regionId: 'adsd2',
  },
]

const newLocation = [
  {
    id: 2,
    name: 'addtest',
    description: 'addtest',
    address: 'addtest',
    openingHours: 'addtest',
    websiteUrl: 'addtest',
    wheelchairCompatible: 'addtest',
    ramps: 'addtest',
    elevator: 'addtest',
    accessibleToilets: 'addtest',
    regionId: 'addtest',
  },
]

describe('GET /api/v1/locations', () => {
  it('get locations from database', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/locations') //.post
      .reply(200, getLocationsMockData)

    const locationsData = await getLocations()

    expect(locationsData).toEqual(getLocationsMockData.locations)
    scope.done()
  })
})

describe('POST /api/v1/locations', () => {
  it('add new locations to database', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .post('/api/v1/locations')
      .reply(200, newLocation)

    const newLocationData = await addLocation()
    expect(newLocationData).toEqual(newLocation)
    scope.done()
  })
})
