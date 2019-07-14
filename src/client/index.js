import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router'
import { renderRoutes } from 'react-router-config'
import merge from 'deepmerge'

import { configureStore } from 'app/store'
import createHistory from 'app/store/history'
import routes from 'app/routes/routes'
import { ScrollToTop } from 'app/components'
import { initializeFirebase } from 'app/api/firebase/initializeFirebase'
import FirebaseService from 'app/api/firebase/models/FirebaseService'
import Analytics from 'app/analytics'
import { loadState, saveState } from './cookieService'

Analytics.initialize()
initializeFirebase()

const browserHistory = createHistory()

Analytics.pageView({ pathname: browserHistory.location.pathname })

const unlisten = browserHistory.listen((location, action) => { // eslint-disable-line no-unused-vars
  const { pathname } = location
  Analytics.pageView({ pathname })
})

const persistedState = loadState()
const initialState = merge(window.__PRELOADED_STATE__, persistedState)

const store = configureStore({
  initialState,
  middleware: [routerMiddleware(browserHistory)]
})

store.subscribe(() => {
  const state = {
    firebase: {
      currentUser: store.getState().firebase.currentUser
    }
  }
  saveState(state)
})

FirebaseService.store = store

hydrate(
  <Provider store={store}>
    <Router history={browserHistory}>
      <ScrollToTop>
        { renderRoutes(routes) }
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }

  if (!window.store) {
    window.store = store
  }
}
