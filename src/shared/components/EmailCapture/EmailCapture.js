import React, { Component } from 'react'
import { withFormState } from 'informed'

import * as S from './styles'
import { authFields as fields } from 'app/data'
import { TextField } from 'app/ui-kit'
import { Check } from 'app/ui-kit/Icons'
import withInformed from '../withInformed/withInformed'

@withInformed
@withFormState
export default class EmailCapture extends Component {
  componentDidMount = () => {
    this.props.setOnSubmit(this.submit)
  }

  submit = () => {
    // const { formState } = this.props
    // const { email, password } = formState
  }

  isEmailValid = () => {
    const { formState } = this.props
    const { email } = formState?.values
    if (!email) return false
    const error = fields.email.validate(email)

    return !error && true
  }

  render () {
    return (
      <S.EmailCaptureComponent>
        <TextField {...fields.email} />
        <S.StyledButton><Check /></S.StyledButton>
      </S.EmailCaptureComponent>
    )
  }
}
