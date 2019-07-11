import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter, matchPath } from 'react-router-dom'

import * as S from './styles'

import { AdminNav } from 'app/components'

@withRouter
export default class AdminRoot extends Component {
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

    return <S.AdminRootComponent>
      <S.AdminApp>
        <AdminNav activeRoute={this.getActiveRoute()} />
        {renderRoutes(route.routes, null, { location })}
      </S.AdminApp>
    </S.AdminRootComponent>
  }
}
