import { RECEIVE_REGIONS } from '../../actions/index'
import regionsReducer from '../regions'

const regionsMockData = [
  {
    id: 1,
    region_name: 'North',
  },
  {
    id: 2,
    region_name: 'South',
  },
]

describe('regions reducer', () => {
  it('returns the correct state for RECEIVE_Regions.', () => {
    const action = {
      type: RECEIVE_REGIONS,
      payload: regionsMockData,
    }
    const initialState = []

    const expectedState = regionsMockData

    const outputState = regionsReducer(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for undefined state and no action.', () => {
    const expectedState = []
    const outputState = regionsReducer(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
