import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import TextField from './TextField'
import withInformed from 'app/components/withInformed'
import Readme from './README.md'
import { titles, dirNames } from '@/.storybook/names'

const fieldConfig = {
  name: {
    label: 'Name',
    field: 'name',
    placeholder: 'First and last',
    required: true,
    validate: (value) => {
      if (!value || value.length < 1) return 'Required'
      return null
    }
  }
}

@withInformed
class FormWrap extends React.Component {
  render = () => {
    return <TextField {...fieldConfig.name} />
  }
}

storiesOf(`${titles.components}|${dirNames.uiKit}/TextField`, module)
  .addDecorator(withDocs(Readme))
  .add('default', () => {
    return <FormWrap />
  })
