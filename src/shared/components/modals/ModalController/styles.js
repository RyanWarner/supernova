import styled, { createGlobalStyle } from 'styled-components'

import { Colors } from 'app/styles'

export const OverlayWrap = styled.div``

export const GlobalModalStyle = createGlobalStyle`
  .Aria-modal {
    background-color: ${Colors.black};
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35), 0px 2px 20px rgba(0, 0, 0, 0.35);
    transition: opacity 300ms ease, transform 300ms ease;
    transform: translate(0, -50px);
    opacity: 0.3;

    &.has-entered {
      opacity: 1;
      transform: translate(0, 0px);
    }
  }

  .Aria-underlay {
    opacity: 0;
    transition: opacity 300ms ease;
    padding: 7vw 0;
    box-sizing: border-box;

    &.has-entered {
      opacity: 1;
    }
  }
`

export const CloseX = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
`
