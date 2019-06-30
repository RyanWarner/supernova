import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import * as S from './styles'
import { Global, Fonts } from 'app/styles'
import { AppHelmet } from 'app/components'
import ModalController from '../modals/ModalController'
import { Auth } from 'app/api/firebase/models'

export default class Root extends Component {
  componentDidMount = () => {
    if (process.env.FIREBASE_API_KEY) Auth.registerAuthListener()
  }
  render () {
    return <S.Wrap>
      <AppHelmet />
      <Global.GlobalStyle />
      <Fonts.GlobalStyle />
      <ModalController />
      { renderRoutes(this.props.route.routes) }
    </S.Wrap>
  }
}
