import styled, { createGlobalStyle } from 'styled-components'

export const StoryContainerComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
  }
`
