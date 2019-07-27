import React from 'react'
import styled, { css } from 'styled-components'

import { Colors, Type } from 'app/styles'

const ButtonCleanProps = ({ loading, ...props }) => (
  <button {...props} />
)

export const Button = styled(ButtonCleanProps)`
  font-family: ${Type.fontFamily};
  font-size: 14px;
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
  color: ${Colors.white};
  border-radius: 4px;
  background: ${Colors.darkPurple};
  appearance: none;
  border: 0;

  &:hover {
    background: ${Colors.darkPurpleHover};
  }

  &:active {
    color: ${Colors.white};
    background: ${Colors.darkPurple};
  }

  &:focus {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    outline: none;
    border: 0;
    background: ${Colors.darkPurpleHover};
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
