import { Docs } from 'app/pages'
import { DocsRoot } from 'app/components'

export default [{
  path: '/docs',
  component: DocsRoot,
  routes: [{
    path: '/docs',
    exact: true,
    component: Docs,
    meta: {
      title: 'Nova - Docs',
      description: 'Documentation'
    }
  }, {
    path: '/docs/:section/:doc?',
    component: Docs,
    meta: {
      title: 'Nova - Docs',
      description: 'Documentation'
    }
  }]
}]
