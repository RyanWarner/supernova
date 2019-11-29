import { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const spin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`
