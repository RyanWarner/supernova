import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import Readme from './README.md'

storiesOf(`Analytics`, module)
  .addDecorator(withDocs(Readme))
  .add('default', () => null)
