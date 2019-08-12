import AdminRoot from 'app/components/admin/AdminRoot/AdminRoot'
import AdminUtilities from 'app/pages/admin/AdminUtilities'
import AdminIcons from 'app/pages/admin/AdminIcons'
import AdminColors from 'app/pages/admin/AdminColors'

export default [{
  path: '/admin',
  component: AdminRoot,
  meta: {
    title: 'Yawnch Admin'
  },
  routes: [{
    path: '/admin',
    exact: true,
    component: AdminUtilities,
    meta: {
      title: 'Yawnch Admin'
    }
  }, {
    path: '/admin/utilities',
    exact: true,
    component: AdminUtilities,
    meta: {
      title: 'Admin - Icons'
    }
  }, {
    path: '/admin/icons',
    exact: true,
    component: AdminIcons,
    meta: {
      title: 'Admin - Icons'
    }
  }, {
    path: '/admin/colors',
    exact: true,
    component: AdminColors,
    meta: {
      title: 'Admin - Icons'
    }
  }]
}]
