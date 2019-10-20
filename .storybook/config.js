import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

import StoryContainer from './StoryContainer/StoryContainer'
import storybookTheme from './storybookTheme'

addDecorator(StoryContainer)
addParameters({
  options: {
    panelPosition: 'right',
    theme: storybookTheme
  },
  docsContainer: DocsContainer,
  docs: DocsPage,
})

configure([
  require.context('../src', true, /\.stories\.(js|mdx)$/),
  require.context('../functions/api', true, /\.stories\.(js|mdx)$/)
], module)
