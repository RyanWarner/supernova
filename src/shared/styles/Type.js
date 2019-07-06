import { css, createGlobalStyle } from 'styled-components'

import { Breakpoints, Colors } from 'app/styles'

const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"
export const fontFace = `'Manrope', ${sansSerifFallback}`

export const fontWeights = {
  regular: 400,
  bold: 'bold'
}

export const body = css`
  font-size: 14px;
`

export const smallBody = css`
  font-size: 14px;
  line-height: 28px;
`

export const largeInput = css`
  font-size: 24px;
`

export const header1 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin: 0 0 30px 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 18px;
  }
`
export const header2 = css`
  font-size: 20px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin: 0 0 20px 0;
`
export const header3 = css`
  font-size: 16px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin: 0 0 20px 0;
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
    ${smallBody};
    margin-top: 0;
    margin-bottom: 38px;
  }
  a {
    color: ${Colors.white};
    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: ${Colors.brand};
    }
  }
`
