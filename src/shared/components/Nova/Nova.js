import React from 'react'

import * as S from './styles'
import { globe, rings, space } from 'app/assets/images'

export default props => (
  <S.NovaComponent {...props}>
    <S.StyledSpace src={space} />
    <S.Nova>
      <S.StyledGlobe src={globe} />
      <S.StyledRings src={rings} />
    </S.Nova>
  </S.NovaComponent>
)
