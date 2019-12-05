import React from 'react'

import * as S from './styles'
import { gravity } from 'app/assets/images'

export default props => (
  <S.NovaComponent {...props}>
    <S.StyledSpace src={gravity} />
  </S.NovaComponent>
)
