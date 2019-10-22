import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Button from './Button'

export default {
  title: 'Components|UI Kit/Button',
  component: Button,
  decorators: [withKnobs]
}

export const basic = () => (
  <Button
    loading={boolean('Loading', false)}
    disabled={boolean('Disabled', false)}
  >
    {text('Text', 'Button')}
  </Button>
)
