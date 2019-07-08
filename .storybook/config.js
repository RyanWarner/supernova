import { configure, addDecorator } from '@storybook/react'

import StoryContainer from './StoryContainer/StoryContainer'

addDecorator(StoryContainer)

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
