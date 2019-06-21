import { createGlobalStyle } from 'styled-components'

import ManropeWOFF from '../assets/fonts/Manrope-Regular.woff'
import ManropeWOFF2 from '../assets/fonts/Manrope-Regular.woff2'
import ManropeTTF from '../assets/fonts/Manrope-Regular.ttf'

import ManropeBoldWOFF from '../assets/fonts/Manrope-Bold.woff'
import ManropeBoldWOFF2 from '../assets/fonts/Manrope-Bold.woff2'
import ManropeBoldTTF from '../assets/fonts/Manrope-Bold.ttf'

import ManropeThinWOFF from '../assets/fonts/Manrope-Thin.woff'
import ManropeThinWOFF2 from '../assets/fonts/Manrope-Thin.woff2'
import ManropeThinTTF from '../assets/fonts/Manrope-Thin.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeWOFF2}) format('woff2'),
         url(${ManropeWOFF}) format('woff'),
         url(${ManropeTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeBoldWOFF2}) format('woff2'),
         url(${ManropeBoldWOFF}) format('woff'),
         url(${ManropeBoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeThinWOFF2}) format('woff2'),
        url(${ManropeThinWOFF}) format('woff'),
        url(${ManropeThinTTF}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
`
