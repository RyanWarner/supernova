import styled from 'styled-components'
import { Menu } from 'react-feather'

import { Breakpoints, Colors } from 'app/styles'

export const MobileMenuComponent = styled.div`
  position: fixed;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  right: 8px;
  top: 8px;
  border-radius: 8px;
  background-color: ${Colors.white060};
  backdrop-filter: blur(5px);
  z-index: 3;
  cursor: pointer;
  display: none;

  @media(max-width: ${Breakpoints.main}) {
    display: flex;
  }
`

export const StyledMenu = styled(Menu)``
