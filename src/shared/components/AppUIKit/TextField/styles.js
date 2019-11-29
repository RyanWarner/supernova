import React from 'react'
import styled from 'styled-components'
import { BasicText } from 'informed'

import { Inputs } from 'app/styles'

export const TextFieldComponent = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-bottom: 16px;
`

const BasicTextCleanProps = ({ noError, ...rest }) => (
  <BasicText {...rest} />
)

export const TextInput = styled(BasicTextCleanProps)`
  ${Inputs.base};
`

export const Error = styled.div`
  ${Inputs.error};
`

export const Label = styled.label`
  ${Inputs.label};
`
