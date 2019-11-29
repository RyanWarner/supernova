import React from 'react'

import * as S from './styles'
import { navItems } from 'app/data'

const Link = ({ item, style }) =>
  <S.NavLink to={item.url} key={item.display} styled={style}>
    {item.display}
  </S.NavLink>

const A = ({ item, style }) =>
  <S.A href={item.url} key={item.display} styled={style}>
    {item.display}
  </S.A>

export default ({ linkStyle, ...rest }) =>
  <S.NavLinksComponent {...rest}>
    {Object.values(navItems).map(item =>
      item.type === 'link'
        ? <Link item={item} key={item.url} style={linkStyle} />
        : <A item={item} key={item.url} style={linkStyle} />
    )}
  </S.NavLinksComponent>
