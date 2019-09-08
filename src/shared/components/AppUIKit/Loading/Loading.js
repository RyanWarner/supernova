import React, { Component } from 'react'

import * as S from './styles'
import { Spinner } from 'app/ui-kit/Icons'

export default class Loading extends Component {
  render () {
    return (
      <S.LoadingComponent visible={this.props.visible}>
        <Spinner />
      </S.LoadingComponent>
    )
  }
}
