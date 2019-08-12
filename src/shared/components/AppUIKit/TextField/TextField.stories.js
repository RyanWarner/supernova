import React from 'react'
import { storiesOf } from '@storybook/react'
import TextField from './TextField'
import withForm from 'app/components/withForm'

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
  .add('default', () => {
    return <FormWrap />
  })
