import { css } from 'styled-components'

import { Colors, Shadows, Type } from 'app/styles'

export const text = css`
  ${Type.body};
  color: ${Colors.white};
  background-color: ${Colors.lightBackground};
  padding: 0 12px;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  font-family: ${Type.fontFace};
  height: 40px;
  box-shadow: ${Shadows.main};
  -webkit-appearance: none;
  transition: all 250ms ease;
  border: 1px solid transparent;

  &:focus {
    outline: none;
    background-color: ${Colors.lightBackgroundActive};
  }

  ::placeholder {
    color: ${Colors.lightGray};
  }
`
