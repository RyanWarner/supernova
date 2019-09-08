import React, { Component } from 'react'

import { Form } from 'informed'

export default WrappedComponent => {
  return class HOC extends Component {
    state = {}

    setOnSubmit = (handleSubmit) => {
      this.setState({ handleSubmit })
    }

    render () {
      return (
        <Form onSubmit={this.state.handleSubmit}>
          <WrappedComponent
            setOnSubmit={this.setOnSubmit}
            {...this.props}
          />
        </Form>
      )
    }
  }
}
