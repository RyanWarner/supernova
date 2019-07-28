import React, { Component } from 'react'

import * as S from './styles'
import { formFields } from 'app/data'
import withForm from '../../withForm'
import { Auth } from 'app/api/firebase/models'
import { withFormApi, withFormState } from 'informed'
import { TextField } from 'app/ui-kit'

@withForm
@withFormApi
@withFormState
export default class SignUpModal extends Component {
  state = { loading: false }

  componentDidMount = () => {
    this.props.setOnSubmit(this.submitSignUp)
  }

  submitSignUp = async (event) => {
    const { formState } = this.props
    const { loading } = this.state

    if (loading) return
    this.setState({ loading: true })
    const { email, password } = formState.values

    try {
      await Auth.signUp({ email, password })
      this.props.closeModal()
    } catch (error) {
      console.log('err', error)
    }
  }

  render () {
    const { loading } = this.state

    return <S.SignUpModalComponent>
      <S.Title>Create your account</S.Title>
      <S.FormElements>
        <TextField {...formFields.email} />
        <TextField {...formFields.password} />

        <S.SignUpButton type='submit' loading={loading}>
          Sign Up
        </S.SignUpButton>
      </S.FormElements>
    </S.SignUpModalComponent>
  }
}
