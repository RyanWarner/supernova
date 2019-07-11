import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import * as Icons from 'app/ui-kit/Icons'

@withRouter
export default class AdminIcons extends Component {
  renderIconCard = (icon, index) => {
    return <S.IconCard key={index}>
      { icon() }
      <S.IconName>{ Object.keys(Icons)[index] }</S.IconName>
    </S.IconCard>
  }

  render () {
    return <S.AdminIconsPage>
      <S.Title>Icons</S.Title>
      <S.ActivityCard>
        { Object.values(Icons).map(this.renderIconCard) }
      </S.ActivityCard>
    </S.AdminIconsPage>
  }
}
