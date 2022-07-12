const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getRegions } = require('../regions')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('get regions from database', () => {
  it('get regions from database', () => {
    expect.assertions(2)
    return getRegions(testDb).then((regions) => {
      expect(regions[0].region_name).toBe('North')
      expect(regions).toHaveLength(5)
    })
  })
})
