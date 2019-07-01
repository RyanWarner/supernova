import styled from 'styled-components'

import { Admin, Colors } from 'app/styles'

export const AdminUtiltiesPage = styled.div`
  ${Admin.page};
`

export const ActivityCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.div`
  ${Admin.title};
`

export const CurrentUserNavContentComponent = styled.div`
  width: 235px;
  padding: 0 10px;
`

export const CurrentUserNavItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${Colors.borderGray};
  cursor: pointer;
  font-size: 16px;
  transition: all .2s ease;
  display: flex;

  &:hover {
    color: ${Colors.brand};
  }

  &:last-child {
    border: 0;
  }
`
export const NavItemContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconWrap = styled.div`
  width: 22px;
  height: 18px;
  display: flex;
  align-items: center;
`

export const Text = styled.div``
