import { setIn } from 'app/utilities'

export const initialState = {}

export default (state = initialState, action) => {
  const { type, payload, path } = action

  if (type.endsWith('_SUCCESS')) {
    const updatedState = setIn(state, path, payload)
    return updatedState
  }

  return state
}
