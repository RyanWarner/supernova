import styled from 'styled-components'

import { Colors, Sizes } from 'app/styles'

export const HomePage = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.beige10};
  color: ${Colors.gray10};
  padding-top: ${Sizes.navHeight};
  flex-shrink: 0;
`
