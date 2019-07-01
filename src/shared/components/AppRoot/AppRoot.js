import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import * as S from './styles'
import { Nav, Footer } from 'app/components'

export default class Root extends Component {
  render () {
    const { route } = this.props
    return <S.RootComponent>
      <Nav />
      { renderRoutes(route.routes) }
      <Footer />
    </S.RootComponent>
  }
}
