import React, { Component } from 'react'

import * as S from './styles'

export default class Checkbox extends Component {
  render () {
    const { label } = this.props
    return <S.Wrap>
      <S.Checkbox id={label} type='checkbox' />
      <S.Label htmlFor={label}>{label}</S.Label>
    </S.Wrap>
  }
}
