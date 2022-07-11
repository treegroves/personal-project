const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getLocations, addNewLocation } = require('../locations')

const mockTestLocation = {
  id: 1,
  name: 'Auckland Museum',
  description:
    "The Auckland War Memorial Museum Tāmaki Paenga Hira is one of New Zealand's most important museums and war memorials. Its collections concentrate on New Zealand history, natural history, and military history.",
  address: 'The Auckland Domain Parnell, Auckland New Zealand',
  openingHours: 'Mon - Sun 9am-5pm',
  websiteUrl: 'https://www.aucklandmuseum.com/',
  wheelchairCompatible: 1,
  ramps: 1,
  elevator: 1,
  accessibleToilets: 1,
  regionId: 3,
}

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
    expect.assertions(10)
    return addNewLocation(mockTestLocation, testDb)
      .then(() => {
        return testDb('locations').select()
      })
      .then(() => {
        expect(mockTestLocation.name).toBe('Auckland Museum')
        expect(mockTestLocation.description).toBe(
          "The Auckland War Memorial Museum Tāmaki Paenga Hira is one of New Zealand's most important museums and war memorials. Its collections concentrate on New Zealand history, natural history, and military history."
        )
        expect(mockTestLocation.address).toBe(
          'The Auckland Domain Parnell, Auckland New Zealand'
        )
        expect(mockTestLocation.openingHours).toBe('Mon - Sun 9am-5pm')
        expect(mockTestLocation.websiteUrl).toBe(
          'https://www.aucklandmuseum.com/'
        )
        expect(mockTestLocation.wheelchairCompatible).toBe(1)
        expect(mockTestLocation.ramps).toBe(1)
        expect(mockTestLocation.elevator).toBe(1)
        expect(mockTestLocation.accessibleToilets).toBe(1)
        expect(mockTestLocation.regionId).toBe(3)
      })
  })
})
