import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'

import * as S from './styles'
import docs from 'app/data/docs'
import CodeBlock from './CodeBlock'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

@withRouter
export default class Docs extends Component {
  render () {
    const { params } = this.props.match
    const { section, doc } = params
    const MDXDocument = docs[section][doc].default

    return (
      <S.DocsPage>
        <S.Wrap>
          <MDXProvider components={components}>
            <MDXDocument />
          </MDXProvider>
        </S.Wrap>
      </S.DocsPage>
    )
  }
}
