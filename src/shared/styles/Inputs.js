import { css } from 'styled-components'

import { Colors, Shadows, Type } from 'app/styles'

export const text = css`
  ${Type.body};
  color: ${Colors.white};
  background-color: ${Colors.lightBackground};
  padding: 0 12px;
  border-radius: 4px;
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

  ${props => props.fieldState.error && css`
    border: 1px solid ${Colors.errorRed};

    &:focus {
      border: 1px solid ${Colors.errorRed};
    }
  `}
`

export const error = css`
  ${Type.smallBody}
  color: ${Colors.errorRed};
  position: relative;
  height: 20px;
  margin: 3px 0 0 2px;
`

export const label = css`
  ${Type.body}
  position: relative;
  height: 20px;
  color: ${Colors.lightGray};
  margin: 0 0 6px 2px;
`
