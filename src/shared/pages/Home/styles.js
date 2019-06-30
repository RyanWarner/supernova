import styled from 'styled-components'

import { Colors, Animations } from 'app/styles'

export const HomePage = styled.div`
  animation: ${Animations.FadeIn} 1250ms forwards;
  animation-delay: 250ms;
  opacity: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.black};
  color: ${Colors.white};
`
