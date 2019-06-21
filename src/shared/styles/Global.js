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
    height: 100%;
    ${Type.body};
    font-family: ${Type.fontFace};
    margin: 0;
    padding: 0;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${Colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${Colors.pink};
  }

  #app {
    height: 100%;
  }

  a {
    color: ${Colors.black};
    text-decoration: none;

    &:hover {

    }
  }
`
