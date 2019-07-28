import React, { Component } from 'react'

import { Form } from 'informed'

export default function withForm (WrappedComponent) {
  return class HOC extends Component {
    state = {}

    setOnSubmit = (onSubmit) => {
      console.log('setOnSubmit', onSubmit)
      this.setState({ onSubmit })
    }

    render () {
      return <Form onSubmit={this.state.onSubmit}>
        <WrappedComponent setOnSubmit={this.setOnSubmit} {...this.props} />
      </Form>
    }
  }
}
