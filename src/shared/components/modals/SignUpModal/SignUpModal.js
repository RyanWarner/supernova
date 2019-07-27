import React, { Component } from 'react'

import * as S from './styles'
import FIELDS from './fields'
import withForm from '../../withForm'
import { Auth } from 'app/api/firebase/models'
import { Form, withFormApi, withFormState, Text } from 'informed'
import { TextField } from 'app/ui-kit'

const validate = value => {
  return !value || value.length < 5 ? 'Field must be longer than five characters' : undefined;
}

@withForm
@withFormApi
@withFormState
export default class SignUpModal extends Component {
  state = { loading: false }

  submitSignUp = async (event) => {
    event.preventDefault()
    const { formApi } = this.props
    console.log(this.props)
    formApi.validate()
    console.log(this.props.formState)
    // const { loading } = this.state
    // if (loading || !this.props.allFieldsValid()) return
    // this.setState({ loading: true })
    // const { email, password, username } = this.props

    // try {
    //   await Auth.signUp({
    //     email: email.value,
    //     password: password.value,
    //     username: username.value
    //   })
    //   this.props.closeModal()
    // } catch (error) {
    //   console.log('err', error)
    // }
  }

  render () {
    const { loading } = this.state
    return <S.SignUpModalComponent>
      <S.Title>Create your account</S.Title>
      <S.TextFields>

        <TextField
          field='name'
          validate={validate}
          label='Email'
          placeholder='you@gmail.com'
          error={this.props.formState.errors.name}
        />

        <TextField
          field='password'
          type='password'
          validate={validate}
          label='Password'
          placeholder='At least 8 characters'
          error={this.props.formState.errors.name}
        />
        {/* <ComponentWithFormApi /> */}
        {/* { Object.values(FIELDS).map(field => this.props.renderTextField(field)) } */}
        <S.SignUpButton onClick={this.submitSignUp} loading={loading}>
          Sign Up
        </S.SignUpButton>

      </S.TextFields>
    </S.SignUpModalComponent>
  }
}
