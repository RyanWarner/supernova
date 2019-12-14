import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import * as S from './styles'
import docs, { docsMap } from 'app/data/docs'
import { Colors } from 'app/styles'

@withRouter
export default class SideNav extends Component {
  render () {
    const { location, options } = this.props
    const { pathname } = location

    return (
      <S.SideNavComponent options={options}>
        <Link to='/'>
          <S.StyledWordmark />
        </Link>
        {Object.values(docsMap).map((section, index) => {
          const selected = pathname.split('/')[2] === section.id
          const url = `/docs/${section.id}/${section.pages[0]}`

          return (
            <S.NavSection key={index}>
              <S.SectionTitle selected={selected} to={url}>
                <S.IconWrap>
                  <section.Icon color={selected ? Colors.brand30 : Colors.gray20} />
                </S.IconWrap>
                {section.title}
              </S.SectionTitle>

              {section.pages.map((item, index) => {
                const url = `/docs/${section.id}/${item}`
                const selected = this.props.location.pathname === url

                return (
                  <S.NavItemWrap key={index}>
                    <S.NavItem to={url} selected={selected}>
                      {docs[section.id][item].meta.title}
                    </S.NavItem>
                  </S.NavItemWrap>
                )
              })}
            </S.NavSection>
          )
        })}
      </S.SideNavComponent>
    )
  }
}
