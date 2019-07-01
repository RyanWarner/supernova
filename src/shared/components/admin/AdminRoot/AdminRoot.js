import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter, matchPath } from 'react-router-dom'

import * as S from './styles'
import { Global, Fonts, Type } from 'app/styles'
import ModalController from '../../modals/ModalController'

import { AppHelmet, AdminNav } from 'app/components'

@withRouter
export default class Root extends Component {
  componentDidUpdate = (prevProps) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  getActiveRoute = () => {
    const { location, route } = this.props
    return route.routes.find(route => matchPath(location.pathname, route))
  }

  render () {
    const { location, route } = this.props

    return <S.Wrap>
      <AppHelmet route={route} />
      <Global.GlobalStyle />
      <Type.GlobalStyle />
      <Fonts.GlobalStyle />
      <ModalController />
      <S.AdminApp>
        <AdminNav activeRoute={this.getActiveRoute()} />
        {renderRoutes(route.routes, null, { location })}
      </S.AdminApp>
    </S.Wrap>
  }
}
