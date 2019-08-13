import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { addReadme, configureReadme } from 'storybook-readme'

import StoryContainer from './StoryContainer/StoryContainer'
import readmeTheme from './readmeTheme'
import storybookTheme from './storybookTheme'

addDecorator(addReadme)
addDecorator(StoryContainer)
addParameters({
  options: {
    showPanel: false,
    theme: storybookTheme
  },
  readme: {
    codeTheme: 'atom-dark',
    theme: readmeTheme
  }
})

configureReadme({
  StoryPreview: ({ children }) => <div style={{margin: '30px 0'}}>{children}</div>,
})

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
