import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { openModal } from 'app/store/app/actions'

@connect(null, { openModal })
export default class MobileMenu extends Component {
  handleMenuClick = () => {
    const { nav, openModal } = this.props

    const navs = {
      main: { name: 'MobileNav', animation: 'fadeScale' },
      docs: { name: 'SideNav', animation: 'sideNav' }
    }
    const modal = navs[nav || 'main']

    openModal(modal)
  }

  render () {
    return (
      <S.MobileMenuComponent onClick={this.handleMenuClick}>
        <S.StyledMenu />
      </S.MobileMenuComponent>
    )
  }
}
