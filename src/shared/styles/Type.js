import { css, createGlobalStyle } from 'styled-components'

import { Breakpoints, Colors } from 'app/styles'

const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"
export const fontFace = `'Open Sans', ${sansSerifFallback}`
export const monospace = "Menlo, Monaco, 'Courier New', monospace"

export const fontWeights = {
  regular: 400,
  semiBold: 600,
  bold: 'bold'
}

export const body = css`
  font-size: 14px;
`

export const smallBody = css`
  font-size: 12px;
  line-height: 150%;
`

export const body30 = css`
  font-size: 20px;
  line-height: 160%;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 16px;
  }
`

export const header1 = css`
  font-size: 43px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};

  @media(max-width: ${Breakpoints.main}) {
    font-size: 26px;
  }
`

export const header2 = css`
  font-size: 34px;
  line-height: 152%;
  font-weight: ${fontWeights.semiBold};
  margin: 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 26px;
  }
`

export const header3 = css`
  font-size: 26px;
  line-height: 152%;
  font-weight: ${fontWeights.semiBold};

  @media(max-width: ${Breakpoints.main}) {
    font-size: 20px;
  }
`

export const GlobalStyle = createGlobalStyle`
  h1 {
    ${header1};
  }

  h2 {
    ${header2};
  }

  h3 {
    ${header3};
  }

  p {
    margin: 0;
  }

  a {
    color: ${Colors.brand10};
    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: ${Colors.brand20};
    }
  }
`
