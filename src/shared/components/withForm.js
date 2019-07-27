import React, { Component } from 'react'

import { Form } from 'informed'

export default function withForm (WrappedComponent) {
  return class HOC extends Component {
    render () {
      return <Form>
        <WrappedComponent />
      </Form>
    }
  }
}
