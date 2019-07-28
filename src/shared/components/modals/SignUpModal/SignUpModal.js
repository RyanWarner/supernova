import React, { Component } from 'react'
import { withFormState } from 'informed'

import * as S from './styles'
import { TextField } from 'app/ui-kit'
import { formFields } from 'app/data'
import withForm from '../../withForm'
import { Auth } from 'app/api/firebase/models'

@withForm
@withFormState
export default class SignUpModal extends Component {
  state = { loading: false }

  componentDidMount = () => {
    this.props.setOnSubmit(this.submitSignUp)
  }

  submitSignUp = async (event) => {
    const { formState, closeModal } = this.props
    const { loading } = this.state

    if (loading) return
    this.setState({ loading: true })
    const { email, password } = formState.values

    try {
      await Auth.signUp({ email, password })
      closeModal()
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
