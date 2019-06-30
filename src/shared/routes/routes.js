import { Root } from 'app/components'
import { Home, NotFound } from 'app/pages'

export default [{
  component: Root,
  routes: [{
    path: '/',
    exact: true,
    component: Home,
    meta: {
      title: 'Yawnch - React, Firebase, SSR',
      description: 'An opinionated starting point for web applications.'
    }
  }, {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Yawnch - Not found',
      description: 'An opinionated starting point for web applications.'
    }
  }]
}]
