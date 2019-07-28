import { setIn } from 'app/utilities'

export const initialState = {}

export default (state = initialState, action) => {
  const { type, payload, storeKey } = action

  if (type.endsWith('_SUCCESS')) {
    const updatedState = setIn(state, storeKey, payload)
    return updatedState
  }

  return state
}
