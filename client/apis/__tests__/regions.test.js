import nock from 'nock'
import { getRegions } from '../regions'

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
  it('get regions from database', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/regions') //.post
      .reply(200, getRegionsMockData)

    const regionsData = await getRegions()

    expect(regionsData).toEqual(getRegionsMockData.regions)
    scope.done()
  })
})
