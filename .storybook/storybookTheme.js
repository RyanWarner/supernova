import { create } from '@storybook/theming'

import { Colors, Type } from 'app/styles'
import { yawnch } from 'app/assets/images'

export default create({
  base: Colors.backgroundDark,

  colorPrimary: 'hotpink',
  colorSecondary: Colors.darkPurple,

  // UI
  appBg: Colors.backgroundDark,
  appContentBg: 'silver',
  appBorderColor: Colors.backgroundDark,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
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
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://yawnch.com',
  brandImage: yawnch,
});
