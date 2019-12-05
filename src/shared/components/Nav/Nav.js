import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { openModal } from 'app/store/app/actions'
import { Wordmark, NavLinks } from '../'

@connect(null, { openModal })
export default class Nav extends Component {
  handleSignUp = () => {
    this.props.openModal({ name: 'LearnMoreModal' })
  }

  render () {
    return (
      <S.NavComponent>
        <S.LogoLink to='/'>
          <Wordmark />
        </S.LogoLink>
        <NavLinks />
        <S.AuthButtons>
          <S.SignUp
            options={{
              size: 'small'
            }}
            onClick={this.handleSignUp}
          >
            Learn More
          </S.SignUp>
        </S.AuthButtons>
      </S.NavComponent>
    )
  }
}
