import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { addReadme, configureReadme } from 'storybook-readme'

import StoryContainer from './StoryContainer/StoryContainer'

addDecorator(addReadme)
addDecorator(StoryContainer)
addParameters({
  options: { showPanel: false },
  readme: {
    codeTheme: 'atom-dark',

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
