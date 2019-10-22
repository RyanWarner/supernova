import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { openModal } from 'app/store/app/actions'

const githubLink = 'https://github.com/yawnch/supernova'
const docsLink = 'https://yawnch.github.io/supernova'
const discordLink = 'https://discord.gg/6grKvkn'

@connect(null, { openModal })
export default class Nav extends Component {
  handleSignUp = () => {
    this.props.openModal({ modalName: 'SignUpModal' })
  }

  render () {
    return (
      <S.NavComponent>
        <S.LogoLink to='/'>
          <S.StyledYawnchLogo />
          <S.LogoText>Yawnch</S.LogoText>
        </S.LogoLink>
        <S.NavItems>
          <S.NavA href={docsLink} target='_blank'>Docs</S.NavA>
          <S.NavA href={githubLink} target='_blank'>Github</S.NavA>
          <S.NavA href={discordLink} target='_blank'>Discord</S.NavA>
          <S.NavLink to='/admin'>Admin</S.NavLink>
          <S.NavButton onClick={this.handleSignUp}>Sign up</S.NavButton>
        </S.NavItems>
      </S.NavComponent>
    )
  }
}
