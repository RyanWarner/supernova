import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tippy from '@tippy.js/react'

import * as S from './styles'
import { openModal } from '../../store/app/actions'
import UserNav from './UserNav/UserNav'

const mapStateToProps = (state) => {
  const { currentUser } = state.firebase
  return { currentUser }
}
const dispatchProps = { openModal }

@connect(mapStateToProps, dispatchProps)
export default class Nav extends Component {
  openSignUpModal = () => {
    this.props.openModal({ modalName: 'SignUpModal' })
  }
  openLoginModal = () => {
    this.props.openModal({ modalName: 'LoginModal' })
  }
  loggedInNav = () => {
    const { currentUser } = this.props

    return <S.NavItems>
      <S.NavItem>Nav Item Here</S.NavItem>
      <Tippy
        animation='shift-away'
        trigger='click'
        hideOnClick
        interactive
        animateFill={false}
        theme='light'
        content={<UserNav />}
      >
        <S.CurrentUser>
          <S.Avatar></S.Avatar>
          <S.Username>{currentUser.username}</S.Username>
        </S.CurrentUser>
      </Tippy>
    </S.NavItems>
  }
  loggedOutNav = () => {
    return <S.NavItems>
      {/* TODO: Update Email */}
      <S.NavItem href='mailto:'>Contact</S.NavItem>
    </S.NavItems>
  }
  render () {
    const { currentUser } = this.props
    const loggedIn = currentUser && currentUser.uid != null

    return <S.Wrap>
      { loggedIn ? this.loggedInNav() : this.loggedOutNav() }
    </S.Wrap>
  }
}
