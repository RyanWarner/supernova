// https://storybook.js.org/docs/configurations/theming/
import { create } from '@storybook/theming'

import { Colors, Type } from 'app/styles'
import { favicon } from 'app/assets/images'

export default create({
  base: Colors.background,

  colorPrimary: Colors.brand,
  colorSecondary: Colors.brandSecondary,
  sidebarSvgIconColor: Colors.brand,

  // UI
  appBg: Colors.gray1,
  appContentBg: Colors.gray3,
  appBorderColor: Colors.gray1,
  appBorderRadius: 6,

  // Typography
  fontBase: Type.fontFace,
  fontCode: 'monospace',

  // Text colors
  textColor: Colors.font,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: Colors.font,
  barSelectedColor: Colors.brand,
  barBg: Colors.gray3,

  // Form colors
  inputBg: Colors.gray3,
  inputBorder: 'transparent',
  inputTextColor: Colors.font,
  inputBorderRadius: 4,

  brandTitle: 'Stockstreamtv',
  brandUrl: 'https://stockstream.tv',
  brandImage: favicon,
});
