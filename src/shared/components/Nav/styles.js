import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors, Shadows, Breakpoints, Sizes, Type } from 'app/styles'
import { YawnchLogo } from 'app/ui-kit/Icons'
import { Button } from 'app/ui-kit'

export const NavComponent = styled.div`
  height: ${Sizes.navHeight};
  background-color: ${Colors.black};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${Sizes.xAppPadding};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  @media(max-width: ${Breakpoints.main}) {
    padding: 0 20px;
    height: 60px;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${Colors.white};
`

export const LogoText = styled.div`
  margin-left: 10px;
  font-weight: bold;
`

export const StyledYawnchLogo = styled(YawnchLogo)`
  height: 36px;
  width: 20px;
`

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`

const navItemShared = css`
  margin-left: 35px;
  font-weight: ${Type.fontWeights.medium};
  color: ${Colors.white};
`

export const NavA = styled.a`
  ${navItemShared};
`

export const NavLink = styled(Link)`
  ${navItemShared};
`

export const NavButton = styled(Button)`
  ${navItemShared};
`
