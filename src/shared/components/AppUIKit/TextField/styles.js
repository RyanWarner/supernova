import styled, { css } from 'styled-components'

import { Colors, Type, Shadows } from 'app/styles'

export const InputWrap = styled.div`
  flex-grow: 1;
  height: 100%;
`

const sharedInputStyles = css`
  padding: 0 12px;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  font-family: ${Type.fontFace};
  height: 40px;

  &:focus {
    outline: none;
    border: 1px solid ${Colors.pink};
  }

  ::placeholder {
    color: ${Colors.lightGray};
  }
`

export const TextInput = styled.input`
  ${Type.body};
  ${sharedInputStyles};
  box-shadow: ${Shadows.main};
  -webkit-appearance: none;

  ${props => props.error && css`
    border: 1px solid ${Colors.red};

    &:focus {
      border: 1px solid ${Colors.red};
    }
  `}
`

export const Error = styled.div`
  ${Type.smallBody}
  color: ${Colors.red};
  position: relative;
  height: 20px;
  margin: 4px 0 0 4px;
`

export const Label = styled.div`
  ${Type.smallBody}
  left: 2px;
  position: relative;
  height: 20px;
  color: ${Colors.lightGray};
`
