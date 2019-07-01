import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Breakpoints, Colors, Sizes, Type } from 'app/styles'

export const FooterComponent = styled.div`
  margin-top: auto;
  padding-top: 100px;
  margin-bottom: 46px;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 100px ${Sizes.xAppPadding} 0 ${Sizes.xAppPadding};
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.main}) {
    padding: 100px ${Sizes.xAppPaddingMobile} 0 ${Sizes.xAppPaddingMobile};
  }
`

export const MaxWidth = styled.div`
  max-width: ${Sizes.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;

  @media(max-width: ${Breakpoints.main}) {
    align-items: center;
  }
`

export const FooterNav = styled.div`
  display: flex;
  text-align: center;

  @media(max-width: ${Breakpoints.main}) {
    flex-direction: column;
    align-items: center;
  }
`

export const NavItems = styled.div``

const footerNavItemShared = css`
  margin-right: 24px;
  font-size: 14px;
  font-weight: ${Type.fontWeights.medium};
  color: ${Colors.white};

  &:last-child {
    margin-right: 0;
  }

  @media(max-width: ${Breakpoints.main}) {
    font-size: 14px;
  }
`

export const FooterNavItem = styled(Link)`
  ${footerNavItemShared};
`

export const StyledFooterA = styled.a`
  ${footerNavItemShared};
`

export const Copyright = styled.div`
  margin-left: auto;
  color: ${Colors.white};
  font-size: 14px;

  @media(max-width: ${Breakpoints.main}) {
    margin-left: 0;
    text-align: center;
    font-size: 14px;
  }
`

export const Rule = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.darkBlueGray};
  margin: 21px 0 24px 0;

  @media(max-width: ${Breakpoints.main}) {
    display: none;
  }
`
