import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import Select from './Select'
import withInformed from 'app/components/withInformed'
import Readme from './README.md'

const fieldConfig = {
  color: {
    label: 'Pick a Color',
    field: 'color',
    defaultValue: { value: 'red', label: 'Cyan' },
    options: [{
      value: 'red', label: 'Cyan'
    }, {
      value: 'magenta', label: 'Magenta'
    }, {
      value: 'yellow', label: 'Yellow'
    }, {
      value: 'black', label: 'Black'
    }]
  }
}

@withInformed
class FormWrap extends React.Component {
  render = () => {
    return <Select {...fieldConfig.color} />
  }
}

storiesOf('Select', module)
  .addDecorator(withDocs(Readme))
  .add('default', () => {
    return <FormWrap />
  })
