const request = require('supertest')
const server = require('../../server')
const { getLocations, addNewLocation } = require('../../db/locations')
jest.mock('../../db/locations')

beforeEach(() => {
  jest.resetAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

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

describe('GET /api/v1/locations/', () => {
  it('should return status 200 and 2 locations when database is successful.', () => {
    expect.assertions(2)
    getLocations.mockReturnValue(Promise.resolve(getLocationsMockData))
    return request(server)
      .get('/api/v1/locations/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual({
          locations: getLocationsMockData,
        })
      })
  })

  it('should return status 500 and error message if server fails.', () => {
    expect.assertions(2)
    getLocations.mockImplementation(() =>
      Promise.reject(new Error('Server Error'))
    )
    return request(server)
      .get('/api/v1/locations/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Server error')
      })
  })
})

describe('POST /api/v1/locations/', () => {
  it('adds location to database', () => {
    expect.assertions(1)
    addNewLocation.mockImplementation(() => Promise.resolve(newLocation))
    return request(server)
      .post('/api/v1/locations/')
      .send({ location: newLocation })
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })

  it('should return status 500', () => {
    expect.assertions(1)
    addNewLocation.mockImplementation(() =>
      Promise.reject(new Error('Server Error'))
    )
    return request(server)
      .post('/api/v1/locations/')
      .send({ location: newLocation })
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
