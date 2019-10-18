import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createStore } from 'redux'

import * as S from './styles'
import { Global, Type, Storybook } from 'app/styles'
import 'app/styles/FontFaces.css'
import rootReducer from 'app/store/rootReducer'

const store = createStore(rootReducer)

const browserHistory = createBrowserHistory()

export default function StoryContainer (storyFn) {
  return <S.StoryContainerComponent>
    <Global.GlobalStyle />
    <Type.GlobalStyle />
    <S.GlobalStyle />
    <Provider store={store}>
      <Router history={browserHistory}>
        { storyFn() }
      </Router>
    </Provider>
  </S.StoryContainerComponent>
}
