import React, { Component } from 'react'

import * as S from './styles'

const footerNavItems = {
  faq: {
    display: 'FAQ',
    path: '/faq'
  },
  privacy: {
    display: 'Privacy',
    path: '/privacy'
  },
  termsOfUse: {
    display: 'Terms',
    path: '/terms'
  }
}

export default class Footer extends Component {
  renderFooterNavItems = () => {
    return Object.values(footerNavItems).map(item => (
      <S.FooterNavItem key={item.path} to={item.path}>{item.display}</S.FooterNavItem>
    ))
  }

  render () {
    return <S.FooterComponent>
      <S.MaxWidth>
        <S.Rule />
        <S.FooterNav>
          <S.NavItems>
            { this.renderFooterNavItems() }
            <S.StyledFooterA href='mailto:hello@yawnch.com'>
              Contact
            </S.StyledFooterA>
          </S.NavItems>
          <S.Copyright>© 2019 Yawnch</S.Copyright>
        </S.FooterNav>
      </S.MaxWidth>
    </S.FooterComponent>
  }
}
