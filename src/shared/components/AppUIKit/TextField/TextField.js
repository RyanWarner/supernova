import React, { Component } from 'react'
import { asField } from 'informed'

import * as S from './styles'

@asField
export default class AppTextInput extends Component {
  render () {
    const { label, error } = this.props

    return <S.InputWrap>
      { label && <S.Label>{label}</S.Label> }
      <S.TextInput validateOnBlur {...this.props} />
      <S.Error>{error}</S.Error>
    </S.InputWrap>
  }
}
