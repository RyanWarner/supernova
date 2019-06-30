import React, { Component } from 'react'

import * as S from './styles'

const githubLink = 'https://github.com/yawnch/react-firebase-ssr-starter'

export default class Nav extends Component {
  render () {
    return <S.NavComponent>
      <S.LogoLockUp>
        <S.StyledYawnchLogo />
        <S.LogoText>Yawnch</S.LogoText>
      </S.LogoLockUp>
      <S.NavItems>
        <S.NavA href={githubLink}>Github</S.NavA>
      </S.NavItems>
    </S.NavComponent>
  }
}
