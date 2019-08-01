
import { ActionTypes } from './actions'

export const initialState = {}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case ActionTypes.SET_ACTIVE_MODAL:
      return Object.assign({}, state, { activeModal: action.modal })
  }

  return state
}
