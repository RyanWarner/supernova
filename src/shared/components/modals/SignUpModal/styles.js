import styled from 'styled-components'

import { Button } from 'app/ui-kit'
import { Type } from 'app/styles'

export const SignUpModalComponent = styled.div`
  padding: 40px;
  width: 460px;
  box-sizing: border-box;
  border-radius: 4px;
`
export const Title = styled.div`
  ${Type.largeInput};
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 30px;
`
export const TextFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignUpButton = styled(Button)`
  margin-top: 20px;
`
