import styled from 'styled-components'
import { BasicText } from 'informed'

import { Inputs } from 'app/styles'

export const TextFieldComponent = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
`

export const TextInput = styled(BasicText)`
  ${Inputs.text};
`

export const Label = styled.div`
  ${Inputs.label};
`

export const Error = styled.div`
  ${Inputs.error};
`
