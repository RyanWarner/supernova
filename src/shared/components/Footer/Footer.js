import React from 'react'

import * as S from './styles'
import MadeByYawnch from '../MadeByYawnch/MadeByYawnch'

export default () =>
  <S.FooterComponent>
    <S.MaxWidth>
      <MadeByYawnch />
      <S.StyledNavLinks />
      <S.Copyright
        href='https://opensource.org/licenses/MIT'
        target='_blank'
        rel='noreferrer noopener'
      >
        MIT License
      </S.Copyright>
    </S.MaxWidth>
  </S.FooterComponent>
