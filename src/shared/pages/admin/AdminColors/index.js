import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { Colors } from 'app/styles'

@withRouter
export default class AdminColors extends Component {
  renderColor = (color, index) => {
    return <S.ColorCard key={index}>
      <S.ColorTile color={color} />
      <S.ColorDetails>
        <S.ColorName>{Object.keys(Colors)[index]}</S.ColorName>
        <S.ColorValue>{color}</S.ColorValue>
      </S.ColorDetails>
    </S.ColorCard>
  }

  render () {
    return <S.AdminColorsPage>
      <S.Title>Colors</S.Title>
      <S.ActivityCard>
        { Object.values(Colors).map(this.renderColor) }
      </S.ActivityCard>
    </S.AdminColorsPage>
  }
}
