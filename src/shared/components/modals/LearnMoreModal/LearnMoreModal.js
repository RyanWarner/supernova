/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

import * as S from './styles'
import { EmailCapture } from 'app/components'

export default class LearnMoreModal extends Component {
  render () {
    return (
      <S.LearnMoreModalComponent>
        <S.Title>Get Validating</S.Title>
        <S.Description>
          We'll send you an email with everything you'll need to get your own instance of <strong>Gravity</strong> up and running.
        </S.Description>
        <EmailCapture />
        <a href='https://github.com/yawnch/supernova' target='_blank'>Gravity Repo</a>
      </S.LearnMoreModalComponent>
    )
  }
}
