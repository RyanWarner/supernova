import { createGlobalStyle } from 'styled-components'

import { Colors, Type, Shadows } from 'app/styles'

export const GlobalStyle = createGlobalStyle`
  .tippy-tooltip.light-theme {
    background-color: ${Colors.white};
    color: ${Colors.black};
    padding: 0;
    text-align: left;
    box-shadow: ${Shadows.main};
    overflow: hidden;
  }

  html, body {
    min-height: 100vh;
    ${Type.body};
    font-family: ${Type.fontFace};
    margin: 0;
    padding: 0;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${Colors.black};
    color: ${Colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }

  ::selection {
    background: ${Colors.pink};
  }

  #app {
    min-height: 100%;
  }
`
