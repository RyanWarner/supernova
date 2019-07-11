import React, { Component } from 'react'

import * as S from './styles'

const githubLink = 'https://github.com/yawnch/react-firebase-ssr-starter'

export default class Nav extends Component {
  render () {
    return <S.NavComponent>
      <S.LogoLink to='/'>
        <S.StyledYawnchLogo />
        <S.LogoText>Yawnch</S.LogoText>
      </S.LogoLink>
      <S.NavItems>
        <S.NavA href={githubLink} target='_blank'>Github</S.NavA>
        <S.NavA href={githubLink} target='_blank'>Slack</S.NavA>
        <S.NavLink to='/admin'>Admin</S.NavLink>
      </S.NavItems>
    </S.NavComponent>
  }
}
