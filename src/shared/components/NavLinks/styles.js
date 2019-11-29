import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from 'app/styles'

export const NavLinksComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const navItemShared = css`
  margin-right: 26px;
  color: ${Colors.gray20};
  ${props => props.styled};
`

export const A = styled.a`
  ${navItemShared};
`

export const NavLink = styled(Link)`
  ${navItemShared};
`
