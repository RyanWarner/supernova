import React from 'react'

import * as S from './styles'
import { space } from 'app/assets/images'

export default props => (
  <S.NovaComponent {...props}>
    <S.StyledSpace src={space} />
  </S.NovaComponent>
)
