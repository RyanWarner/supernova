import React from 'react'

import * as S from './styles'
import { EmailCapture } from 'app/components'

export default () =>
  <S.HeroComponent>
    <S.Text>
      <S.Title>Validate Your Business</S.Title>
      <S.Description>
        Quickly capture interest enabling you to develop your products market fit.
      </S.Description>
      <EmailCapture />
      <small>We’ll send our complete business validation toolkit.</small>
    </S.Text>
    <S.StyledNova />
  </S.HeroComponent>
