import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'

import * as S from './styles'
import { Global, Fonts } from 'app/styles'
import ModalController from '../modals/ModalController'
import ogImage from '../../assets/images/ogImage.png'
import favicon from '../../assets/images/favicon.png'
import { Auth } from 'app/api/firebase/models'

export default class Root extends Component {
  componentDidMount = () => {
    if (process.env.FIREBASE_API_KEY) Auth.registerAuthListener()
  }
  render () {
    // TODO: Update Title & Description
    const description = 'Boilerplate for React + Firebase SSR SPA'
    const title = 'React Firebase SSR'
    return <S.Wrap>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { property: 'og:description', content: description },
          { property: 'og:title', content: title },
          { property: 'og:image', content: ogImage },
          { property: 'og:image:secure_url', content: ogImage },
          { property: 'og:type', content: 'website' }
        ]}
        link={[
          { 'rel': 'icon',
            'type': 'image/png',
            'href': favicon
          }
        ]}
      />
      <Global.GlobalStyle />
      <Fonts.GlobalStyle />
      <ModalController />
      { renderRoutes(this.props.route.routes) }
    </S.Wrap>
  }
}
