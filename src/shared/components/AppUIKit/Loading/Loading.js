import React from 'react'

import * as S from './styles'

export default ({ visible }) =>
  <S.LoadingComponent visible={visible}>
    <S.StyledSpinner />
  </S.LoadingComponent>
