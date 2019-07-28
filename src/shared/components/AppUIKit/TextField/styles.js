import styled from 'styled-components'
import { BasicText } from 'informed'

import { Colors, Type, Inputs } from 'app/styles'

export const InputWrap = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
`

export const TextInput = styled(BasicText)`
  ${Inputs.text};
`

export const Error = styled.div`
  ${Type.smallBody}
  color: ${Colors.errorRed};
  position: relative;
  height: 20px;
  margin: 3px 0 0 2px;
`

export const Label = styled.div`
  ${Type.body}
  position: relative;
  height: 20px;
  color: ${Colors.lightGray};
  margin: 0 0 6px 2px;
`
