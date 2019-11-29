import styled, { css } from 'styled-components'

import { Spinner } from 'app/ui-kit/Icons'

export const LoadingComponent = styled.div`
  height: 28px;
  width: 0;
  transition: all 250ms ease;
  opacity: 0;
  margin-right: 0;
  margin-top: -1px;

  ${props => props.visible && css`
    opacity: 1;
    width: 28px;
    margin-right: 8px;
  `}
`

export const StyledSpinner = styled(Spinner)``
