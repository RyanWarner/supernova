import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Submit</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
