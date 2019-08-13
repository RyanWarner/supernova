import styled, { createGlobalStyle } from 'styled-components'

export const StoryContainerComponent = styled.div`
  display: flex;
  height: 100%;
  padding: 30px;
  max-width: 1000px;
  box-sizing: border-box;
`

export const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
  }
`
