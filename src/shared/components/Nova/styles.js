import styled from 'styled-components'

import { Breakpoints } from 'app/styles'

export const NovaComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`

export const StyledSpace = styled.img`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${Breakpoints.tablet}) {
    width: 600px;
    max-width: 600px;
  }
`
