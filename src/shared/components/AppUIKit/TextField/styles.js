import styled, { css } from 'styled-components'
import { BasicText } from 'informed'

import { Colors, Type, Inputs } from 'app/styles'

export const InputWrap = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;
`

export const TextInput = styled(BasicText)`
  ${Inputs.text};

  ${props => props.error && css`
    border: 1px solid ${Colors.errorRed};

    &:focus {
      border: 1px solid ${Colors.errorRed};
    }
  `}
`

export const Error = styled.div`
  ${Type.smallBody}
  color: ${Colors.errorRed};
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
  margin-bottom: 6px;
`
