import styled from 'styled-components'

import { Colors, Type, Inputs } from 'app/styles'

export const TextAreaComponent = styled.div`
  flex-grow: 1;
`

export const Label = styled.p`
  ${Type.body}
  position: relative;
  height: 20px;
  color: ${Colors.white};
  margin: 0 0 6px 2px;
`

export const TextArea = styled.textarea`
  ${Inputs.text};
  min-width: 300px;
  min-height: 180px;
  padding: 10px 15px;
  resize: none;
`
