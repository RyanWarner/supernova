import React, { Component } from 'react'

import * as S from './styles'

export default class AppSelect extends Component {
  render () {
    return <S.StyledSelect
      components={{ DropdownIndicator: S.DropdownIndicator }}
      classNamePrefix='ReactSelect'
      {...this.props}
    />
  }
}
