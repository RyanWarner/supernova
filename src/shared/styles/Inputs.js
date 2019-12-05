import { css } from 'styled-components'

import { Colors, Type } from 'app/styles'

export const base = css`
  font-family: ${Type.fontFace};
  font-size: 14px;
  border-radius: 4px;
  box-shadow: none;
  border: 0;
  height: 37px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.07);
  border: 1px solid transparent;
  transition: border 200ms ease;

  &:focus {
    border: 1px solid ${Colors.brand20};
    box-shadow: 0;
    outline: 0;
  }
`

export const label = css`
  ${Type.smallBody}
  position: relative;
  color: ${Colors.font10};
  display: block;
  margin-bottom: 2px;
`

export const error = css`
  ${Type.smallBody}
  color: ${Colors.error};
  position: relative;
  height: 20px;
  margin: 5px 0 0 3px;
`
