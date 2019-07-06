import styled from 'styled-components'

import { Sizes } from 'app/styles'

export const RootComponent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: calc(${Sizes.navHeight} + 60px);
`
