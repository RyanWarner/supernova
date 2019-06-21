import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { openModal } from '../../../store/app/actions'
import { Auth } from 'app/firebase-services'

const mapStateToProps = (state) => {
  const { currentUser } = state.firebase
  return { currentUser }
}
const dispatchProps = { openModal }

@withRouter
@connect(mapStateToProps, dispatchProps)
export default class UserNav extends Component {
  logout = (event) => {
    event.preventDefault()
    Auth.signOut()
    this.props.history.push('/')
  }

  render () {
    return <S.UserNavWrap>
      <S.Item>
        <S.StyledLink to='/settings'>Settings</S.StyledLink>
      </S.Item>
      <S.Item>
        <S.Button onClick={this.logout}>Log out</S.Button>
      </S.Item>
    </S.UserNavWrap>
  }
}
