import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import FIELDS from './fields'
import withForm from '../../withForm'
import { Auth } from 'app/api/firebase/models'
import { closeAllModals } from '../../../store/app/actions'

@withForm(FIELDS)
@connect(null, { closeAllModals })
export default class SignUpModal extends Component {
  state = { loading: false }

  submitSignUp = async (event) => {
    event.preventDefault()
    const { loading } = this.state
    if (loading || !this.props.allFieldsValid()) return
    this.setState({ loading: true })
    const { email, password, username } = this.props

    try {
      await Auth.signUp({
        email: email.value,
        password: password.value,
        username: username.value
      })
      this.props.closeAllModals()
    } catch (error) {
      console.log('err', error)
    }
  }

  render () {
    const { loading } = this.state
    return <S.Wrap>
      <S.Title>Create your account</S.Title>
      <S.TextFields>
        { Object.values(FIELDS).map(field => this.props.renderTextField(field)) }
        <S.SignUpButton onClick={this.submitSignUp} loading={loading}>
          Sign Up
        </S.SignUpButton>
      </S.TextFields>
    </S.Wrap>
  }
}
