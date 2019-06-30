import styled, { css } from 'styled-components'

import { Colors, Shadows, Breakpoints } from 'app/styles'
import { YawnchLogo } from 'app/ui-kit/Icons'

export const NavComponent = styled.div`
  height: 100px;
  background-color: ${Colors.black};
  box-shadow: ${Shadows.main};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.main}) {
    padding: 0 20px;
    height: 60px;
  }
`

export const LogoLockUp = styled.div`
  display: flex;
  align-items: center;
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
`

const navItemShared = css`
  margin-left: 20px;
`

export const NavA = styled.a`
  ${navItemShared};
`
