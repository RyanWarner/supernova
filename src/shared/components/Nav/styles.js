import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Breakpoints, Sizes } from 'app/styles'
import { Button } from 'app/ui-kit'

export const NavComponent = styled.header`
  height: ${Sizes.navHeight};
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 ${Sizes.xAppPadding};
  box-sizing: border-box;
  z-index: 3;
  backdrop-filter: blur(5px);

  @media(max-width: ${Breakpoints.main}) {
    display: none;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 205px;
  margin-right: auto;
`

export const AuthButtons = styled.div`
  display: flex;
`

export const LogIn = styled(Button)`
  margin-right: 10px;
`

export const SignUp = styled(Button)``

export const NavItems = styled.nav`
  display: flex;
`

const navItemShared = css`
  margin-left: 26px;
`

export const NavA = styled.a`
  ${navItemShared};
`

export const NavLink = styled(Link)`
  ${navItemShared};
`
