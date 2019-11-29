import styled from 'styled-components'

import { Breakpoints, Colors, Sizes } from 'app/styles'
import NavLinks from '../NavLinks/NavLinks'

export const FooterComponent = styled.footer`
  margin-top: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 36px ${Sizes.xAppPadding};
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.main}) {
    justify-content: flex-start;
    padding: 46px ${Sizes.xAppPaddingMobile};
  }
`

export const MaxWidth = styled.div`
  max-width: ${Sizes.maxWidth};
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;

  @media(max-width: ${Breakpoints.main}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const Copyright = styled.a`
  color: ${Colors.gray20};
  font-size: 14px;
  width: 200px;
  text-align: right;

  @media(max-width: ${Breakpoints.main}) {
    margin-left: 0;
    margin-top: 28px;
    text-align: center;
    font-size: 14px;
    text-align: left;
    opacity: 0.7;
  }
`

export const StyledNavLinks = styled(NavLinks)`
  @media(max-width: ${Breakpoints.main}) {
    margin-top: 28px;
  }
`
