import { RECEIVE_REGIONS } from '../actions'

function regionsReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_REGIONS:
      return payload
    default:
      return state
  }
}

export default regionsReducer
