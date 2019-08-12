import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import TextField from './TextField'
import withForm from 'app/components/withForm'
import Readme from './README.md'

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

@withForm
class FormWrap extends React.Component {
  render = () => {
    return <TextField {...fieldConfig.name} />
  }
}

storiesOf('TextField', module)
  .addDecorator(withDocs(Readme))
  .add('default', () => {
    return <FormWrap />
  })
