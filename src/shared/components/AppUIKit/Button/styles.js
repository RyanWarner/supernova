import styled, { css } from 'styled-components'

import { Colors } from 'app/styles'

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background 275ms ease;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.black};
  background: ${Colors.white};

  &:hover {
    background: ${Colors.black};
    color: ${Colors.white};
  }

  &:active {
    color: ${Colors.pink};
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
