import styled, { css } from 'styled-components'

import { Colors } from 'app/styles'

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background 275ms ease;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.mediumGray};
  background: ${Colors.brand};
  border-radius: 4px;

  &:hover {
    background: ${Colors.brandHover};
  }

  &:active {
    background: ${Colors.brand};
  }

  ${props => props.disabled && css`
    opacity: .1;
    pointer-events: none;
  `}
`

export const ButtonText = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-weight: bold;
  width: 100%;
`
