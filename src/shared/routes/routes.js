import { Root, AppRoot } from 'app/components'
import { Home, Dashboard, Privacy, Terms, NotFound } from 'app/pages'

export default [{
  component: Root,
  path: '/',
  routes: [
    {
      path: '/',
      component: AppRoot,
      meta: {
        title: 'Supernova',
        description: 'An opinionated starting point for web applications.'
      },
      routes: [{
        path: '/',
        exact: true,
        component: Home,
        meta: {
          title: 'Supernova - React, Firebase, SSR boilerplate',
          description: 'An opinionated starting point for web applications.'
        }
      }, {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
        meta: {
          title: 'Supernova - Dashboard',
          description: 'An opinionated starting point for web applications.'
        }
      }, {
        path: '/privacy',
        exact: true,
        component: Privacy,
        meta: {
          title: 'Supernova - Privacy Policy',
          description: 'Privacy policy'
        }
      }, {
        path: '/terms',
        exact: true,
        component: Terms,
        meta: {
          title: 'Supernova - Terms',
          description: 'Terms of service'
        }
      }, {
        path: '*',
        component: NotFound,
        meta: {
          title: 'Supernova - Not found',
          description: '404'
        }
      }]
    }]
}]
