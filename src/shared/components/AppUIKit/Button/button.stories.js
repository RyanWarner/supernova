import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import Button from './Button'
import Readme from './README.md'
import { dirNames, titles } from '@/.storybook/names'

storiesOf(`${titles.components}|${dirNames.uiKit}/Button`, module)
  .addDecorator(withDocs(Readme))
  .add('default', () => {
    return <Button>Button</Button>
  })
