/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

import * as S from './styles'
import { EmailCapture } from 'app/components'

export default class LearnMoreModal extends Component {
  render () {
    return (
      <S.LearnMoreModalComponent>
        <S.Title>Getting Started</S.Title>
        <S.Description>
          We've developed systems and tools to rapidly test and validate business ideas. Sign up and we’ll send our complete business validation toolkit.
        </S.Description>
        <EmailCapture />
        <a href='https://github.com/yawnch/supernova' target='_blank'>
            Read the Docs
        </a>
      </S.LearnMoreModalComponent>
    )
  }
}
