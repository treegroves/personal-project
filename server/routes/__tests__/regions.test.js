const request = require('supertest')
const server = require('../../server')

const { getRegions } = require('../../db/regions')
jest.mock('../../db/regions')

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

const getRegionsMockData = [
  {
    id: 1,
    region_name: 'North',
  },
  {
    id: 2,
    region_name: 'South',
  },
]

describe('GET /api/v1/regions', () => {
  it('should return status 200 and 2 regions.', () => {
    expect.assertions(2)
    getRegions.mockReturnValue(Promise.resolve(getRegionsMockData))
    return request(server)
      .get('/api/v1/regions/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual({
          regions: getRegionsMockData,
        })
      })
  })

  it('should return status 500 and error message if server fails.', () => {
    expect.assertions(2)
    getRegions.mockImplementation(() =>
      Promise.reject(new Error('Server Error'))
    )
    return request(server)
      .get('/api/v1/regions/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Server error')
      })
  })
})
