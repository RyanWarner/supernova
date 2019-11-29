import React, { Component } from 'react'

import * as S from './styles'
import LogInForm from '../../SignUpForm/SignUpForm'

export default class LogInModal extends Component {
  render () {
    return (
      <S.LogInModalComponent>
        <S.Title>Log in</S.Title>
        <S.Description>
          This is for demonstration purposes only. No information is stored.
        </S.Description>
        <LogInForm />
      </S.LogInModalComponent>
    )
  }
}
