import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import createHistory from './history'
import app from './app/reducer'
import firebase from './firebase/reducer'
import { saveState } from '../../client/cookieService'

const history = createHistory()

const appReducer = combineReducers({
  app,
  firebase,
  router: connectRouter(history)
})

const rootReducer = (state, action) => {
  const stateCopy = JSON.parse(JSON.stringify(state))

  if (action.type === 'LOGOUT') {
    delete stateCopy.firebase.currentUser
    saveState(stateCopy)
  }
  return appReducer(stateCopy, action)
}

export default rootReducer
