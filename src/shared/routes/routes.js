import Root from '../components/Root/Root'
import Home from '../pages/Home'
import NotFound from '../components/NotFound/NotFound'

export default [{
  component: Root,
  routes: [{
    path: '/',
    exact: true,
    component: Home
  }, {
    path: '*',
    component: NotFound
  }]
}]
