import { createGlobalStyle } from 'styled-components'

import { Colors, Type } from 'app/styles'

export const GlobalStyle = createGlobalStyle`
  html, body {
    ${Type.body};
    font-family: ${Type.fontFace};
    max-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: ${Colors.gray10};
    background-color: ${Colors.backgroundDark};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  ::selection {
    background: ${Colors.brand40};
  }

  #app {
    min-height: 100%;
  }
`
