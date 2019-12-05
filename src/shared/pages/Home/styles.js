import styled from 'styled-components'

import { Colors } from 'app/styles'

export const HomePage = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.backgroundDark};
  color: ${Colors.gray10};
  flex-shrink: 0;
`
