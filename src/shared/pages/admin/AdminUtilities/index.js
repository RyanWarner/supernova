import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as S from './styles'

const mapStateToProps = state => {
  return { state }
}

@withRouter
@connect(mapStateToProps)
export default class AdminUtilities extends Component {
  signOut = () => {

  }

  logReduxStore = () => {
    console.log(this.props.state)
  }

  render () {
    return <S.AdminUtiltiesPage>
      <S.Title>Utilities</S.Title>
      <S.ActivityCard>
        <S.CurrentUserNavItem onClick={this.logReduxStore}>
          <S.NavItemContent>
            <S.Text>Log app state to console</S.Text>
          </S.NavItemContent>
        </S.CurrentUserNavItem>
        <S.CurrentUserNavItem onClick={this.signOut}>
          <S.IconWrap></S.IconWrap>
          <S.NavItemContent>
            <S.Text>Sign out</S.Text>
          </S.NavItemContent>
        </S.CurrentUserNavItem>
      </S.ActivityCard>
    </S.AdminUtiltiesPage>
  }
}
