import React, { Component } from 'react'

export default (serverFetch) => (Page) => {
  class HOC extends Component {
    static serverFetch = (context) => {
      if (!serverFetch) {
        console.error(`
          withServerData requires a serverFetch function.\n
          The serverFetch function must return a Redux action.
        `)
        return
      }

      return serverFetch(context)
    }

    render = () => <Page />
  }

  return HOC
}
