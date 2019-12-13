import styled from 'styled-components'

import { Colors, Breakpoints } from 'app/styles'
import { Button } from 'app/ui-kit'

export const EmailCaptureComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;

  @media (min-width: ${Breakpoints.tablet}) {
    margin: 0;
  }
`

export const StyledButton = styled(Button)`
  flex-shrink: 0;
  white-space: nowrap;
  height: 37px;
  margin-left: 10px;

  svg {
    stroke: ${Colors.white090};
  }
`
