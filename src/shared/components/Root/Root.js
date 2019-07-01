import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import * as S from './styles'
import { Global, Fonts, Type } from 'app/styles'
import { AppHelmet, Nav, Footer } from 'app/components'
import ModalController from '../modals/ModalController'
import { Auth } from 'app/api/firebase/models'

export default class Root extends Component {
  componentDidMount = () => {
    if (process.env.FIREBASE_API_KEY) Auth.registerAuthListener()
  }
  render () {
    const { route } = this.props
    return <S.RootComponent>
      <AppHelmet route={route} />
      <Global.GlobalStyle />
      <Fonts.GlobalStyle />
      <Type.GlobalStyle />
      <ModalController />
      <Nav />
      { renderRoutes(route.routes) }
      <Footer />
    </S.RootComponent>
  }
}
