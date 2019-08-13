import React, { Component } from 'react'

import { Form } from 'informed'

export default WrappedComponent => {
  return class HOC extends Component {
    state = {}

    setOnSubmit = (onSubmit) => {
      this.setState({ onSubmit })
    }

    render () {
      return <Form onSubmit={this.state.onSubmit}>
        <WrappedComponent setOnSubmit={this.setOnSubmit} {...this.props} />
      </Form>
    }
  }
}
