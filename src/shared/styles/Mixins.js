import { css } from 'styled-components'

import { Breakpoints, Sizes } from 'app/styles'

export const widthContainer = css`
  width: 1200px;
  padding: 0 ${Sizes.xAppPadding};
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.main}) {
    width: 100vw;
    padding: 0 ${Sizes.xAppPaddingMobile};
  }
`
