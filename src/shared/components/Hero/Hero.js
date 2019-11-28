import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

export default () =>
  <S.HeroComponent>
    <S.Text>
      <S.Title>Launch web apps faster</S.Title>
      <S.Description>
        Nova is an open source, feature rich React boilerplate used to kickstart production ready web apps.
      </S.Description>
      <Link to='/docs/getting-started/installation'>
        <S.StyledButton>Explore</S.StyledButton>
      </Link>
    </S.Text>
    <S.StyledNova />
  </S.HeroComponent>
