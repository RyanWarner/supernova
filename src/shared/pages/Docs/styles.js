import styled from 'styled-components'

import { Breakpoints, Colors, Sizes, Type } from 'app/styles'

export const Wrap = styled.div`
  padding: 80px 90px 50px 90px;
  max-width: 900px;
  box-sizing: border-box;
`

export const DocsPage = styled.div`
  margin-left: ${Sizes.sideNavWidth};
  display: flex;
  justify-content: center;

  @media(max-width: ${Breakpoints.main}) {
    margin-left: 0;
    padding: 30px ${Sizes.xAppPaddingMobile};
    max-width: 100vw;
  }

  h1 {
    ${Type.header2};
    margin: 0 0 30px 0;
  }

  p {
    line-height: 180%;
  }

  li {
    line-height: 220%;
  }

  code {
    background-color: rgba(0, 0, 0, 0.11);
    padding: 2px 5px;
    border-radius: 4px;
    font-family: ${Type.monospace};
  }

  pre {
    background-color: ${Colors.gray10};
    color: ${Colors.beige20};
    padding: 16px 22px;
    border-radius: 6px;
    line-height: 150%;

    code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }
  }

  table {
    border-spacing: 0;
  }

  td {
    border-top: 1px solid rgba(0, 0, 0, 0.17);
    padding: 20px 10px;
    line-height: 180%;
  }

  th {
    padding: 20px 10px;
  }
`
