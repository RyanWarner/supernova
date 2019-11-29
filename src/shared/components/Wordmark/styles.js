import styled from 'styled-components'

import NovaSmall from '../NovaSmall/NovaSmall'
import { Type } from 'app/styles'

export const WordmarkComponent = styled.div`
  display: flex;
  align-items: center;
`

export const StyledNovaSmall = styled(NovaSmall)``

export const Text = styled.span`
  font-weight: ${Type.fontWeights.bold};
  margin-left: 16px;
`
