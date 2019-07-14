import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { withRouter, matchPath } from 'react-router-dom'

import { favicon, ogImage } from 'app/assets/images'

const cdn = process.env.CDN || ''
const twitterSite = '@Yawnch'

@withRouter
export default class AppHelmet extends Component {
  getActiveRoute = ({ pathname, route }) => {
    const activeRoute = route.routes.find(route => matchPath(pathname, route))
    if (activeRoute.routes) return this.getActiveRoute({ pathname, route: activeRoute })
    return activeRoute
  }

  render () {
    const { location, route } = this.props
    const { pathname } = location
    const activeRoute = this.getActiveRoute({ pathname, route })

    if (!activeRoute) {
      console.warn('No active route found: ', activeRoute)
      return null
    }

    const basePath = cdn ? cdn.slice(0, -1) : '' // remove trailing slash
    const ogUrl = `${basePath}${location.pathname}`
    const ogImageUrl = `${basePath}/${ogImage}`

    return <Helmet
      title={activeRoute.meta.title}
      meta={[
        { name: 'description', content: activeRoute.meta.description },
        { property: 'og:description', content: activeRoute.meta.description },
        { property: 'og:title', content: activeRoute.meta.title },
        { property: 'og:image', content: ogImageUrl },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:secure_url', content: ogImageUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: ogUrl },
        { name: 'twitter:site', content: twitterSite },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: ogImageUrl }
      ]}
      link={[
        { rel: 'icon',
          type: 'image/png',
          href: favicon
        }
      ]}
    />
  }
}
