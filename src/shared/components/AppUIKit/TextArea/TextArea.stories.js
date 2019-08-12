import React from 'react'
import { storiesOf } from '@storybook/react'
import TextArea from './TextArea'
import withForm from 'app/components/withForm'

const fieldConfig = {
  message: {
    label: 'Message',
    field: 'message',
    placeholder: 'Type your message',
    validate: (value) => {
      if (!value || value.length < 1) return 'Required'
      return null
    }
  }
}

@withForm
class FormWrap extends React.Component {
  render = () => {
    return <TextArea {...fieldConfig.message} />
  }
}

storiesOf('TextArea', module)
  .add('default', () => {
    return <FormWrap />
  })
