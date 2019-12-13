import { Root, AppRoot } from 'app/components'
import { Home, Privacy, Terms, NotFound } from 'app/pages'
import adminRoutes from './adminRoutes'

export default [{
  component: Root,
  path: '/',
  routes: [
    ...adminRoutes, {
      path: '/',
      component: AppRoot,
      meta: {
        title: 'Supernova Landing - Validate Your Business',
        description: 'An opinionated starting point for web applications.'
      },
      routes: [{
        path: '/',
        exact: true,
        component: Home,
        meta: {
          title: 'Supernova Landing - Validate Your Business',
          description: 'An opinionated starting point for web applications.'
        }
      }, {
        path: '/privacy',
        exact: true,
        component: Privacy,
        meta: {
          title: 'Supernova Landing - Privacy Policy',
          description: 'Privacy policy'
        }
      }, {
        path: '/terms',
        exact: true,
        component: Terms,
        meta: {
          title: 'Supernova Landing - Terms',
          description: 'Terms of service'
        }
      }, {
        path: '*',
        component: NotFound,
        meta: {
          title: 'Supernova Landing - Not found',
          description: '404'
        }
      }]
    }]
}]
