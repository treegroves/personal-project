import {
  fetchRegions,
  fetchLocations,
  createLocation,
  RECEIVE_REGIONS,
  RECEIVE_LOCATIONS,
  MAKE_LOCATION,
} from '../index'
import { getRegions } from '../../apis/regions'
import { getLocations, addLocation } from '../../apis/locations'

jest.mock('../../apis/regions')
jest.mock('../../apis/locations')

const fakeDispatch = jest.fn()

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
