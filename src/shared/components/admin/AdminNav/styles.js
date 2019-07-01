import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors, Type } from 'app/styles'
import { YawnchLogo } from 'app/ui-kit/Icons'

export const AdminNavComponent = styled.div`
  height: 100vh;
  width: 240px;
  background-color: ${Colors.darkGray};
  position: fixed;
  left: 0;
  top: 0;
`

export const AdminNavTitle = styled.div`
  font-size: 12px;
  font-weight: ${Type.fontWeights.bold};
  color: ${Colors.fontLight};
`

export const Environment = styled.div`
  border-top: 1px solid ${Colors.adminNavBorder};
  border-bottom: 1px solid ${Colors.adminNavBorder};
  padding: 14px 0;
  margin: 6px 20px 26px 20px;
  display: flex;
  align-items: center;
`

export const EnvironmentTag = styled.div`
  border-radius: 3px;
  font-size: 12px;
  font-weight: ${Type.fontWeights.bold};
  padding: 1px 11px;
  background-color: ${Colors.brand};
  color: ${Colors.white};
  align-self: flex-start;
  margin-left: 10px;
`

export const AdminNavItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const AdminNavItem = styled(Link)`
  height: 30px;
  padding: 0 10px;
  color: ${Colors.fontPrimary};
  font-size: 14px;
  border-radius: 3px;
  margin: 0 20px 4px 20px;
  display: flex;
  align-items: center;
  transition: all 300ms ease;

  ${props => props.selected && css`
    background-color: ${Colors.black};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  `}
`

export const AdminLabel = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: ${Type.fontWeights.demiBold};
  color: ${Colors.fontLight};
  margin-left: 8px;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 20px;
`

export const StyledLogoLockup = styled(YawnchLogo)`
  height: 29px;
  width: 20px;
`
