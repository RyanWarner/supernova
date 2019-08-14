import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Button from './Button'
import Readme from './README.md'
import { dirNames, titles } from '@/.storybook/names'

storiesOf(`${titles.components}|${dirNames.uiKit}/Button`, module)
  .addDecorator(withDocs(Readme))
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Button loading={boolean('Loading', false)}>
      { text('Text', 'Button') }
    </Button>
  })
