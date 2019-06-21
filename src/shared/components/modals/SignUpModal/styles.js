import styled from 'styled-components'

import { Button } from 'app/ui-kit'
import { Colors, Type } from 'app/styles'

export const Wrap = styled.div`
  padding: 40px;
  width: 360px;
  box-sizing: border-box;
  background-color: ${Colors.offWhite};
  border-radius: 4px;
`
export const Title = styled.div`
  ${Type.largeInput};
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 30px;
`
export const TextFields = styled.div``
export const SignUpButton = styled(Button)`
  margin-top: 20px;
`
