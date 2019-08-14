// https://storybook.js.org/docs/configurations/theming/
import { create } from '@storybook/theming'

import { Colors, Type } from 'app/styles'
import { yawnch } from 'app/assets/images'

export default create({
  base: Colors.backgroundDark,

  colorPrimary: Colors.brand,
  colorSecondary: Colors.darkPurple,
  sidebarSvgIconColor: Colors.linkColor,

  // UI
  appBg: Colors.backgroundDark,
  appContentBg: Colors.background,
  appBorderColor: Colors.backgroundDark,
  appBorderRadius: 6,

  // Typography
  fontBase: Type.fontFace,
  fontCode: 'monospace',

  // Text colors
  textColor: Colors.fontPrimary,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: Colors.background1,

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: Colors.white,
  inputBorderRadius: 4,

  brandTitle: 'Yawnch/react-firebase-ssr Storybook',
  brandUrl: 'https://yawnch.com',
  brandImage: yawnch,
});
