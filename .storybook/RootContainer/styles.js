import styled, { createGlobalStyle } from 'styled-components'

import { Colors, Type } from 'app/styles'

export const GlobalStyle = createGlobalStyle`
  #root, #docs-root {
    width: 100%;
    color: ${Colors.font};

    code {
      background-color: ${Colors.gray1};
      border: 0;
      padding: 10px;
    }

    .sbdocs-hr {
      background-color: ${Colors.gray5};
      margin-bottom: 40px;
    }

    a {
      color: ${Colors.brand};
    }

    .sbdocs-h1 {
      font-weight: ${Type.fontWeights.regular};
    }

    .sbdocs-h2,
    .sbdocs-h3,
    .sbdocs-h4 {
      font-weight: ${Type.fontWeights.medium};
    }
  }



  table.sbdocs-table {
    a {
      color: ${Colors.brand};
    }

    tr {
      background-color: ${Colors.gray5};

      &:nth-of-type(2n) {
        background-color: ${Colors.gray6};
      }
    }
  }
`
