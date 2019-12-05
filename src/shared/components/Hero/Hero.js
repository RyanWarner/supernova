import React from 'react'

import * as S from './styles'
import { EmailCapture } from 'app/components'
import { Youtube } from 'app/ui-kit/Icons'

export default () =>
  <S.HeroComponent>
    <S.Text>
      <S.Title>Validate Your Business</S.Title>
      <S.Description>
        Quickly capture interest enabling you to develop your product's market fit in a non destructive environment.
      </S.Description>
      <EmailCapture />
      <small>** We'll send you everything you'll need to get your own instance of Gravity up and running.</small>
      <S.StyledLink href='https://www.youtube.com/channel/UCLGFA1R50bYXbp8hyAY4mlA' target='_blank'>
        <Youtube />
        Learn about launching your own SaaS product.
      </S.StyledLink>
    </S.Text>
    <S.StyledNova />
  </S.HeroComponent>
