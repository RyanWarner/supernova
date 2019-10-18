import styled, { createGlobalStyle } from 'styled-components'

import { Colors } from 'app/styles'

export const StoryContainerComponent = styled.div`
  display: flex;
  height: 100%;
  padding: 30px;
  max-width: 1000px;
  box-sizing: border-box;
  justify-content: center;
  min-height: 180px;
  align-items: center;
`

export const GlobalStyle = createGlobalStyle`
  #root, #docs-root {
    width: 100%;
  }

  code {
    cursor: pointer;
    background-color: ${Colors.gray5};
    border: 0;
    padding: 2px 3px;
    border-radius: 3px;
    margin: 0 2px;
    color: ${Colors.candleGreen};

    &:hover {
      color: ${Colors.brandSuccess};
    }
  }
`
