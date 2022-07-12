import {
  //MAKE_LOCATION,
  RECEIVE_LOCATIONS,
  makeLocation,
} from '../../actions/index'
import locationsReducer from '../locations'

const locationsMockData = [
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

describe('locations reducer', () => {
  it('returns the correct state for RECEIVE_LOCATIONS.', () => {
    const action = {
      type: RECEIVE_LOCATIONS,
      payload: locationsMockData,
    }
    const initialState = []

    const expectedState = locationsMockData

    const outputState = locationsReducer(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for undefined state and no action.', () => {
    const expectedState = []
    const outputState = locationsReducer(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})

describe('locations reducer - make location', () => {
  test('add a new location', () => {
    const action = makeLocation({
      name: 'adsd3',
      description: 'adsd3',
      address: 'adsd3',
      openingHours: 'adsd3',
      websiteUrl: 'adsd3',
      wheelchairCompatible: 'adsd3',
      ramps: 'adsd3',
      elevator: 'adsd3',
      accessibleToilets: 'adsd3',
      regionId: 'adsd3',
    })
    const newState = locationsReducer(
      [
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
      ],
      action
    )
    expect(newState[2]).toStrictEqual({
      name: 'adsd3',
      description: 'adsd3',
      address: 'adsd3',
      openingHours: 'adsd3',
      websiteUrl: 'adsd3',
      wheelchairCompatible: 'adsd3',
      ramps: 'adsd3',
      elevator: 'adsd3',
      accessibleToilets: 'adsd3',
      regionId: 'adsd3',
    })
    expect(newState).toHaveLength(3)
  })
})
