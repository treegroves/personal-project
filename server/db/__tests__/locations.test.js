const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getLocations, addNewLocation } = require('../locations')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('get location id from database', () => {
  it('get location id from database', () => {
    expect.assertions(2)
    return getLocations(testDb).then((locations) => {
      expect(locations[1].id).toBe(2)
      expect(locations).toHaveLength(3)
    })
  })
})

describe('add new location to database', () => {
  it('add new location to database', () => {
    expect.assertions(3)
    const mockTestLocation = {
      name: 'Auckland Museum',
      address: 'The Auckland Domain Parnell, Auckland New Zealand',
      openingHours: 'Mon - Sun 9am-5pm',
    }
    return addNewLocation(mockTestLocation, testDb)
      .then((newLocation) => {
        return testDb('locations').select().where('id', newLocation.id).first()
      })
      .then((location) => {
        expect(location.name).toBe('Auckland Museum')
        expect(location.address).toBe(
          'The Auckland Domain Parnell, Auckland New Zealand'
        )
        expect(location.opening_hours).toBe('Mon - Sun 9am-5pm')
      })
  })
})

// expect(locations[0].websiteUrl).toBe('https://www.aucklandmuseum.com/')
// expect(locations[0].wheelchairCompatible).toBe(1)
// expect(locations[0].ramps).toBe(1)
// expect(locations[0].elevator).toBe(1)
// expect(locations[0].accessibleToilets).toBe(1)
// expect(locations[0].regionId).toBe(3)
