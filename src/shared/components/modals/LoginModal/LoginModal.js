import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import FIELDS from './fields'
import withForm from 'app/components/withForm'
import { Auth } from 'app/api/firebase/models'
import { closeAllModals } from 'app/store/app/actions'

@withForm(FIELDS)
@connect(null, { closeAllModals })
export default class LoginModal extends Component {
  state = { loading: false }

  submitLogin = async (event) => {
    event.preventDefault()
    const { loading } = this.state
    if (loading || !this.props.allFieldsValid()) return
    this.setState({ loading: true })
    const { email, password } = this.props

    try {
      await Auth.signIn({
        email: email.value,
        password: password.value
      })
      this.props.closeAllModals()
    } catch (error) {
      console.log('err', error)
    }
  }

  render () {
    const { loading } = this.state
    return <S.Wrap>
      <S.Title>Login</S.Title>
      <S.TextFields>
        { Object.values(FIELDS).map(field => this.props.renderTextField(field)) }
        <S.SignUpButton onClick={this.submitLogin} loading={loading}>
          Login
        </S.SignUpButton>
      </S.TextFields>
    </S.Wrap>
  }
}
