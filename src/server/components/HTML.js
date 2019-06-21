import React from 'react'
import Helmet from 'react-helmet'

export default class HTML extends React.Component {
    static defaultProps = {
      styles: '',
      scripts: [],
      state: '{}'
    }

    render () {
      const head = Helmet.renderStatic()
      const { children, scripts, styles, state } = this.props

      return (
        <html lang='en'>
          <head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            {/* TODO: Update Url */}
            <meta property='og:url' content='' />
            {head.meta.toComponent()}
            {head.base.toComponent()}
            {head.title.toComponent()}
            {head.link.toComponent()}
            {head.script.toComponent()}
            {styles}
            <script
              dangerouslySetInnerHTML={{
                __html: `window.__PRELOADED_STATE__ = ${state}`
              }}
            />
          </head>
          <body>
            <div id='app' dangerouslySetInnerHTML={{ __html: children }} />
            { scripts.map(src => <script key={src} src={src} />) }
          </body>
        </html>
      )
    }
}
