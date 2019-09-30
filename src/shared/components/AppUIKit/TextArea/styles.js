import styled from 'styled-components'

import { Inputs } from 'app/styles'

export const TextAreaComponent = styled.div`
  flex-grow: 1;
`

export const TextArea = styled.textarea`
  ${Inputs.text};
  min-width: 300px;
  min-height: 180px;
  padding: 10px 15px;
  resize: none;
`

export const Label = styled.p`
  ${Inputs.label};
`

export const Error = styled.div`
  ${Inputs.error};
`
