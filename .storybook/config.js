import { configure, addDecorator } from '@storybook/react'
import { addReadme } from 'storybook-readme'

import StoryContainer from './StoryContainer/StoryContainer'

addDecorator(addReadme)
addDecorator(StoryContainer)

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
