import React, { Component } from 'react'

import * as S from './styles'

const env = process.env.DEPLOY_ENV

const adminNavItems = {
  utilities: {
    path: '/admin/utilities',
    display: 'Utilities'
  },
  icons: {
    path: '/admin/icons',
    display: 'Icons'
  },
  colors: {
    path: '/admin/colors',
    display: 'Colors'
  }
}

export default class AdminNav extends Component {
  renderNavItem = (item) => {
    const selectedPath = this.props.activeRoute.path
    const selected = selectedPath === item.path || (selectedPath === '/admin' && item.path === '/admin/utilities')

    return <S.AdminNavItem to={item.path} selected={selected} key={item.path}>
      {item.display}
    </S.AdminNavItem>
  }

  render () {
    return <S.AdminNavComponent>
      <S.LogoLink to='/admin'>
        <S.StyledLogoLockup />
        <S.AdminLabel>Admin</S.AdminLabel>
      </S.LogoLink>
      <S.Environment>
        <S.AdminNavTitle>Environment:</S.AdminNavTitle>
        <S.EnvironmentTag>
          {env}
        </S.EnvironmentTag>
      </S.Environment>
      <S.AdminNavItems>
        { Object.values(adminNavItems).map(this.renderNavItem) }
      </S.AdminNavItems>
    </S.AdminNavComponent>
  }
}
